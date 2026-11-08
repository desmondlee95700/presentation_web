import { getCategory } from '../data/categories.js';
import { SITE } from '../data/site.js';
import { pad2 } from '../lib/dom.js';
import { renderSlideCategoryTabs } from './categoryTabs.js';

const MAX_MATERIALS = 6;

const count = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** Full markup for one game slide (header pill + canvas with three pillars). */
export function renderSlide(game, { index, total, categoryId, eagerImage }) {
  const pal = game.palette;
  return `
      <div class="slide-outer-wrapper" style="
        --canvas-bg: ${pal.bgCanvas};
        --tab-bg: ${pal.bgTab};
        --tab-color: ${pal.tabTextColor};
        --theme-color: ${pal.themeColor};
        --accent-color: ${pal.accentColor};
        --card-border: ${pal.cardBorder};
      ">
        ${renderHeader({ index, total, categoryId })}

        <div class="game-slide-canvas">
          ${renderTitleBlock(game)}

          <div class="slide-three-columns">
            ${renderVisualPillar(game, eagerImage)}
            ${renderRulesPillar(game)}
            ${renderPropsPillar(game)}
          </div>
        </div>
      </div>
    `;
}

function renderHeader({ index, total, categoryId }) {
  const { pic } = getCategory(categoryId);
  return `
      <div class="slide-header-bar">
        <header class="slide-pill-header">
          <div class="pill-category-group" role="tablist" aria-label="Select Age Group">
            ${renderSlideCategoryTabs(categoryId)}
          </div>

          <div class="pill-center">
            <div class="pill-center-num">
              <span class="pill-num-curr">${pad2(index + 1)}</span>
              <span class="pill-num-slash">/</span>
              <span class="pill-num-total">${pad2(total)}</span>
            </div>
            <span class="pill-center-pic">PIC · <strong>${pic}</strong></span>
          </div>

          <div class="pill-right-group">
            <span class="pill-camp-label">${SITE.campLabel}</span>
            <button type="button" class="pill-btn-deck" data-action="open-drawer" title="Open Slide Catalog Menu">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>Deck</span>
            </button>
          </div>
        </header>
      </div>
  `;
}

function metaPill(className, icon, key, value) {
  if (!value) return '';
  return `
                  <span class="station-meta-pill ${className}">
                    <span class="v-icon">${icon}</span>
                    <span class="v-key">${key}:</span>
                    <strong class="v-val">${value}</strong>
                  </span>
  `;
}

function renderTitleBlock(game) {
  const hasMeta = game.place || game.assetsNeeded || game.helper;
  return `
          <div class="slide-center-title-block">
            <div class="slide-star-icon">✦</div>
            <h1 class="slide-title-text">${game.title}</h1>
            <p class="slide-subtitle-text">${game.subtitle}</p>
            ${hasMeta ? `
              <div class="slide-station-meta">
                ${metaPill('helper-pill', '🙋', 'Helper', game.helper)}
                ${metaPill('place-pill', '📍', 'Place', game.place)}
                ${metaPill('assets-pill', '🪵', 'Assets Needed', game.assetsNeeded)}
              </div>
            ` : ''}
          </div>
  `;
}

function renderVisualPillar(game, eagerImage) {
  const { craft, setup } = game.images;
  const header = setup ? `
                  <div class="pillar-img-toggle">
                    <button type="button" class="img-toggle-tab active" data-view="craft">📸 Craft Photo</button>
                    <button type="button" class="img-toggle-tab" data-view="setup">🛠️ Setup Diagram</button>
                  </div>
  ` : `
                  <div class="pillar-single-tag">
                    <span>📸 DIY Craft Setup</span>
                  </div>
  `;
  return `
            <div class="slide-pillar pillar-visual">
              <div class="pillar-header">
                ${header}
              </div>
              <div class="pillar-visual-frame" data-craft-src="${craft}" data-setup-src="${setup || ''}" role="button" tabindex="0" title="Click to enlarge photo">
                <img src="${craft}" alt="${game.title} craft setup" class="pillar-img" loading="${eagerImage ? 'eager' : 'lazy'}" />
                <span class="pillar-zoom-badge">
                  <span class="zoom-label-click">🔍 Click to Enlarge</span>
                  <span class="zoom-label-tap">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                    Tap to enlarge
                  </span>
                </span>
              </div>
            </div>
  `;
}

function renderRulesPillar(game) {
  return `
            <div class="slide-pillar pillar-rules">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">🎯</span>
                  <span class="header-title rules-title-color">How to Play</span>
                </div>
                <span class="header-counter-pill">${count(game.rules.length, 'Rule')}</span>
              </div>
              <div class="pillar-rules-body">
                ${game.rules.map((rule, i) => `
                  <div class="slide-rule-card">
                    <span class="slide-rule-num">${i + 1}</span>
                    <div class="slide-rule-info">
                      <strong class="slide-rule-heading">${rule.title}</strong>
                      <p class="slide-rule-detail">${rule.text}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
  `;
}

function renderProps(props) {
  if (!props) return '';
  return `
                  <div class="slide-props-section">
                    <span class="props-scene-label"><span class="props-scene-label-short">Scenes</span><span class="props-scene-label-long">Used in scene</span></span>
                    <ul class="slide-props-list">
                      ${props.items.map(p => `
                        <li class="slide-prop-row">
                          <span class="prop-name">${p.name}${p.qty != null ? ` <span class="prop-qty">×${p.qty}</span>` : ''}</span>
                          <span class="prop-scenes" title="Scene numbers">
                            ${p.scenes.map(sc => `<span class="prop-scene-chip">${sc}</span>`).join('')}
                          </span>
                        </li>
                      `).join('')}
                    </ul>
                    <p class="props-rule">${props.rule}</p>
                  </div>
  `;
}

function renderPropsPillar(game) {
  const materials = game.materials.slice(0, MAX_MATERIALS);
  return `
            <div class="slide-pillar pillar-supplies">
              <div class="pillar-header">
                <div class="header-badge-row">
                  <span class="header-icon">🏆</span>
                  <span class="header-title props-title-color">Props to Win</span>
                </div>
                ${game.props ? `<span class="header-counter-pill">${count(game.props.items.length, 'Prop')}</span>` : ''}
              </div>
              <div class="pillar-supplies-body">
                ${renderProps(game.props)}

                <details class="supplies-dropdown">
                  <summary class="supplies-dropdown-toggle">
                    <span class="header-badge-row">
                      <span class="header-icon">📦</span>
                      <span class="header-title supplies-title-color">What You Need</span>
                    </span>
                    <span class="supplies-dropdown-meta">
                      <span class="header-counter-pill">${count(materials.length, 'Item')}</span>
                      <span class="supplies-dropdown-action" aria-hidden="true"></span>
                      <span class="supplies-dropdown-chevron" aria-hidden="true">▾</span>
                    </span>
                  </summary>
                  <ul class="slide-supplies-list">
                    ${materials.map(m => `
                      <li class="slide-supply-row">
                        <span class="supply-check-bullet">✓</span>
                        <div class="supply-names">
                          <span class="supply-name-bold">${m.name}</span>
                          ${m.note ? `<span class="supply-note-dim">${m.note}</span>` : ''}
                        </div>
                      </li>
                    `).join('')}
                  </ul>
                </details>
              </div>
            </div>
  `;
}
