import { CATEGORIES, getGamesByCategoryId } from './gamesData.js';

export class SlideDeck {
  constructor() {
    // Default to 'kids' group (Age 3-6) or URL params
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat') || urlParams.get('category');
    this.currentCategory = (catParam && ['kids', 'older', 'all'].includes(catParam.toLowerCase())) 
      ? catParam.toLowerCase() 
      : 'kids';
    this.games = getGamesByCategoryId(this.currentCategory);

    const slideParam = parseInt(urlParams.get('slide'), 10);
    this.currentSlideIndex = (!isNaN(slideParam) && slideParam >= 1 && slideParam <= this.games.length) 
      ? slideParam - 1 
      : 0;

    this.trackContainer = document.getElementById('slides-track');
    this.progressBar = document.getElementById('progress-bar-fill');
    this.onSlideChange = null;

    this.renderSlides();
    this.initGlobalNavigation();
    this.initLightbox();
    this.initRulesModal();
  }

  get activeGame() {
    return this.games[this.currentSlideIndex] || this.games[0];
  }

  get totalSlides() {
    return this.games.length;
  }

  setCategory(categoryKey, targetGameId = null) {
    const key = (categoryKey || 'kids').toLowerCase();
    this.currentCategory = key;
    this.games = getGamesByCategoryId(key);

    if (targetGameId) {
      const targetIdx = this.games.findIndex(g => g.id === targetGameId);
      this.currentSlideIndex = targetIdx >= 0 ? targetIdx : 0;
    } else {
      this.currentSlideIndex = 0;
    }

    this.renderSlides();
    this.updateTransform();
    this.updateUrlParams();

    if (this.onSlideChange) this.onSlideChange();
  }

  updateUrlParams() {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('cat', this.currentCategory);
      url.searchParams.set('slide', this.currentSlideIndex + 1);
      window.history.replaceState({}, '', url.toString());
    } catch (_) {}
  }

  renderSlides() {
    if (!this.trackContainer) return;

    const total = this.totalSlides;
    this.trackContainer.innerHTML = this.games.map((game, idx) => {
      return `
        <section class="slide-section" data-game-id="${game.id}" data-slide-index="${idx}">
          <div class="slide-content-wrapper">
            ${this.getGameSlideMarkup(game, idx, total)}
          </div>
        </section>
      `;
    }).join('');

    this.initSlideEvents();
    this.updateTransform();
  }

  getGameSlideMarkup(game, idx, totalSlides) {
    const pal = game.palette;
    const cat = CATEGORIES[this.currentCategory.toUpperCase()] || CATEGORIES.KIDS;
    const currentSlideNum = String(idx + 1).padStart(2, '0');

    // Coaching advice
    let coachTip = '';
    if (this.currentCategory === 'kids') {
      coachTip = game.kidsGuidance ? game.kidsGuidance.tip : 'Counselor guides and assists little campers!';
    } else if (this.currentCategory === 'older') {
      coachTip = game.olderGuidance ? game.olderGuidance.tip : 'Focus on precision aiming, distance, and speed!';
    } else {
      coachTip = game.kidsGuidance ? game.kidsGuidance.tip : '';
    }

    const col1 = this.getColumn1Data(game);
    const col2 = this.getColumn2Data(game);
    const slideRules = this.getSlideRules(game);

    return `
      <div class="slide-outer-wrapper" style="
        --canvas-bg: ${pal.bgCanvas};
        --tab-bg: ${pal.bgTab};
        --tab-color: ${pal.tabTextColor};
        --theme-color: ${pal.themeColor};
        --accent-color: ${pal.accentColor};
        --card-border: ${pal.cardBorder};
      ">
        <!-- Top Pill Header Bar (Floats ABOVE canvas for max space) -->
        <header class="slide-pill-header">
          <div class="pill-category-group" role="tablist" aria-label="Select Age Group">
            <button type="button" 
                    class="pill-cat-btn ${this.currentCategory === 'kids' ? 'active' : ''}" 
                    data-category="kids" 
                    role="tab"
                    aria-selected="${this.currentCategory === 'kids'}"
                    title="Kids (Age 3–6): Games 1, 2">
              <span class="cat-pill-emoji">🎈</span>
              <span class="cat-pill-text">Kids <span class="cat-pill-sub">(3–6)</span></span>
            </button>

            <button type="button" 
                    class="pill-cat-btn ${this.currentCategory === 'older' ? 'active' : ''}" 
                    data-category="older" 
                    role="tab"
                    aria-selected="${this.currentCategory === 'older'}"
                    title="Older Kids (Age 7+): Games 3, 4, 5">
              <span class="cat-pill-emoji">🚀</span>
              <span class="cat-pill-text">Older <span class="cat-pill-sub">(7+)</span></span>
            </button>

            <button type="button" 
                    class="pill-cat-btn ${this.currentCategory === 'all' ? 'active' : ''}" 
                    data-category="all" 
                    role="tab"
                    aria-selected="${this.currentCategory === 'all'}"
                    title="All 5 Games">
              <span class="cat-pill-emoji">🌟</span>
              <span class="cat-pill-text">All <span class="cat-pill-sub">Games</span></span>
            </button>
          </div>

          <div class="pill-center-num">
            <span class="pill-num-curr">${currentSlideNum}</span>
            <span class="pill-num-slash">/</span>
            <span class="pill-num-total">${String(totalSlides).padStart(2, '0')}</span>
          </div>

          <div class="pill-right-group">
            <span class="pill-camp-label">2026 KIDS CAMP</span>
            <button type="button" class="pill-btn-deck" data-action="open-drawer" title="Open Slide Catalog Menu">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>Deck</span>
            </button>
          </div>
        </header>

        <!-- Slide Canvas Card (Now Bigger without embedded header) -->
        <div class="game-slide-canvas">

          <!-- Slide Title & Star Block (Clean, Centered, Spacious) -->
          <div class="slide-center-title-block">
            <div class="slide-star-icon">✦</div>
            <h1 class="slide-title-text">${game.title}</h1>
            <p class="slide-subtitle-text">${game.subtitle}</p>
          </div>

          <!-- 3-Pillar Unified Presentation Columns -->
          <div class="slide-three-columns">
            
            <!-- Pillar 1: Visual Showcase (Photo + Diagram) -->
            <div class="slide-pillar pillar-visual">
              <div class="pillar-header">
                ${game.setupImage ? `
                  <div class="pillar-img-toggle">
                    <button type="button" class="img-toggle-tab active" data-view="craft">📸 Craft Photo</button>
                    <button type="button" class="img-toggle-tab" data-view="setup">🛠️ Setup Diagram</button>
                  </div>
                ` : `
                  <div class="pillar-single-tag">
                    <span>📸 DIY Craft Setup</span>
                  </div>
                `}
              </div>
              <div class="pillar-visual-frame" data-img-src="${game.referenceImage}" data-setup-src="${game.setupImage || ''}" role="button" tabindex="0" title="Click to enlarge photo">
                <img src="${game.referenceImage}" alt="${game.title} craft setup" class="pillar-img" loading="eager" />
                <span class="pillar-zoom-badge">🔍 Click to Enlarge</span>
              </div>
              <div class="pillar-footer setup-footer">
                <span class="footer-icon">🛠️</span>
                <div class="footer-text-wrap">
                  <span class="footer-title">Setup Guide</span>
                  <p class="footer-desc">${col1.caption}</p>
                </div>
              </div>
            </div>

            <!-- Pillar 2: 🎯 Official Game Rules -->
            <div class="slide-pillar pillar-rules">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">🎯</span>
                  <span class="header-title rules-title-color">How to Play</span>
                </div>
                <button type="button" class="btn-enlarge-rules" data-action="open-rules" title="Open Full Rules Sheet (Press R)">
                  <span>🔍 Full Sheet</span>
                </button>
              </div>
              <div class="pillar-rules-body" data-action="open-rules" role="button" tabindex="0" title="Click to view full rules sheet">
                ${slideRules.map(r => `
                  <div class="slide-rule-card">
                    <span class="slide-rule-num">${r.num}</span>
                    <div class="slide-rule-info">
                      <strong class="slide-rule-heading">${r.title}</strong>
                      <p class="slide-rule-detail">${r.text}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="pillar-footer win-footer">
                <span class="footer-icon">🏆</span>
                <div class="footer-text-wrap">
                  <span class="footer-title">Winning Goal</span>
                  <p class="footer-desc">${col2.caption}</p>
                </div>
              </div>
            </div>

            <!-- Pillar 3: 📦 Supplies & Coach Guidance -->
            <div class="slide-pillar pillar-supplies">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">📦</span>
                  <span class="header-title supplies-title-color">What You Need</span>
                </div>
                <span class="header-counter-pill">${game.materials.length} Items</span>
              </div>
              <div class="pillar-supplies-body">
                <ul class="slide-supplies-list">
                  ${game.materials.slice(0, 5).map(m => `
                    <li class="slide-supply-row">
                      <span class="supply-check-bullet">✓</span>
                      <div class="supply-names">
                        <span class="supply-name-bold">${m.name}</span>
                        ${m.note ? `<span class="supply-note-dim">${m.note}</span>` : ''}
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="pillar-footer tip-footer">
                <span class="footer-icon">💡</span>
                <div class="footer-text-wrap">
                  <span class="footer-title">${cat.shortLabel} Tip</span>
                  <p class="footer-desc">${coachTip}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  getSlideRules(game) {
    if (game.id === 'goliath-slingshot') {
      return [
        { num: '1', title: '3 Throws per Player', text: 'Step up and take 3 throws per turn using soft balls or balloon slingshots.' },
        { num: '2', title: 'Stay Behind the Line', text: 'All shots must be released strictly from behind the marked floor line.' },
        { num: '3', title: 'Team Turn Rotation', text: 'Teams alternate throwers while teammates cheer from behind the station!' }
      ];
    }
    if (game.id === 'feed-goliath') {
      return [
        { num: '1', title: 'Step Up as David', text: 'Campers take turns holding crumpled paper balls ready to defeat Goliath.' },
        { num: '2', title: 'Stay Behind the Line', text: 'Release all throws strictly from behind the 4-ft marked throwing line.' },
        { num: '3', title: 'Aim for the Mouth', text: 'Toss paper balls directly into Goliath’s wide open mouth to score!' }
      ];
    }
    if (game.id === 'reaction-ball-cup') {
      return [
        { num: '1', title: 'Hold Strings at Start', text: 'Hold both guide strings taut at the player starting line position.' },
        { num: '2', title: 'Guide Ball Smoothly', text: 'Gently spread, lift, and tilt strings to roll the ball along the track.' },
        { num: '3', title: 'Drop in Every Cup', text: 'Control string tension to drop the ball cleanly into cups 1 through 4!' }
      ];
    }
    if (game.id === 'david-goliath-sliding') {
      return [
        { num: '1', title: 'Slide, Do Not Throw!', text: 'Smoothly slide one David bottle cap at a time flat along the floor.' },
        { num: '2', title: 'Aim for Goliath', text: 'Target the giant Goliath bottle cap resting directly on the center “X”.' },
        { num: '3', title: 'Knock Out of Bounds', text: 'Strike Goliath completely outside the taped square arena boundary!' }
      ];
    }
    // brook-river-crossing
    return [
      { num: '1', title: 'Cannot Touch Floor!', text: 'Balance strictly on cardboard steps — the floor is river water!' },
      { num: '2', title: 'Pass Steps Forward', text: 'Pick up the rear cardboard square and pass hand-to-hand forward.' },
      { num: '3', title: 'All Across to Win', text: 'Cooperate as a team until every camper safely reaches the Finish Bank!' }
    ];
  }

  getColumn1Data(game) {
    if (game.id === 'goliath-slingshot') {
      return {
        image: game.referenceImage,
        caption: 'Stack the 4-3-2-1 cup pyramid with a cartoon Goliath cutout mounted securely at the peak.'
      };
    }
    if (game.id === 'feed-goliath') {
      return {
        image: game.referenceImage,
        caption: 'Draw Goliath’s head on a large box and cut a wide open mouth hole placed at chest height.'
      };
    }
    if (game.id === 'reaction-ball-cup') {
      return {
        image: game.referenceImage,
        caption: 'Fasten 2 parallel strings along a straight floor tape line with cups spaced evenly along track.'
      };
    }
    if (game.id === 'david-goliath-sliding') {
      return {
        image: game.referenceImage,
        caption: 'Tape a large square arena on smooth floor and position the Goliath bottle cap right on the center “X”.'
      };
    }
    return {
      image: game.referenceImage,
      caption: 'Tape two river banks 20–30 ft apart and number 5 cardboard delivery box squares from 1 to 5.'
    };
  }

  getColumn2Data(game) {
    if (game.id === 'goliath-slingshot') {
      return {
        caption: 'Campers take 3 throws from behind the rope line to topple cups and knock down Goliath!'
      };
    }
    if (game.id === 'feed-goliath') {
      return {
        caption: 'Campers step up as David and toss crumpled paper balls directly into Goliath’s open mouth.'
      };
    }
    if (game.id === 'reaction-ball-cup') {
      return {
        caption: 'Gently spread string tension to smoothly guide and drop the rolling ball into each cup along the path.'
      };
    }
    if (game.id === 'david-goliath-sliding') {
      return {
        caption: 'Slide David’s colored bottle caps along the floor to strike Goliath and knock him out of bounds.'
      };
    }
    return {
      caption: 'Balance strictly on cardboard squares and pass rear boards forward hand-to-hand across the river!'
    };
  }

  initSlideEvents() {
    // 1. Zoom photo on click (opens active image in lightbox)
    const visualFrames = document.querySelectorAll('.pillar-visual-frame');
    visualFrames.forEach(frame => {
      const getActiveSrc = () => {
        const imgEl = frame.querySelector('.pillar-img');
        return imgEl ? imgEl.src : frame.dataset.imgSrc;
      };

      frame.addEventListener('click', (e) => {
        if (e.target.closest('.img-toggle-tab')) return;
        e.stopPropagation();
        this.openLightbox(getActiveSrc());
      });
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('.img-toggle-tab')) return;
          e.preventDefault();
          this.openLightbox(getActiveSrc());
        }
      });
    });

    // 2. Photo toggle tabs (Craft Photo vs Setup Diagram)
    const toggleTabs = document.querySelectorAll('.img-toggle-tab');
    toggleTabs.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pillar = btn.closest('.pillar-visual');
        if (!pillar) return;
        const targetView = btn.dataset.view;
        const frame = pillar.querySelector('.pillar-visual-frame');
        const imgEl = pillar.querySelector('.pillar-img');
        if (!frame || !imgEl) return;

        const craftSrc = frame.dataset.imgSrc;
        const setupSrc = frame.dataset.setupSrc;

        pillar.querySelectorAll('.img-toggle-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (targetView === 'setup' && setupSrc) {
          imgEl.src = setupSrc;
        } else if (craftSrc) {
          imgEl.src = craftSrc;
        }
      });
    });

    // 3. Category pills inside slide top pill header
    const catBtns = document.querySelectorAll('.slide-pill-header .pill-cat-btn');
    catBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = btn.dataset.category;
        if (cat) this.setCategory(cat);
      });
    });

    // 4. Open rules modal
    const ruleOpeners = document.querySelectorAll('[data-action="open-rules"]');
    ruleOpeners.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openRulesModal();
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openRulesModal();
        }
      });
    });

    // 5. Open deck drawer catalog
    const drawerOpeners = document.querySelectorAll('[data-action="open-drawer"]');
    drawerOpeners.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleDrawer();
      });
    });
  }

  toggleDrawer() {
    if (this.controlsDock && typeof this.controlsDock.toggleDrawer === 'function') {
      this.controlsDock.toggleDrawer();
    } else {
      const drawerModal = document.getElementById('slide-drawer-modal');
      if (drawerModal) drawerModal.classList.toggle('open');
    }
  }

  initLightbox() {
    let modal = document.getElementById('photo-lightbox-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'photo-lightbox-modal';
      modal.className = 'lightbox-modal';
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="lightbox-backdrop" id="lightbox-backdrop"></div>
        <div class="lightbox-content-box">
          <button type="button" class="btn-close-lightbox" id="btn-close-lightbox" aria-label="Close Lightbox">✕</button>
          <img src="" alt="Camp Craft Reference" id="lightbox-img" class="lightbox-img" />
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = modal.querySelector('#btn-close-lightbox');
      const backdrop = modal.querySelector('#lightbox-backdrop');
      const closeModal = () => this.closeLightbox();

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (backdrop) backdrop.addEventListener('click', closeModal);

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    }
  }

  openLightbox(src) {
    const modal = document.getElementById('photo-lightbox-modal');
    const img = document.getElementById('lightbox-img');

    if (modal && img) {
      img.src = src;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  closeLightbox() {
    const modal = document.getElementById('photo-lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  initRulesModal() {
    let modal = document.getElementById('game-rules-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'game-rules-modal';
      modal.className = 'rules-modal';
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="rules-modal-backdrop" id="rules-modal-backdrop"></div>
        <div class="rules-modal-container" role="dialog" aria-modal="true" aria-labelledby="rules-modal-title">
          <header class="rules-modal-header">
            <div class="rules-modal-header-left">
              <span class="rules-modal-star">✦</span>
              <div>
                <div class="rules-modal-cat-tag" id="rules-modal-cat">KIDS CAMP RULES</div>
                <h2 class="rules-modal-title" id="rules-modal-title">Official Game Rules</h2>
              </div>
            </div>
            <button type="button" class="btn-close-rules-modal" id="btn-close-rules-modal" aria-label="Close Rules Modal">✕</button>
          </header>

          <div class="rules-modal-body" id="rules-modal-body">
            <!-- Rules list injected dynamically -->
          </div>

          <footer class="rules-modal-footer" id="rules-modal-footer">
            <!-- Objective & Coach Tips -->
          </footer>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = modal.querySelector('#btn-close-rules-modal');
      const backdrop = modal.querySelector('#rules-modal-backdrop');
      const closeModal = () => this.closeRulesModal();

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (backdrop) backdrop.addEventListener('click', closeModal);

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeRulesModal();
        }
      });
    }
  }

  openRulesModal() {
    const game = this.activeGame;
    if (!game) return;
    const cat = CATEGORIES[this.currentCategory.toUpperCase()] || CATEGORIES.KIDS;
    const modal = document.getElementById('game-rules-modal');
    if (!modal) return;

    modal.querySelector('#rules-modal-cat').textContent = `${cat.emoji} ${cat.label.toUpperCase()}`;
    modal.querySelector('#rules-modal-title').textContent = `${game.title} — Official Rules`;

    const bodyEl = modal.querySelector('#rules-modal-body');
    bodyEl.innerHTML = `
      <div class="rules-modal-grid">
        ${game.rules.map((r, i) => `
          <div class="rules-modal-card">
            <div class="rules-modal-chip">${r.badge || `Rule ${i + 1}`}</div>
            <div class="rules-modal-card-content">
              <h4 class="rules-modal-rule-title">${r.title}</h4>
              <p class="rules-modal-rule-text">${r.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    const col2 = this.getColumn2Data(game);
    let coachTip = '';
    if (this.currentCategory === 'kids') {
      coachTip = game.kidsGuidance ? game.kidsGuidance.tip : 'Counselor guides and assists little campers!';
    } else if (this.currentCategory === 'older') {
      coachTip = game.olderGuidance ? game.olderGuidance.tip : 'Focus on precision aiming, distance, and speed!';
    } else {
      coachTip = game.kidsGuidance ? game.kidsGuidance.tip : '';
    }

    const footerEl = modal.querySelector('#rules-modal-footer');
    footerEl.innerHTML = `
      <div class="rules-footer-item">
        <span class="rules-footer-badge">🏆 Objective:</span>
        <span class="rules-footer-text">${col2.caption}</span>
      </div>
      <div class="rules-footer-item tip-item">
        <span class="rules-footer-badge tip-badge">💡 Tip (${cat.shortLabel}):</span>
        <span class="rules-footer-text">${coachTip}</span>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }

  closeRulesModal() {
    const modal = document.getElementById('game-rules-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  toggleRulesModal() {
    const modal = document.getElementById('game-rules-modal');
    if (modal && modal.classList.contains('active')) {
      this.closeRulesModal();
    } else {
      this.openRulesModal();
    }
  }

  goToSlide(index) {
    const total = this.totalSlides;
    if (index < 0 || index >= total) return;

    this.currentSlideIndex = index;
    this.updateTransform();
    this.updateUrlParams();

    // Reset slide scroll positions on navigation
    if (this.trackContainer) {
      const slides = this.trackContainer.querySelectorAll('.slide-section');
      slides.forEach(s => { s.scrollTop = 0; });
    }

    if (this.onSlideChange) this.onSlideChange();
  }

  nextSlide() {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentSlideIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.goToSlide(this.currentSlideIndex - 1);
    }
  }

  updateTransform() {
    if (!this.trackContainer) return;
    const offset = this.currentSlideIndex * 100;
    this.trackContainer.style.transform = `translateX(-${offset}vw)`;

    if (this.progressBar) {
      const total = this.totalSlides;
      const pct = ((this.currentSlideIndex + 1) / total) * 100;
      this.progressBar.style.width = `${pct}%`;
    }
  }

  initGlobalNavigation() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'n':
        case 'N':
          e.preventDefault();
          this.nextSlide();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'p':
        case 'P':
          e.preventDefault();
          this.prevSlide();
          break;

        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;

        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
          break;

        case 'r':
        case 'R':
          e.preventDefault();
          this.toggleRulesModal();
          break;

        case 'Escape':
          this.closeLightbox();
          this.closeRulesModal();
          break;
      }
    });

    // Touch Swipe
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) return;
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchStartTime = Date.now();
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (!touchStartTime) return;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const deltaTime = Date.now() - touchStartTime;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15 && deltaTime < 850) {
        if (deltaX < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      touchStartTime = 0;
    }, { passive: true });

    // Desktop Mouse Drag Swipe
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseStartY = 0;
    let mouseStartTime = 0;

    window.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, a, input, select, textarea, .dock-container, .drawer-modal, .lightbox-modal, .top-nav-bar')) return;
      if (e.button !== 0) return;

      isMouseDown = true;
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      mouseStartTime = Date.now();
    });

    window.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;

      const deltaX = e.clientX - mouseStartX;
      const deltaY = e.clientY - mouseStartY;
      const deltaTime = Date.now() - mouseStartTime;

      if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && deltaTime < 700) {
        if (deltaX < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }
}
