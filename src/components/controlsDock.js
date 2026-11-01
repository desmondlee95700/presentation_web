/** Floating bottom dock: Home / Prev / Next. */
export class ControlsDock {
  constructor({ root, deck, onHome }) {
    this.root = root;
    this.deck = deck;

    this.root.innerHTML = `
      <div class="dock-inner-pill">
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

        <button type="button" 
                class="btn-dock-nav btn-dock-prev" 
                id="btn-dock-prev" 
                title="Previous Slide (← / P)" 
                aria-label="Previous Slide">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span class="dock-btn-label">Prev</span>
        </button>

        <button type="button" 
                class="btn-dock-nav btn-dock-next" 
                id="btn-dock-next" 
                title="Next Slide (→ / Space / N)" 
                aria-label="Next Slide">
          <span class="dock-btn-label">Next</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    `;

    this.prevBtn = this.root.querySelector('#btn-dock-prev');
    this.nextBtn = this.root.querySelector('#btn-dock-next');

    this.root.querySelector('#btn-dock-home').addEventListener('click', onHome);
    this.prevBtn.addEventListener('click', () => this.deck.prev());
    this.nextBtn.addEventListener('click', () => this.deck.next());

    this.update();
  }

  update() {
    this.prevBtn.disabled = this.deck.index === 0;
    this.nextBtn.disabled = this.deck.index >= this.deck.totalSlides - 1;
  }
}
