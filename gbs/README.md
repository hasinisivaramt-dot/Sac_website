# SAC Website — GBS

This is a **standalone** website for the GBS campus. It doesn't depend on
anything outside this folder — you can copy this whole directory anywhere,
or send it to someone else, and it will run on its own.

## Run it

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/` — deploy that folder to any static host.

## Editing content

All of this campus's content lives in `src/campus/`:

- `src/campus/config.js` — name, tagline, theme colors, contact stats
- `src/campus/data/*.js` — hero, about, clubs, events, achievements, gallery,
  visionaries, contact, etc.

Images live in `public/assets/` (e.g. `public/assets/hero/`,
`public/assets/gallery/`) — reference them in the data files as plain paths
like `"/assets/hero/my-photo.jpg"`.

Shared page layout, sections, and UI components live in `src/components/` —
same code structure as the other campus sites, but this copy is independent
of them, so changes here won't affect (or be affected by) other campuses.

## Campus selector

The navigation includes a campus dropdown immediately after **Gallery**.
**GBS** is selected by default when this campus website opens.

The dropdown uses these environment variables:

```env
VITE_AZIZ_NAGAR_URL=http://localhost:5173
VITE_BACHUPALLY_URL=http://localhost:5174
VITE_GBS_URL=http://localhost:5175
```

For production, replace them with the deployed URLs of the three campus sites.
