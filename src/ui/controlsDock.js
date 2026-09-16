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

    const game = this.deck.activeGame;
    const currentIdx = this.deck.currentSlideIndex;
    const totalGames = this.deck.games.length;

    this.container.innerHTML = `
      <div class="dock-inner">
        <!-- Slide Navigation Controls -->
        <div class="dock-nav-controls">
          <button type="button" class="dock-btn nav-btn" id="dock-btn-prev" title="Previous Game (Left Arrow)" ${currentIdx === 0 ? 'disabled' : ''}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button type="button" class="dock-slide-pill" id="btn-open-drawer" title="Open Activity Deck Overview">
            <span class="slide-num">Game ${currentIdx + 1} of ${totalGames}</span>
            <span class="slide-label">${game.title}</span>
            <span class="drawer-icon">▤</span>
          </button>

          <button type="button" class="dock-btn nav-btn" id="dock-btn-next" title="Next Game (Right Arrow or Space)" ${currentIdx === totalGames - 1 ? 'disabled' : ''}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <!-- Utility Toggles -->
        <div class="dock-utilities">
          <button type="button" class="dock-btn" id="dock-btn-fullscreen" title="Toggle Fullscreen">
            <span class="util-icon">⛶</span>
          </button>
        </div>
      </div>
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
    this.container.addEventListener('click', (e) => {
      const prevBtn = e.target.closest('#dock-btn-prev');
      const nextBtn = e.target.closest('#dock-btn-next');
      const drawerBtn = e.target.closest('#btn-open-drawer');
      const fullscreenBtn = e.target.closest('#dock-btn-fullscreen');

      if (prevBtn) {
        this.deck.prevSlide();
      } else if (nextBtn) {
        this.deck.nextSlide();
      } else if (drawerBtn) {
        this.toggleDrawer();
      } else if (fullscreenBtn) {
        this.toggleFullscreen();
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

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
    sfx.playClick();
  }

  update() {
    this.render();
  }
}
