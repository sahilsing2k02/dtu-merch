# Project Memory & Progress Log

> **Project:** DTU Merch (Delhi Technological University Merchandise Store)  
> **Location:** `c:\Users\sahil\OneDrive\Desktop\dtu-merch\`  
> **Purpose:** Campus-exclusive heavyweight hoodie store with zero online payment — campus pick-up only.  
> **Context Policy:** Read this file first in every new session.

---

## Current Status
- **Phase:** Published to GitHub & Ready for Deployment
- **GitHub Repository:** https://github.com/sahilsing2k02/dtu-merch
- **Last Updated:** 2026-11-23

---

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State:** React Context (cart-context.tsx)
- **Language:** TypeScript (strict)

---

## Architecture — Key Files
| File | Purpose |
|:--|:--|
| `src/app/page.tsx` | Main storefront (client component, wraps everything in CartProvider) |
| `src/data/products.ts` | 4 hoodie products, size chart, pickup points |
| `src/store/cart-context.tsx` | Cart state: add/remove/qty/clear, totalItems, totalPrice |
| `src/components/announcement-ticker.tsx` | Infinite marquee top bar |
| `src/components/navbar.tsx` | Sticky nav, cart badge, mobile hamburger drawer |
| `src/components/hero-section.tsx` | Hero with "WEAR YOUR LEGACY" headline |
| `src/components/product-card.tsx` | Product card with front/back toggle, color swatches, specs |
| `src/components/product-viewer.tsx` | Full-screen product detail modal with size/color/qty selectors |
| `src/components/size-guide-modal.tsx` | Measurements table (chest, length, shoulder in inches) |
| `src/components/cart-drawer.tsx` | Slide-over cart with WhatsApp order button |
| `src/components/reservation-form.tsx` | Campus pickup form → confirmation with reservation ID |
| `src/components/whatsapp-button.tsx` | Floating WhatsApp pill with ping indicator |
| `src/components/footer.tsx` | Footer with pickup points and coordinates |

---

## Milestones
- [x] Project foundation files (memory, design system, agents, task tracker)
- [x] Next.js + Tailwind + TypeScript + Lucide scaffolding
- [x] Dark luxury streetwear aesthetic (#0A0A0B / #121215 / #800000)
- [x] Infinite marquee announcement ticker
- [x] Responsive navbar with cart counter + mobile drawer
- [x] Hero section with DTU branding
- [x] 4-hoodie product catalog with specs and pricing
- [x] Product cards with front/back toggle + color swatches
- [x] Product viewer modal (front/back, color, size, qty, add to bag)
- [x] Size guide modal with measurement table
- [x] Cart drawer with quantity adjustment
- [x] Campus-only reservation form (name, phone, roll no, branch, pickup point)
- [x] Confirmation modal with generated reservation ID
- [x] WhatsApp floating button with contextual pre-filled queries
- [x] WhatsApp order message formatter in cart
- [x] Production build passing (zero errors)

## Remaining / Future
- [ ] Replace placeholder WhatsApp number (919999999999) with real number
- [ ] Add real hoodie product images (replace gradient placeholders)
- [ ] Light/dark mode toggle
- [ ] Pre-order / custom batch request form
- [ ] DTU roll number verification flow

---

## Session Change Log
- **2026-11-21:** Initialized foundation files
- **2026-11-22:** Built full MVP — all 15 components, dark streetwear UI, campus reservation flow, WhatsApp integration. Build passing.
