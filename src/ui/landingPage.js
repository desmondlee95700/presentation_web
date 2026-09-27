export class LandingPage {
  constructor({ slideDeck, onLaunchDeck }) {
    this.deck = slideDeck;
    this.onLaunchDeck = onLaunchDeck;
    this.hasNavigated = false;

    this.container = document.getElementById('landing-page-view');
    this.render();
    this.initEvents();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
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
            <img src="/images/cartoon_david.png" alt="Cartoon boy David with slingshot" class="char-img" />
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
            <img src="/images/cartoon_goliath.png" alt="Friendly cartoon giant Goliath" class="char-img" />
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
            <img src="/images/cartoon_lamb.png" alt="Cute fluffy camp sheep" class="char-img" />
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
          <span class="sc-badge-label">7 Knockdown Games</span>
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
            <span class="brand-name">2026 KIDS CAMP</span>
            <span class="brand-sep">•</span>
            <span class="brand-theme">DAVID & GOLIATH</span>
            <span class="brand-sep mobile-hide">•</span>
            <span class="brand-games-count mobile-hide">7 ACTIVE GAMES</span>
          </div>
        </header>

        <!-- Central High-Impact Content Hub -->
        <main class="landing-hero-center">
          
          <!-- Mobile-Only Mascot Duo Greeting Header -->
          <div class="mobile-mascots-duo" aria-hidden="true">
            <div class="m-duo-avatar avatar-david">
              <img src="/images/cartoon_david.png" alt="David" />
            </div>
            <div class="m-duo-star">✦</div>
            <div class="m-duo-avatar avatar-goliath">
              <img src="/images/cartoon_goliath.png" alt="Goliath" />
            </div>
          </div>

          <h1 class="hero-headline">
            David & Goliath
            <span class="hero-headline-accent">Camp Games Deck</span>
          </h1>

          <p class="hero-lead">
            An interactive, full-screen visual guide for camp counselors & leaders.
            Complete with step-by-step DIY knockdown crafts, 3-step rules, and live timers.
          </p>

          <!-- Resume Indicator (Shown when returning from a slide) -->
          <div class="hero-resume-indicator" id="hero-resume-indicator" style="display: none;">
            <span class="resume-tag">📍 PRESENTING</span>
            <span class="resume-title" id="resume-slide-name">Game 01</span>
            <button type="button" class="btn-resume-action" id="btn-resume-action">Resume Slide ➔</button>
          </div>

          <!-- Primary Actions Hub -->
          <div class="hero-actions-container">
            
            <!-- Age Track Primary Launcher Cards -->
            <div class="hero-track-row">
              <button type="button" class="track-btn track-btn-kids" data-action="launch-kids" title="Start with Kids Track (Age 3–6)">
                <div class="track-emoji-wrap">
                  <span class="track-emoji">🎈</span>
                </div>
                <div class="track-details">
                  <div class="track-title-row">
                    <span class="track-name">Kids Track</span>
                    <span class="track-age-pill age-kids">Age 3–6</span>
                  </div>
                  <span class="track-meta">Games 01–04 • Gentle & Fun</span>
                </div>
                <div class="track-action-badge">
                  <span class="track-arrow">➔</span>
                </div>
              </button>

              <button type="button" class="track-btn track-btn-older" data-action="launch-older" title="Start with Older Kids Track (Age 7+)">
                <div class="track-emoji-wrap">
                  <span class="track-emoji">🚀</span>
                </div>
                <div class="track-details">
                  <div class="track-title-row">
                    <span class="track-name">Older Track</span>
                    <span class="track-age-pill age-older">Age 7+</span>
                  </div>
                  <span class="track-meta">Games 05–07 • Speed & Aim</span>
                </div>
                <div class="track-action-badge">
                  <span class="track-arrow">➔</span>
                </div>
              </button>
            </div>

            <!-- All Games Direct Access Pill -->
            <button type="button" class="btn-all-games-pill" data-action="launch-all" title="Explore all 7 games">
              <span class="all-games-star">✦</span>
              <span>Explore All 7 Camp Games</span>
              <span class="all-games-arrow">➔</span>
            </button>

          </div>

        </main>

        <!-- Clean Editorial Bottom Footer -->
        <footer class="landing-bottom-footer">
          <span class="footer-star">✦</span>
          <span>2026 KIDS CAMP • THEME: DAVID & GOLIATH • FAITH, BRAVERY & TEAMWORK</span>
          <span class="footer-star">✦</span>
        </footer>

      </div>
    `;

    this.updateResumeCard();
  }

  updateResumeCard() {
    const resumeEl = this.container.querySelector('#hero-resume-indicator');
    const resumeTitle = this.container.querySelector('#resume-slide-name');
    if (!resumeEl || !resumeTitle) return;

    if (this.hasNavigated && this.deck && this.deck.activeGame) {
      const game = this.deck.activeGame;
      const slideNum = String(this.deck.currentSlideIndex + 1).padStart(2, '0');
      resumeTitle.textContent = `Slide ${slideNum}: ${game.title}`;
      resumeEl.style.display = 'inline-flex';
    } else {
      resumeEl.style.display = 'none';
    }
  }

  updateResumeState() {
    this.hasNavigated = true;
    this.updateResumeCard();
  }

  initEvents() {
    // 1. Resume Button
    const resumeBtn = this.container.querySelector('#btn-resume-action');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof this.onLaunchDeck === 'function') {
          this.onLaunchDeck(this.deck.currentCategory, this.deck.activeGame?.id);
        }
      });
    }

    // 2. Age Track Quick Jump Buttons
    const kidsTrackBtn = this.container.querySelector('[data-action="launch-kids"]');
    if (kidsTrackBtn) {
      kidsTrackBtn.addEventListener('click', () => {
        if (typeof this.onLaunchDeck === 'function') {
          this.onLaunchDeck('kids', null);
        }
      });
    }

    const olderTrackBtn = this.container.querySelector('[data-action="launch-older"]');
    if (olderTrackBtn) {
      olderTrackBtn.addEventListener('click', () => {
        if (typeof this.onLaunchDeck === 'function') {
          this.onLaunchDeck('older', null);
        }
      });
    }

    // 3. All Games Direct Launch Button
    const allTrackBtn = this.container.querySelector('[data-action="launch-all"]');
    if (allTrackBtn) {
      allTrackBtn.addEventListener('click', () => {
        if (typeof this.onLaunchDeck === 'function') {
          this.onLaunchDeck('all', null);
        }
      });
    }

    // 4. Clickable character mascots (playful wiggle on click)
    const characters = this.container.querySelectorAll('.scatter-character');
    characters.forEach(char => {
      char.addEventListener('click', () => {
        char.classList.add('char-bounce');
        setTimeout(() => char.classList.remove('char-bounce'), 800);
      });
    });
  }
}
