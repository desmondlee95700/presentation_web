import { GAMES_BY_ID } from './games/index.js';

/** Age groups. Each one is a separate deck; order here is tab order. */
export const CATEGORIES = {
  kids: {
    id: 'kids',
    label: 'Kids (Age 3–6)',
    shortLabel: 'Kids 3–6',
    tabName: 'Kids',
    drawerName: 'Kids',
    trackName: 'Kids Track',
    trackTagline: 'Gentle & Fun',
    ages: '3–6',
    agePill: 'Age 3–6',
    pic: 'Desmond',
    emoji: '🎈',
    themeColor: '#ea580c',
    pillBg: '#ffedd5',
    defaultTip: 'Counselor guides and assists little campers!',
    gameIds: ['goliath-slingshot', 'feed-goliath', 'footprint-stomp-toss', 'find-the-david', 'miracle-motion'],
  },
  older: {
    id: 'older',
    label: 'Older Kids (Age 7+)',
    shortLabel: 'Older 7+',
    tabName: 'Older',
    drawerName: 'Older Kids',
    trackName: 'Older Track',
    trackTagline: 'Speed & Faith Relay',
    ages: '7+',
    agePill: 'Age 7+',
    pic: 'Justina',
    emoji: '🚀',
    themeColor: '#7c3aed',
    pillBg: '#f3e8ff',
    defaultTip: 'Focus on precision aiming, distance, and speed!',
    gameIds: ['reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing', 'wind-of-elah', 'faith-and-balance'],
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
export const DEFAULT_CATEGORY_ID = 'kids';

/** Normalizes user/URL input to a known category id. */
export function resolveCategoryId(id) {
  const key = String(id || '').toLowerCase();
  return key in CATEGORIES ? key : DEFAULT_CATEGORY_ID;
}

export function getCategory(id) {
  return CATEGORIES[resolveCategoryId(id)];
}

export function getGamesByCategory(id) {
  return getCategory(id).gameIds.map(gameId => GAMES_BY_ID.get(gameId)).filter(Boolean);
}

export function getCoachTip(game, categoryId) {
  const category = getCategory(categoryId);
  return game.coachTips?.[category.id] ?? category.defaultTip;
}
