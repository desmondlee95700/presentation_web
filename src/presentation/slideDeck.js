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
              <span class="game-num-badge" style="background: ${game.themeColor};">${game.badge}</span>
              <h1 class="slide-title-text">${game.title}</h1>
            </div>
            <span class="tagline-highlight">“${game.tagline}”</span>
          </div>
          <div class="header-sub-row">
            <p class="slide-subtitle-text">${game.subtitle}</p>
          </div>
        </header>

        <!-- Main 3-Column Content Layout -->
        <div class="slide-columns-grid">
          
          <!-- Column 1: Real-Life Photo Reference -->
          <div class="slide-column col-craft-preview">
            <div class="camp-card photo-craft-card">
              <div class="card-top-bar">
                <span class="card-label-badge" style="color: ${game.themeColor}; background: ${game.themeColor}18;">📸 ${game.referenceTitle}</span>
                ${game.referenceImage ? `
                  <button type="button" class="btn-lightbox-trigger" data-img-src="${game.referenceImage}" data-caption="${game.referenceCaption}" title="Enlarge Reference Photo">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    Enlarge
                  </button>
                ` : ''}
              </div>

              ${game.referenceImage ? `
                <div class="craft-photo-frame" data-img-src="${game.referenceImage}" data-caption="${game.referenceCaption}">
                  <img src="${game.referenceImage}" alt="${game.title} craft setup" class="craft-img" loading="eager" />
                  <div class="photo-tap-hint">🔍 Tap to zoom full-screen</div>
                </div>
                <div class="craft-caption-box">
                  <p class="craft-caption-title">${game.referenceCaption}</p>
                </div>
              ` : `
                <div class="diagram-preview-card">
                  <div class="diagram-emoji-icon">🏕️</div>
                  <p class="diagram-main-text">${game.referenceCaption}</p>
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
    const photoFrames = document.querySelectorAll('.craft-photo-frame');

    const handleOpen = (src, caption) => {
      this.openLightbox(src, caption);
    };

    zoomButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = btn.dataset.imgSrc;
        const cap = btn.dataset.caption;
        if (src) handleOpen(src, cap);
      });
    });

    photoFrames.forEach(frame => {
      frame.addEventListener('click', () => {
        const src = frame.dataset.imgSrc;
        const cap = frame.dataset.caption;
        if (src) handleOpen(src, cap);
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
          <div class="lightbox-caption" id="lightbox-caption"></div>
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

  openLightbox(src, caption) {
    const modal = document.getElementById('photo-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    if (modal && img) {
      img.src = src;
      if (cap) cap.textContent = caption || '';
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
    // Keyboard navigation: Arrow Right / Arrow Left / Space
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      }
    });

    // Touch Swipe
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
        if (deltaX < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    }, { passive: true });

    // Trackpad horizontal scroll debounce
    let lastWheelTime = 0;
    window.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > 40) {
        const now = Date.now();
        if (now - lastWheelTime > 400) {
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
