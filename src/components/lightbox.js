import { pushOverlay, removeOverlay } from '../app/overlays.js';

/** Full-screen photo viewer. */
export class Lightbox {
  constructor() {
    this.overlay = { lockScroll: true, close: () => this.close() };

    this.modal = document.createElement('div');
    this.modal.id = 'photo-lightbox-modal';
    this.modal.className = 'lightbox-modal';
    this.modal.setAttribute('aria-hidden', 'true');
    this.modal.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content-box">
          <button type="button" class="btn-close-lightbox" aria-label="Close Lightbox">✕</button>
          <img src="" alt="Camp Craft Reference" class="lightbox-img" />
        </div>
      `;
    document.body.appendChild(this.modal);

    this.img = this.modal.querySelector('.lightbox-img');
    this.modal.querySelector('.btn-close-lightbox').addEventListener('click', () => this.close());
    this.modal.querySelector('.lightbox-backdrop').addEventListener('click', () => this.close());
  }

  open(src) {
    this.img.src = src;
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    pushOverlay(this.overlay);
  }

  close() {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    removeOverlay(this.overlay);
  }
}
