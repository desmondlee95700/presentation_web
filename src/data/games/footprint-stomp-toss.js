/** Game 03 — Goliath’s Footprint Stomp & Toss */
export default {
  id: 'footprint-stomp-toss',
  catalogNumber: 3,
  title: 'Goliath’s Footprint Stomp & Toss',
  subtitle: 'Hop Along the Giant’s Tracks & Sink the Victory Ball into the Basket!',
  badge: 'GAME 03 • JUMP & BASKET TOSS',
  helper: 'Sabrina',
  place: 'Outside church waiting area',
  assetsNeeded: 'None',
  palette: {
    bgCanvas: '#fdf2f4',
    bgTab: '#fce2e7',
    tabTextColor: '#9f1239',
    themeColor: '#e11d48',
    accentColor: '#fb7185',
    cardBorder: '#fbcfe8',
  },
  images: {
    craft: '/images/games/footprint-stomp-toss/craft.webp',
    setup: '/images/games/footprint-stomp-toss/setup.webp',
  },
  objective: 'Stomp through all the giant’s footprints, sink the soft ball into the basket, and pass to the next teammate!',
  coachTips: {
    kids: 'Keep footprints 1.5–2 ft apart so little legs hop safely • Basket 3–4 ft from final footprint • Counselors chant “STOMP! STOMP!” with every hop!',
    older: 'Space footprints 4–5 ft for giant leaps • Move basket 10–12 ft back • Time each runner with a stopwatch!',
  },
  props: {
    items: [
      { name: 'Shepherd’s Staff', qty: 3, scenes: [0, 1, 2] },
      { name: 'Sling / Catapult', qty: 2, scenes: [3, 4] },
    ],
    rule: 'Everyone tosses <strong>1 ball</strong> into the basket to win <strong>1 pcs</strong> as a team.',
  },
  materials: [
    { name: '6 A4 paper Footprints', note: 'Draw giant footprints' },
    { name: '1 Laundry Basket or Hamper', note: 'Target basket with Goliath shield cutout on front' },
    { name: '1 BALL', note: 'Take from FAA' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Hold the Ball & Follow the Footprints',
      text: 'Each kid holds a ball and steps on the giant footprints one by one to move forward to Goliath’s basket.',
    },
    {
      badge: 'Rule 2',
      title: 'Toss It into the Basket',
      text: 'At the end of the footprints, the kid aims and tosses the ball into the basket. Missed? Try again until it goes in!',
    },
    {
      badge: 'Rule 3',
      title: 'Get the Ball & Pass It Back',
      text: 'Once it’s in, the kid takes the ball out of the basket and passes it back to the next kid. Repeat until every kid has had a turn!',
    },
  ],
};
