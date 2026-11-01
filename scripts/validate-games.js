/**
 * Checks the game catalog for mistakes: missing fields, broken image paths,
 * duplicate ids, and category entries that don't resolve. Run: npm run validate
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CATEGORY_LIST } from '../src/data/categories.js';
import { GAMES, GAMES_BY_ID } from '../src/data/games/index.js';

const publicDir = fileURLToPath(new URL('../public', import.meta.url));
const PALETTE_KEYS = ['bgCanvas', 'bgTab', 'tabTextColor', 'themeColor', 'accentColor', 'cardBorder'];
const REQUIRED_TEXT = ['id', 'title', 'subtitle', 'badge', 'objective'];

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const isNonEmptyArray = v => Array.isArray(v) && v.length > 0;

if (GAMES_BY_ID.size !== GAMES.length) fail('games/index.js', 'duplicate game ids');

const catalogNumbers = GAMES.map(g => g.catalogNumber);
if (new Set(catalogNumbers).size !== catalogNumbers.length) fail('games', 'duplicate catalogNumber');

for (const game of GAMES) {
  const where = game.id || '(game without id)';

  for (const key of REQUIRED_TEXT) {
    if (typeof game[key] !== 'string' || !game[key].trim()) fail(where, `missing "${key}"`);
  }
  if (!Number.isInteger(game.catalogNumber)) fail(where, 'catalogNumber must be an integer');

  for (const key of PALETTE_KEYS) {
    if (!/^#[0-9a-f]{3,8}$/i.test(game.palette?.[key] ?? '')) fail(where, `palette.${key} must be a hex color`);
  }

  if (!game.images?.craft) fail(where, 'missing images.craft');
  for (const [name, src] of Object.entries(game.images ?? {})) {
    if (src && !existsSync(publicDir + src)) fail(where, `images.${name} not found: public${src}`);
  }

  if (!isNonEmptyArray(game.rules)) fail(where, 'needs at least one rule');
  game.rules?.forEach((r, i) => {
    if (!r.title || !r.text) fail(where, `rules[${i}] needs title and text`);
  });

  if (!isNonEmptyArray(game.materials)) fail(where, 'needs at least one material');
  game.materials?.forEach((m, i) => {
    if (!m.name) fail(where, `materials[${i}] needs a name`);
  });

  if (game.props) {
    if (!isNonEmptyArray(game.props.items)) fail(where, 'props.items must be a non-empty array');
    game.props.items?.forEach((p, i) => {
      if (!p.name || !Array.isArray(p.scenes)) fail(where, `props.items[${i}] needs name and scenes`);
    });
    if (!game.props.rule) fail(where, 'props.rule is missing');
  }
}

const categorized = new Set();
for (const cat of CATEGORY_LIST) {
  for (const id of cat.gameIds) {
    if (!GAMES_BY_ID.has(id)) fail(`categories.${cat.id}`, `unknown game id "${id}"`);
    categorized.add(id);
  }
}
for (const game of GAMES) {
  if (!categorized.has(game.id)) fail(game.id, 'not listed in any category');
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) in the game catalog:\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log(`✓ ${GAMES.length} games across ${CATEGORY_LIST.length} categories look good.`);
