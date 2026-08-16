import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Plate from '../ui/Plate';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm shadow-premium"
        >
          <Plate seed="achievements-hero" monogram="A" className="aspect-[4/5] w-full" />
          <div className="absolute left-6 top-6 h-16 w-px bg-gold" />
        </motion.div>

        <SectionTitle
          eyebrow="Recognised. Celebrated."
          title="Achievements"
          subtitle="From state-level dance championships to national photography honours, SAC students carry the KLH name onto stages far beyond campus. Every achievement here began as a small step inside a club room — mentored, rehearsed, and backed by the Center."
        >
          <Button as="a" href="#" variant="dark" className="mt-2">
            View All Achievements
          </Button>
        </SectionTitle>
      </div>
    </section>
  );
}
