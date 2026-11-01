/** Game 07 — David & Goliath Sliding Game */
export default {
  id: 'david-goliath-sliding',
  catalogNumber: 7,
  title: 'David & Goliath Sliding Game',
  subtitle: 'Bottle Cap Precision Slide & Goliath Knockout',
  badge: 'GAME 07 • BOTTLE CAP SLIDE',
  helper: 'Andrew',
  place: 'FAA Blue Room',
  assetsNeeded: 'Table',
  palette: {
    bgCanvas: '#f2ecfc',
    bgTab: '#dfd4f8',
    tabTextColor: '#5b21b6',
    themeColor: '#7c3aed',
    accentColor: '#a855f7',
    cardBorder: '#d5c6f6',
  },
  images: {
    craft: '/images/games/david-goliath-sliding/craft.webp',
    setup: '/images/games/david-goliath-sliding/setup.webp',
  },
  objective: 'Each kid slides 3 bottle caps across the table to knock down Goliath. More KOs win more props!',
  coachTips: {
    kids: 'Stand closer along the table edge • Gentle finger flick or slide • Practice 1 slide before aiming at Goliath!',
    older: 'Shoot from the far edge across the full table length • Aim to knock Goliath completely down or off the table!',
  },
  props: {
    items: [
      { name: 'Sheep Headpiece', qty: 7, scenes: [0, 1] },
      { name: 'Soldier’s Armor', qty: 22, scenes: [2, 3, 4] },
    ],
    rule: 'Everyone has <strong>3 bottle cap chances</strong>. Every <strong>3 KOs</strong> win <strong>1 Soldier’s Armor</strong> OR every <strong>6 KOs</strong> win <strong>1 Sheep Headpiece</strong>.',
  },
  materials: [
    { name: '5 Colored Bottle Caps', note: 'David’s 5 smooth stones (Red, Yellow, Green, Orange, Purple)' },
    { name: '1 Goliath Bottle Cap', note: 'Marked with “G” in center (target standing at far end)' },
    { name: '1 Smooth Table', note: 'Long wooden activity or dining table in FAA Blue Room' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: '3 Bottle Caps Each',
      text: 'Every kid gets 3 bottle cap chances (David’s stones). Kids take turns sliding.',
    },
    {
      badge: 'Rule 2',
      title: 'Slide the Caps',
      text: 'Flick or slide the cap along the table toward Goliath at the other end. No throwing!',
    },
    {
      badge: 'Rule 3',
      title: 'Knock Goliath Down!',
      text: 'Try to hit Goliath and knock him down. Every KO counts toward the team’s props! After 3 slides, the next kid takes a turn.',
    },
  ],
};
