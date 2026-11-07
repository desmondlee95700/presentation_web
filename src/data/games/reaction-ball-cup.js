/** Game 06 — Reaction Ball & Cup Game */
export default {
  id: 'reaction-ball-cup',
  catalogNumber: 6,
  title: 'Reaction Ball & Cup Game',
  subtitle: 'Broom Rail Balance & Rolling Challenge',
  badge: 'GAME 06 • REACTION & BALANCE',
  helper: 'Aldora',
  place: 'FAA Upstair Lounge',
  assetsNeeded: 'None',
  palette: {
    bgCanvas: '#eaf4fc',
    bgTab: '#d3eaf8',
    tabTextColor: '#075985',
    themeColor: '#0284c7',
    accentColor: '#38bdf8',
    cardBorder: '#c3e2f5',
  },
  images: { craft: '/images/games/reaction-ball-cup/craft.webp', setup: '/images/games/reaction-ball-cup/setup.svg' },
  objective: 'Gently spread string tension to smoothly guide and drop the rolling ball into each cup along the path.',
  coachTips: {
    older: 'Teamwork between the two broom holders! Tilt slowly so the ball rolls smoothly into the basket.',
  },
  props: {
    items: [
      { name: 'Tree Costume', qty: '6+8', scenes: [0, 2] },
      { name: 'Token', qty: null, scenes: [1, 3, 4] },
    ],
    rule: 'Every pair has <strong>2 ball chances</strong> to score. Every <strong>2 consecutive goals</strong> by the same pair win <strong>1 prop</strong>.',
  },
  materials: [
    { name: '2 Brooms', note: 'Held side by side as the rails for the ball' },
    { name: '2 Balls', note: 'Smooth rolling balls' },
    { name: '2 Baskets', note: 'Placed in a row in front of the kids' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Make a Broom Track',
      text: 'Two kids hold the brooms side by side, a little apart, so the ball can sit on the handles.',
    },
    {
      badge: 'Rule 2',
      title: 'Roll & Drop into Each Basket',
      text: 'Tilt and move the brooms together to roll the ball forward, then open the brooms a little to drop it into a basket.',
    },
    {
      badge: 'Rule 3',
      title: '2 Ball Chances per Pair',
      text: 'Each pair gets 2 ball chances. If the ball falls on the floor, that chance is used up. Score 2 goals in a row to win a prop! Then the next pair takes a turn.',
    },
  ],
};
