/** Game 09 — The Wind of Elah */
export default {
  id: 'wind-of-elah',
  catalogNumber: 9,
  title: 'The Wind of Elah',
  subtitle: 'All-Hands Paper Stone Fan & Basket Herd Challenge',
  badge: 'GAME 09 • PAPER FAN HERD',
  helper: 'Bethanice Nini',
  place: 'FAA Pink Room',
  assetsNeeded: 'Low basket',
  palette: {
    bgCanvas: '#fff7f0',
    bgTab: '#fde0cc',
    tabTextColor: '#9a3412',
    themeColor: '#ea580c',
    accentColor: '#fb923c',
    cardBorder: '#fed0b0',
  },
  images: { craft: '/images/games/wind-of-elah/craft.webp', setup: '/images/games/wind-of-elah/setup.webp' },
  objective: 'Work as an all-hands wind squad to herd and flip all 20 paper river stones into the low basketball basket within 60 seconds!',
  coachTips: {
    kids: 'Stand 5 ft from basket • Counselor helps fan from behind to create big wind gusts!',
    older: 'Full team participation! Designate 2 flank sweepers to prevent wall drift and 2 basket flippers for the final upward lift.',
  },
  leaderInstruction: '“Welcome to The Wind of Elah! For this challenge, your whole squad works together as David’s wind brigade. There are 20 paper river stones on the floor. NO HANDS and NO TOUCHING with your cardboard — you can ONLY fan the air to create wind currents! Left flank, right flank, push together and flip every stone into the low basketball basket. 60 seconds on the clock. Ready, fan, GO!”',
  spiritualTakeaway: '“Just as the invisible wind moves the stones, God’s Holy Spirit empowers us when we work together in one accord, lifting each other up to overcome giant obstacles.”',
  props: {
    items: [
      { name: 'Clothing Costumes', qty: 18, scenes: [0, 1, 2, 3, 4] },
      { name: 'Extra Clothing', qty: null, scenes: [0, 1, 2, 3, 4] },
    ],
    rule: 'In <strong>1 minute</strong>, flip as many <strong>paper stones</strong> into the basket as you can. Every <strong>3 paper stones</strong> win <strong>1 prop</strong>.',
  },
  materials: [
    { name: '1 Low Basketball Basket', note: 'Set at low height in FAA Pink Room as the target goal' },
    { name: '8-10 plastic plate', note: 'each kid will take one' },
    {
      name: 'X number Paper River Stones',
      note: 'Cut from colored paper/origami paper into river stone shapes',
    },
  ],
  rules: [
    {
      badge: 'Rule 1',
      title: 'Fan with Your Plate',
      text: 'Each kid gets a plastic plate. Wave it to make wind and blow the paper stones forward.',
    },
    {
      badge: 'Rule 2',
      title: 'No Touching!',
      text: 'Don’t touch the paper stones with your hands or your plate. Only wind can move them!',
    },
    {
      badge: 'Rule 3',
      title: 'Blow Them into the Basket',
      text: 'You have 1 minute! Work together to blow as many stones as you can into the basket.',
    },
  ],
};
