const MOUSE_IGNORE = 'button, a, input, select, textarea, .dock-container, .drawer-modal, .lightbox-modal';

const isHorizontalSwipe = (dx, dy, dt, { minDistance, ratio, maxTime }) =>
  Math.abs(dx) > minDistance && Math.abs(dx) > Math.abs(dy) * ratio && dt < maxTime;

/** Touch swipe and desktop mouse-drag navigation, active while `isEnabled()`. */
export function initSwipe({ isEnabled, onNext, onPrev }) {
  const go = dx => (dx < 0 ? onNext() : onPrev());

  let touchStart = null;

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return;
    const t = e.changedTouches[0];
    touchStart = { x: t.screenX, y: t.screenY, time: Date.now() };
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (!touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.screenX - touchStart.x;
    const dy = t.screenY - touchStart.y;
    const dt = Date.now() - touchStart.time;
    touchStart = null;
    if (isEnabled() && isHorizontalSwipe(dx, dy, dt, { minDistance: 40, ratio: 1.15, maxTime: 850 })) go(dx);
  }, { passive: true });

  let mouseStart = null;

  window.addEventListener('mousedown', (e) => {
    if (e.button !== 0 || e.target.closest(MOUSE_IGNORE)) return;
    mouseStart = { x: e.clientX, y: e.clientY, time: Date.now() };
  });

  window.addEventListener('mouseup', (e) => {
    if (!mouseStart) return;
    const dx = e.clientX - mouseStart.x;
    const dy = e.clientY - mouseStart.y;
    const dt = Date.now() - mouseStart.time;
    mouseStart = null;
    if (isEnabled() && isHorizontalSwipe(dx, dy, dt, { minDistance: 60, ratio: 1.2, maxTime: 700 })) go(dx);
  });
}
