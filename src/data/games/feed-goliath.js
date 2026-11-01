/** Game 02 — Feed Goliath Game */
export default {
  id: 'feed-goliath',
  catalogNumber: 2,
  title: 'Feed Goliath Game',
  subtitle: 'Cardboard Box Toss & David Aim Challenge',
  badge: 'GAME 02 • TARGET TOSS',
  helper: 'Randall',
  place: 'Church Sanctuary',
  assetsNeeded: 'Table',
  palette: {
    bgCanvas: '#fff1ec',
    bgTab: '#fcdfd7',
    tabTextColor: '#9a3412',
    themeColor: '#ea580c',
    accentColor: '#f97316',
    cardBorder: '#f8cec4',
  },
  images: { craft: '/images/games/feed-goliath/craft.webp', setup: '/images/games/feed-goliath/setup.svg' },
  objective: 'Campers step up as David and toss crumpled paper balls directly into Goliath’s open mouth.',
  coachTips: {
    kids: 'Big open mouth target makes tossing fun and easy! Light crumpled paper balls are 100% safe for little hands.',
  },
  props: {
    items: [
      { name: 'Sheep Headpiece', qty: 4, scenes: [0, 1] },
      { name: 'Soldier’s Armor', qty: 10, scenes: [2, 3, 4] },
    ],
    rule: 'Everyone has <strong>3 throws</strong>. Every <strong>2 feeds</strong> win <strong>1 Soldier’s Armor</strong> OR every <strong>3 feeds</strong> win <strong>1 Sheep Headpiece</strong>.',
  },
  materials: [
    { name: 'Cardboard Box (or large sheet)', note: 'Sturdy base to hold Goliath’s head' },
    { name: 'Newspaper or A4 Paper', note: 'Crumpled sheets' },
    { name: 'Basket', note: 'Holds the crumpled paper balls' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Each Kid Takes a Turn',
      text: 'Helpers, line the kids up! Children step up one by one to take their turn as the brave hero David.',
    },
    {
      badge: 'Rule 2',
      title: 'Grab & Throw the Paper',
      text: 'Each kid grabs a crumpled A4 paper ball and throws it inside Goliath’s wide open mouth.',
    },
    {
      badge: 'Rule 3',
      title: 'Helpers Give a Chance',
      text: 'If a ball misses, helpers give the kid another try or gently help them aim and throw until it goes into the mouth. Then the next kid steps up. Everyone gets to feed Goliath!',
    },
  ],
};
