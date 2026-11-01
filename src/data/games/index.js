import goliathSlingshot from './goliath-slingshot.js';
import feedGoliath from './feed-goliath.js';
import footprintStompToss from './footprint-stomp-toss.js';
import findTheDavid from './find-the-david.js';
import miracleMotion from './miracle-motion.js';
import reactionBallCup from './reaction-ball-cup.js';
import davidGoliathSliding from './david-goliath-sliding.js';
import brookRiverCrossing from './brook-river-crossing.js';
import windOfElah from './wind-of-elah.js';
import faithAndBalance from './faith-and-balance.js';

/**
 * Every game in the catalog. To add a game: create `<id>.js` next to this
 * file, import it here, add its id to a category in `../categories.js`, and
 * put its images in `public/images/games/<id>/`. Run `npm run validate`.
 *
 * Text fields are inserted as HTML, so `<strong>` etc. are allowed.
 */
export const GAMES = [
  goliathSlingshot,
  feedGoliath,
  footprintStompToss,
  findTheDavid,
  miracleMotion,
  reactionBallCup,
  davidGoliathSliding,
  brookRiverCrossing,
  windOfElah,
  faithAndBalance,
];

export const GAMES_BY_ID = new Map(GAMES.map(game => [game.id, game]));
