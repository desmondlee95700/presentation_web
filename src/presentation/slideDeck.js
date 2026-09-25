import { GAMES_CATALOG } from './gamesData.js';
import { sfx } from '../utils/sfx.js';

export class SlideDeck {
  constructor() {
    this.games = GAMES_CATALOG;
    this.currentSlideIndex = 0;

    this.trackContainer = document.getElementById('slides-track');
    this.progressBar = document.getElementById('progress-bar-fill');
    this.onSlideChange = null;

    this.renderSlides();
    this.initGlobalNavigation();
    this.initLightbox();
  }

  get activeGame() {
    return this.games[this.currentSlideIndex];
  }

  renderSlides() {
    if (!this.trackContainer) return;

    this.trackContainer.innerHTML = this.games.map((game, idx) => {
      return `
        <section class="slide-section" data-game-id="${game.id}" data-slide-index="${idx}">
          <div class="slide-content-wrapper">
            ${this.getGameSlideMarkup(game, idx)}
          </div>
        </section>
      `;
    }).join('');

    this.initSlideEvents();
    this.updateTransform();
  }

  getGameSlideMarkup(game, idx) {
    return `
      <div class="game-slide-view" style="--accent-theme: ${game.themeColor}; --accent-glow: ${game.accentColor};">
        <!-- Top Game Header -->
        <header class="slide-header-block">
          <div class="header-main-row">
            <div class="title-and-badge">
              <span class="game-num-badge" style="background: ${game.themeColor};">
                <span class="badge-short">Game 0${idx + 1}</span>
                <span class="badge-full">${game.badge}</span>
              </span>
              <h1 class="slide-title-text">${game.title}</h1>
            </div>
            <div class="header-actions">
              <button type="button" class="btn-header-overview" data-action="open-drawer" title="Open Activity Deck Overview" aria-label="Open Games Menu">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Deck</span>
              </button>
            </div>
          </div>
          <div class="header-sub-row">
            <p class="slide-subtitle-text">${game.subtitle}</p>
          </div>
        </header>

        <!-- Mobile Segmented Tabs (Visible only on mobile/tablet) -->
        <nav class="mobile-section-tabs" role="tablist" aria-label="Game sections">
          <button type="button" class="mobile-tab-btn active" data-tab="tab-craft" role="tab" aria-selected="true">
            <span class="tab-emoji">📸</span>
            <span class="tab-title">Photo</span>
          </button>
          <button type="button" class="mobile-tab-btn" data-tab="tab-setup" role="tab" aria-selected="false">
            <span class="tab-emoji">🛠️</span>
            <span class="tab-title">Setup <span class="tab-counter">(${game.setupSteps.length})</span></span>
          </button>
          <button type="button" class="mobile-tab-btn" data-tab="tab-rules" role="tab" aria-selected="false">
            <span class="tab-emoji">🎯</span>
            <span class="tab-title">Rules <span class="tab-counter">(${game.rules.length})</span></span>
          </button>
          <button type="button" class="mobile-tab-btn" data-tab="tab-materials" role="tab" aria-selected="false">
            <span class="tab-emoji">📦</span>
            <span class="tab-title">Items <span class="tab-counter">(${game.materials.length})</span></span>
          </button>
        </nav>

        <!-- Main 3-Column Content Layout (On mobile: tabbed card view) -->
        <div class="slide-columns-grid" data-active-tab="tab-craft">
          
          <!-- Column 1: DIY Reference -->
          <div class="slide-column col-craft-preview" data-tab-pane="tab-craft">
            <div class="camp-card photo-craft-card">
              <div class="card-top-bar">
                <span class="card-label-badge" style="color: ${game.themeColor}; background: ${game.themeColor}18;">📸 ${game.referenceTitle}</span>
                ${game.referenceImage ? `
                  <button type="button" class="btn-lightbox-trigger" data-img-src="${game.referenceImage}" title="Enlarge Reference Photo">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    Enlarge
                  </button>
                ` : ''}
              </div>

              ${game.referenceImage ? `
                <div class="craft-photo-frame" data-img-src="${game.referenceImage}">
                  <img src="${game.referenceImage}" alt="${game.title} craft setup" class="craft-img" loading="eager" />
                  <div class="photo-tap-hint">🔍 Tap to zoom full-screen</div>
                </div>
              ` : `
                <div class="diagram-preview-card">
                  <div class="diagram-emoji-icon">🏕️</div>
                  <p class="diagram-main-text">${game.title} Setup Reference</p>
                </div>
              `}
            </div>
          </div>

          <!-- Column 2: Step-by-Step Setup Guide -->
          <div class="slide-column col-setup-guide">
            <div class="camp-card setup-guide-card">
              <div class="card-top-bar">
                <span class="card-label-badge" style="color: #ea580c; background: #ffedd5;">🛠️ Setup Guide (${game.setupSteps.length} Steps)</span>
                <span class="prep-pill-badge">⚡ Easy Prep</span>
              </div>

              <div class="steps-vertical-stack">
                ${game.setupSteps.map(s => `
                  <div class="step-card-row">
                    <div class="step-number-circle step-${s.step}">${s.step}</div>
                    <div class="step-text-col">
                      <strong class="step-header-title">${s.title}</strong>
                      <p class="step-desc-text">${s.desc}</p>
                    </div>
                  </div>
                `).join('')}

                ${game.setupImage ? `
                  <div class="setup-image-wrapper" data-img-src="${game.setupImage}" role="button" tabindex="0" title="Click to enlarge">
                    <img src="${game.setupImage}" alt="${game.title} Setup" class="setup-craft-img" loading="eager" />
                  </div>
                ` : ''}
              </div>
            </div>
          </div>

          <!-- Column 3: Rules & Materials Checklist & Scoring -->
          <div class="slide-column col-rules-materials-stack">
            <!-- How to Play Card -->
            <div class="camp-card rules-card">
              <div class="card-top-bar">
                <span class="card-label-badge" style="color: #0284c7; background: #e0f2fe;">🎯 How to Play (${game.rules.length} Rules)</span>
              </div>
              <div class="rules-compact-list">
                ${game.rules.map(r => `
                  <div class="rule-compact-item">
                    <span class="rule-tag-pill">${r.badge}</span>
                    <div class="rule-content-col">
                      <strong class="rule-name">${r.title}</strong>
                      <p class="rule-desc">${r.text}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- What You Need (Materials) Card -->
            <div class="camp-card materials-card">
              <div class="card-top-bar">
                <span class="card-label-badge" style="color: #15803d; background: #dcfce7;">📦 What You Need</span>
              </div>
              <ul class="materials-checklist">
                ${game.materials.map(m => `
                  <li class="material-row-item">
                    <span class="check-icon">✓</span>
                    <div class="material-names-group">
                      <span class="material-main-name">${m.name}</span>
                      ${m.note ? `<span class="material-sub-note">${m.note}</span>` : ''}
                    </div>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  initSlideEvents() {
    const zoomButtons = document.querySelectorAll('.btn-lightbox-trigger');
    const photoFrames = document.querySelectorAll('.craft-photo-frame, .setup-image-wrapper');
    const mobileChips = document.querySelectorAll('.mobile-nav-chip');

    const handleOpen = (src) => {
      this.openLightbox(src);
    };

    zoomButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = btn.dataset.imgSrc;
        if (src) handleOpen(src);
      });
    });

    photoFrames.forEach(frame => {
      frame.addEventListener('click', () => {
        const src = frame.dataset.imgSrc;
        if (src) handleOpen(src);
      });
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const src = frame.dataset.imgSrc;
          if (src) handleOpen(src);
        }
      });
    });

    const mobileTabs = document.querySelectorAll('.mobile-tab-btn');
    mobileTabs.forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabKey = tabBtn.dataset.tab;
        const slideView = tabBtn.closest('.game-slide-view');
        if (!slideView) return;

        slideView.querySelectorAll('.mobile-tab-btn').forEach(btn => {
          const isActive = btn === tabBtn;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        const grid = slideView.querySelector('.slide-columns-grid');
        if (grid) {
          grid.dataset.activeTab = tabKey;
        }
        sfx.playClick();
      });
    });
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
      sfx.playClick();
    }
  }

  closeLightbox() {
    const modal = document.getElementById('photo-lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  goToSlide(index) {
    const total = this.games.length;
    if (index < 0 || index >= total) return;

    this.currentSlideIndex = index;
    this.updateTransform();

    sfx.playSlideWhoosh();

    if (this.onSlideChange) this.onSlideChange();
  }

  nextSlide() {
    if (this.currentSlideIndex < this.games.length - 1) {
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
      const total = this.games.length;
      const pct = ((this.currentSlideIndex + 1) / total) * 100;
      this.progressBar.style.width = `${pct}%`;
    }
  }

  initGlobalNavigation() {
    // 1. Keyboard navigation (Desktop): Arrow Keys, Space, PageUp/Down, Home/End
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in form controls
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'n':
        case 'N':
        case 'l':
        case 'L':
          e.preventDefault();
          this.nextSlide();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'p':
        case 'P':
        case 'h':
        case 'H':
          e.preventDefault();
          this.prevSlide();
          break;

        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;

        case 'End':
          e.preventDefault();
          this.goToSlide(this.games.length - 1);
          break;
      }
    });

    // 2. Mobile Touch Swipe Navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) return; // Ignore multi-touch gestures
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

      // Check for horizontal swipe gesture (distance > 35px, horizontal dominance, under 850ms)
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15 && deltaTime < 850) {
        if (deltaX < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      touchStartTime = 0;
    }, { passive: true });

    // 3. Desktop Mouse Drag Swipe (Allow click & drag to swipe on desktop)
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseStartY = 0;
    let mouseStartTime = 0;

    window.addEventListener('mousedown', (e) => {
      // Ignore clicks on buttons, links, or interactive elements
      if (e.target.closest('button, a, input, select, textarea, .dock-container, .drawer-modal, .lightbox-modal')) return;
      if (e.button !== 0) return; // Only primary mouse button

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

    // 4. Trackpad horizontal scroll debounce
    let lastWheelTime = 0;
    window.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > 40) {
        const now = Date.now();
        if (now - lastWheelTime > 450) {
          lastWheelTime = now;
          if (e.deltaX > 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
      }
    }, { passive: true });
  }
}
