import { pushOverlay, removeOverlay } from '../app/overlays.js';
import { getCategory, getCoachTip } from '../data/categories.js';
import { SITE } from '../data/site.js';
import { pad2 } from '../lib/dom.js';

const PALETTE_VARS = {
  '--modal-theme': 'themeColor',
  '--modal-accent': 'accentColor',
  '--modal-tab-bg': 'bgTab',
  '--modal-tab-color': 'tabTextColor',
  '--modal-canvas': 'bgCanvas',
  '--modal-card-border': 'cardBorder',
};

/** Facilitator sheet for the active game (opened with the R key). */
export class RulesModal {
  constructor() {
    this.overlay = { lockScroll: true, close: () => this.close() };
    this.isOpen = false;

    this.modal = document.createElement('div');
    this.modal.id = 'game-rules-modal';
    this.modal.className = 'rules-modal';
    this.modal.setAttribute('aria-hidden', 'true');
    this.modal.innerHTML = `
        <div class="rules-modal-backdrop"></div>
        <div class="rules-modal-container" role="dialog" aria-modal="true" aria-labelledby="rules-modal-title">
          <header class="rules-modal-header">
            <div class="rules-modal-header-top">
              <div class="rules-modal-badge-group">
                <span class="rules-modal-cat-pill" data-slot="category"></span>
                <span class="rules-modal-num-pill" data-slot="badge"></span>
              </div>
              <div class="rules-modal-header-actions">
                <span class="rules-modal-esc-hint">Press <kbd>ESC</kbd></span>
                <button type="button" class="btn-close-rules-modal" aria-label="Close Rules Modal" title="Close Sheet (Esc)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div class="rules-modal-title-row">
              <div class="rules-modal-star-wrap">
                <span class="rules-modal-star">✦</span>
              </div>
              <div class="rules-modal-title-text-group">
                <h2 class="rules-modal-title" id="rules-modal-title" data-slot="title"></h2>
                <p class="rules-modal-subtitle" data-slot="subtitle"></p>
              </div>
            </div>
          </header>

          <div class="rules-modal-body" data-slot="body"></div>

          <footer class="rules-modal-footer" data-slot="footer"></footer>
        </div>
      `;
    document.body.appendChild(this.modal);

    this.container = this.modal.querySelector('.rules-modal-container');
    this.slots = Object.fromEntries(
      [...this.modal.querySelectorAll('[data-slot]')].map(el => [el.dataset.slot, el])
    );
    this.modal.querySelector('.btn-close-rules-modal').addEventListener('click', () => this.close());
    this.modal.querySelector('.rules-modal-backdrop').addEventListener('click', () => this.close());
  }

  toggle(game, categoryId) {
    if (this.isOpen) this.close();
    else this.open(game, categoryId);
  }

  open(game, categoryId) {
    const cat = getCategory(categoryId);

    for (const [cssVar, key] of Object.entries(PALETTE_VARS)) {
      this.modal.style.setProperty(cssVar, game.palette[key]);
    }

    this.slots.category.textContent = `${cat.emoji} ${cat.label.toUpperCase()}`;
    this.slots.badge.textContent = game.badge || `GAME ${pad2(game.catalogNumber)}`;
    this.slots.title.textContent = game.title;
    this.slots.subtitle.textContent = game.subtitle || 'Official Facilitator Gameplay Rules';
    this.slots.body.innerHTML = renderRulesBody(game);
    this.slots.footer.innerHTML = renderFooter(game, cat, getCoachTip(game, cat.id));

    this.isOpen = true;
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    pushOverlay(this.overlay);
    this.container.scrollTop = 0;
  }

  close() {
    this.isOpen = false;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    removeOverlay(this.overlay);
  }
}

function renderRulesBody(game) {
  return `
      <div class="rules-modal-section-header">
        <div class="rules-modal-section-title">
          <span class="section-icon">📜</span>
          <span>Official Gameplay Rules</span>
        </div>
        <span class="rules-modal-count-pill">${game.rules.length} Steps</span>
      </div>
      <div class="rules-modal-grid">
        ${game.rules.map((r, i) => `
          <div class="rules-modal-card">
            <div class="rules-modal-step-badge">
              <span class="step-num">${pad2(i + 1)}</span>
              <span class="step-label">RULE</span>
            </div>
            <div class="rules-modal-card-content">
              <div class="rules-modal-card-header">
                <h4 class="rules-modal-rule-title">${r.title}</h4>
                ${r.badge ? `<span class="rules-modal-custom-badge">${r.badge}</span>` : ''}
              </div>
              <p class="rules-modal-rule-text">${r.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
}

function metaPill(className, icon, label, value) {
  if (!value) return '';
  return `
            <div class="rules-meta-pill ${className}">
              <span class="meta-icon">${icon}</span>
              <span class="meta-label">${label}:</span>
              <strong class="meta-val">${value}</strong>
            </div>
  `;
}

function callout(className, icon, heading, bodyClass, text) {
  if (!text) return '';
  return `
        <div class="rules-footer-callout ${className}">
          <div class="callout-header">
            <span class="callout-icon">${icon}</span>
            <strong>${heading}</strong>
          </div>
          <p class="${bodyClass}">${text}</p>
        </div>
  `;
}

function renderFooter(game, cat, coachTip) {
  return `
      <div class="rules-footer-cards-grid">
        <div class="rules-footer-card card-objective">
          <div class="footer-card-header">
            <span class="footer-card-icon">🏆</span>
            <span class="footer-card-title">Winning Objective</span>
          </div>
          <p class="footer-card-desc">${game.objective}</p>
        </div>
        <div class="rules-footer-card card-tip">
          <div class="footer-card-header">
            <span class="footer-card-icon">💡</span>
            <span class="footer-card-title">${cat.shortLabel} Facilitator Tip</span>
          </div>
          <p class="footer-card-desc">${coachTip}</p>
        </div>
      </div>

      ${(game.place || game.assetsNeeded) ? `
        <div class="rules-footer-meta-bar">
          ${metaPill('place-pill', '📍', 'Place', game.place)}
          ${metaPill('assets-pill', '🪵', 'Assets Needed', game.assetsNeeded)}
          <div class="rules-meta-pill camp-pill">
            <span class="meta-icon">🏕️</span>
            <span class="meta-val">${SITE.campLabel}</span>
          </div>
        </div>
      ` : ''}

      ${callout('speech-callout', '📢', 'Counselor Opening Speech', 'callout-quote', game.leaderInstruction)}
      ${callout('takeaway-callout', '📖', 'Camp Biblical Lesson', 'callout-body', game.spiritualTakeaway)}
    `;
}
