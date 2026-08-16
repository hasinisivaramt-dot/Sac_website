import { motion } from 'framer-motion';

/** The rainbow + gold foil sheen used by holographic tilt cards (see useHoloTilt). */
export default function HoloSheen({ sheenX, sheenY, sheenOpacity }) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-color-dodge"
        style={{
          opacity: sheenOpacity,
          background: `radial-gradient(circle at ${sheenX} ${sheenY},
            rgba(255,255,255,0.55) 0%,
            rgba(255,120,120,0.35) 12%,
            rgba(255,200,100,0.35) 24%,
            rgba(255,255,120,0.3) 36%,
            rgba(120,255,170,0.3) 48%,
            rgba(120,200,255,0.3) 60%,
            rgba(190,140,255,0.3) 72%,
            transparent 85%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: sheenOpacity,
          background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(228,211,166,0.45) 0%, transparent 45%)`,
        }}
      />
    </>
  );
}
