/** Game 04 — Find the David */
export default {
  id: 'find-the-david',
  catalogNumber: 4,
  title: 'Find the David',
  subtitle: 'Memory Grid & Anointing of the True King',
  badge: 'GAME 04 • MEMORY CARD GRID',
  helper: 'Oscar',
  place: 'Church Sanctuary',
  assetsNeeded: 'Table or Low Carpet Rug',
  palette: {
    bgCanvas: '#f4f6fe',
    bgTab: '#dfe5fc',
    tabTextColor: '#3730a3',
    themeColor: '#4f46e5',
    accentColor: '#6366f1',
    cardBorder: '#cdd7fb',
  },
  images: { craft: '/images/games/find-the-david/craft.webp', setup: '/images/games/find-the-david/setup.webp' },
  objective: 'Campers take turns flipping cards and remembering locations until both David cards are revealed!',
  coachTips: {
    kids: 'Arrange a 3×3 grid • Counselors help flip cards gently • Cheer every flip & celebrate finding the true king!',
    older: 'Expand to a 4×4 grid (16 cards) • 5-second peek timer • Fast memory relay challenge!',
  },
  leaderInstruction: '“Welcome campers to Find the David! The prophet Samuel went to Jesse looking for God’s chosen king. Jesse presented his tallest, strongest sons, but God said no. Today, you are Samuel! Each of you gets a turn to flip TWO cards. If it is Goliath, turn it back. If it is David, keep it open! Can we remember where the brothers are and find both Davids?”',
  spiritualTakeaway: '“The Lord does not look at the things people see. People look at the outward appearance, but the Lord looks at the heart.” (1 Samuel 16:7) — Jesse’s older sons were tall and strong warriors, but God chose young shepherd David because of his pure and faithful heart.',
  props: {
    items: [
      { name: 'Goliath’s Big Sword', qty: 3, scenes: [2, 3, 4] },
      { name: 'Token', qty: null, scenes: [0, 1] },
    ],
    rule: 'Whole team finds <strong>all the Davids</strong> to win <strong>1 pcs</strong> as a team.',
  },
  materials: [
    {
      name: 'A4 Printed Character Sheets',
      note: 'David and older brother illustrations printed on standard A4 paper',
    },
    { name: '9 Matching David Cards', note: 'Young shepherd boy with harp or sling and a golden heart' },
    { name: '18 Golliath Cards', note: '' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Sit in a Circle',
      text: 'All the kids sit in a circle around the face-down cards. Each kid takes a turn, one at a time.',
    },
    {
      badge: 'Rule 2',
      title: 'Flip 2 Cards',
      text: 'On their turn, the kid flips over 2 cards to try to find a matching pair of Davids.',
    },
    {
      badge: 'Rule 3',
      title: 'David Stays, Goliath Goes Back',
      text: 'Any David card that is found stays face-up. Any Goliath card is flipped back face-down. Then the turn goes to the next kid. Keep going until everyone has had a turn and all the matching Davids are found!',
    },
  ],
};
