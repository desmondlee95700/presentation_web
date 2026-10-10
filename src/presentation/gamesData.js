/**
 * Kids Camp Games Catalog — One Slide per Game Presentation Data
 * Split into Two Age Categories:
 * 1. Kids (Age 3–6): Games 1, 2, 3, 4
 * 2. Older Kids (Age 7+): Games 5, 6, 7
 * Pastel Editorial Presentation Aesthetic
 */

export const CATEGORIES = {
  KIDS: {
    id: 'kids',
    label: 'Kids (Age 3–6)',
    shortLabel: 'Kids 3–6',
    emoji: '🎈',
    gameIds: ['goliath-slingshot', 'feed-goliath', 'footprint-stomp-toss', 'find-the-david', 'miracle-motion'],
    description: 'Games 1 to 5 • Fun, Gentle, Safe Obstacles & Miracle Motion',
    themeColor: '#ea580c',
    pillBg: '#ffedd5',
    pillText: '#9a3412',
  },
  OLDER: {
    id: 'older',
    label: 'Older Kids (Age 7+)',
    shortLabel: 'Older 7+',
    emoji: '🚀',
    gameIds: ['reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing', 'wind-of-elah', 'faith-and-balance'],
    description: 'Games 6 to 10 • Focus, Accuracy, Speed, Fan Herd & Faith Balance',
    themeColor: '#7c3aed',
    pillBg: '#f3e8ff',
    pillText: '#6b21a8',
  },
  ALL: {
    id: 'all',
    label: 'All Games',
    shortLabel: 'All 10 Games',
    emoji: '🌟',
    gameIds: ['goliath-slingshot', 'feed-goliath', 'footprint-stomp-toss', 'find-the-david', 'miracle-motion', 'reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing', 'wind-of-elah', 'faith-and-balance'],
    description: 'Complete 10-Game Camp Activity Deck',
    themeColor: '#0284c7',
    pillBg: '#e0f2fe',
    pillText: '#0369a1',
  }
};

export const GAMES_CATALOG = [
  {
    id: 'goliath-slingshot',
    catalogNumber: 1,
    title: 'Goliath SlingShot',
    subtitle: 'Camp Target Knockdown & Aim Challenge',
    categories: ['kids'], // Kids (Age 3-6) ONLY
    badge: 'GAME 01 • CAMP KNOCKDOWN',
    tabTitle: 'Camp Knockdown',
    mascotEmoji: '🎯',
    // Pastel Stationery Theme Colors
    palette: {
      bgCanvas: '#f2f8e8',     // Soft Meadow Pistachio
      bgTab: '#e2efc8',        // Top folder tab
      tabTextColor: '#365314', // Dark olive charcoal
      themeColor: '#65a30d',   // Pistachio green accent
      accentColor: '#f59e0b',  // Warm amber highlight
      cardBorder: '#d7e8b7',   // Soft border
      badgeBg: '#fef3c7',      // Warm honey pill
      badgeText: '#92400e',
    },
    kidsGuidance: {
      tag: '🎈 For Kids (Age 3–6)',
      tip: 'Stand closer (3–4 ft) • Soft foam balls • Counselor helps hold balloon slingshot or guides toss!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Stand behind 8–10 ft line • Knock Goliath top cup for +50 bonus points • 3 timed quick throws!'
    },
    place: 'Church Sanctuary',
    assetsNeeded: 'Table',
    referenceImage: '/images/goliath_slingshot_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/balloon_slingshot_setup.png',
    materials: [
      { name: '10–12 Plastic Cups', note: '1 big cup for Giant Goliath & 9 smaller cups for 4-3-2-1 Pyramid' },
      { name: '1–2 Soft Balls', note: 'Crumbled paper balls' },
      { name: '1 Cardboard Goliath Cutout', note: 'Drawn with helmet, shield & spear' },
      { name: 'Balloon & Cup Slingshot', note: 'Cut balloon tied to bottomless cup' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Stack the 4-3-2-1 Cup Pyramid',
        desc: 'Place 4 cups on bottom base, 3 on tier two, 2 on tier three, and 1 single cup (Goliath) at the peak.'
      },
      {
        step: 2,
        title: 'Craft the Goliath Cutout',
        desc: 'Draw cartoon Goliath on cardboard with helmet, beard, spear & shield. Cut out silhouette.'
      },
      {
        step: 3,
        title: 'Mount Goliath to the Peak',
        desc: 'Tape Goliath figure securely to top cup so he stands tall and topples when struck.'
      },
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: '3 Throws per Player',
        text: 'Each player steps up to the line and takes 3 throws per turn using soft balls or slingshots.'
      },
      {
        badge: 'Rule 2',
        title: 'Stay Behind the Line',
        text: 'Throws must be released strictly from behind the marked rope or tape line.'
      },
      {
        badge: 'Rule 3',
        title: 'Team Turn Rotation',
        text: 'Teams alternate throwers. Teammates stay behind the station and cheer loud!'
      }
    ]
  },
  {
    id: 'feed-goliath',
    catalogNumber: 2,
    title: 'Feed Goliath Game',
    subtitle: 'Cardboard Box Toss & David Aim Challenge',
    categories: ['kids'], // Kids (Age 3-6) ONLY
    badge: 'GAME 02 • TARGET TOSS',
    tabTitle: 'Feed Goliath',
    mascotEmoji: '📦',
    // Pastel Stationery Theme Colors
    palette: {
      bgCanvas: '#fff1ec',     // Soft Warm Peach / Blush Coral
      bgTab: '#fcdfd7',        // Top folder tab
      tabTextColor: '#9a3412', // Warm terracotta charcoal
      themeColor: '#ea580c',   // Warm peach / coral accent
      accentColor: '#f97316',  // Glow highlight
      cardBorder: '#f8cec4',   // Soft border
      badgeBg: '#ffedd5',      // Peach pill
      badgeText: '#9a3412',
    },
    kidsGuidance: {
      tag: '🎈 Exclusive for Kids (Age 3–6)',
      tip: 'Big open mouth target makes tossing fun and easy! Light crumpled paper balls are 100% safe for little hands.'
    },
    place: 'Church Sanctuary',
    assetsNeeded: 'Table',
    referenceImage: '/images/feed_goliath_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/feed_goliath_setup.png',
    materials: [
      { name: 'Cardboard Box (or large sheet)', note: 'Sturdy base to hold Goliath’s head' },
      { name: 'Newspaper or A4 Paper', note: 'Crumpled sheets' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Draw or Attach Goliath Picture',
        desc: 'Draw or attach a picture of Goliath’s head onto the front of the cardboard box.'
      },
      {
        step: 2,
        title: 'Cut Large Mouth Opening',
        desc: 'Carefully cut out a wide mouth hole so tossed paper balls easily fly inside the box.'
      },
      {
        step: 3,
        title: 'Decorate Goliath’s Face',
        desc: 'Decorate with eyes, wild hair, warrior helmet, nose, and teeth.'
      },
      {
        step: 4,
        title: 'Set on Table, Chair, or Wall',
        desc: 'Place the box securely at chest height for campers against a wall or on a sturdy chair.'
      },
      {
        step: 5,
        title: 'Crumple Soft Paper Balls',
        desc: 'Have campers help scrunch scrap paper or newspaper into 6–10 round throwing balls.'
      },
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Take Turns as David',
        text: 'Children step up one by one to take their turn as the brave hero David.'
      },
      {
        badge: 'Rule 2',
        title: 'Aim for Goliath’s Mouth',
        text: 'Each child tries to toss their paper balls directly into Goliath’s wide open mouth.'
      },
      {
        badge: 'Rule 3',
        title: 'Stay Behind the Line',
        text: 'Players must release all throws strictly from behind the marked throwing line.'
      },
      {
        badge: 'Rule 4',
        title: 'Collect & Pass Ammo',
        text: 'After their turn, the player collects all paper balls and hands them to the next camper.'
      },
      {
        badge: 'Rule 5',
        title: 'Everyone Gets a Turn',
        text: 'The game continues in rotation until every camper has had a chance to feed Goliath!'
      }
    ]
  },
  {
    id: 'footprint-stomp-toss',
    catalogNumber: 3,
    title: 'Goliath’s Footprint Stomp & Toss',
    subtitle: 'Hop Along the Giant’s Tracks & Sink the Victory Ball into the Basket!',
    categories: ['kids'], // Kids (Age 3-6) ONLY
    badge: 'GAME 03 • JUMP & BASKET TOSS',
    tabTitle: 'Footprint Toss',
    mascotEmoji: '🦶',
    // Pastel Stationery Theme Colors — Soft Rose Blossom / Coral Punch
    palette: {
      bgCanvas: '#fdf2f4',     // Soft Blossom Blush
      bgTab: '#fce2e7',        // Top folder tab soft rose
      tabTextColor: '#9f1239', // Deep rose charcoal
      themeColor: '#e11d48',   // Rose berry accent
      accentColor: '#fb7185',  // Vibrant rose glow
      cardBorder: '#fbcfe8',   // Soft rose border
      badgeBg: '#ffe4e6',      // Rose pill
      badgeText: '#9f1239',
    },
    kidsGuidance: {
      tag: '🎈 Exclusive for Kids (Age 3–6)',
      tip: 'Keep footprints 1.5–2 ft apart so little legs hop safely • Basket 3–4 ft from final footprint • Counselors chant “STOMP! STOMP!” with every hop!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Space footprints 4–5 ft for giant leaps • Move basket 10–12 ft back • Time each runner with a stopwatch!'
    },
    place: 'Outside church waiting area',
    assetsNeeded: 'None',
    referenceImage: '/images/footprint_stomp_craft.png',
    referenceTitle: 'DIY Setup Photo',
    setupImage: '/images/footprint_stomp_setup.png',
    materials: [
      { name: '6 A4 paper Footprints', note: 'Draw giant footprints' },
      { name: '1 Laundry Basket or Hamper', note: 'Target basket with Goliath shield cutout on front' },
      { name: '1 BALL', note: 'Take from FAA' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Cut & Number Giant Footprints',
        desc: 'Cut 6–8 oversized footprints out of cardboard delivery boxes and number them 1 to 6.'
      },
      {
        step: 2,
        title: 'Tape the Zigzag Trail',
        desc: 'Tape footprints securely along the floor in a zigzag path spaced 1.5–2 ft apart for little hops.'
      },
      {
        step: 3,
        title: 'Position Goliath’s Target Basket',
        desc: 'Place the laundry basket 3–4 ft past the final footprint and attach a cartoon Goliath shield.'
      },
      {
        step: 4,
        title: 'Mark Start Line & Hand Off Ball',
        desc: 'Tape a start line 3 ft before footprint #1 and hand the first jumper a soft foam ball!'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Hop & Stomp on Every Footprint',
        text: 'Holding the soft ball, jump with both feet into each giant footprint along the path yelling “STOMP!”'
      },
      {
        badge: 'Rule 2',
        title: 'Stop & Toss Ball into the Basket',
        text: 'Land with two feet inside the final giant footprint, pause, aim, and toss the ball into Goliath’s basket!'
      },
      {
        badge: 'Rule 3',
        title: 'Grab Ball, Run Back & Tag',
        text: 'Retrieve the ball from the basket, dash down the return lane, and pass the ball to the next teammate!'
      },
      {
        badge: 'Rule 4',
        title: 'Chant & Cheer the Giant Stomp',
        text: 'Waiting teammates and counselors clap and shout “STOMP! STOMP!” with every hop.'
      },
      {
        badge: 'Rule 5',
        title: 'Bonus Try Guarantee',
        text: 'If the ball bounces out, campers get an instant second toss or take one step closer to sink the shot!'
      }
    ]
  },
  {
    id: 'find-the-david',
    catalogNumber: 4,
    title: 'Find the David',
    subtitle: 'Memory Grid & Anointing of the True King',
    categories: ['kids'], // Kids (Age 3-6)
    badge: 'GAME 04 • MEMORY CARD GRID',
    tabTitle: 'Find David',
    mascotEmoji: '👑',
    // Pastel Stationery Theme Colors — Soft Royal Periwinkle
    palette: {
      bgCanvas: '#f4f6fe',     // Soft Royal Periwinkle
      bgTab: '#dfe5fc',        // Top folder tab
      tabTextColor: '#3730a3', // Deep indigo charcoal
      themeColor: '#4f46e5',   // Indigo / Periwinkle accent
      accentColor: '#6366f1',  // Bright glow highlight
      cardBorder: '#cdd7fb',   // Soft border
      badgeBg: '#e0e7ff',      // Periwinkle pill
      badgeText: '#3730a3',
    },
    kidsGuidance: {
      tag: '🎈 Exclusive for Kids (Age 3–6)',
      tip: 'Arrange a 3×3 grid • Counselors help flip cards gently • Cheer every flip & celebrate finding the true king!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Expand to a 4×4 grid (16 cards) • 5-second peek timer • Fast memory relay challenge!'
    },
    place: 'Church Sanctuary',
    assetsNeeded: 'Table or Low Carpet Rug',
    referenceImage: '/images/find_david_craft.png',
    referenceTitle: 'DIY Cards Craft Photo',
    setupImage: '/images/find_david_setup.png',
    timeEstimate: '10–15 minutes',
    playersCount: 'Circle of campers (take turns)',
    spiritualTakeaway: '“The Lord does not look at the things people see. People look at the outward appearance, but the Lord looks at the heart.” (1 Samuel 16:7) — Jesse’s older sons were tall and strong warriors, but God chose young shepherd David because of his pure and faithful heart.',
    takeawayHighlight: 'The Lord looks at the heart, not outward appearance (1 Sam 16:7).',
    leaderInstruction: '“Welcome campers to Find the David! The prophet Samuel went to Jesse looking for God’s chosen king. Jesse presented his tallest, strongest sons, but God said no. Today, you are Samuel! Each camper steps up, flips ONE card, and checks the face. If it is an older brother, turn it back. If it is David, keep it open! Can we remember where the brothers are and find both Davids?”',
    materials: [
      { name: 'A4 Printed Character Sheets', note: 'David and older brother illustrations printed on standard A4 paper' },
      { name: '10 Matching David Cards', note: 'Young shepherd boy with harp or sling and a golden heart' },
      { name: '20 Golliath Cards', note: '' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Print A4 Character Sheets',
        desc: 'Print 2 matching David illustrations and multiple decoy older brother faces onto standard A4 paper.'
      },
      {
        step: 2,
        title: 'Stick onto Cardboard Bases',
        desc: 'Cut thick cardboard into card tiles and glue each A4 printout firmly on top so the cards are sturdy and opaque.'
      },
      {
        step: 3,
        title: 'Lay Out the Face-Down Grid',
        desc: 'Shuffle and place all cards face down in a neat 3×3 (for younger kids) or 4×4 grid on the table or carpet floor.'
      },
      {
        step: 4,
        title: 'Campers Circle & Samuel Turn',
        desc: 'Have campers sit in a circle. Each child steps up in turn as Samuel to flip 1 card and search for David!'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Take Turns as Samuel',
        text: 'Kids line up or sit in a circle. One child steps up per turn as Samuel looking for God’s chosen king.'
      },
      {
        badge: 'Rule 2',
        title: 'Flip Only ONE Card',
        text: 'On their turn, the child flips over strictly 1 card to check the face.'
      },
      {
        badge: 'Rule 3',
        title: 'Decoy Brother Turns Back',
        text: 'If it is NOT David: the child turns it back face-down in the exact same spot. Play moves immediately to the next child.'
      },
      {
        badge: 'Rule 4',
        title: 'David Stays Face-Up!',
        text: 'If it IS David: the card stays face-up and open! The child gets cheers, and the turn passes to the next child.'
      },
      {
        badge: 'Rule 5',
        title: 'Find Both Davids to Win!',
        text: 'Children continue taking turns, remembering where the wrong brothers are. When the 2nd David is revealed, the group celebrates the true king!'
      }
    ]
  },
  {
    id: 'reaction-ball-cup',
    catalogNumber: 6,
    title: 'Reaction Ball & Cup Game',
    subtitle: 'Dual String Balance & Rolling Precision Challenge',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 06 • REACTION & BALANCE',
    tabTitle: 'Balance & Roll',
    mascotEmoji: '⚡',
    // Pastel Stationery Theme Colors
    palette: {
      bgCanvas: '#eaf4fc',     // Soft Powder Sky Blue
      bgTab: '#d3eaf8',        // Top folder tab
      tabTextColor: '#075985', // Deep ocean charcoal
      themeColor: '#0284c7',   // Clear sky blue accent
      accentColor: '#38bdf8',  // Sky glow highlight
      cardBorder: '#c3e2f5',   // Soft border
      badgeBg: '#e0f2fe',      // Sky pill
      badgeText: '#0369a1',
    },
    olderGuidance: {
      tag: '🚀 Exclusive for Older Kids (Age 7+)',
      tip: 'Requires fine motor control and steady two-hand coordination! Challenge: guide ball smoothly into all 4 cups sequentially.'
    },
    place: 'FAA Upstair Lounge',
    assetsNeeded: 'None',
    referenceImage: '/images/reaction_ball_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/reaction_ball_setup.png',
    materials: [
      { name: '2 brooms', note: 'Guide rails for the ball' },
      { name: 'FAA balls', note: 'Smooth rolling balls for the track' },
      { name: '2 basket', note: 'Positioned in a row along the path' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Tape the Track Line',
        desc: 'Stick a straight strip of painter’s tape (6–10 ft) along the smooth floor.'
      },
      {
        step: 2,
        title: 'Place Cups Along Track',
        desc: 'Place 3 to 5 plastic bowls or cups spaced evenly along the center track line.'
      },
      {
        step: 3,
        title: 'Anchor Strings at End',
        desc: 'Fasten far ends of the two strings or loop them around a sturdy chair or feet.'
      },
      {
        step: 4,
        title: 'Place Ball at Starting End',
        desc: 'Rest the ball across the two parallel strings at the player starting position.'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Hold Strings at Start',
        text: 'Players hold the two strings/brooms at the starting end.'
      },
      {
        badge: 'Rule 2',
        title: 'Guide Ball Forward',
        text: 'Gently pull, lift, and spread strings to guide the ball forward along the track.'
      },
      {
        badge: 'Rule 3',
        title: 'Land in Each Cup',
        text: 'Try to control string tension so the ball drops cleanly into each cup.'
      },
      {
        badge: 'Rule 4',
        title: 'Reset on Fall Off',
        text: 'If the ball rolls off the strings, place it back at the last cup reached.'
      },
      {
        badge: 'Rule 5',
        title: 'Reach the Final Cup',
        text: 'Continue steering smoothly until the ball reaches and lands in the final cup!'
      }
    ]
  },
  {
    id: 'david-goliath-sliding',
    catalogNumber: 7,
    title: 'David & Goliath Sliding Game',
    subtitle: 'Bottle Cap Precision Slide & Goliath Knockout',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 07 • BOTTLE CAP SLIDE',
    tabTitle: 'Bottle Cap Slide',
    mascotEmoji: '🪨',
    // Pastel Stationery Theme Colors
    palette: {
      bgCanvas: '#f2ecfc',     // Soft Dreamy Lilac / Lavender
      bgTab: '#dfd4f8',        // Top folder tab
      tabTextColor: '#5b21b6', // Deep royal violet
      themeColor: '#7c3aed',   // Violet accent
      accentColor: '#a855f7',  // Glow highlight
      cardBorder: '#d5c6f6',   // Soft border
      badgeBg: '#f3e8ff',      // Lilac pill
      badgeText: '#6b21a8',
    },
    kidsGuidance: {
      tag: '🎈 For Kids (Age 3–6)',
      tip: 'Stand closer along the table edge • Gentle finger flick or slide • Practice 1 slide before aiming at Goliath!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Shoot from the far edge across the full table length • Aim to knock Goliath completely down or off the table!'
    },
    place: 'FAA Blue Room',
    assetsNeeded: 'Table',
    referenceImage: '/images/sliding_game_craft.png',
    referenceTitle: 'DIY Tabletop Setup Photo',
    setupImage: '/images/david_goliath_sliding_setup.png',
    materials: [
      { name: '5 Colored Bottle Caps', note: 'David’s 5 smooth stones (Red, Yellow, Green, Orange, Purple)' },
      { name: '1 Goliath Bottle Cap', note: 'Marked with “G” in center (target standing at far end)' },
      { name: '1 Smooth Table', note: 'Long wooden activity or dining table in FAA Blue Room' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Clear a Smooth Table',
        desc: 'Set up a long, smooth activity table in the FAA Blue Room with an unobstructed sliding surface.'
      },
      {
        step: 2,
        title: 'Position Goliath at Far End',
        desc: 'Place the Goliath bottle cap (marked “G”) at the far opposite end of the table as the knockdown target.'
      },
      {
        step: 3,
        title: 'Line Up David’s 5 Stones',
        desc: 'Place the 5 colored David bottle caps at the front shooting edge, leaving a good distance to Goliath.'
      },
      {
        step: 4,
        title: 'Queue Campers at Table Edge',
        desc: 'Have children line up at the shooting edge of the table ready to take their turns!'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Step Up to the Table Edge',
        text: 'Players take turns stepping up to the front edge of the table to aim David’s 5 stones.'
      },
      {
        badge: 'Rule 2',
        title: 'Slide or Flick — No Throwing!',
        text: 'Slide or flick the bottle cap flat along the tabletop surface towards Goliath across the distance. Never throw through the air!'
      },
      {
        badge: 'Rule 3',
        title: 'Aim to Shoot Down Goliath',
        text: 'Aim across the table distance to strike Goliath directly and shoot him down or off the table!'
      },
      {
        badge: 'Rule 4',
        title: '5 Stones per Player',
        text: 'Each player slides David’s 5 colored bottle caps one by one before retrieving ammo for the next teammate.'
      },
      {
        badge: 'Rule 5',
        title: 'Rotate Until Goliath Falls',
        text: 'Teams cheer and rotate shooters until a brave shot knocks Goliath down in victory!'
      }
    ]
  },
  {
    id: 'brook-river-crossing',
    catalogNumber: 8,
    title: 'Brook of Elah: River Crossing',
    subtitle: '5 Cardboard Stepping Squares & River Crossing Relay',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 08 • RIVER CROSSING',
    tabTitle: 'River Crossing',
    mascotEmoji: '🌊',
    // Pastel Stationery Theme Colors
    palette: {
      bgCanvas: '#eaf7f5',     // Soft Lagoon Aqua / River Mint
      bgTab: '#cff0ec',        // Top folder tab
      tabTextColor: '#155e75', // Deep teal charcoal
      themeColor: '#0891b2',   // River cyan accent
      accentColor: '#06b6d4',  // Aqua splash highlight
      cardBorder: '#bee8e2',   // Soft border
      badgeBg: '#ccfbf1',      // Mint pill
      badgeText: '#115e59',
    },
    kidsGuidance: {
      tag: '🎈 For Kids (Age 3–6)',
      tip: '12–15 ft river width • Counselor assists passing cardboard steps • Focus on fun balance and safe stepping!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Full 25–30 ft river • Strict floor touch penalty: foot in water washes board back! • Speed relay race against the clock!'
    },
    place: 'FAA Cafeteria',
    assetsNeeded: 'None',
    referenceImage: '/images/brook_river_reference.png',
    referenceTitle: 'DIY Reference Photo',
    setupImage: '/images/brook_river_setup.png',
    materials: [
      { name: '10 A4 Paper', note: '' },
      { name: 'Items for kids to hold', note: 'TBC' }
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Tape the River Banks',
        desc: 'Use painter’s tape to mark two parallel lines 20–30 ft apart (Start & Finish).'
      },
      {
        step: 2,
        title: 'Number 5 Cardboard Squares',
        desc: 'Cut 5 cardboard squares from boxes and number them 1 to 5 with a marker.'
      },
      {
        step: 3,
        title: 'Line Up at Start Bank',
        desc: 'Assemble the team behind the starting tape line ready to cross.'
      },
      {
        step: 4,
        title: 'Lay First Cardboard Squares',
        desc: 'Place cardboard squares 1, 2, and 3 onto the floor to begin the crossing path.'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Cannot Step on Floor',
        text: 'All players must balance strictly on the cardboard squares. You cannot step on the floor!'
      },
      {
        badge: 'Rule 2',
        title: 'Pass Rear Cardboard Forward',
        text: 'Pick up cardboard from the rear and pass hand-to-hand forward to make new steps.'
      },
      {
        badge: 'Rule 3',
        title: 'Floor Touch Penalty',
        text: 'If any foot touches the bare floor, that cardboard square washes back to the start line!'
      },
      {
        badge: 'Rule 4',
        title: 'Cooperate Closely',
        text: 'Stay close and communicate to keep cardboard squares moving quickly along the line.'
      },
      {
        badge: 'Rule 5',
        title: 'All Across to Win',
        text: 'The mission is complete when every team member safely reaches the Finish Bank!'
      }
    ]
  },
  {
    id: 'wind-of-elah',
    catalogNumber: 9,
    title: 'The Wind of Elah',
    subtitle: 'All-Hands Paper Stone Fan & Basket Herd Challenge',
    categories: ['older'], // Older Kids (Age 7+)
    badge: 'GAME 09 • PAPER FAN HERD',
    tabTitle: 'Paper Fan Herd',
    mascotEmoji: '💨',
    // Pastel Stationery Theme Colors — Soft Warm Papaya & Tangerine Breeze
    palette: {
      bgCanvas: '#fff7f0',     // Soft Warm Papaya Breeze
      bgTab: '#fde0cc',        // Top folder tab
      tabTextColor: '#9a3412', // Warm terracotta charcoal
      themeColor: '#ea580c',   // Warm tangerine accent
      accentColor: '#fb923c',  // Sunset glow highlight
      cardBorder: '#fed0b0',   // Soft border
      badgeBg: '#ffedd5',      // Peach pill
      badgeText: '#9a3412',
    },
    kidsGuidance: {
      tag: '🎈 For Kids (Age 3–6)',
      tip: 'Stand 5 ft from basket • Counselor helps fan from behind to create big wind gusts!'
    },
    olderGuidance: {
      tag: '🚀 Exclusive for Older Kids (Age 7+)',
      tip: 'Full team participation! Designate 2 flank sweepers to prevent wall drift and 2 basket flippers for the final upward lift.'
    },
    place: 'FAA Pink Room',
    assetsNeeded: 'Low basket',
    referenceImage: '/images/wind_of_elah_craft.png',
    referenceTitle: 'All-Hands Fan Photo',
    setupImage: '/images/wind_of_elah_setup.png',
    timeEstimate: '10–12 minutes',
    playersCount: '6–8 players per team',
    spiritualTakeaway: '“Just as the invisible wind moves the stones, God’s Holy Spirit empowers us when we work together in one accord, lifting each other up to overcome giant obstacles.”',
    takeawayHighlight: 'Working together in unity overcomes any giant challenge.',
    leaderInstruction: '“Welcome to The Wind of Elah! For this challenge, your whole squad works together as David’s wind brigade. There are 20 paper river stones on the floor. NO HANDS and NO TOUCHING with your cardboard — you can ONLY fan the air to create wind currents! Left flank, right flank, push together and flip every stone into the low basketball basket. 60 seconds on the clock. Ready, fan, GO!”',
    materials: [
      { name: '1 Low Basketball Basket', note: 'Set at low height in FAA Pink Room as the target goal' },
      { name: '8-10 plastic plate', note: 'each kid will take one' },
      { name: 'X number Paper River Stones', note: 'Cut from colored paper/origami paper into river stone shapes' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Scatter 20 Paper Stones',
        desc: 'Place 20 lightweight paper stone cutouts spread out across a 15-ft smooth floor zone in the FAA Pink Room.'
      },
      {
        step: 2,
        title: 'Position Low Basketball Goal',
        desc: 'Place the low basketball hoop or basket at the far end of the FAA Pink Room as the goal.'
      },
      {
        step: 3,
        title: 'Arm the Fan Squad',
        desc: 'Equip all 6–8 teammates with a rigid cardboard fan paddle and line them up at the start line.'
      },
      {
        step: 4,
        title: 'Assign Flanks & Start Timer',
        desc: 'Designate left and right flank sweepers to corral strays and center sweepers to push forward!'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Air Only — Strictly No Hands!',
        text: 'Players cannot touch paper stones with hands or fans. You must wave the cardboard to create wind currents!'
      },
      {
        badge: 'Rule 2',
        title: 'All-Hands Flank Sweep',
        text: 'All teammates fan simultaneously; flank sweepers prevent stones drifting into walls while center sweepers drive forward.'
      },
      {
        badge: 'Rule 3',
        title: 'Flip Over the Basket Lip',
        text: 'Work together at the finish line to create an upward air breeze that flips fluttering stones into the basket!'
      },
      {
        badge: 'Rule 4',
        title: '60-Second Team Clock',
        text: 'The team that safely herds the most paper river stones into the basket before the timer expires wins!'
      }
    ]
  },
  {
    id: 'miracle-motion',
    catalogNumber: 5,
    title: 'Miracle Motion',
    subtitle: 'Bible Charades & Silent Action Guessing Relay',
    categories: ['kids'], // Kids (Age 3-6)
    badge: 'GAME 05 • MIRACLE MOTION',
    tabTitle: 'Miracle Motion',
    mascotEmoji: '🎭',
    // Pastel Stationery Theme Colors — Soft Sunny Buttercup
    palette: {
      bgCanvas: '#fdfce8',     // Soft Sunny Buttercup
      bgTab: '#f7f3cb',        // Top folder tab
      tabTextColor: '#713f12', // Warm amber charcoal
      themeColor: '#ca8a04',   // Golden honey accent
      accentColor: '#eab308',  // Sunbeam highlight
      cardBorder: '#edeab2',   // Soft border
      badgeBg: '#fef9c3',      // Buttercup pill
      badgeText: '#854d0e',
    },
    kidsGuidance: {
      tag: '🎈 Exclusive for Kids (Age 3–6)',
      tip: 'Counselor whispers or shows the picture card to the actor • If shy, counselor mimes alongside them! • Keep guessing fast & cheer every turn!'
    },
    place: 'Church Sanctuary / Carpet Area',
    assetsNeeded: 'None',
    referenceImage: '/images/miracle_motion_craft.png',
    referenceTitle: 'DIY Prompt Cards Photo',
    setupImage: '/images/miracle_motion_setup.png',
    timeEstimate: '10–12 minutes',
    playersCount: 'Circle of campers (take turns)',
    spiritualTakeaway: '“Whatever you do, work at it with all your heart, as working for the Lord!” (Colossians 3:23) — David praised God not just with words, but with joyful whole-body worship, courage against lions and bears, and humble obedience.',
    takeawayHighlight: 'Joyful whole-body worship and courageous actions speak louder than words.',
    leaderInstruction: '“Welcome campers to Miracle Motion! One brave camper steps to the front as our secret actor. I will show you a card — an animal, Bible hero, or camp expression. STRICTLY NO TALKING or sound effects! You have to act it out with your hands, face, and body. Teammates, raise your hands to guess! 1 correct guess gives 1 mark. Can your squad collect at least 5 marks to pass the Miracle test? Ready... ACT!”',
    materials: [
      { name: 'Prompt Cards Set', note: 'Prepare A4 Paper or Manilla card' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Prepare Illustrated Prompt Cards',
        desc: 'Draw or print simple picture prompt cards for characters (Shepherd David, Goliath), animals (Lion, Bear, Lamb), and emotions (Happy, Brave, Surprised).'
      },
      {
        step: 2,
        title: 'Seat Campers in a Semicircle',
        desc: 'Gather children on the carpet in a half-circle facing the front stage area with clear sightlines.'
      },
      {
        step: 3,
        title: 'Set Up 5-Star Tally Board',
        desc: 'Place a small chalkboard or easel near the stage with 5 empty star slots ready to be filled with marks.'
      },
      {
        step: 4,
        title: 'Assign Counselor Stage Partner',
        desc: 'A counselor stands near the stage to hold cards, whisper prompts to shy little ones, and guide turns.'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Choose One Actor to the Front',
        text: 'One child steps to the front stage to be the actor for the round.'
      },
      {
        badge: 'Rule 2',
        title: 'Strictly Silent Acting — No Speaking!',
        text: 'The actor is shown a secret prompt card and must act out the character, animal, or expression without making any words or sounds.'
      },
      {
        badge: 'Rule 3',
        title: 'Teammates Raise Hands to Guess',
        text: 'Seated members raise their hands and take turns shouting their guesses. 1 correct guess awards 1 mark to the team!'
      },
      {
        badge: 'Rule 4',
        title: 'Rotate Actors Every Turn',
        text: 'Once guessed correctly, choose the next camper to step up so everyone gets a turn to act.'
      },
      {
        badge: 'Rule 5',
        title: 'Collect 5 Marks to Pass!',
        text: 'The team continues rotating actors until they achieve at least 5 correct guesses to complete the challenge!'
      }
    ]
  },
  {
    id: 'faith-and-balance',
    catalogNumber: 10,
    title: 'Faith & Balance',
    subtitle: 'Spoon-and-Ball Speed Navigation & 2-Minute Basket Relay',
    categories: ['older'], // Older Kids (Age 7+)
    badge: 'GAME 10 • FAITH & BALANCE',
    tabTitle: 'Faith & Balance',
    mascotEmoji: '🥄',
    // Pastel Stationery Theme Colors — Soft Emerald Mint
    palette: {
      bgCanvas: '#edfbf5',     // Soft Emerald Mint
      bgTab: '#d4f5e7',        // Top folder tab
      tabTextColor: '#065f46', // Deep emerald charcoal
      themeColor: '#059669',   // Emerald mint accent
      accentColor: '#10b981',  // Mint glow highlight
      cardBorder: '#c0eed9',   // Soft border
      badgeBg: '#d1fae5',      // Mint pill
      badgeText: '#065f46',
    },
    olderGuidance: {
      tag: '🚀 Exclusive for Older Kids (Age 7+)',
      tip: 'Bend knees slightly for a low center of gravity • Do not sprint until ball is dropped in bucket • Keep spare spoons on deck behind start line!'
    },
    place: 'FAA JLC Room',
    assetsNeeded: 'Spoons, Balls, Target Basket & Floor Tape',
    referenceImage: '/images/faith_balance_craft.png',
    referenceTitle: 'DIY Supplies Photo',
    setupImage: '/images/faith_balance_setup.png',
    timeEstimate: '8–10 minutes',
    playersCount: 'Teams of 4–8 players',
    spiritualTakeaway: '“We walk by faith, not by sight.” (2 Corinthians 5:7) & “Whoever can be trusted with very little can also be trusted with much.” (Luke 16:10) — Just like balancing a small ball on a spoon takes focus, patience, and composure, holding onto our faith requires steady trust in God even when rushing through life.',
    takeawayHighlight: 'Walking with steady faith and patience under pressure leads to victory.',
    leaderInstruction: '“Campers, welcome to Faith & Balance! Each team gets ONE plastic spoon. At the start line, you must scoop a ball onto your spoon. WITHOUT touching the ball with your hands, carefully navigate across the gym and deposit it into the Target Basket. Once it drops cleanly into the basket, sprint back and hand off the spoon to your next teammate. You have exactly 2 minutes on the clock — how many balls can your squad collect? Ready, balance, GO!”',
    materials: [
      { name: 'Small Balls (10 pcs)', note: 'tightly crumpled paper balls (cheapest DIY option)' },
      { name: '40 - Sturdy Plastic Spoons', note: '1 spoon per active team (plus spares in case of breakage)' },
      { name: 'Target Baskets / Buckets (2 pcs)', note: 'Plastic laundry basket, storage tub, or bucket placed at the far end' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Tape the Start Line & Lane',
        desc: 'Use masking tape to mark a straight start line and a 20–25 ft walking lane across the smooth floor.'
      },
      {
        step: 2,
        title: 'Place Target Basket at Far End',
        desc: 'Position a sturdy plastic laundry basket or bucket at the far end of each team lane.'
      },
      {
        step: 3,
        title: 'Prepare Ball Bowl & Spoons',
        desc: 'Place a bowl of ping-pong or crumpled paper balls at the start line alongside 1 active spoon and spares.'
      },
      {
        step: 4,
        title: 'Line Up Teams & Set 2-Min Clock',
        desc: 'Queue campers in single-file behind the tape line and set the official countdown timer to 2:00.'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: '1 Spoon per Team — No Touching Ball!',
        text: 'The runner must scoop and balance the ball on the plastic spoon without using fingers or hands to hold it in place.'
      },
      {
        badge: 'Rule 2',
        title: 'Carry Ball into Target Basket',
        text: 'Carefully walk or run down the lane and drop the ball cleanly into the target basket or bucket.'
      },
      {
        badge: 'Rule 3',
        title: 'Ball Drop Reset',
        text: 'If the ball falls off the spoon, freeze! Pick it up with the spoon from that spot before continuing forward.'
      },
      {
        badge: 'Rule 4',
        title: 'Sprint Back & Hand Off Spoon',
        text: 'Once the ball is in the basket, sprint down the return lane and hand the spoon to the next queued teammate.'
      },
      {
        badge: 'Rule 5',
        title: '2-Minute Clock Challenge',
        text: 'Repeat the relay in rotation until the 2-minute timer ends. The team with the most collected balls wins!'
      }
    ]
  }
];

/**
 * Returns games matching a specific category:
 * - 'kids'  -> Game 1, 2, 4, 5 (Kids age 3-6)
 * - 'older' -> Game 1, 3, 4, 5 (Older kids age 7+)
 * - 'all'   -> Game 1, 2, 3, 4, 5
 */
export function getGamesByCategoryId(categoryId = 'kids') {
  const norm = (categoryId || 'kids').toLowerCase();
  const cat = CATEGORIES[norm.toUpperCase()] || CATEGORIES.KIDS;
  return cat.gameIds
    .map(id => GAMES_CATALOG.find(g => g.id === id))
    .filter(Boolean);
}
