import { sfx } from '../utils/sfx.js';

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

    this.container.innerHTML = `
      <button type="button" class="dock-swipe-indicator" id="btn-open-drawer" title="Swipe on Mobile / Arrow Keys on Desktop (Click for Slide Menu)" aria-label="Swipe to navigate">
        <span class="swipe-arrow-icon swipe-arrow-left" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </span>
        <span class="swipe-bubble-text">
          <span class="swipe-word">Swipe</span>
        </span>
        <span class="swipe-arrow-icon swipe-arrow-right" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </button>
    `;

    this.renderDrawer();
  }

  renderDrawer() {
    if (!this.drawerModal) return;

    const currentIdx = this.deck.currentSlideIndex;

    this.drawerModal.innerHTML = `
      <div class="drawer-overlay" id="drawer-overlay-backdrop"></div>
      <div class="drawer-panel">
        <div class="drawer-header">
          <div>
            <h3>Camp Activity Presentation Deck</h3>
            <p>Select any game to jump directly to its slide</p>
          </div>
          <button type="button" class="btn-close-drawer" id="btn-close-drawer" aria-label="Close">✕</button>
        </div>
        <div class="drawer-grid">
          ${this.deck.games.map((g, idx) => `
            <div class="drawer-card ${idx === currentIdx ? 'active' : ''}" data-slide-index="${idx}">
              <div class="drawer-card-num">Game ${String(idx + 1).padStart(2, '0')}</div>
              <div class="drawer-card-title">${g.title}</div>
              <div class="drawer-card-type">${g.subtitle}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const closeBtn = this.drawerModal.querySelector('#btn-close-drawer');
    const backdrop = this.drawerModal.querySelector('#drawer-overlay-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeDrawer());

    const cards = this.drawerModal.querySelectorAll('.drawer-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.slideIndex, 10);
        this.deck.goToSlide(idx);
        this.closeDrawer();
        sfx.playClick();
      });
    });
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isDrawerOpen) {
        this.closeDrawer();
      }
    });

    // Toggle drawer via any drawer triggers (floating dock button or header menu button)
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
    sfx.playClick();
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

