import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Plate from '../ui/Plate';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function HeroSection({ campus }) {
  const { scrollY } = useScrollAnimation();

  return (
    <section id="home" className="relative flex h-screen min-h-[720px] w-full items-center overflow-hidden bg-burgundy-deep">
      {/* Background plate with slow zoom + parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="h-[120%] w-full"
        >
          <Plate seed={campus.heroImageSeed} monogram="KLH" dark className="h-full w-full" />
        </motion.div>
      </motion.div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/70 to-burgundy-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/60 via-transparent to-burgundy-deep/40" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60 motion-safe:animate-drift"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative gold lines */}
      <div className="pointer-events-none absolute left-10 top-1/4 hidden h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-10 bottom-1/4 hidden h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="font-utility text-xs uppercase tracking-widest2 text-gold-light">
            {campus.fullName}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-cream-soft sm:text-6xl lg:text-7xl"
        >
          Student Activity Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-xl font-body text-lg text-cream-soft/80"
        >
          Empowering student leadership, creativity, and campus life beyond the classroom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 font-utility text-sm uppercase tracking-widest text-burgundy-deep shadow-gold transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_-5px_rgba(198,161,91,0.6)]"
          >
            Explore
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#footer-register"
            className="group inline-flex items-center gap-2 rounded-sm border border-cream-soft/40 px-7 py-3.5 font-utility text-sm uppercase tracking-widest text-cream-soft transition-all duration-300 hover:border-gold hover:bg-cream-soft/5"
          >
            Register
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-utility text-[10px] uppercase tracking-widest2 text-cream-soft/60">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
