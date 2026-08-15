import { seedToHue } from '../../utils/imageUtils';

/**
 * Plate — an editorial "photography plate" placeholder.
 * Real photography isn't wired up yet, so instead of a broken <img> or a
 * generic gray box, every image slot in this build renders a duotone
 * burgundy/gold plate with a fine line-frame and a monogram — consistent
 * with the site's engraved, academic identity. Once real photos exist,
 * drop them in public/pictures/... and swap <Plate seed="x" /> for
 * <img src="..." alt="..." />.
 *
 * `tone`: 'red' (default) | 'gold' | 'auto' (seed-derived hue, dark=false only)
 */
export default function Plate({ seed = 'default', label, className = '', monogram = 'SAC', dark = false, tone = 'red' }) {
  const hue = seedToHue(seed);
  const id = `plate-${seed}`.replace(/[^a-zA-Z0-9-]/g, '');

  let stopA;
  let stopB;
  let ringColor = '#E4D3A6';
  let textColor = '#E4D3A6';
  let dotColor = '#C6A15B';

  if (tone === 'gold') {
    stopA = '#3D2F12';
    stopB = '#8A6A2A';
    ringColor = '#F7F1E6';
    textColor = '#F7F1E6';
    dotColor = '#F7F1E6';
  } else if (dark) {
    stopA = '#5C0002';
    stopB = '#970003';
  } else {
    stopA = `hsl(${hue}, 38%, 20%)`;
    stopB = `hsl(${(hue + 30) % 360}, 45%, 32%)`;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label || 'Decorative placeholder image'}
    >
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={stopA} />
            <stop offset="100%" stopColor={stopB} />
          </linearGradient>
          <pattern id={`${id}-dots`} width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill={dotColor} opacity="0.18" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill={`url(#${id}-grad)`} />
        <rect width="400" height="400" fill={`url(#${id}-dots)`} />
        <circle cx="200" cy="175" r="72" fill="none" stroke={ringColor} strokeWidth="1" opacity="0.55" />
        <circle cx="200" cy="175" r="58" fill="none" stroke={ringColor} strokeWidth="1" opacity="0.35" />
        <text
          x="200"
          y="192"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="34"
          fill={textColor}
          opacity="0.9"
        >
          {monogram}
        </text>
        <rect x="14" y="14" width="372" height="372" fill="none" stroke={ringColor} strokeWidth="1" opacity="0.4" />
      </svg>
      {label && (
        <span className="absolute bottom-2 left-2 rounded-sm bg-charcoal/60 px-2 py-0.5 font-utility text-[10px] uppercase tracking-widest text-cream-soft/80 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
