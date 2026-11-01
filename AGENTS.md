# Kids Camp Presentation Deck

This repository contains a high-performance, full-screen interactive presentation deck designed for camp leaders, counselors, and volunteers to present and facilitate camp games for kids.

---

## 🎨 Design System & Layout (Slide 01 Editorial Reference)

All future style updates, UI additions, and components MUST adhere strictly to these rules:

### 1. Aesthetic Mood (Clean, Spacious & Minimal)
- **Palette**: Warm pastel desk canvas (`#fbf8f1` / `#fcf9f2`) with soft ambient glows.
- **Slide Canvas**: Distinct signature pastel tones per activity (source of truth: each game's `palette` in `src/data/games/<id>.js`):
  - Game 1 (*Goliath SlingShot*): Soft Meadow Pistachio (`#f2f8e8` / tab `#e2efc8`).
  - Game 2 (*Feed Goliath Game*): Soft Warm Peach & Blush Coral (`#fff1ec` / tab `#fcdfd7`).
  - Game 3 (*Goliath’s Footprint Stomp & Toss*): Soft Blossom Blush (`#fdf2f4` / tab `#fce2e7`).
  - Game 4 (*Find the David*): Soft Royal Periwinkle (`#f4f6fe` / tab `#dfe5fc`).
  - Game 5 (*Miracle Motion*): Soft Sunny Buttercup (`#fdfce8` / tab `#f7f3cb`).
  - Game 6 (*Reaction Ball & Cup Game*): Soft Powder Sky Blue (`#eaf4fc` / tab `#d3eaf8`).
  - Game 7 (*David & Goliath Sliding Game*): Soft Dreamy Lilac (`#f2ecfc` / tab `#dfd4f8`).
  - Game 8 (*Brook of Elah River Crossing*): Soft Lagoon Aqua (`#eaf7f5` / tab `#cff0ec`).
  - Game 9 (*The Wind of Elah*): Soft Warm Papaya Breeze (`#fff7f0` / tab `#fde0cc`).
  - Game 10 (*Faith & Balance*): Soft Emerald Mint (`#edfbf5` / tab `#d4f5e7`).
- **Strictly Prohibited**: NO audio sound effects, NO arcade game widgets/tappers, NO fake clip-art emojis, and NO cramped dashboards.
- **Layout (Modeled directly on Slide 01 in the reference template)**:
  - **Top Pill Header**: Horizontal rounded pill (`border-radius: 9999px`) holding category tag on the left, slide number in the center (`01`, `02`, `03`, `04`, etc.), and camp date on the right.
  - **Centered Title Block**: Golden star `✦`, bold rounded heading (`Fredoka`/`Outfit`), and gentle subtitle.
  - **3 Clean Columns**:
    - **Column 1**: Visual card with the DIY craft reference photo + concise caption underneath.
    - **Column 2**: Visual card with the gameplay diagram + concise rule caption underneath.
    - **Column 3**: Supplies checklist card + coach tip caption underneath.

---

## 👥 Age Categories & Game Mapping

1. **🎈 Kids (Age 3–6)**:
   - Games: **1, 2, 3, 4, 5**
   - Characteristics: Fun, gentle motor skills, safe jumping agility, cooperative memory relay, and Miracle Motion charades.
2. **🚀 Older Kids (Age 7+)**:
   - Games: **6, 7, 8, 9, 10**
   - Characteristics: Precision, dual-string balance, knockout distance, all-hands fan herd, and Faith & Balance spoon relay.

Categories live in `src/data/categories.js` (`gameIds` sets membership and order).

---

## 💻 Tech Stack & Commands

- **Stack**: Vanilla HTML5, Modern ES Modules JS, Pure CSS3, Vite bundler. Zero runtime dependencies, zero audio.
- **Development**: `npm run dev` (runs at `http://localhost:5173/`).
- **Validate data**: `npm run validate` (also runs before every build).
- **Production Build**: `npm run build`.

---

## 📁 Code Structure

```
src/
  main.js              # Wires everything together (no logic of its own)
  app/                 # App-level behavior
    router.js          #   landing/deck view + URL state (?cat=&slide=)
    overlays.js        #   overlay stack: Escape closes top, body scroll lock
    keyboard.js        #   the one keydown handler (deck shortcuts gated to deck view)
    swipe.js           #   touch + mouse-drag navigation
  components/          # UI pieces; each owns its own markup + events
    slideDeck.js       #   deck state (category, index) + slide track
    slide.js           #   pure markup for one slide (header + 3 pillars)
    categoryTabs.js    #   age-group tabs (slide header + drawer)
    controlsDock.js, drawer.js, lightbox.js, rulesModal.js, landingPage.js
  data/                # All content — edit here, not in components
    site.js            #   camp label, theme, tagline
    categories.js      #   age groups + helpers (getGamesByCategory, getCoachTip)
    games/<id>.js      #   one file per game; games/index.js lists them
  lib/dom.js           # delegate(), delegateActivate(), pad2()
  styles/index.css     # @imports per-component CSS; import order = cascade order
public/images/
  games/<id>/craft.webp, setup.webp|svg
  mascots/
scripts/validate-games.js
```

**Conventions**
- Components communicate via callbacks passed in from `main.js`; they never import each other's instances.
- Events use delegation on the component root (`delegate`), bound once — not re-bound after each render.
- Anything that can be open over the deck registers with `app/overlays.js`.
- Game text fields are inserted as HTML (so `<strong>` works) — content is trusted, authored in-repo.
- Images: WebP (`cwebp -q 82`), max ~1200px.

### Adding a game
1. Copy an existing `src/data/games/<id>.js`, rename to the new id, edit content and `palette`.
2. Import it in `src/data/games/index.js` and add its id to a category's `gameIds` in `src/data/categories.js`.
3. Add `public/images/games/<id>/craft.webp` (and optionally `setup.webp`).
4. Run `npm run validate`.
