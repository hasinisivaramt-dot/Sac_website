import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Plate from './Plate';
import HoloSheen from './HoloSheen';
import { useHoloTilt } from '../../hooks/useHoloTilt';

/**
 * ClubCard — holographic tilt-card. The photo stays whole; on hover the
 * card tilts toward the cursor in 3D and a rainbow/gold foil sheen tracks
 * the pointer across it, like a trading card catching the light.
 */
export default function ClubCard({ club, index = 0 }) {
  const Icon = Icons[club.icon] || Icons.Sparkles;
  const { cardRef, rotateX, rotateY, sheenX, sheenY, sheenOpacity, handlers } = useHoloTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      {...handlers}
      className="group relative w-full"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="relative aspect-[1/2] overflow-hidden rounded-md sm:rounded-lg shadow-premium"
      >
        <motion.div
          className="absolute inset-0 motion-reduce:!rotate-0"
          style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
        >
          {club.image ? (
            <img
              src={club.image}
              alt={club.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <Plate seed={club.id} dark monogram={club.name.slice(0, 2).toUpperCase()} className="h-full w-full" />
          )}

          <HoloSheen sheenX={sheenX} sheenY={sheenY} sheenOpacity={sheenOpacity} />
        </motion.div>

        {/* subtle top-to-bottom overlay so the label bar reads cleanly */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/40 via-transparent to-transparent" />

        {/* permanent bottom label bar */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 bg-burgundy-deep/90 px-1 py-1.5 backdrop-blur-sm sm:flex-row sm:gap-2 sm:px-3 sm:py-3">
          <motion.div
            whileHover={{ scale: 1.15, rotate: -8 }}
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-burgundy-deep sm:h-7 sm:w-7 lg:h-8 lg:w-8"
          >
            <Icon className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
          </motion.div>
          <h3 className="text-center font-body text-[8px] font-semibold leading-tight text-cream-soft sm:text-left sm:text-xs lg:text-sm">
            {club.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
