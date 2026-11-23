# Agent Guidelines & Token Efficiency Protocol

> **Purpose:** Instructions for any AI coding agent working in this repository to minimize token consumption, maintain continuity, and ship clean code fast.

---

## 1. Always Consult Memory First
- **Start of Session:** Read [memory.md](file:///c:/Users/sahil/OneDrive/Desktop/DTU%20Merch/memory.md) and [TASK.md](file:///c:/Users/sahil/OneDrive/Desktop/DTU%20Merch/TASK.md) before scanning the whole tree.
- **End of Session / Milestone:** Update `memory.md` with what was completed and what remains.

---

## 2. Token Saving Rules
1. **No Redundant Scans:** Do not list files or search directories already known.
2. **Minimal Working Diffs:** Do not re-write entire files when changing single functions or styles.
3. **Concise Explanations:** Explain the *why* in 1–2 sentences, not multi-paragraph essays.
4. **Use Existing Conventions:** Follow patterns from [DESIGN_SYSTEM.md](file:///c:/Users/sahil/OneDrive/Desktop/DTU%20Merch/DESIGN_SYSTEM.md) without debating palette or styling.

---

## 3. Code Standards
- **Simplicity First:** Write the smallest amount of code that fully solves the requirement.
- **Responsive by Default:** Ensure mobile (`375px+`), tablet (`768px+`), and desktop (`1024px+`) viewports look balanced.
- **Self-contained Data:** Keep mock product data in a dedicated `src/data/products.json` or `products.ts` so UI components stay lean.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
