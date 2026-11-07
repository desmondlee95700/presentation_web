import { getGamesByCategory, resolveCategoryId } from '../data/categories.js';
import { delegate, delegateActivate } from '../lib/dom.js';
import { renderSlide } from './slide.js';

/**
 * Owns deck state (category + slide index) and the horizontal slide track.
 * Everything outside the track talks to it through callbacks.
 */
export class SlideDeck {
  constructor({ track, progressBar, categoryId, slideIndex = 0, onChange, onOpenDrawer, onEnlargeImage }) {
    this.track = track;
    this.progressBar = progressBar;
    this.onChange = onChange;
    this.onOpenDrawer = onOpenDrawer;
    this.onEnlargeImage = onEnlargeImage;

    // Phones use the deck as a reference sheet, so supplies start expanded there.
    this.phoneQuery = window.matchMedia('(max-width: 900px)');
    this.phoneQuery.addEventListener('change', (e) => {
      this.track.querySelectorAll('details.supplies-dropdown').forEach(d => { d.open = e.matches; });
    });

    this.categoryId = resolveCategoryId(categoryId);
    this.games = getGamesByCategory(this.categoryId);
    this.index = this.isValidIndex(slideIndex) ? slideIndex : 0;

    this.bindEvents();
    this.render();
  }

  get activeGame() {
    return this.games[this.index] || this.games[0];
  }

  get totalSlides() {
    return this.games.length;
  }

  isValidIndex(index) {
    return Number.isInteger(index) && index >= 0 && index < this.games.length;
  }

  /** Switches age group and lands on `gameId` (or the first slide). */
  setCategory(categoryId, gameId = null) {
    const nextId = resolveCategoryId(categoryId);
    const games = getGamesByCategory(nextId);
    const targetIdx = gameId ? games.findIndex(g => g.id === gameId) : 0;

    if (nextId !== this.categoryId) {
      this.categoryId = nextId;
      this.games = games;
      this.index = Math.max(targetIdx, 0);
      this.render();
      this.notifyChange();
    } else {
      this.goTo(Math.max(targetIdx, 0));
    }
  }

  goTo(index) {
    if (!this.isValidIndex(index)) return;
    this.index = index;
    this.sync();
    this.track.querySelectorAll('.slide-section').forEach(s => { s.scrollTop = 0; });
    this.notifyChange();
  }

  next() {
    this.goTo(this.index + 1);
  }

  prev() {
    this.goTo(this.index - 1);
  }

  notifyChange() {
    if (this.onChange) this.onChange();
  }

  render() {
    const total = this.totalSlides;
    this.track.innerHTML = this.games.map((game, idx) => `
        <section class="slide-section" data-game-id="${game.id}" data-slide-index="${idx}">
          <div class="slide-content-wrapper">
            ${renderSlide(game, {
              index: idx,
              total,
              categoryId: this.categoryId,
              eagerImage: Math.abs(idx - this.index) <= 1,
              expandSupplies: this.phoneQuery.matches,
            })}
          </div>
        </section>
      `).join('');
    this.sync();
  }

  /** Applies the current index to the track position and progress bar. */
  sync() {
    this.track.style.transform = `translateX(-${this.index * 100}vw)`;
    if (this.progressBar) {
      this.progressBar.style.width = `${((this.index + 1) / this.totalSlides) * 100}%`;
    }
  }

  bindEvents() {
    // Craft photo / setup diagram toggle
    delegate(this.track, 'click', '.img-toggle-tab', (e, btn) => {
      e.stopPropagation();
      const pillar = btn.closest('.pillar-visual');
      const frame = pillar.querySelector('.pillar-visual-frame');
      const img = pillar.querySelector('.pillar-img');

      pillar.querySelectorAll('.img-toggle-tab').forEach(b => b.classList.toggle('active', b === btn));
      const src = btn.dataset.view === 'setup' ? frame.dataset.setupSrc : frame.dataset.craftSrc;
      if (src) img.src = src;
    });

    delegateActivate(this.track, '.pillar-visual-frame', (e, frame) => {
      e.stopPropagation();
      this.onEnlargeImage(frame.querySelector('.pillar-img').src);
    });

    delegate(this.track, 'click', '.pill-cat-btn', (e, btn) => {
      e.stopPropagation();
      this.setCategory(btn.dataset.category);
    });

    delegate(this.track, 'click', '[data-action="open-drawer"]', (e) => {
      e.stopPropagation();
      this.onOpenDrawer();
    });
  }
}
