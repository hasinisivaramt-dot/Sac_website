import { motion } from 'framer-motion';
import Plate from './Plate';

export default function ProfileCard({ name, designation, seed, index = 0, extra }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center gap-4 text-center"
    >
      <div className="relative">
        <div className="absolute -inset-1.5 rounded-full border border-gold/40 transition-all duration-500 group-hover:border-gold group-hover:-inset-2.5" />
        <div className="h-32 w-32 overflow-hidden rounded-full shadow-gold">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="h-full w-full">
            <Plate seed={seed} monogram={name.split(' ').map((w) => w[0]).slice(0, 2).join('')} className="h-full w-full" />
          </motion.div>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg text-burgundy-deep">{name}</h3>
        <p className="font-utility text-xs uppercase tracking-widest text-gold-dark">{designation}</p>
        {extra && <p className="mt-1 font-body text-xs text-charcoal/60">{extra}</p>}
      </div>
    </motion.div>
  );
}
