/** Game 05 — Miracle Motion */
export default {
  id: 'miracle-motion',
  catalogNumber: 5,
  title: 'Miracle Motion',
  subtitle: 'Bible Charades & Silent Action Guessing Relay',
  badge: 'GAME 05 • MIRACLE MOTION',
  helper: 'Aaron',
  place: 'Church Sanctuary / Carpet Area',
  assetsNeeded: 'None',
  palette: {
    bgCanvas: '#fdfce8',
    bgTab: '#f7f3cb',
    tabTextColor: '#713f12',
    themeColor: '#ca8a04',
    accentColor: '#eab308',
    cardBorder: '#edeab2',
  },
  images: { craft: '/images/games/miracle-motion/craft.webp', setup: '/images/games/miracle-motion/setup.webp' },
  objective: 'Campers take turns acting silently without words until the team guesses at least 5 acts correctly!',
  coachTips: {
    kids: 'Counselor whispers or shows the picture card to the actor • If shy, counselor mimes alongside them! • Keep guessing fast & cheer every turn!',
  },
  leaderInstruction: '“Welcome campers to Miracle Motion! One brave camper steps to the front as our secret actor. I will show you a card — an animal, Bible hero, or camp expression. STRICTLY NO TALKING or sound effects! You have to act it out with your hands, face, and body. Teammates, raise your hands to guess! 1 correct guess gives 1 point. Everyone gets a turn to act. How many points can your squad get? Ready... ACT!”',
  spiritualTakeaway: '“Whatever you do, work at it with all your heart, as working for the Lord!” (Colossians 3:23) — David praised God not just with words, but with joyful whole-body worship, courage against lions and bears, and humble obedience.',
  props: {
    items: [
      { name: 'Goliath’s Armor', qty: 3, scenes: [2, 3, 4] },
      { name: 'Token', qty: null, scenes: [0, 1] },
    ],
    rule: 'Whole team guesses <strong>5 correct answers</strong> to win <strong>1 prop</strong> as a team.',
  },
  materials: [
    { name: 'Prompt Cards Set', note: 'Prepare A4 Paper or Manilla card' },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Choose One Person to the Front',
      text: 'Pick one kid to come up to the front to be the actor.',
    },
    {
      badge: 'Rule 2',
      title: 'Act It Out — No Speaking!',
      text: 'The actor is given a character, an animal, or anything else, and acts it out without speaking.',
    },
    {
      badge: 'Rule 3',
      title: 'Get as Many Points as You Can!',
      text: 'Everyone else guesses. 1 correct guess = 1 point. Every kid takes a turn being the actor. Score as many points as you can!',
    },
  ],
};
