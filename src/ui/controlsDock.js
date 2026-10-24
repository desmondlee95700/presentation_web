import { CATEGORIES, getGamesByCategoryId } from '../presentation/gamesData.js';

export class ControlsDock {
  constructor(slideDeck) {
    this.deck = slideDeck;
    this.isDrawerOpen = false;

    this.container = document.getElementById('controls-dock');
    this.drawerModal = document.getElementById('slide-drawer-modal');

    this.render();
    this.initEvents();
  }

  render() {
    if (!this.container) return;

    const currentIdx = this.deck.currentSlideIndex;
    const total = this.deck.totalSlides;

    this.container.innerHTML = `
      <div class="dock-inner-pill">
        <!-- Return to Start Page Button -->
        <button type="button" 
                class="btn-dock-home" 
                id="btn-dock-home" 
                title="Return to Start Page (Press H)" 
                aria-label="Return to Start Page">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span class="dock-btn-label">Home</span>
        </button>

        <!-- Previous Slide Button -->
        <button type="button" 
                class="btn-dock-nav btn-dock-prev" 
                id="btn-dock-prev" 
                title="Previous Slide (← / P)" 
                aria-label="Previous Slide"
                ${currentIdx === 0 ? 'disabled' : ''}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span class="dock-btn-label">Prev</span>
        </button>


        <!-- Next Slide Button -->
        <button type="button" 
                class="btn-dock-nav btn-dock-next" 
                id="btn-dock-next" 
                title="Next Slide (→ / Space / N)" 
                aria-label="Next Slide"
                ${currentIdx >= total - 1 ? 'disabled' : ''}>
          <span class="dock-btn-label">Next</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    `;

    const homeBtn = this.container.querySelector('#btn-dock-home');
    const prevBtn = this.container.querySelector('#btn-dock-prev');
    const nextBtn = this.container.querySelector('#btn-dock-next');

    if (homeBtn) {
      homeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof this.deck.onGoHome === 'function') {
          this.deck.onGoHome();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deck.prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deck.nextSlide();
      });
    }


    this.renderDrawer();
  }

  renderDrawer() {
    if (!this.drawerModal) return;

    const currentCatKey = this.deck.currentCategory;
    const currentActiveGameId = this.deck.activeGame ? this.deck.activeGame.id : null;
    const activeGames = getGamesByCategoryId(currentCatKey);
    const activeCat = CATEGORIES[currentCatKey.toUpperCase()] || CATEGORIES.KIDS;

    this.drawerModal.innerHTML = `
      <div class="drawer-overlay" id="drawer-overlay-backdrop"></div>
      <div class="drawer-panel">
        
        <!-- Header -->
        <header class="drawer-header">
          <div class="drawer-header-title-box">
            <span class="drawer-eyebrow"><span class="drawer-star">✦</span> 2026 Kids Camp</span>
            <h3>Slide Deck</h3>
          </div>
          <div class="drawer-header-actions">
            <button type="button" class="btn-drawer-icon" id="btn-drawer-home-nav" title="Return to Start Page" aria-label="Start Page">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </button>
            <button type="button" class="btn-drawer-icon" id="btn-close-drawer" aria-label="Close Drawer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <!-- Age Group Tabs -->
        <div class="drawer-category-bar" style="--group-accent: ${activeCat.themeColor}; --group-tint: ${activeCat.pillBg};">
          <div class="drawer-pill-track" role="tablist" aria-label="Select Age Group">
            <button type="button" 
                    class="drawer-pill-btn ${currentCatKey === 'kids' ? 'active' : ''}" 
                    data-drawer-cat="kids"
                    role="tab"
                    aria-selected="${currentCatKey === 'kids'}"
                    style="--tab-accent: ${CATEGORIES.KIDS.themeColor};">
              <span class="d-pill-label">Kids</span>
              <span class="d-pill-sub">3–6</span>
            </button>
            <button type="button" 
                    class="drawer-pill-btn ${currentCatKey === 'older' ? 'active' : ''}" 
                    data-drawer-cat="older"
                    role="tab"
                    aria-selected="${currentCatKey === 'older'}"
                    style="--tab-accent: ${CATEGORIES.OLDER.themeColor};">
              <span class="d-pill-label">Older Kids</span>
              <span class="d-pill-sub">7+</span>
            </button>
          </div>
          <div class="drawer-group-info">
            <span class="drawer-pic">
              <span class="drawer-pic-avatar">${activeCat.pic.charAt(0)}</span>
              <span class="drawer-pic-text"><strong>${activeCat.pic}</strong> <span>Person in charge</span></span>
            </span>
            <span class="drawer-game-count">${activeCat.gameIds.length} games</span>
          </div>
        </div>

        <!-- Slide Cards Grid -->
        <div class="drawer-body-scroll">
          <div class="drawer-visual-grid">
            ${activeGames.map((g, idx) => {
              const isActive = g.id === currentActiveGameId;
              const slideNum = String(idx + 1).padStart(2, '0');
              return `
                <div class="drawer-slide-card ${isActive ? 'is-active' : ''}" 
                     data-category-target="${currentCatKey}" 
                     data-game-id="${g.id}"
                     role="button"
                     tabindex="0"
                     title="Jump to Slide ${slideNum}: ${g.title}"
                     style="--card-bg: ${g.palette.bgCanvas}; --card-border: ${g.palette.cardBorder}; --card-accent: ${g.palette.themeColor}; --card-ink: ${g.palette.tabTextColor};">
                  
                  <div class="drawer-card-thumb">
                    <img src="${g.referenceImage}" alt="${g.title}" class="drawer-thumb-img" loading="lazy" />
                    ${isActive ? `<span class="drawer-thumb-active-tag"><span class="drawer-live-dot"></span>Presenting</span>` : ''}
                  </div>

                  <div class="drawer-card-info">
                    <div class="drawer-card-head">
                      <span class="drawer-card-num">${slideNum}</span>
                      <h4 class="drawer-card-title">${g.title}</h4>
                    </div>
                    <div class="drawer-card-meta-row">
                      ${g.helper ? `
                        <span class="drawer-helper-chip">
                          <span class="drawer-helper-avatar">${g.helper.charAt(0)}</span>
                          <span class="drawer-helper-name">${g.helper}</span>
                        </span>
                      ` : ''}
                      ${g.place ? `
                        <span class="drawer-card-place">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"></path><circle cx="12" cy="9.5" r="2.5"></circle></svg>
                          <span>${g.place}</span>
                        </span>
                      ` : ''}
                    </div>
                  </div>

                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;

    const closeBtn = this.drawerModal.querySelector('#btn-close-drawer');
    const backdrop = this.drawerModal.querySelector('#drawer-overlay-backdrop');
    const drawerHomeBtn = this.drawerModal.querySelector('#btn-drawer-home-nav');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeDrawer());
    if (drawerHomeBtn) {
      drawerHomeBtn.addEventListener('click', () => {
        this.closeDrawer();
        if (typeof this.deck.onGoHome === 'function') {
          this.deck.onGoHome();
        }
      });
    }

    this.drawerModal.querySelectorAll('.drawer-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = btn.dataset.drawerCat;
        if (cat) {
          this.deck.setCategory(cat);
          this.renderDrawer();
        }
      });
    });

    const cards = this.drawerModal.querySelectorAll('.drawer-slide-card');
    cards.forEach(card => {
      const clickHandler = () => {
        const catTarget = card.dataset.categoryTarget;
        const gameId = card.dataset.gameId;
        this.deck.setCategory(catTarget, gameId);
        this.closeDrawer();
      };

      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          clickHandler();
        }
      });
    });
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isDrawerOpen) {
        this.closeDrawer();
      }
    });

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('#btn-open-drawer, [data-action="open-drawer"]');
      if (trigger) {
        this.toggleDrawer();
      }
    });
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    if (this.drawerModal) {
      this.drawerModal.classList.toggle('open', this.isDrawerOpen);
    }
    if (this.isDrawerOpen) this.renderDrawer();
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    if (this.drawerModal) {
      this.drawerModal.classList.remove('open');
    }
  }

  update() {
    this.render();
  }
}
