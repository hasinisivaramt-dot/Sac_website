import { motion } from 'framer-motion';
import { stats } from '../../data/statsData';
import CountUp from '../ui/CountUp';

// Fixed pseudo-random-looking positions/delays for the glitter sparkles so
// they render deterministically (no layout shift, no re-randomizing).
const sparkles = [
  { x: 4, y: 30, delay: 0 }, { x: 12, y: 60, delay: 0.4 }, { x: 20, y: 15, delay: 0.9 },
  { x: 28, y: 70, delay: 0.2 }, { x: 36, y: 40, delay: 1.2 }, { x: 44, y: 20, delay: 0.6 },
  { x: 52, y: 65, delay: 1.5 }, { x: 60, y: 35, delay: 0.1 }, { x: 68, y: 55, delay: 0.8 },
  { x: 76, y: 25, delay: 1.1 }, { x: 84, y: 60, delay: 0.5 }, { x: 92, y: 40, delay: 1.4 },
  { x: 8, y: 45, delay: 1.7 }, { x: 96, y: 20, delay: 0.3 },
];

function WaveLayer({ flip = false }) {
  return (
    <div className="absolute inset-x-0 h-10 overflow-hidden sm:h-14" style={flip ? { bottom: 0, transform: 'rotate(180deg)' } : { top: 0 }}>
      <motion.div
        className="flex h-full w-[200%]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: 'linear' }}
      >
        {[0, 1].map((copy) => (
          <svg key={copy} viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-full w-1/2">
            <path fill="#F7F1E6" fillOpacity="0.35" d="M0,20 C300,80 560,0 860,25 C1120,45 1280,5 1440,30 L1440,0 L0,0 Z" />
            <path fill="#F3AFAF" fillOpacity="0.55" d="M0,35 C260,5 520,70 800,40 C1080,10 1260,55 1440,20 L1440,0 L0,0 Z" />
            <path fill="#F7F1E6" fillOpacity="0.65" d="M0,45 C280,15 540,80 820,45 C1100,15 1240,60 1440,35 L1440,0 L0,0 Z" />
          </svg>
        ))}
      </motion.div>

      {/* red glitter sparkles riding on top of the wave band */}
      <div className="pointer-events-none absolute inset-0">
        {sparkles.map((s, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{ left: `${s.x}%`, top: `${s.y}%`, boxShadow: '0 0 4px 1px rgba(198,161,91,0.9)' }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.6, 1.3, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * "Our Impact at a Glance" — a compact red band with layered, light-red
 * wave edges that scroll continuously, plus a scattering of twinkling
 * gold/red glitter riding on the waves.
 */
export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-14 sm:py-16">
      <WaveLayer />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl font-bold text-cream-soft sm:text-3xl"
        >
          Our Impact at a Glance
        </motion.h2>

        <div className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-7 sm:gap-x-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex flex-col items-center"
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-2xl font-bold tabular-nums text-cream-soft sm:text-3xl"
              />
              <p className="mt-1.5 font-body text-xs text-cream-soft/85 sm:text-sm">{stat.label}</p>
              <span className="mt-2 h-px w-6 bg-cream-soft/50" />
            </motion.div>
          ))}
        </div>
      </div>

      <WaveLayer flip />
    </section>
  );
}
