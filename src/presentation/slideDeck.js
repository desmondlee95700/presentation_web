import { CATEGORIES, getGamesByCategoryId } from './gamesData.js';

export class SlideDeck {
  constructor() {
    // Default to 'kids' group (Age 3-6) or URL params
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat') || urlParams.get('category');
    this.currentCategory = (catParam && ['kids', 'older'].includes(catParam.toLowerCase())) 
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
    this.onGoHome = null;

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
                    title="Kids (Age 3–6): 5 Games">
              <span class="cat-pill-emoji">🎈</span>
              <span class="cat-pill-text">Kids <span class="cat-pill-sub">(3–6)</span></span>
              <span class="cat-pill-pic">PIC: ${CATEGORIES.KIDS.pic}</span>
            </button>

            <button type="button" 
                    class="pill-cat-btn ${this.currentCategory === 'older' ? 'active' : ''}" 
                    data-category="older" 
                    role="tab"
                    aria-selected="${this.currentCategory === 'older'}"
                    title="Older Kids (Age 7+): 5 Games">
              <span class="cat-pill-emoji">🚀</span>
              <span class="cat-pill-text">Older <span class="cat-pill-sub">(7+)</span></span>
              <span class="cat-pill-pic">PIC: ${CATEGORIES.OLDER.pic}</span>
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
            ${(game.place || game.assetsNeeded || game.helper) ? `
              <div class="slide-station-meta">
                ${game.helper ? `
                  <span class="station-meta-pill helper-pill">
                    <span class="v-icon">🙋</span>
                    <span class="v-key">Helper:</span>
                    <strong class="v-val">${game.helper}</strong>
                  </span>
                ` : ''}
                ${game.place ? `
                  <span class="station-meta-pill place-pill">
                    <span class="v-icon">📍</span>
                    <span class="v-key">Place:</span>
                    <strong class="v-val">${game.place}</strong>
                  </span>
                ` : ''}
                ${game.assetsNeeded ? `
                  <span class="station-meta-pill assets-pill">
                    <span class="v-icon">🪵</span>
                    <span class="v-key">Assets Needed:</span>
                    <strong class="v-val">${game.assetsNeeded}</strong>
                  </span>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- 3-Pillar Unified Presentation Columns -->
          <div class="slide-three-columns">
            
            <!-- Pillar 1: Visual Showcase (Photo + Diagram) -->
            <div class="slide-pillar pillar-visual">
              <div class="pillar-header">
                ${game.infographicImage ? `
                  <div class="pillar-img-toggle">
                    <button type="button" class="img-toggle-tab active" data-view="craft">📸 Craft Photo</button>
                    <button type="button" class="img-toggle-tab" data-view="setup">🛠️ Setup Diagram</button>
                    <button type="button" class="img-toggle-tab" data-view="info">📋 Infographic</button>
                  </div>
                ` : game.setupImage ? `
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
              <div class="pillar-visual-frame" data-img-src="${game.referenceImage}" data-setup-src="${game.setupImage || ''}" data-info-src="${game.infographicImage || ''}" role="button" tabindex="0" title="Click to enlarge photo">
                <img src="${game.referenceImage}" alt="${game.title} craft setup" class="pillar-img" loading="eager" />
                <span class="pillar-zoom-badge">🔍 Click to Enlarge</span>
              </div>
            </div>

            <!-- Pillar 2: 🎯 Official Game Rules -->
            <div class="slide-pillar pillar-rules">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">🎯</span>
                  <span class="header-title rules-title-color">How to Play</span>
                </div>
                <span class="header-counter-pill">${slideRules.length} Rules</span>
              </div>
              <div class="pillar-rules-body">
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
            </div>

            <!-- Pillar 3: 🏆 Props to Win + collapsible Supplies -->
            <div class="slide-pillar pillar-supplies">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">🏆</span>
                  <span class="header-title props-title-color">Props to Win</span>
                </div>
                ${game.props ? `<span class="header-counter-pill">${game.props.items.length} Props</span>` : ''}
              </div>
              <div class="pillar-supplies-body">
                ${game.props ? `
                  <div class="slide-props-section">
                    <span class="props-scene-label">Scenes</span>
                    <ul class="slide-props-list">
                      ${game.props.items.map(p => `
                        <li class="slide-prop-row">
                          <span class="prop-name">${p.name}${p.qty != null ? ` <span class="prop-qty">×${p.qty}</span>` : ''}</span>
                          <span class="prop-scenes" title="Scene numbers">
                            ${p.scenes.map(sc => `<span class="prop-scene-chip">${sc}</span>`).join('')}
                          </span>
                        </li>
                      `).join('')}
                    </ul>
                    <p class="props-rule">${game.props.rule}</p>
                  </div>
                ` : ''}

                <details class="supplies-dropdown">
                  <summary class="supplies-dropdown-toggle">
                    <span class="header-badge-row">
                      <span class="header-icon">📦</span>
                      <span class="header-title supplies-title-color">What You Need</span>
                    </span>
                    <span class="supplies-dropdown-meta">
                      <span class="header-counter-pill">${game.materials.length} Items</span>
                      <span class="supplies-dropdown-chevron" aria-hidden="true">▾</span>
                    </span>
                  </summary>
                  <ul class="slide-supplies-list">
                    ${game.materials.slice(0, 6).map(m => `
                      <li class="slide-supply-row">
                        <span class="supply-check-bullet">✓</span>
                        <div class="supply-names">
                          <span class="supply-name-bold">${m.name}</span>
                          ${m.note ? `<span class="supply-note-dim">${m.note}</span>` : ''}
                        </div>
                      </li>
                    `).join('')}
                  </ul>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  getSlideRules(game) {
    if (game.rules && game.rules.length > 0) {
      return game.rules.map((r, i) => ({
        num: String(i + 1),
        title: r.title,
        text: r.text
      }));
    }
    return [];
  }

  getColumn1Data(game) {
    if (game.id === 'goliath-slingshot') {
      return {
        image: game.referenceImage,
        caption: 'Set up a sturdy table in the Church Sanctuary, stack the 4-3-2-1 cup pyramid, and mount Goliath at the peak.'
      };
    }
    if (game.id === 'feed-goliath') {
      return {
        image: game.referenceImage,
        caption: 'Place the cardboard Goliath target box securely on a table in the Church Sanctuary at chest height.'
      };
    }
    if (game.id === 'footprint-stomp-toss') {
      return {
        image: game.referenceImage,
        caption: 'Tape 6–8 giant cardboard footprints in a zigzag path and set the Goliath laundry basket 3–4 ft past the finish.'
      };
    }
    if (game.id === 'find-the-david') {
      return {
        image: game.referenceImage,
        caption: 'Stick printed A4 character sheets onto sturdy cardboard bases, then lay them face-down in a neat grid.'
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
        caption: 'Place Goliath at the far end of a smooth table and line up David’s 5 colored bottle caps at the shooting edge.'
      };
    }
    if (game.id === 'brook-river-crossing') {
      return {
        image: game.referenceImage,
        caption: 'Tape two river banks 20–30 ft apart and number 5 cardboard delivery box squares from 1 to 5.'
      };
    }
    if (game.id === 'wind-of-elah') {
      return {
        image: game.referenceImage,
        caption: 'Scatter 20 paper stones in FAA Pink Room, position low basketball basket as goal, and equip squad with fans.'
      };
    }
    if (game.id === 'miracle-motion') {
      return {
        image: game.referenceImage,
        caption: 'Prepare prompt cards with characters, animals, and expressions on a table, and seat campers in a semicircle.'
      };
    }
    if (game.id === 'faith-and-balance') {
      return {
        image: game.referenceImage,
        caption: 'Tape the start line, position the target basket 20–25 ft away, and set out plastic spoons with plenty of small balls.'
      };
    }
    return {
      image: game.referenceImage,
      caption: game.subtitle || ''
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
    if (game.id === 'footprint-stomp-toss') {
      return {
        caption: 'Stomp through all the giant’s footprints, sink the soft ball into the basket, and pass to the next teammate!'
      };
    }
    if (game.id === 'find-the-david') {
      return {
        caption: 'Campers take turns flipping cards and remembering locations until both David cards are revealed!'
      };
    }
    if (game.id === 'reaction-ball-cup') {
      return {
        caption: 'Gently spread string tension to smoothly guide and drop the rolling ball into each cup along the path.'
      };
    }
    if (game.id === 'david-goliath-sliding') {
      return {
        caption: 'Each kid slides 3 bottle caps across the table to knock down Goliath. More KOs win more props!'
      };
    }
    if (game.id === 'brook-river-crossing') {
      return {
        caption: 'Balance strictly on cardboard squares and pass rear boards forward hand-to-hand across the river!'
      };
    }
    if (game.id === 'wind-of-elah') {
      return {
        caption: 'Work as an all-hands wind squad to herd and flip all 20 paper river stones into the low basketball basket within 60 seconds!'
      };
    }
    if (game.id === 'miracle-motion') {
      return {
        caption: 'Campers take turns acting silently without words until the team guesses at least 5 acts correctly!'
      };
    }
    if (game.id === 'faith-and-balance') {
      return {
        caption: 'Collect as many balls into the target basket as you can in 2 minutes through steady spoon relay handoffs!'
      };
    }
    return {
      caption: game.subtitle || ''
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
        const infoSrc = frame.dataset.infoSrc;

        pillar.querySelectorAll('.img-toggle-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (targetView === 'setup' && setupSrc) {
          imgEl.src = setupSrc;
        } else if (targetView === 'info' && infoSrc) {
          imgEl.src = infoSrc;
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

    // 6. Return to Start Page (Home)
    const homeBtns = document.querySelectorAll('[data-action="go-home"]');
    homeBtns.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof this.onGoHome === 'function') {
          this.onGoHome();
        }
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
      document.body.classList.add('modal-open');
    }
  }

  closeLightbox() {
    const modal = document.getElementById('photo-lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
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
            <div class="rules-modal-header-top">
              <div class="rules-modal-badge-group">
                <span class="rules-modal-cat-pill" id="rules-modal-cat">🚀 OLDER KIDS (AGE 7+)</span>
                <span class="rules-modal-num-pill" id="rules-modal-num-pill">GAME 06</span>
              </div>
              <div class="rules-modal-header-actions">
                <span class="rules-modal-esc-hint">Press <kbd>ESC</kbd></span>
                <button type="button" class="btn-close-rules-modal" id="btn-close-rules-modal" aria-label="Close Rules Modal" title="Close Sheet (Esc)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div class="rules-modal-title-row">
              <div class="rules-modal-star-wrap">
                <span class="rules-modal-star">✦</span>
              </div>
              <div class="rules-modal-title-text-group">
                <h2 class="rules-modal-title" id="rules-modal-title">Official Game Rules</h2>
                <p class="rules-modal-subtitle" id="rules-modal-subtitle">Official facilitator guide & gameplay rules</p>
              </div>
            </div>
          </header>

          <div class="rules-modal-body" id="rules-modal-body">
            <!-- Rules list injected dynamically -->
          </div>

          <footer class="rules-modal-footer" id="rules-modal-footer">
            <!-- Objective, Tips & Venue Cards -->
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

    // Apply active game's dynamic palette tokens
    modal.style.setProperty('--modal-theme', game.palette?.themeColor || '#2563eb');
    modal.style.setProperty('--modal-accent', game.palette?.accentColor || '#3b82f6');
    modal.style.setProperty('--modal-tab-bg', game.palette?.bgTab || '#e0f2fe');
    modal.style.setProperty('--modal-tab-color', game.palette?.tabTextColor || '#0369a1');
    modal.style.setProperty('--modal-canvas', game.palette?.bgCanvas || '#f8fafc');
    modal.style.setProperty('--modal-card-border', game.palette?.cardBorder || '#bae6fd');

    modal.querySelector('#rules-modal-cat').textContent = `${cat.emoji} ${cat.label.toUpperCase()}`;
    modal.querySelector('#rules-modal-num-pill').textContent = game.badge || `GAME ${String(game.catalogNumber || '').padStart(2, '0')}`;
    modal.querySelector('#rules-modal-title').textContent = `${game.title}`;
    modal.querySelector('#rules-modal-subtitle').textContent = game.subtitle || 'Official Facilitator Gameplay Rules';

    const bodyEl = modal.querySelector('#rules-modal-body');
    bodyEl.innerHTML = `
      <div class="rules-modal-section-header">
        <div class="rules-modal-section-title">
          <span class="section-icon">📜</span>
          <span>Official Gameplay Rules</span>
        </div>
        <span class="rules-modal-count-pill">${game.rules.length} Steps</span>
      </div>
      <div class="rules-modal-grid">
        ${game.rules.map((r, i) => `
          <div class="rules-modal-card">
            <div class="rules-modal-step-badge">
              <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="step-label">RULE</span>
            </div>
            <div class="rules-modal-card-content">
              <div class="rules-modal-card-header">
                <h4 class="rules-modal-rule-title">${r.title}</h4>
                ${r.badge ? `<span class="rules-modal-custom-badge">${r.badge}</span>` : ''}
              </div>
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
      <div class="rules-footer-cards-grid">
        <div class="rules-footer-card card-objective">
          <div class="footer-card-header">
            <span class="footer-card-icon">🏆</span>
            <span class="footer-card-title">Winning Objective</span>
          </div>
          <p class="footer-card-desc">${col2.caption}</p>
        </div>
        <div class="rules-footer-card card-tip">
          <div class="footer-card-header">
            <span class="footer-card-icon">💡</span>
            <span class="footer-card-title">${cat.shortLabel} Facilitator Tip</span>
          </div>
          <p class="footer-card-desc">${coachTip}</p>
        </div>
      </div>

      ${(game.place || game.assetsNeeded) ? `
        <div class="rules-footer-meta-bar">
          ${game.place ? `
            <div class="rules-meta-pill place-pill">
              <span class="meta-icon">📍</span>
              <span class="meta-label">Place:</span>
              <strong class="meta-val">${game.place}</strong>
            </div>
          ` : ''}
          ${game.assetsNeeded ? `
            <div class="rules-meta-pill assets-pill">
              <span class="meta-icon">🪵</span>
              <span class="meta-label">Assets Needed:</span>
              <strong class="meta-val">${game.assetsNeeded}</strong>
            </div>
          ` : ''}
          <div class="rules-meta-pill camp-pill">
            <span class="meta-icon">🏕️</span>
            <span class="meta-val">2026 KIDS CAMP</span>
          </div>
        </div>
      ` : ''}

      ${game.leaderInstruction ? `
        <div class="rules-footer-callout speech-callout">
          <div class="callout-header">
            <span class="callout-icon">📢</span>
            <strong>Counselor Opening Speech</strong>
          </div>
          <p class="callout-quote">${game.leaderInstruction}</p>
        </div>
      ` : ''}

      ${game.spiritualTakeaway ? `
        <div class="rules-footer-callout takeaway-callout">
          <div class="callout-header">
            <span class="callout-icon">📖</span>
            <strong>Camp Biblical Lesson</strong>
          </div>
          <p class="callout-body">${game.spiritualTakeaway}</p>
        </div>
      ` : ''}
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const container = modal.querySelector('.rules-modal-container');
    if (container) container.scrollTop = 0;
  }

  closeRulesModal() {
    const modal = document.getElementById('game-rules-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
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

        case 'h':
        case 'H':
          e.preventDefault();
          if (typeof this.onGoHome === 'function') {
            this.onGoHome();
          }
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
