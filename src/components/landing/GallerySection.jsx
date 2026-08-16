import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Plate from '../ui/Plate';
import { gallery } from '../../data/galleryData';

const shapeSpan = {
  portrait: 'row-span-2',
  landscape: 'col-span-2',
  square: '',
  wide: 'col-span-2 sm:col-span-3',
};

const shapeAspect = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
};

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Moments That Define Us" title="Gallery" />
          <Button as="a" href="#" variant="ghost" className="shrink-0">
            View More
          </Button>
        </div>

        <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 sm:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.06 }}
              className={`group relative overflow-hidden rounded-sm ${shapeSpan[item.shape]}`}
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} className={`h-full w-full ${shapeAspect[item.shape]}`}>
                <Plate seed={item.seed} monogram={item.category.slice(0, 2)} className="h-full w-full" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 font-utility text-[10px] uppercase tracking-widest text-cream-soft opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
