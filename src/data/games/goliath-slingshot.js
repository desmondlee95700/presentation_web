/** Game 01 — Goliath SlingShot */
export default {
  id: 'goliath-slingshot',
  catalogNumber: 1,
  title: 'Goliath SlingShot',
  subtitle: 'Camp Target Knockdown & Aim Challenge',
  badge: 'GAME 01 • CAMP KNOCKDOWN',
  helper: 'Joshua',
  place: 'Church Sanctuary',
  assetsNeeded: 'Table',
  palette: {
    bgCanvas: '#f2f8e8',
    bgTab: '#e2efc8',
    tabTextColor: '#365314',
    themeColor: '#65a30d',
    accentColor: '#f59e0b',
    cardBorder: '#d7e8b7',
  },
  images: {
    craft: '/images/games/goliath-slingshot/craft.webp',
    setup: '/images/games/goliath-slingshot/setup.webp',
  },
  objective: 'Campers take 3 throws from behind the rope line to topple cups and knock down Goliath!',
  coachTips: {
    kids: 'Stand closer (3–4 ft) • Soft foam balls • Counselor helps hold balloon slingshot or guides toss!',
    older: 'Stand behind 8–10 ft line • Knock Goliath top cup for +50 bonus points • 3 timed quick throws!',
  },
  props: {
    items: [
      { name: 'Lion Headpiece', qty: 1, scenes: [0] },
      { name: 'Oil Horn / Flask', qty: 1, scenes: [1] },
      { name: 'Food & Food Container', qty: 1, scenes: [2] },
      { name: 'Saul’s Crown', qty: 2, scenes: [3, 4] },
    ],
    rule: 'The whole team completely <strong>KOs Goliath</strong> to win <strong>1 pcs</strong> as a team.',
  },
  materials: [
    { name: '10–12 Plastic Cups', note: '1 big cup for Giant Goliath & 9 smaller cups for 4-3-2-1 Pyramid' },
    { name: '1–2 Soft Balls', note: 'Crumbled paper balls' },
    { name: '1 Cardboard Goliath Cutout', note: 'Drawn with helmet, shield & spear' },
    { name: 'Balloon & Cup Slingshot', note: 'Cut balloon tied to bottomless cup' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'One Shot Each',
      text: 'Line up and take turns! Each kid gets 1 slingshot shot to try to knock Goliath off the top.',
    },
    {
      badge: 'Rule 2',
      title: 'Shoot from the Line',
      text: 'Stand behind the tape line, pull back the slingshot, and aim at Goliath. Helpers help the little ones!',
    },
    {
      badge: 'Rule 3',
      title: 'Helper Resets Goliath',
      text: 'The goal is to knock Goliath down! If he falls before every kid has had a turn, a helper quickly sets the cups and Goliath back up so the next kid can shoot.',
    },
  ],
};
