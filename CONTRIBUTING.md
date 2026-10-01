# Contributing to Kids Camp Presentation Deck

Thank you for your interest in contributing to the Kids Camp Presentation Deck! We welcome contributions that help improve game guides, accessibility, visual design, and counselor experience.

---

## 🎨 Design Guidelines

All contributions must follow our editorial design system:
1. **Warm Pastel Palette**: Every activity slide uses its signature pastel canvas (`#f4f9ec`, `#fef5f0`, `#fdfbf0`, `#fdf2f4`, etc.).
2. **Zero Audio Dependencies**: No sound effects or background music.
3. **Clean 3-Column Editorial Grid**:
   - Column 1: DIY Craft reference photo + concise materials caption.
   - Column 2: Gameplay diagram + concise 3-step rules.
   - Column 3: Supplies checklist + coach tip.

---

## 🛠️ Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/desmondlee95700/presentation_web.git
   cd presentation_web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local Vite development server:
   ```bash
   npm run dev
   ```
4. Verify the production build:
   ```bash
   npm run build
   ```

---

## 📝 Pull Request Checklist

- [ ] Code follows existing project structure and styling conventions.
- [ ] No audio assets or external heavy widget libraries added.
- [ ] Responsive layout verified on both desktop and mobile viewports.
- [ ] Production build (`npm run build`) succeeds without warnings or errors.
