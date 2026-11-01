import { pushOverlay, removeOverlay } from '../app/overlays.js';
import { getCategory, getGamesByCategory } from '../data/categories.js';
import { SITE } from '../data/site.js';
import { delegate, delegateActivate, pad2 } from '../lib/dom.js';
import { renderDrawerCategoryTabs } from './categoryTabs.js';

/** Slide catalog drawer. Only renders while open. */
export class Drawer {
  constructor({ root, deck, onHome }) {
    this.root = root;
    this.deck = deck;
    this.isOpen = false;
    this.overlay = { lockScroll: false, close: () => this.close() };

    delegate(this.root, 'click', '[data-drawer-action="close"]', () => this.close());
    delegate(this.root, 'click', '[data-drawer-action="home"]', () => {
      this.close();
      onHome();
    });
    delegate(this.root, 'click', '.drawer-pill-btn', (e, btn) => {
      e.stopPropagation();
      this.deck.setCategory(btn.dataset.drawerCat);
    });
    delegateActivate(this.root, '.drawer-slide-card', (e, card) => {
      this.deck.setCategory(card.dataset.categoryTarget, card.dataset.gameId);
      this.close();
    });
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  open() {
    this.isOpen = true;
    this.render();
    this.root.classList.add('open');
    this.root.setAttribute('aria-hidden', 'false');
    pushOverlay(this.overlay);
  }

  close() {
    this.isOpen = false;
    this.root.classList.remove('open');
    this.root.setAttribute('aria-hidden', 'true');
    removeOverlay(this.overlay);
  }

  /** Re-renders if open; call when deck state changes. */
  refresh() {
    if (this.isOpen) this.render();
  }

  render() {
    const catId = this.deck.categoryId;
    const cat = getCategory(catId);
    const activeGameId = this.deck.activeGame?.id;

    this.root.innerHTML = `
      <div class="drawer-overlay" data-drawer-action="close"></div>
      <div class="drawer-panel">
        <header class="drawer-header">
          <div class="drawer-header-title-box">
            <span class="drawer-eyebrow"><span class="drawer-star">✦</span> ${SITE.campLabelTitle}</span>
            <h3>Slide Deck</h3>
          </div>
          <div class="drawer-header-actions">
            <button type="button" class="btn-drawer-icon" data-drawer-action="home" title="Return to Start Page" aria-label="Start Page">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </button>
            <button type="button" class="btn-drawer-icon" id="btn-close-drawer" data-drawer-action="close" aria-label="Close Drawer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <div class="drawer-category-bar" style="--group-accent: ${cat.themeColor}; --group-tint: ${cat.pillBg};">
          <div class="drawer-pill-track" role="tablist" aria-label="Select Age Group">
            ${renderDrawerCategoryTabs(catId)}
          </div>
          <div class="drawer-group-info">
            <span class="drawer-pic">
              <span class="drawer-pic-avatar">${cat.pic.charAt(0)}</span>
              <span class="drawer-pic-text"><strong>${cat.pic}</strong> <span>Person in charge</span></span>
            </span>
            <span class="drawer-game-count">${cat.gameIds.length} games</span>
          </div>
        </div>

        <div class="drawer-body-scroll">
          <div class="drawer-visual-grid">
            ${getGamesByCategory(catId).map((g, idx) => renderCard(g, idx, catId, g.id === activeGameId)).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

function renderCard(g, idx, catId, isActive) {
  const slideNum = pad2(idx + 1);
  return `
                <div class="drawer-slide-card ${isActive ? 'is-active' : ''}" 
                     data-category-target="${catId}" 
                     data-game-id="${g.id}"
                     role="button"
                     tabindex="0"
                     title="Jump to Slide ${slideNum}: ${g.title}"
                     style="--card-bg: ${g.palette.bgCanvas}; --card-border: ${g.palette.cardBorder}; --card-accent: ${g.palette.themeColor}; --card-ink: ${g.palette.tabTextColor};">
                  
                  <div class="drawer-card-thumb">
                    <img src="${g.images.craft}" alt="${g.title}" class="drawer-thumb-img" loading="lazy" />
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
}
