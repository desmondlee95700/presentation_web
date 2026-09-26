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

        <!-- Game Rules Quick Button -->
        <button type="button" 
                class="btn-dock-rules" 
                id="btn-dock-rules" 
                title="View Full Rules Modal (Press R)" 
                aria-label="View Game Rules">
          <span class="dock-rules-icon">🎯</span>
          <span class="dock-rules-text">Rules Sheet</span>
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

    const prevBtn = this.container.querySelector('#btn-dock-prev');
    const nextBtn = this.container.querySelector('#btn-dock-next');
    const rulesBtn = this.container.querySelector('#btn-dock-rules');

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

    if (rulesBtn) {
      rulesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deck.openRulesModal();
      });
    }

    this.renderDrawer();
  }

  renderDrawer() {
    if (!this.drawerModal) return;

    const currentCatKey = this.deck.currentCategory;
    const currentActiveGameId = this.deck.activeGame ? this.deck.activeGame.id : null;
    const activeGames = getGamesByCategoryId(currentCatKey);
    const catConfig = CATEGORIES[currentCatKey.toUpperCase()] || CATEGORIES.KIDS;

    this.drawerModal.innerHTML = `
      <div class="drawer-overlay" id="drawer-overlay-backdrop"></div>
      <div class="drawer-panel">
        
        <!-- Header -->
        <header class="drawer-header">
          <div class="drawer-header-title-box">
            <div class="drawer-title-row">
              <span class="drawer-star">✦</span>
              <h3>Slide Deck Catalog</h3>
            </div>
            <p>Click any slide to jump directly to it, or switch age groups</p>
          </div>
          <button type="button" class="btn-close-drawer" id="btn-close-drawer" aria-label="Close Drawer">✕</button>
        </header>

        <!-- Category Selector (Clean Segmented Pill Track matching Slide Header) -->
        <div class="drawer-category-bar">
          <div class="drawer-pill-track" role="tablist" aria-label="Select Age Group">
            <button type="button" 
                    class="drawer-pill-btn ${currentCatKey === 'kids' ? 'active' : ''}" 
                    data-drawer-cat="kids">
              <span class="d-pill-emoji">🎈</span>
              <span class="d-pill-label">Kids <span class="d-pill-sub">(Age 3–6)</span></span>
              <span class="d-pill-count">2</span>
            </button>
            <button type="button" 
                    class="drawer-pill-btn ${currentCatKey === 'older' ? 'active' : ''}" 
                    data-drawer-cat="older">
              <span class="d-pill-emoji">🚀</span>
              <span class="d-pill-label">Older <span class="d-pill-sub">(7+)</span></span>
              <span class="d-pill-count">3</span>
            </button>
            <button type="button" 
                    class="drawer-pill-btn ${currentCatKey === 'all' ? 'active' : ''}" 
                    data-drawer-cat="all">
              <span class="d-pill-emoji">🌟</span>
              <span class="d-pill-label">All <span class="d-pill-sub">Games</span></span>
              <span class="d-pill-count">5</span>
            </button>
          </div>
        </div>

        <!-- Slide Cards Grid (Clean, visual presentation thumbnails) -->
        <div class="drawer-body-scroll">
          <div class="drawer-grid-header">
            <span class="drawer-group-name">${catConfig.emoji} ${catConfig.label}</span>
            <span class="drawer-group-desc">${catConfig.description}</span>
          </div>

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
                     title="Jump to Slide ${slideNum}: ${g.title}">
                  
                  <div class="drawer-card-thumb">
                    <img src="${g.referenceImage}" alt="${g.title}" class="drawer-thumb-img" loading="lazy" />
                    <span class="drawer-thumb-badge">Slide ${slideNum}</span>
                    ${isActive ? `<span class="drawer-thumb-active-tag">● Presenting</span>` : ''}
                  </div>

                  <div class="drawer-card-info">
                    <div class="drawer-card-tags-row">
                      <span class="drawer-card-cat-pill" style="--cat-bg: ${g.palette.badgeBg}; --cat-color: ${g.palette.badgeText};">
                        ${g.tabTitle || g.title}
                      </span>
                      <span class="drawer-card-supplies-tag">📦 ${g.materials.length} Items</span>
                    </div>
                    <h4 class="drawer-card-title">${g.title}</h4>
                    <p class="drawer-card-desc">${g.subtitle}</p>
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
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeDrawer());

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
