import { CATEGORY_LIST, getGamesByCategory } from '../data/categories.js';
import { GAMES } from '../data/games/index.js';
import { SITE } from '../data/site.js';
import { delegate } from '../lib/dom.js';

/** Start page with the age-track launchers. */
export class LandingPage {
  constructor({ root, onLaunch }) {
    root.innerHTML = `
      <!-- Ambient Animated Glow Orbs & Texture Canvas -->
      <div class="landing-ambient-canvas" aria-hidden="true">
        <div class="ambient-orb orb-pistachio"></div>
        <div class="ambient-orb orb-peach"></div>
        <div class="ambient-orb orb-honey"></div>
        <div class="ambient-orb orb-sky"></div>
        <div class="ambient-grid-overlay"></div>
      </div>

      <!-- Scattered Cartoon Characters & Story Elements (Playful Kids Camp World) -->
      <div class="scattered-world" aria-hidden="true">
        
        <!-- Left Flank: David Hero Mascot -->
        <div class="scatter-character char-david" title="David with his slingshot">
          <div class="char-img-wrap">
            <img src="/images/mascots/david.webp" alt="Cartoon boy David with slingshot" class="char-img" />
          </div>
          <div class="char-floating-tag tag-david">
            <span class="char-tag-icon">🎯</span>
            <span class="char-tag-text">David • Ready to Aim!</span>
          </div>
          <div class="char-floating-bubble bubble-stones">
            <span class="bubble-icon">🪨</span>
            <span class="bubble-text">5 Smooth Stones</span>
          </div>
        </div>

        <!-- Right Flank: Goliath Giant Mascot -->
        <div class="scatter-character char-goliath" title="Friendly giant Goliath">
          <div class="char-img-wrap">
            <img src="/images/mascots/goliath.webp" alt="Friendly cartoon giant Goliath" class="char-img" />
          </div>
          <div class="char-floating-tag tag-goliath">
            <span class="char-tag-icon">🛡️</span>
            <span class="char-tag-text">Goliath • Knockdown Giant!</span>
          </div>
          <div class="char-floating-bubble bubble-shield">
            <span class="bubble-icon">⭐</span>
            <span class="bubble-text">Star Shield Challenge</span>
          </div>
        </div>

        <!-- Bottom Left Accent: Little Fluffy Camp Lamb -->
        <div class="scatter-character char-lamb" title="David's playful camp lamb">
          <div class="char-img-wrap">
            <img src="/images/mascots/lamb.webp" alt="Cute fluffy camp sheep" class="char-img" />
          </div>
          <div class="char-floating-tag tag-lamb">
            <span class="char-tag-icon">🐑</span>
            <span class="char-tag-text">Camp Mascot • Faith & Fun</span>
          </div>
        </div>

        <!-- Floating Decorative Sparkles & Badges Scattered Around -->
        <div class="scatter-item scatter-star-1">
          <span class="sparkle-gem gem-gold">✦</span>
        </div>
        <div class="scatter-item scatter-star-2">
          <span class="sparkle-gem gem-peach">✦</span>
        </div>
        <div class="scatter-item scatter-star-3">
          <span class="sparkle-gem gem-sky">✦</span>
        </div>
        <div class="scatter-item scatter-star-4">
          <span class="sparkle-gem gem-violet">✦</span>
        </div>
        <div class="scatter-item scatter-craft-badge">
          <span class="sc-badge-emoji">🏆</span>
          <span class="sc-badge-label">${GAMES.length} Camp Games</span>
        </div>
        <div class="scatter-item scatter-river-badge">
          <span class="sc-badge-emoji">🌊</span>
          <span class="sc-badge-label">Brook of Elah</span>
        </div>

      </div>

      <!-- Main Central Interactive Stage -->
      <div class="landing-stage">
        
        <!-- Top Floating Brand Pill -->
        <header class="landing-top-bar">
          <div class="top-brand-pill">
            <span class="brand-star">✦</span>
            <span class="brand-name">${SITE.campLabel}</span>
            <span class="brand-sep">•</span>
            <span class="brand-theme">${SITE.theme}</span>
            <span class="brand-sep mobile-hide">•</span>
            <span class="brand-games-count mobile-hide">${GAMES.length} ACTIVE GAMES</span>
          </div>
        </header>

        <!-- Central High-Impact Content Hub -->
        <main class="landing-hero-center">
          
          <!-- Mobile-Only Mascot Duo Greeting Header -->
          <div class="mobile-mascots-duo" aria-hidden="true">
            <div class="m-duo-avatar avatar-david">
              <img src="/images/mascots/david.webp" alt="David" />
            </div>
            <div class="m-duo-star">✦</div>
            <div class="m-duo-avatar avatar-goliath">
              <img src="/images/mascots/goliath.webp" alt="Goliath" />
            </div>
          </div>

          <span class="hero-star" aria-hidden="true">✦</span>
          <h1 class="hero-headline">David &amp; Goliath<br>Camp Games</h1>
          <p class="hero-subtitle">Pick an age group to open its game deck.</p>

          <div class="hero-track-row">
            ${CATEGORY_LIST.map(renderTrackCard).join('')}
          </div>

        </main>

        <!-- Clean Editorial Bottom Footer -->
        <footer class="landing-bottom-footer">
          <span class="footer-star">✦</span>
          <span>${SITE.campLabel} • THEME: ${SITE.theme} • ${SITE.footerTagline}</span>
          <span class="footer-star">✦</span>
        </footer>

      </div>
    `;

    delegate(root, 'click', '[data-launch]', (e, btn) => onLaunch(btn.dataset.launch));

    // Playful wiggle when a mascot is clicked
    delegate(root, 'click', '.scatter-character', (e, char) => {
      char.classList.add('char-bounce');
      setTimeout(() => char.classList.remove('char-bounce'), 800);
    });
  }
}

function renderTrackCard(cat) {
  const games = getGamesByCategory(cat.id);
  return `
            <button type="button" class="track-card track-card-${cat.id}" data-launch="${cat.id}"
                    aria-label="Open the ${cat.drawerName} deck: ages ${cat.ages}, ${games.length} games">
              <span class="track-card-head">
                <span class="track-card-name">${cat.drawerName}</span>
                <span class="track-card-age">Ages ${cat.ages}</span>
              </span>
              <span class="track-card-games">
                ${games.map(game => `<img src="${game.images.craft}" alt="" title="${game.title}" decoding="async" />`).join('')}
              </span>
              <span class="track-card-foot">
                <span class="track-card-meta">${games.length} games · ${cat.trackTagline}</span>
                <span class="track-card-go">Start <span aria-hidden="true">→</span></span>
              </span>
            </button>
  `;
}
