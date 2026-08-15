import { motion } from 'framer-motion';
import { Music2, Palette, PenTool, Camera, Mic2, Paintbrush } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Fixed, deterministic placement so nothing shifts on re-render — uneven
// sizes and offsets read as intentional, not random noise.
const cornerDots = [
  { top: '-6%', left: '-3%', size: 22, delay: 0 },
  { top: '-4%', left: '18%', size: 10, delay: 0.3 },
  { top: '8%', left: '-5%', size: 14, delay: 0.6 },
  { top: '-5%', right: '-3%', size: 26, delay: 0.15 },
  { top: '14%', right: '-6%', size: 11, delay: 0.5 },
  { bottom: '-5%', left: '-4%', size: 18, delay: 0.4 },
  { bottom: '10%', left: '-6%', size: 9, delay: 0.7 },
  { bottom: '-6%', right: '-3%', size: 24, delay: 0.2 },
  { bottom: '6%', right: '-5%', size: 13, delay: 0.55 },
  { top: '45%', left: '-6%', size: 8, delay: 0.8 },
  { top: '55%', right: '-5%', size: 15, delay: 0.35 },
];

const iconBadges = [
  { Icon: Music2, top: '-8%', left: '10%', delay: 0.1 },
  { Icon: Camera, top: '-9%', right: '12%', delay: 0.3 },
  { Icon: Paintbrush, bottom: '-8%', left: '14%', delay: 0.5 },
  { Icon: PenTool, bottom: '-9%', right: '9%', delay: 0.2 },
  { Icon: Mic2, top: '38%', left: '-9%', delay: 0.4 },
  { Icon: Palette, top: '48%', right: '-9%', delay: 0.6 },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="About Us" title="About SAC" align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* corner + border circles, uneven sizes */}
          {cornerDots.map((dot, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: dot.delay }}
              className="absolute rounded-full border border-gold/50 bg-gold/15"
              style={{
                width: dot.size,
                height: dot.size,
                top: dot.top,
                bottom: dot.bottom,
                left: dot.left,
                right: dot.right,
              }}
            />
          ))}

          {/* decorative activity icons */}
          {iconBadges.map(({ Icon, delay, ...pos }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay }}
              className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-cream-soft text-gold-dark shadow-sm sm:h-10 sm:w-10"
              style={pos}
            >
              <Icon size={16} />
            </motion.span>
          ))}

          {/* the box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-lg border border-gold/40 bg-cream px-6 py-10 sm:px-12 sm:py-14"
          >
            <p className="text-center font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Welcome to the Student Activity Center (SAC) at KLH University, the vibrant heartbeat
              of our campus community. Driven by our &ldquo;Discover &amp; Develop&rdquo; and
              &ldquo;Create &amp; Innovate&rdquo; philosophies, SAC is dedicated to nurturing student
              talent, leadership, and personal growth outside the traditional classroom. We serve as
              the central hub for student life, managing a diverse array of co-curricular
              clubs&mdash;spanning arts, culture, technology, literature, and sports&mdash;while
              organizing major campus events and technical festivals. By providing dynamic spaces for
              collaboration and creative expression, we empower students to build lifelong skills,
              chase their passions, and create unforgettable university memories.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button as="a" href="#" variant="dark">
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
}
