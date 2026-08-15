import { motion } from 'framer-motion';

/**
 * Shared section heading treatment: a small gold eyebrow rule + label,
 * a serif display heading, and an optional supporting line. Used across
 * every landing-page section so the typographic rhythm stays consistent.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
  children,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className={`h-px w-10 ${light ? 'bg-gold' : 'bg-gold-dark'}`} />
          <span
            className={`font-utility text-xs uppercase tracking-widest2 ${
              light ? 'text-gold-light' : 'text-gold-dark'
            }`}
          >
            {eyebrow}
          </span>
          {align === 'center' && <span className={`h-px w-10 ${light ? 'bg-gold' : 'bg-gold-dark'}`} />}
        </div>
      )}
      <h2
        className={`font-display text-4xl leading-tight sm:text-5xl ${
          light ? 'text-cream-soft' : 'text-burgundy-deep'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl font-body text-base ${light ? 'text-cream-soft/75' : 'text-charcoal/70'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
