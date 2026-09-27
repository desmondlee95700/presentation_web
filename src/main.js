import { SlideDeck } from './presentation/slideDeck.js';
import { ControlsDock } from './ui/controlsDock.js';
import { LandingPage } from './ui/landingPage.js';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app-root');

  // 1. Initialize Horizontal Presentation Deck
  const slideDeck = new SlideDeck();

  // 2. Initialize Floating Controls Dock & Slide Drawer
  const controlsDock = new ControlsDock(slideDeck);
  slideDeck.controlsDock = controlsDock;

  // Synchronize dock updates on slide change
  slideDeck.onSlideChange = () => {
    controlsDock.update();
  };

  // 3. View Switcher Logic (Landing Page vs Presentation Deck)
  const switchView = (targetView, callback) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        if (targetView === 'deck') {
          appRoot.classList.remove('view-landing');
          appRoot.classList.add('view-deck');
        } else {
          appRoot.classList.remove('view-deck');
          appRoot.classList.add('view-landing');
        }
        if (callback) callback();
      });
    } else {
      if (targetView === 'deck') {
        appRoot.classList.remove('view-landing');
        appRoot.classList.add('view-deck');
      } else {
        appRoot.classList.remove('view-deck');
        appRoot.classList.add('view-landing');
      }
      if (callback) callback();
    }
  };

  const showDeckView = () => {
    switchView('deck', () => {
      slideDeck.updateTransform();
      controlsDock.update();
      slideDeck.updateUrlParams();
    });
  };

  const showLandingView = () => {
    switchView('landing', () => {
      landingPage.updateResumeState();
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete('slide');
        url.searchParams.delete('deck');
        window.history.pushState({}, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : ''));
      } catch (_) {}
    });
  };

  // 4. Initialize Landing Page Launchpad
  const landingPage = new LandingPage({
    slideDeck,
    onLaunchDeck: (category, gameId) => {
      slideDeck.setCategory(category, gameId);
      showDeckView();
    }
  });

  // Connect Home Return triggers
  slideDeck.onGoHome = () => {
    showLandingView();
  };

  // 5. Determine Initial View based on URL params
  const urlParams = new URLSearchParams(window.location.search);
  const hasSlideParam = urlParams.has('slide');
  const isDeckExplicit = urlParams.get('deck') === 'true' || urlParams.get('view') === 'deck';

  if (hasSlideParam || isDeckExplicit) {
    appRoot.classList.remove('view-landing');
    appRoot.classList.add('view-deck');
    slideDeck.updateTransform();
    controlsDock.update();
  } else {
    appRoot.classList.remove('view-deck');
    appRoot.classList.add('view-landing');
  }

  // 6. Handle Browser Back / Forward History Navigation
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('slide') || params.get('deck') === 'true' || params.get('view') === 'deck') {
      appRoot.classList.remove('view-landing');
      appRoot.classList.add('view-deck');
      slideDeck.updateTransform();
      controlsDock.update();
    } else {
      appRoot.classList.remove('view-deck');
      appRoot.classList.add('view-landing');
      landingPage.updateResumeState();
    }
  });

  // Auto-open drawer if ?drawer=true is present in URL
  if (urlParams.get('drawer') === 'true') {
    setTimeout(() => {
      controlsDock.toggleDrawer();
    }, 200);
  }
});
