import { resolveCategoryId } from '../data/categories.js';

/**
 * View + URL state. The URL carries `cat`, `slide` (1-based), and optionally
 * `deck=true` / `view=deck` to open straight into the deck, or `drawer=true`.
 */
export function readUrlState() {
  const params = new URLSearchParams(window.location.search);
  const slide = parseInt(params.get('slide'), 10);
  const isDeck = params.has('slide') || params.get('deck') === 'true' || params.get('view') === 'deck';
  return {
    categoryId: resolveCategoryId(params.get('cat') || params.get('category')),
    slideIndex: Number.isNaN(slide) ? 0 : slide - 1,
    view: isDeck ? 'deck' : 'landing',
    drawer: params.get('drawer') === 'true',
  };
}

export function writeDeckUrl(categoryId, slideIndex) {
  const url = new URL(window.location.href);
  url.searchParams.set('cat', categoryId);
  url.searchParams.set('slide', slideIndex + 1);
  window.history.replaceState({}, '', url.toString());
}

export function clearDeckUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete('slide');
  url.searchParams.delete('deck');
  const query = url.searchParams.toString();
  window.history.pushState({}, '', url.pathname + (query ? '?' + query : ''));
}

const appRoot = () => document.getElementById('app-root');

export const isDeckView = () => appRoot().classList.contains('view-deck');

/** Switches between 'landing' and 'deck'; `then` runs inside the view transition. */
export function setView(view, { animate = false, then } = {}) {
  const apply = () => {
    const root = appRoot();
    root.classList.toggle('view-deck', view === 'deck');
    root.classList.toggle('view-landing', view !== 'deck');
    if (then) then();
  };
  if (animate && document.startViewTransition) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}
