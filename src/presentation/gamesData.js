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
    gameIds: ['goliath-slingshot', 'feed-goliath', 'david-bench-relay', 'footprint-stomp-toss', 'find-the-david'],
    description: 'Games 1 to 5 • Fun, Gentle, Safe Obstacles & Teamwork Relay',
    themeColor: '#ea580c',
    pillBg: '#ffedd5',
    pillText: '#9a3412',
  },
  OLDER: {
    id: 'older',
    label: 'Older Kids (Age 7+)',
    shortLabel: 'Older 7+',
    emoji: '🚀',
    gameIds: ['reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing', 'wind-of-elah'],
    description: 'Games 6, 7, 8, 9 • Focus, Accuracy, Speed & Fan Herd Challenge',
    themeColor: '#7c3aed',
    pillBg: '#f3e8ff',
    pillText: '#6b21a8',
  },
  ALL: {
    id: 'all',
    label: 'All Games',
    shortLabel: 'All 9 Games',
    emoji: '🌟',
    gameIds: ['goliath-slingshot', 'feed-goliath', 'david-bench-relay', 'footprint-stomp-toss', 'find-the-david', 'reaction-ball-cup', 'david-goliath-sliding', 'brook-river-crossing', 'wind-of-elah'],
    description: 'Complete 9-Game Camp Activity Deck',
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
      { name: '1 Sturdy Table', note: 'Set up in Church Sanctuary for the cup pyramid' },
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
    place: 'Church Sanctuary',
    assetsNeeded: 'Table',
    referenceImage: '/images/feed_goliath_craft.png',
    referenceTitle: 'DIY Craft Photo',
    setupImage: '/images/feed_goliath_setup.png',
    materials: [
      { name: '1 Sturdy Table', note: 'Set up in Church Sanctuary to hold the Goliath target box' },
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
    id: 'david-bench-relay',
    catalogNumber: 3,
    title: 'David’s Valley Bench Dash',
    subtitle: 'Crawl Under the Mountain Bench, Round Goliath’s Cone & Relay!',
    categories: ['kids'], // Kids (Age 3-6) ONLY
    badge: 'GAME 03 • OBSTACLE BENCH RELAY',
    tabTitle: 'Valley Bench Dash',
    mascotEmoji: '🏃',
    // Pastel Stationery Theme Colors — Soft Sunny Honey
    palette: {
      bgCanvas: '#fdfbf0',     // Soft Warm Sunny Cream
      bgTab: '#faedd0',        // Top folder tab
      tabTextColor: '#854d0e', // Dark honey charcoal
      themeColor: '#d97706',   // Warm golden amber accent
      accentColor: '#f59e0b',  // Sunbeam amber highlight
      cardBorder: '#f5e3b5',   // Soft border
      badgeBg: '#fef3c7',      // Sunny honey pill
      badgeText: '#92400e',
    },
    kidsGuidance: {
      tag: '🎈 Exclusive for Kids (Age 3–6)',
      tip: 'Slit pool noodle on bench edge for soft head bumps • Counselor spots at bench to cheer little crawlers • 15–20 ft distance to cone!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Fast army belly-crawl under bench • 30 ft sprint to cone • Bear-crawl or backward sprint on the way back!'
    },
    place: 'Church Sanctuary',
    assetsNeeded: 'Chairs and cones',
    referenceImage: '/images/david_bench_relay_craft.png',
    referenceTitle: 'DIY Setup Photo',
    setupImage: '/images/david_bench_relay_setup.png',
    materials: [
      { name: '1–2 Sturdy Benches', note: 'Gym bench, church pew bench, or low sturdy table' },
      { name: '2 Marker Cones', note: 'With cartoon Goliath faces or helmets taped on top' },
      { name: '1–2 Pool Noodles', note: 'Slit lengthwise to pad bench edges for 100% safe crawling' },
      { name: '2 Shepherd Staffs or Soft Balls', note: 'Short cut pool noodle or soft foam stone as relay baton' },
      { name: 'Floor Masking Tape', note: 'For team start lines and return lane boundaries' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Position the Benches',
        desc: 'Place 1 or 2 long benches parallel across the hall, leaving ample crawl-under clearance.'
      },
      {
        step: 2,
        title: 'Pad the Lower Bench Rail',
        desc: 'Slit a pool noodle lengthwise and tape it firmly along the bottom edge of each bench for safety.'
      },
      {
        step: 3,
        title: 'Set Goliath Turning Cones',
        desc: 'Place orange cones 15–20 ft past each bench and tape a cartoon Goliath cutout to each cone.'
      },
      {
        step: 4,
        title: 'Tape Start Line & Queue Teams',
        desc: 'Tape a start line 8–10 ft in front of the bench and hand the first runner David’s staff baton!'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: 'Crawl Under the Bench',
        text: 'On “Go!”, drop down to hands and knees and crawl completely under the padded bench without pushing it.'
      },
      {
        badge: 'Rule 2',
        title: 'Circle Goliath’s Cone',
        text: 'Pop up, sprint to the cone, tap Goliath’s sign (“Brave like David!”), and circle around the cone.'
      },
      {
        badge: 'Rule 3',
        title: 'Crawl Back & Pass Baton',
        text: 'Sprint back, crawl under the bench a second time, and hand off the shepherd staff to the next teammate!'
      },
      {
        badge: 'Rule 4',
        title: 'Spotter Guidance',
        text: 'Counselors stay near the bench to encourage low crawling and ensure smooth head clearance.'
      },
      {
        badge: 'Rule 5',
        title: 'Cheer Every Runner',
        text: 'Teams cheer loudly until every camper has successfully completed the Valley Dash!'
      }
    ]
  },
  {
    id: 'footprint-stomp-toss',
    catalogNumber: 4,
    title: 'Goliath’s Footprint Stomp & Toss',
    subtitle: 'Hop Along the Giant’s Tracks & Sink the Victory Ball into the Basket!',
    categories: ['kids'], // Kids (Age 3-6) ONLY
    badge: 'GAME 04 • JUMP & BASKET TOSS',
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
      { name: '6–8 Cardboard Footprints', note: 'Cut approx. 18–20 in long with drawn giant toes & armor' },
      { name: '1 Laundry Basket or Hamper', note: 'Target basket with Goliath shield cutout on front' },
      { name: '1 Soft Foam Ball', note: 'Single lightweight foam ball for safe tossing' },
      { name: 'Painter’s Tape', note: 'Secures footprints to floor & marks team start line' },
      { name: 'Marker Pen', note: 'To number footprints 1 to 6 along the trail' },
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
    catalogNumber: 5,
    title: 'Find the David',
    subtitle: 'Memory Grid & Anointing of the True King',
    categories: ['kids'], // Kids (Age 3-6)
    badge: 'GAME 05 • MEMORY CARD GRID',
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
      { name: 'Sturdy Cardboard Bases', note: 'Cut thick cardboard into equal squares/rectangles as rigid bases' },
      { name: 'A4 Printed Character Sheets', note: 'David and older brother illustrations printed on standard A4 paper' },
      { name: 'Glue Stick or Tape', note: 'Securely stick the A4 printed cutouts on top of each cardboard base' },
      { name: '2 Matching David Cards', note: 'Young shepherd boy with harp or sling and a golden heart' },
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
    place: 'FAA Cafeteria',
    assetsNeeded: 'None',
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
      tip: 'Compact 4-ft taped ring • Gentle floor slide • Practice 1 slide before aiming at Goliath!'
    },
    olderGuidance: {
      tag: '🚀 For Older Kids (Age 7+)',
      tip: 'Standard 6-ft taped boundary • Knock Goliath completely out of bounds • Tactical stone bank shots!'
    },
    place: 'FAA Blue Room',
    assetsNeeded: 'None',
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
    place: 'FAA JLC Room',
    assetsNeeded: 'None',
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
      { name: '1 Low Basketball Stand / Basket', note: 'Set at low height in FAA Pink Room as the target goal' },
      { name: '6–8 Cardboard Fans', note: '1 rigid cardboard flap or heavy folder per player' },
      { name: '20 Paper River Stones', note: 'Cut from colored paper/origami paper into river stone shapes' },
      { name: 'Painter’s Tape', note: 'Marks the 15-ft scatter zone boundary' },
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
