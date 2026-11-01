import { initKeyboard } from './app/keyboard.js';
import { hasOpenOverlay } from './app/overlays.js';
import { clearDeckUrl, isDeckView, readUrlState, setView, writeDeckUrl } from './app/router.js';
import { initSwipe } from './app/swipe.js';
import { ControlsDock } from './components/controlsDock.js';
import { Drawer } from './components/drawer.js';
import { LandingPage } from './components/landingPage.js';
import { Lightbox } from './components/lightbox.js';
import { RulesModal } from './components/rulesModal.js';
import { SlideDeck } from './components/slideDeck.js';

const initialState = readUrlState();

const lightbox = new Lightbox();
const rulesModal = new RulesModal();

const deck = new SlideDeck({
  track: document.getElementById('slides-track'),
  progressBar: document.getElementById('progress-bar-fill'),
  categoryId: initialState.categoryId,
  slideIndex: initialState.slideIndex,
  onChange: () => {
    dock.update();
    drawer.refresh();
    writeDeckUrl(deck.categoryId, deck.index);
  },
  onOpenDrawer: () => drawer.toggle(),
  onEnlargeImage: src => lightbox.open(src),
});

const showDeck = () => {
  setView('deck', {
    animate: true,
    then: () => {
      deck.sync();
      writeDeckUrl(deck.categoryId, deck.index);
    },
  });
};

const showLanding = () => {
  setView('landing', { animate: true, then: clearDeckUrl });
};

const dock = new ControlsDock({
  root: document.getElementById('controls-dock'),
  deck,
  onHome: showLanding,
});

const drawer = new Drawer({
  root: document.getElementById('slide-drawer-modal'),
  deck,
  onHome: showLanding,
});

new LandingPage({
  root: document.getElementById('landing-page-view'),
  onLaunch: (categoryId) => {
    deck.setCategory(categoryId);
    showDeck();
  },
});

initKeyboard({
  isDeckActive: isDeckView,
  actions: {
    next: () => deck.next(),
    prev: () => deck.prev(),
    first: () => deck.goTo(0),
    last: () => deck.goTo(deck.totalSlides - 1),
    rules: () => rulesModal.toggle(deck.activeGame, deck.categoryId),
    home: showLanding,
  },
});

initSwipe({
  isEnabled: () => isDeckView() && !hasOpenOverlay(),
  onNext: () => deck.next(),
  onPrev: () => deck.prev(),
});

setView(initialState.view);

window.addEventListener('popstate', () => {
  const state = readUrlState();
  if (state.view === 'deck') {
    deck.setCategory(state.categoryId);
    deck.goTo(state.slideIndex);
  }
  setView(state.view);
});

if (initialState.drawer) {
  setTimeout(() => drawer.open(), 200);
}
