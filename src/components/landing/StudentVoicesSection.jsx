import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Plate from '../ui/Plate';
import { studentVoices } from '../../data/studentVoicesData';

export default function StudentVoicesSection() {
  const trackRef = useRef(null);

  function scrollByCard(dir) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const width = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * width, behavior: 'smooth' });
  }

  return (
    <section className="bg-burgundy-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Real Stories. Real Impact." title="Student Voices" light />
          <div className="flex gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {studentVoices.map((v, i) => (
            <motion.div
              key={v.name}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative w-[300px] shrink-0 snap-start rounded-sm border border-gold/15 bg-burgundy p-6 sm:w-[340px]"
            >
              <Quote size={28} className="text-gold/30" />
              <p className="mt-4 font-body text-sm text-cream-soft/85">{v.story}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold/40">
                  <Plate seed={v.seed} monogram={v.name[0]} className="h-full w-full" />
                </div>
                <div>
                  <p className="font-display text-sm text-cream-soft">{v.name}</p>
                  <p className="font-utility text-[10px] uppercase tracking-widest text-gold-light">{v.club}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={13}
                    className={idx < v.rating ? 'fill-gold text-gold' : 'text-cream-soft/20'}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
