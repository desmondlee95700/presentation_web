import { SlideDeck } from './presentation/slideDeck.js';
import { ControlsDock } from './ui/controlsDock.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Horizontal Presentation Deck
  const slideDeck = new SlideDeck();

  // 2. Initialize Floating Controls Dock & Drawers
  const controlsDock = new ControlsDock(slideDeck);
  slideDeck.controlsDock = controlsDock;

  // Synchronize dock updates on slide change
  slideDeck.onSlideChange = () => {
    controlsDock.update();
  };

  // Auto-open drawer if ?drawer=true is present in URL
  if (new URLSearchParams(window.location.search).get('drawer') === 'true') {
    setTimeout(() => {
      controlsDock.toggleDrawer();
    }, 200);
  }
});
