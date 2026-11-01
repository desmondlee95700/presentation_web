export const pad2 = n => String(n).padStart(2, '0');

const isActivationKey = e => e.key === 'Enter' || e.key === ' ';

/**
 * Listens for `type` on `root` and calls `handler(event, matchedEl)` when the
 * event target is inside an element matching `selector`.
 */
export function delegate(root, type, selector, handler) {
  root.addEventListener(type, (e) => {
    const el = e.target.closest(selector);
    if (el && root.contains(el)) handler(e, el);
  });
}

/** Delegated click + Enter/Space, for non-button elements with role="button". */
export function delegateActivate(root, selector, handler) {
  delegate(root, 'click', selector, handler);
  delegate(root, 'keydown', selector, (e, el) => {
    if (!isActivationKey(e)) return;
    e.preventDefault();
    handler(e, el);
  });
}

export function isTypingTarget(el) {
  return ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.isContentEditable;
}
