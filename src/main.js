import { SlideDeck } from './presentation/slideDeck.js';
import { ControlsDock } from './ui/controlsDock.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Horizontal Presentation Deck
  const slideDeck = new SlideDeck();

  // 2. Initialize Floating Controls Dock & Drawers
  const controlsDock = new ControlsDock(slideDeck);

  // Synchronize dock updates on slide change
  slideDeck.onSlideChange = () => {
    controlsDock.update();
  };
});
