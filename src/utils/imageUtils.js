// Deterministic tone picker used by <Plate /> placeholders so the same
// seed always renders the same duotone treatment. Swap <Plate seed=".."/>
// for a real <img> once photography is available — see components/ui/Plate.jsx.
export function seedToHue(seed = '') {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}

/**
 * Renders the same visual as <Plate dark /> but as a flat SVG data URI,
 * for contexts that need an actual image URL rather than a React
 * component — e.g. background-image slicing for the ElasticMeshImage
 * grid-warp effect on Event cards.
 */
export function platePlaceholderDataUri({ seed = 'default', monogram = 'E', dark = true } = {}) {
  const hue = seedToHue(seed);
  const stopA = dark ? '#5C0002' : `hsl(${hue}, 38%, 20%)`;
  const stopB = dark ? '#970003' : `hsl(${(hue + 30) % 360}, 45%, 32%)`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${stopA}'/>
        <stop offset='100%' stop-color='${stopB}'/>
      </linearGradient>
      <pattern id='d' width='14' height='14' patternUnits='userSpaceOnUse'>
        <circle cx='1.4' cy='1.4' r='1.4' fill='#C6A15B' opacity='0.22'/>
      </pattern>
    </defs>
    <rect width='400' height='400' fill='url(#g)'/>
    <rect width='400' height='400' fill='url(#d)'/>
    <circle cx='200' cy='175' r='72' fill='none' stroke='#E4D3A6' stroke-width='1.2' opacity='0.6'/>
    <circle cx='200' cy='175' r='58' fill='none' stroke='#E4D3A6' stroke-width='1.2' opacity='0.4'/>
    <text x='200' y='192' text-anchor='middle' font-family='Arial, sans-serif' font-weight='bold' font-size='34' fill='#E4D3A6' opacity='0.9'>${monogram}</text>
    <rect x='14' y='14' width='372' height='372' fill='none' stroke='#E4D3A6' stroke-width='1.2' opacity='0.45'/>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
