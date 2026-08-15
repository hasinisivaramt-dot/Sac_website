import { motion } from 'framer-motion';
import Plate from './Plate';

export default function CompetitionCard({ competition, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm shadow-premium"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plate seed={competition.seed} monogram="C" className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/95 via-burgundy-deep/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl text-cream-soft">{competition.name}</h3>
          <p className="mt-2 max-h-0 overflow-hidden font-body text-xs text-cream-soft/75 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
            {competition.info}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
