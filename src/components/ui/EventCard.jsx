import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ElasticMeshImage from './ElasticMeshImage';
import { platePlaceholderDataUri } from '../../utils/imageUtils';

export default function EventCard({ event, index = 0 }) {
  const imageSrc = event.image || platePlaceholderDataUri({ seed: event.seed, monogram: 'E' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-lg shadow-premium"
    >
      {/* Image — elastic mesh grid-warp on hover, scoped to just the photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ElasticMeshImage src={imageSrc} alt={event.name} className="h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-center rounded-md bg-burgundy px-3 py-1.5 text-cream-soft shadow-sm">
          <span className="font-display text-xl font-bold leading-none">{event.day}</span>
          <span className="font-utility text-[10px] uppercase tracking-widest leading-none mt-0.5">{event.month}</span>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-charcoal p-5">
        <h3 className="font-display text-lg font-bold text-cream-soft">{event.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 font-body text-sm text-cream-soft/70">
          <MapPin size={14} className="text-gold" /> {event.location}
        </p>
      </div>
    </motion.div>
  );
}
