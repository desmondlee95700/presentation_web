/**
 * Kids Camp Games Catalog — One Slide per Game Presentation Data
 */

export const GAMES_CATALOG = [
  {
    id: 'goliath-slingshot',
    slideNumber: 1,
    title: 'Goliath SlingShot',
    subtitle: 'Camp Target Knockdown & Aim Challenge',
    tagline: 'Take aim with your sling, release from behind the line, and topple the giant Goliath fortress!',
    themeColor: '#f59e0b',
    accentColor: '#ef4444',
    badge: '🎯 GAME 01 • CAMP KNOCKDOWN',
    referenceImage: '/images/david_goliath_reference.png',
    referenceTitle: 'Real-Life DIY Reference',
    referenceCaption: '10 mint cups (or empty cans) stacked 4-3-2-1 with Goliath cutout on top!',
    referenceNote: '💡 Tip: Can also use recycled aluminum soup or soda cans (“utilizando também latas”)!',
    stats: {
      duration: '20–35 min',
      groupSize: '8–30 campers',
      teams: '2 to 4 Teams',
      ages: 'Ages 6–14',
      energy: 'High Energy',
      setting: 'Gym Floor / Camp Lawn / Hall'
    },
    objective: 'Campers step up to the line as "David" and throw soft balls to knock down the cup fortress and topple Goliath!',
    materials: [
      { name: '10–15 Plastic Cups or Empty Cans', note: 'Mint/teal party cups or cleaned cans' },
      { name: '3–6 Soft Balls, Beanbags, or Rolled Socks', note: 'Soft yarn balls or rolled socks (safe indoors)' },
      { name: '1 Cardboard Goliath Cutout', note: 'Drawn with helmet, shield, and spear' },
      { name: 'Braided Rope or Masking Tape', note: '10–15 ft throwing distance line' },
      { name: 'Camp Table or Flat Ground Stage', note: 'Sturdy base for the pyramid' }
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Stack the 4-3-2-1 Cup Pyramid',
        desc: 'Place 4 cups on bottom base, 3 on tier two, 2 on tier three, and 1 single cup at the peak.'
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
      {
        step: 4,
        title: 'Mark Distance Throw Line',
        desc: 'Mark rope line 10 ft away for juniors (ages 6–8) and 15 ft for seniors (ages 9–14).'
      }
    ],
    rules: [
      {
        badge: 'Rule 1',
        title: '3 Throws per Player',
        text: 'Each player steps up to the line and takes 3 throws per turn using soft balls or rolled socks.'
      },
      {
        badge: 'Rule 2',
        title: 'Stay Behind the Line',
        text: 'Throws must be released strictly from behind the marked rope. Any line fault voids that throw.'
      },
      {
        badge: 'Rule 3',
        title: 'Team Turn Rotation',
        text: 'Teams alternate throwers. Teammates stay behind the ball station and cheer loud!'
      }
    ],
    scoring: [
      { label: 'Cup Knockdown', points: '+10 Pts Each', type: 'regular', desc: 'Any cup or can knocked off tier' },
      { label: 'Goliath Topple!', points: '+50 Bonus Pts', type: 'bonus', desc: 'Goliath figure knocked off peak' }
    ],
    proTips: [
      {
        title: 'Designate a 2-Camper "Pit Crew"',
        text: 'Assign 2 rotating campers from the cheering team to sprint in and re-stack the 10 cups in under 8 seconds!'
      },
      {
        title: 'Rolled Tube Socks for Indoor Play',
        text: 'If playing indoors in a multipurpose hall, rolled socks have great throwing weight without bouncing dangerously off walls.'
      }
    ],
    safetyRule: 'Strict Safety Clear: No campers ever enter the target stage to retrieve balls until the counselor calls “CLEAR!”.',
    chant: '“Take your sling, take your aim! Knock down Goliath in Jesus’ name! ONE! TWO! THREE... THROW!”',
    cameraPreset: { x: 0, y: 3.2, z: 7.8, targetX: 0, targetY: 1.6, targetZ: 0 }
  },
  {
    id: 'feed-goliath',
    slideNumber: 2,
    title: 'Feed Goliath Game',
    subtitle: 'Cardboard Box Toss & David Aim Challenge',
    tagline: 'Step up as David, take aim, and toss paper balls straight into Goliath’s giant open mouth!',
    themeColor: '#059669',
    accentColor: '#10b981',
    badge: '📦 GAME 02 • DIY TARGET TOSS',
    referenceImage: '/images/feed_goliath_reference.png',
    referenceTitle: 'Real-Life DIY Reference',
    referenceCaption: 'Cardboard box Goliath face with large cutout mouth & crumpled paper balls!',
    referenceNote: '💡 Tip: Line the inside of the mouth with red paper or a basket to catch the tossed balls!',
    stats: {
      duration: '15–30 min',
      groupSize: '6–30 campers',
      teams: 'Individual or Teams',
      ages: 'All Ages (4–12)',
      energy: 'Joyful & Active',
      setting: 'Indoor Room / Camp Hall / Lawn'
    },
    objective: 'Campers take turns being David, throwing crumpled paper balls from behind the line into Goliath’s mouth!',
    materials: [
      { name: 'Cardboard Box (or large cardboard sheet)', note: 'Sturdy base to hold Goliath’s head' },
      { name: 'Paper or Cardboard for Face', note: 'For sketching Goliath’s features' },
      { name: 'Markers, Crayons, or Paint', note: 'To color helmet, beard, and teeth' },
      { name: 'Scissors or Craft Knife', note: 'To cut out the large open mouth' },
      { name: 'Tape or Glue', note: 'To secure face to the box' },
      { name: 'Newspaper, Scrap Paper, or Soft Balls', note: 'Crumpled sheets for safe ammo' },
      { name: 'Table, Chair, or Wall Support', note: 'Elevates Goliath to kid height' }
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
        desc: 'Decorate with eyes, wild hair, warrior helmet, nose, and sharp teeth.'
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
      {
        step: 6,
        title: 'Mark the Safe Throwing Line',
        desc: 'Use masking tape or rope to set the throwing distance (6–10 ft away).'
      }
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
    ],
    scoring: [
      { label: 'Mouth Direct Hit', points: '+20 Pts', type: 'bonus', desc: 'Ball lands cleanly inside Goliath’s mouth' },
      { label: 'Helmet / Beard Touch', points: '+5 Pts', type: 'regular', desc: 'Ball strikes the face board' }
    ],
    proTips: [
      {
        title: 'Keep a Box Underneath',
        text: 'Leave the back of the box open with a laundry basket behind it so balls collect automatically without rolling away!'
      },
      {
        title: 'Speed Round Challenge',
        text: 'Give each player 15 seconds on a camp stopwatch to see how many paper balls they can feed Goliath!'
      }
    ],
    safetyRule: 'Safety Rule: Use lightweight crumpled paper balls so indoor games remain 100% gentle and safe.',
    chant: '“Open wide, here comes the throw! David’s aim will steal the show! 1, 2, 3... GOBBLE IT UP!”'
  },
  {
    id: 'reaction-ball-cup',
    slideNumber: 3,
    title: 'Reaction Ball & Cup Game',
    subtitle: 'Dual String Balance & Rolling Precision Challenge',
    tagline: 'Pull and steer the strings to guide your rolling ball into every cup along the track!',
    themeColor: '#2563eb',
    accentColor: '#3b82f6',
    badge: '⚡ GAME 03 • REACTION & BALANCE',
    referenceImage: '/images/reaction_ball_cup_reference.png',
    referenceTitle: 'Real-Life DIY Reference',
    referenceCaption: '2 strings or brooms steering a ball into cups along a floor track line!',
    stats: {
      duration: '15–25 min',
      groupSize: '4–24 campers',
      teams: 'Solo or Relay Pairs',
      ages: 'All Ages (5–14)',
      energy: 'Focus & Coordination',
      setting: 'Smooth Floor / Camp Hall'
    },
    objective: 'Campers control two parallel strings to roll a ball along the course and carefully drop it into each cup in sequence!',
    materials: [
      { name: '2 Long Strings (or 2 Broom Handles)', note: 'Taut parallel guide rails for the ball' },
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
        desc: 'Fasten the far ends of the two strings or loop them around a sturdy chair or feet.'
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
    ],
    scoring: [
      { label: 'Each Cup Filled', points: '+15 Pts', type: 'regular', desc: 'Ball lands in a cup' },
      { label: 'Final Cup Finish', points: '+50 Pts', type: 'bonus', desc: 'Reaches the end' }
    ],
    proTips: [
      {
        title: 'Tension Control',
        text: 'Pull strings wider to slow down and drop the ball, narrow to let it speed forward!'
      }
    ],
    safetyRule: 'Smooth Motion: Move gently without jerking the strings to keep the ball steady.',
    chant: '“Steady hands, roll it slow! Watch that bouncy ball go!”'
  }
];
