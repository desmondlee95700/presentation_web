/**
 * Kids Camp Games Catalog — One Slide per Game Presentation Data
 * Split into Two Age Categories:
 * 1. Kids (Age 3–6): Games 1, 2
 * 2. Older Kids (Age 7+): Games 3, 4, 5
 * Pastel Editorial Presentation Aesthetic
 */

export const CATEGORIES = {
  KIDS: {
    id: 'kids',
    label: 'Kids (Age 3–6)',
    shortLabel: 'Kids 3–6',
    emoji: '🎈',
    gameIds: ['goliath-slingshot', 'feed-goliath'],
    description: 'Games 1, 2 • Fun, Gentle & Safe',
    themeColor: '#ea580c',
    pillBg: '#ffedd5',
    pillText: '#9a3412',
  },
  OLDER: {
    id: 'older',
    label: 'Older Kids (Age 7+)',
    shortLabel: 'Older 7+',
    emoji: '🚀',
    gameIds: ['reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing'],
    description: 'Games 3, 4, 5 • Focus, Accuracy, Speed & Team Strategy',
    themeColor: '#7c3aed',
    pillBg: '#f3e8ff',
    pillText: '#6b21a8',
  },
  ALL: {
    id: 'all',
    label: 'All Games',
    shortLabel: 'All 5 Games',
    emoji: '🌟',
    gameIds: ['goliath-slingshot', 'feed-goliath', 'reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing'],
    description: 'Complete 5-Game Camp Activity Deck',
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
    referenceImage: '/images/goliath_slingshot_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/balloon_slingshot_setup.png',
    materials: [
      { name: '10–12 Plastic Cups', note: '1 big cup for Giant Goliath & 9 smaller cups for 4-3-2-1 Pyramid' },
      { name: '1–2 Soft Balls', note: 'Foam or soft felt balls' },
      { name: '1 Cardboard Goliath Cutout', note: 'Drawn with helmet, shield & spear' },
      { name: 'Rope or Masking Tape', note: 'For throwing distance line' },
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
    referenceImage: '/images/feed_goliath_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/feed_goliath_setup.png',
    materials: [
      { name: 'Cardboard Box (or large sheet)', note: 'Sturdy base to hold Goliath’s head' },
      { name: 'Paper or Cardboard for Face', note: 'For sketching Goliath’s features' },
      { name: 'Markers, Crayons, or Paint', note: 'To color helmet, beard, and teeth' },
      { name: 'Scissors or Craft Knife', note: 'To cut out the large open mouth' },
      { name: 'Tape or Glue', note: 'To secure face to the box' },
      { name: 'Newspaper or Soft Balls', note: 'Crumpled sheets for ammo' },
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
    id: 'reaction-ball-cup',
    catalogNumber: 3,
    title: 'Reaction Ball & Cup Game',
    subtitle: 'Dual String Balance & Rolling Precision Challenge',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 03 • REACTION & BALANCE',
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
    referenceImage: '/images/reaction_ball_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/reaction_ball_setup.png',
    materials: [
      { name: '2 Long Strings (or Broom Handles)', note: 'Taut parallel guide rails for the ball' },
      { name: 'Balls (Tennis ball, Foam, or FAA balls)', note: 'Smooth rolling balls for the track' },
      { name: '3–5 Cups, Bowls, or Placeholders', note: 'Positioned in a row along the path' },
      { name: 'Painter’s Tape or Floor Line', note: 'Marks straight track on the ground' }
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
    catalogNumber: 4,
    title: 'David & Goliath Sliding Game',
    subtitle: 'Bottle Cap Precision Slide & Goliath Knockout',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 04 • BOTTLE CAP SLIDE',
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
      tip: 'Compact 4-ft taped ring • Gentle floor slide • Practice 1 slide before aiming at Goliath!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Standard 6-ft taped boundary • Knock Goliath completely out of bounds • Tactical stone bank shots!'
    },
    referenceImage: '/images/sliding_game_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/david_goliath_sliding_setup.png',
    materials: [
      { name: '5 Colored Bottle Caps', note: 'David’s 5 stones (Red, Yellow, Green, Blue, Purple)' },
      { name: '1 Goliath Bottle Cap', note: 'Marked with “G” in center (black or dark blue)' },
      { name: 'Masking Tape', note: 'To tape the floor square and center “X”' },
      { name: 'Marker Pen', note: 'To write “G” on Goliath’s cap' },
      { name: 'Smooth Floor Surface', note: 'Tile, laminate, or smooth gym floor' }
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Tape the Playing Square',
        desc: 'Use masking tape to mark a large square boundary on the smooth floor.'
      },
      {
        step: 2,
        title: 'Mark the Center Target X',
        desc: 'Place a small tape “X” directly in the center of the taped square.'
      },
      {
        step: 3,
        title: 'Place Goliath on the X',
        desc: 'Put the Goliath bottle cap (marked “G”) right on the center X.'
      },
      {
        step: 4,
        title: 'Position Players Around Edge',
        desc: 'Have children sit or stand around the outside edge of the square.'
      },
      {
        step: 5,
        title: 'Hand Out the 5 David Stones',
        desc: 'Give the children the 5 different-colored David bottle caps ready to slide.'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Take Turns (1 Cap Each)',
        text: 'Players take turns sliding one David bottle cap at a time toward Goliath.'
      },
      {
        badge: 'Rule 2',
        title: 'Slide, Do Not Throw!',
        text: 'Must slide the bottle cap along the floor. Never throw or toss caps!'
      },
      {
        badge: 'Rule 3',
        title: 'Aim to Hit Goliath',
        text: 'Try to strike the Goliath bottle cap resting in the center of the square.'
      },
      {
        badge: 'Rule 4',
        title: 'Knock Goliath Out of Bounds',
        text: 'The goal is to knock Goliath completely outside the taped square boundary.'
      },
      {
        badge: 'Rule 5',
        title: 'One Player at a Time',
        text: 'Wait your turn! Never slide multiple bottle caps simultaneously.'
      },
      {
        badge: 'Rule 6',
        title: 'Rotate Until Goliath Falls',
        text: 'If Goliath remains inside the square, next player slides until Goliath is knocked out!'
      }
    ]
  },
  {
    id: 'brook-river-crossing',
    catalogNumber: 5,
    title: 'Brook of Elah: River Crossing',
    subtitle: '5 Cardboard Stepping Squares & River Crossing Relay',
    categories: ['older'], // Older Kids (Age 7+) ONLY
    badge: 'GAME 05 • RIVER CROSSING',
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
    referenceImage: '/images/brook_river_reference.png',
    referenceTitle: 'DIY Reference Photo',
    setupImage: '/images/brook_river_setup.png',
    materials: [
      { name: '5 Cardboard Squares', note: 'Cut from cardboard delivery boxes, numbered 1–5' },
      { name: 'Painter’s Tape or Rope', note: 'Marks Start Bank & Finish Bank (20–30 ft apart)' },
      { name: 'Marker Pen', note: 'To number cardboard squares 1 to 5' },
      { name: 'Smooth Floor Surface', note: 'Camp hall, gym, or flat lawn' }
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
