/** Game 08 — Brook of Elah: River Crossing */
export default {
  id: 'brook-river-crossing',
  catalogNumber: 8,
  title: 'Brook of Elah: River Crossing',
  subtitle: '5 Cardboard Stepping Squares & River Crossing Relay',
  badge: 'GAME 08 • RIVER CROSSING',
  helper: 'JingYan',
  place: 'FAA Cafeteria',
  assetsNeeded: 'None',
  palette: {
    bgCanvas: '#eaf7f5',
    bgTab: '#cff0ec',
    tabTextColor: '#155e75',
    themeColor: '#0891b2',
    accentColor: '#06b6d4',
    cardBorder: '#bee8e2',
  },
  images: {
    craft: '/images/games/brook-river-crossing/craft.webp',
    setup: '/images/games/brook-river-crossing/setup.webp',
  },
  objective: 'Balance strictly on cardboard squares and pass rear boards forward hand-to-hand across the river!',
  coachTips: {
    kids: '12–15 ft river width • Counselor assists passing cardboard steps • Focus on fun balance and safe stepping!',
    older: 'Full 25–30 ft river • Strict floor touch penalty: foot in water washes board back! • Speed relay race against the clock!',
  },
  props: {
    items: [
      { name: 'Saul’s Royal Robe', qty: 2, scenes: [3, 4] },
      { name: 'Token', qty: null, scenes: [0, 1, 2] },
    ],
    rule: 'Whole team <strong>crosses the river</strong> to win <strong>1 pcs</strong> as a team.',
  },
  materials: [
    { name: 'A4 Paper', note: '1 per kid + 2–3 extra for each group' },
    { name: 'Items for kids to hold', note: 'TBC' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Hold Your Items',
      text: 'Each group holds on to certain items while crossing the river. Don’t drop them!',
    },
    {
      badge: 'Rule 2',
      title: 'Paper Stepping Stones',
      text: 'Each group gets 1 piece of paper per kid, plus 2–3 extra. Step only on the paper and pass it forward to cross.',
    },
    {
      badge: 'Rule 3',
      title: 'All Across to Win',
      text: 'The whole group and all the items must reach the other side to finish!',
    },
  ],
};
