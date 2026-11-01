import { isTypingTarget } from '../lib/dom.js';
import { closeTopOverlay, hasOpenOverlay } from './overlays.js';

const KEYMAP = {
  ArrowRight: 'next', ArrowDown: 'next', PageDown: 'next', ' ': 'next', n: 'next', N: 'next',
  ArrowLeft: 'prev', ArrowUp: 'prev', PageUp: 'prev', p: 'prev', P: 'prev',
  Home: 'first',
  End: 'last',
  r: 'rules', R: 'rules',
  h: 'home', H: 'home',
};

/**
 * Single keydown handler for the app. Escape always closes the top overlay;
 * deck shortcuts only fire while `isDeckActive()` and no overlay is open
 * (except `rules`, so R can toggle the rules modal closed again).
 */
export function initKeyboard({ isDeckActive, actions }) {
  window.addEventListener('keydown', (e) => {
    if (isTypingTarget(e.target)) return;

    if (e.key === 'Escape') {
      closeTopOverlay();
      return;
    }

    const action = KEYMAP[e.key];
    if (!action || !isDeckActive()) return;
    if (hasOpenOverlay() && action !== 'rules') return;

    e.preventDefault();
    actions[action]();
  });
}
