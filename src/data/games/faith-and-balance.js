/** Game 10 — Faith & Balance */
export default {
  id: 'faith-and-balance',
  catalogNumber: 10,
  title: 'Faith & Balance',
  subtitle: 'Spoon-and-Ball Speed Navigation & 2-Minute Basket Relay',
  badge: 'GAME 10 • FAITH & BALANCE',
  helper: 'Yunika',
  place: 'FAA JLC Room',
  assetsNeeded: 'Spoons, Balls, Target Basket & Floor Tape',
  palette: {
    bgCanvas: '#edfbf5',
    bgTab: '#d4f5e7',
    tabTextColor: '#065f46',
    themeColor: '#059669',
    accentColor: '#10b981',
    cardBorder: '#c0eed9',
  },
  images: {
    craft: '/images/games/faith-and-balance/craft.webp',
    setup: '/images/games/faith-and-balance/setup.webp',
  },
  objective: 'Collect as many balls into the target basket as you can in 2 minutes through steady spoon relay handoffs!',
  coachTips: {
    older: 'Bend knees slightly for a low center of gravity • Do not sprint until ball is dropped in bucket • Keep spare spoons on deck behind start line!',
  },
  leaderInstruction: '“Campers, welcome to Faith & Balance! Each team gets ONE plastic spoon. At the start line, you must scoop a ball onto your spoon. WITHOUT touching the ball with your hands, carefully navigate across the gym and deposit it into the Target Basket. Once it drops cleanly into the basket, sprint back and hand off the spoon to your next teammate. You have exactly 2 minutes on the clock — how many balls can your squad collect? Ready, balance, GO!”',
  spiritualTakeaway: '“We walk by faith, not by sight.” (2 Corinthians 5:7) & “Whoever can be trusted with very little can also be trusted with much.” (Luke 16:10) — Just like balancing a small ball on a spoon takes focus, patience, and composure, holding onto our faith requires steady trust in God even when rushing through life.',
  props: {
    items: [
      { name: '5 Small Stones Set', qty: 2, scenes: [3, 4] },
      { name: 'Token', qty: null, scenes: [0, 1, 2] },
    ],
    rule: 'Whole team transfers <strong>1 paper ball per person</strong> into the bowl to win <strong>1 prop</strong> as a team.',
  },
  materials: [
    { name: 'Small Balls (10 pcs)', note: 'tightly crumpled paper balls (cheapest DIY option)' },
    { name: '40 - Sturdy Plastic Spoons', note: '1 spoon per active team (plus spares in case of breakage)' },
    {
      name: 'Target Baskets / Buckets (2 pcs)',
      note: 'Plastic laundry basket, storage tub, or bucket placed at the far end',
    },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Ball on the Spoon',
      text: 'Put a ball on the spoon. No hands holding the ball!',
    },
    {
      badge: 'Rule 2',
      title: 'Walk & Drop It In',
      text: 'Walk carefully to the basket and drop the ball in. If it falls, pick it up with the spoon and keep going.',
    },
    {
      badge: 'Rule 3',
      title: 'Pass the Spoon',
      text: 'Go back and give the spoon to the next kid. The team with the most balls in the basket when time is up wins!',
    },
  ],
};
