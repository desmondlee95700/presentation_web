# Kids Camp Presentation Deck

This repository contains a high-performance, full-screen interactive presentation deck designed for camp leaders, counselors, and volunteers to present and facilitate camp games for kids.

---

## 🎨 Design System & Layout (Slide 01 Editorial Reference)

All future style updates, UI additions, and components MUST adhere strictly to these rules:

### 1. Aesthetic Mood (Clean, Spacious & Minimal)
- **Palette**: Warm pastel desk canvas (`#fbf8f1` / `#fcf9f2`) with soft ambient glows.
- **Slide Canvas**: Distinct signature pastel tones per activity:
  - Game 1 (*Goliath SlingShot*): Soft Meadow Pistachio (`#f4f9ec` / tab `#e6f0d7`).
  - Game 2 (*Feed Goliath Game*): Soft Warm Peach & Blush Coral (`#fef5f0` / tab `#fde4d8`).
  - Game 3 (*David’s Valley Bench Dash*): Soft Sunny Honey (`#fdfbf0` / tab `#faedd0`).
  - Game 4 (*Goliath’s Footprint Stomp & Toss*): Soft Blossom Blush (`#fdf2f4` / tab `#fce2e7`).
  - Game 5 (*Find the David*): Soft Royal Periwinkle (`#f4f6fe` / tab `#dfe5fc`).
  - Game 6 (*Reaction Ball & Cup Game*): Soft Powder Sky Blue (`#f0f6fc` / tab `#daebf8`).
  - Game 7 (*David & Goliath Sliding Game*): Soft Dreamy Lilac (`#f6f1fc` / tab `#eae1f8`).
  - Game 8 (*Brook of Elah River Crossing*): Soft Lagoon Aqua (`#f0faf8` / tab `#dbeefa`).
  - Game 9 (*The Wind of Elah*): Soft Warm Papaya Breeze (`#fff7f0` / tab `#fde0cc`).
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
   - Characteristics: Fun, gentle motor skills, safe obstacle crawling, cooperative puzzle relay, and counselor guidance.
2. **🚀 Older Kids (Age 7+)**:
   - Games: **6, 7, 8, 9**
   - Characteristics: Precision, dual-string balance, knockout distance, all-hands fan herd, and speed relay races.
3. **🌟 All Games**:
   - Includes all 9 activities with category indicator tags.

---

## 💻 Tech Stack & Commands

- **Stack**: Vanilla HTML5, Modern ES Modules JS, Pure CSS3, Vite bundler. Zero audio dependencies.
- **Development**: `npm run dev` (runs at `http://localhost:5173/` or `http://localhost:5174/`).
- **Production Build**: `npm run build`.
