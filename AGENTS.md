# Kids Camp Presentation Deck

This repository contains a high-performance, interactive, full-screen presentation slide deck designed for camp leaders, counselors, and volunteers to present and facilitate camp games for kids.

---

## 🎨 Design System & Styling Rules

All future style updates, UI additions, and components MUST adhere strictly to these rules:

### 1. Color Theme & Mood (Kids Camp Aesthetic)
- **Palette Mood**: Bright, cheerful, sunny, warm, high-contrast, and energetic summer camp feel.
- **Strictly Prohibited**: NO dark navy/black themes, NO glassmorphism dark arcade styles, and NO 3D simulation baggage or arcade game widgets.
- **Background**: Cheerful warm gradient (`#fffbeb` cream to `#f0f9ff` sky blue) with subtle soft pastel radial accents (`rgba(254, 240, 138, 0.6)` and `rgba(186, 230, 253, 0.5)`).
- **Card Styling**: Clean solid white cards (`#ffffff`) with **3px vibrant color-coded borders** and tactile soft drop-shadows (`var(--shadow-card)`).
- **Game Accent Colors**:
  - Game 1 (*Goliath SlingShot*): Warm Amber (`#f59e0b`) & Coral Red (`#ef4444`).
  - Game 2 (*Feed Goliath Game*): Emerald Green (`#059669`) & Mint (`#10b981`).
  - Game 3 (*Reaction Ball & Cup Game*): Royal Blue (`#2563eb`) & Sky Blue (`#3b82f6`).
  - Game 4 (*David & Goliath Sliding Game*): Royal Violet (`#7c3aed`) & Purple Glow (`#a855f7`).
  - Game 5 (*Brook of Elah: River Crossing*): River Cyan (`#0891b2`) & Aqua Splash (`#06b6d4`).

---

## ✍️ Typography Guidelines

Use Google Fonts (`Outfit`, `Plus Jakarta Sans`, and `JetBrains Mono`):

| Element | Font Family | Size | Weight | Color / Style |
| :--- | :--- | :--- | :--- | :--- |
| **Base Body** | `Plus Jakarta Sans` | `15px` | `400` | `#0f172a` (line-height: `1.5`) |
| **Slide Title** | `Outfit` | `32px` | `900` | `#0f172a` (bouncy, bold, line-height: `1.1`) |
| **Game Number Badge** | `Outfit` | `13px` | `900` | `#ffffff` on theme color (pill) |
| **Subtitle** | `Plus Jakarta Sans` | `15px` | `700` | `#475569` |
| **Card Header Labels** | `Outfit` | `13.5px` | `800` | Uppercase, letter-spacing: `0.03em` |
| **Step Title** | `Outfit` | `14.5px` | `800` | `#0f172a` |
| **Step Description** | `Plus Jakarta Sans` | `13px–13.5px` | `500` | `#334155` (line-height: `1.4`) |
| **Step Circle Badges** | `Outfit` | `14px` | `900` | `#ffffff` (28px circle) |
| **Rule Title** | `Outfit` | `13.5px` | `800` | `#0f172a` |
| **Rule Description** | `Plus Jakarta Sans` | `12.5px–13px` | `500` | `#334155` |
| **Materials Main Name**| `Plus Jakarta Sans` | `13px–13.5px` | `800` | `#0f172a` |
| **Materials Sub Note** | `Plus Jakarta Sans` | `11.5px` | `500` | `#64748b` |

---

## 📐 Layout & Spacing Rules (Preventing Empty Whitespace)

1. **Slide Structure**:
   - Each slide occupies full viewport: `width: 100vw; height: 100vh; overflow: hidden;`
   - Outer Slide Padding: `16px 24px 68px 24px` (leaves room for floating controls dock).
   - Card Padding: `14px 16px` with `16px` border-radius and `3px` solid borders.

2. **3-Column Grid**:
   - `grid-template-columns: 0.95fr 1.15fr 1.05fr; gap: 14px;`
   - **Column 1 (📸 DIY Reference)**:
     - Single prominent photo craft card filling the column height.
     - Frame: `flex: 1; min-height: 220px; border: 2px solid #fed7aa; background: #fdfaf6;`
     - Image: `object-fit: contain; width: 100%; height: 100%;` with click-to-enlarge lightbox.
     - Frame fills card height without extraneous caption boxes or tips.
   - **Column 2 (🛠️ Setup Guide)**:
     - Vertical stack of step cards (Steps 1 to 6) with `gap: 8px`.
     - Step cards: `padding: 9px 12px; gap: 12px; border-radius: 12px; background: #f8fafc;`
     - Step Badges: 28px rainbow circles (Step 1: Orange `#f97316`, Step 2: Purple `#8b5cf6`, Step 3: Sky `#0284c7`, Step 4: Emerald `#10b981`, Step 5: Pink `#ec4899`, Step 6: Amber `#eab308`).
   - **Column 3 (🎯 How to Play & 📦 What You Need)**:
     - Clean 2-card split: **How to Play** rules on top and **What You Need** materials list on bottom.
     - Materials items feature `18px` circular green checkmarks (`✓`).
     - NO bottom scoring bars or distracting banners in Column 3.

3. **Floating Controls Dock**:
   - Position: `bottom: 16px; left: 50%; transform: translateX(-50%);`
   - Height: `38px`, padding: `6px 16px`, pill border-radius `9999px`, background `#ffffff`, shadow `var(--shadow-dock)`.

---

## 🎮 Game Catalog

1. **Goliath SlingShot**:
   - 10-cup mint/can pyramid with cardboard Goliath topper.
   - 4-step assembly walkthrough and 3 gameplay rules.
   - Reference image: `/images/david_goliath_reference.png`.

2. **Feed Goliath Game**:
   - Cardboard box Goliath face with large mouth cutout and crumpled paper balls.
   - 6-step setup walkthrough and 5 gameplay rules.
   - Reference image: `/images/feed_goliath_reference.png`.

3. **Reaction Ball & Cup Game**:
   - 2 strings or brooms guide a rolling ball into cups along a floor tape track.
   - 4-step setup walkthrough and 5 gameplay rules.
   - Reference image: `/images/reaction_ball_cup_reference.png`.

4. **David & Goliath Sliding Game**:
   - Taped square arena with Goliath bottle cap on center X and 5 colored stones.
   - 5-step setup walkthrough and 6 gameplay rules.
   - Reference image: `/images/david_goliath_sliding_game.png`.

5. **Brook of Elah: River Crossing**:
   - 5 cardboard stepping squares passed hand-to-hand across a 20–30 ft taped river.
   - 4-step setup walkthrough and 5 gameplay rules.
   - Reference image: `/images/brook_river_reference.png`.
   - Setup diagram: `/images/brook_river_setup.png`.

---

## 💻 Tech Stack & Commands

- **Stack**: Vanilla HTML5, Modern ES Modules JS, Pure CSS3 (no frameworks), Web Audio API for sound effects, Vite bundler.
- **Development**: `npm run dev` (launches dev server at `http://localhost:5173/`).
- **Production Build**: `npm run build` (verifies bundle integrity).
