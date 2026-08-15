# KLH Student Activity Center

A premium, production-structured React + Vite website for KLH University's Student Activity Center, built to serve three campuses (Aziznagar, Bachupally, GBS) from a single codebase.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Design system

- **Palette** — deep burgundy/wine (#5C1A2E, #3A0F1E), gold (#C6A15B), warm cream (#F7F1E6). Defined in `tailwind.config.js`.
- **Type** — Fraunces (display serif), Source Sans 3 (body), Jost (utility/eyebrow labels, small caps tracking).
- **Signature interaction** — the Clubs section's 3D image twirl on hover (`src/components/ui/ClubCard.jsx`), built with Framer Motion + CSS 3D transforms.
- All animation respects `prefers-reduced-motion`.

## Placeholder photography

No real photography was supplied with the brief, so every image slot renders through `src/components/ui/Plate.jsx` — a designed duotone "plate" placeholder (burgundy/gold, fine line-frame, monogram) rather than a broken image icon or generic gray box. It's deterministic per `seed`, so the same club/event/person always renders the same treatment.

**To swap in real photography:** drop files into `public/pictures/...` following the structure in the brief, then replace the relevant `<Plate seed="..." />` with a real `<img src="..." alt="..." />`. The campus hero and principal images are already wired to `campusData.js`'s `heroImageSeed` / `principal.imageSeed` fields — point those at real file paths once photos exist.

## Architecture

- `src/data/` — all content (campus config, clubs, events, competitions, achievements, visionaries, council, testimonials, gallery). UI components read from here; nothing is hardcoded in JSX.
- `src/components/ui/` — reusable primitives (Button, SectionTitle, ClubCard, EventCard, CompetitionCard, ProfileCard, Modal, Plate).
- `src/components/landing/` — one component per landing-page section.
- `src/components/common/` — Navbar, Footer, CampusSelector, ScrollToTop.
- `src/pages/` — `LandingPage.jsx` is fully built; the other route pages (ClubsPage, GalleryPage, etc.) are lightweight stubs on the same design system, ready to be filled in next.
- `src/hooks/useCampus.js` — persists the selected campus (localStorage) and drives all campus-specific content across the app.

## Notes

- Multi-campus switching lives in the navbar (desktop dropdown / mobile list) and updates the hero + principal content immediately — no page reload, no separate app per campus.
- The Student Council "Know More" opens a Framer Motion modal with the full council roster, per the brief.
- Gallery uses a masonry-style grid (mixed portrait/landscape/square/wide cells) rather than a uniform grid.
