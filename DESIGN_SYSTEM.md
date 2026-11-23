# DTU Merch Design System & UI Guide

> Quick-reference design tokens to generate responsive, beautiful UI rapidly without re-prompting or wasting tokens.

---

## 1. Brand Identity & Colors
Reflects Delhi Technological University (DTU / DCE) varsity legacy with modern collegiate streetwear aesthetics.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **DTU Crimson / Maroon** | `#800020` / `#7B1113` | Primary brand color, headers, CTAs, varsity badges |
| **Varsity Navy** | `#0B132B` | Secondary dark, deep contrast text, dark mode accents |
| **DTU Gold / Ochre** | `#E5A93C` / `#D4AF37` | Badges, accents, stars, celebratory elements |
| **Slate Dark** | `#0F172A` | Primary body text, dark backgrounds |
| **Card White** | `#FFFFFF` | Product cards, clean containers |
| **Off-White / Cream** | `#F8F9FA` | Page background, collegiate heritage feel |
| **Border Gray** | `#E2E8F0` | Subtle clean card borders and dividers |

---

## 2. Typography
- **Headings:** Bold sans-serif or modern athletic slab (`Inter`, `Montserrat`, or `Oswald` for varsity numbers/slogans)
- **Body:** Clean readable sans-serif (`Inter`, `system-ui`)
- **Varsity Accents:** Uppercase, tracking-wider (`tracking-wide` / `tracking-widest`), font-bold

---

## 3. Core Component Standards
- **Product Cards:**
  - Aspect ratio 4:5 or 1:1 image container with subtle hover zoom (`hover:scale-105 transition-transform duration-300`).
  - Clear pill badges (`New Arrival`, `Bestseller`, `DTU Batch of '26`).
  - Direct price display in INR (`₹999`, `₹1,499`) with original strike-through for student discounts.
  - Quick "Add to Bag" or size chip picker.
- **Header / Navigation:**
  - Sticky header with glassmorphism (`backdrop-blur-md bg-white/90`).
  - DTU Merch crest/logo mark, Search bar, Category links, Cart icon with badge counter.
  - Responsive hamburger drawer for mobile viewports (`< 768px`).
- **Responsive Breakpoints (Mobile First):**
  - `sm` (640px): 2-column product grid
  - `md` (768px): Desktop nav, tablet layout
  - `lg` (1024px): 3 or 4-column product grid, full filter sidebar

---

## 4. Token-Saving Rapid Styling Tips
- Rely on utility classes (Tailwind CSS) instead of custom verbose CSS files.
- Use flexbox/grid primitives rather than heavy animation libraries.
- Keep SVG icons inline and concise (Heroicons/Lucide style).
