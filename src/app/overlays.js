/**
 * Stack of open overlays (lightbox, rules modal, drawer). Escape closes the
 * top one, and body scroll stays locked while any `lockScroll` overlay is open.
 *
 * An overlay is any object with `close()` and an optional `lockScroll` flag.
 */
const stack = [];

function syncBodyLock() {
  document.body.classList.toggle('modal-open', stack.some(o => o.lockScroll));
}

export function pushOverlay(overlay) {
  removeFromStack(overlay);
  stack.push(overlay);
  syncBodyLock();
}

export function removeOverlay(overlay) {
  removeFromStack(overlay);
  syncBodyLock();
}

function removeFromStack(overlay) {
  const idx = stack.indexOf(overlay);
  if (idx >= 0) stack.splice(idx, 1);
}

export function closeTopOverlay() {
  const top = stack[stack.length - 1];
  if (top) top.close();
}

export const hasOpenOverlay = () => stack.length > 0;
