import React from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { competitions } from "@/lib/sac-data";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function CompetitionsSection() {
  const prefersReducedMotion = useReducedMotion();
  const displayCompetitions = competitions.slice(0, 6);

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.75, ease: EASE_PREMIUM },
    },
  };

  const titleMaskVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : "100%",
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE_PREMIUM, delay: 0.08 },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 8, letterSpacing: "0.26em" },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.22em",
      transition: { duration: 0.75, ease: EASE_PREMIUM, delay: 0.2 },
    },
  };

  return (
    <section id="competitions" className="relative bg-[#FAFAF8] py-20 md:py-24 border-b border-[#EAE6DF]">
      <div className="section-shell">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center select-none"
        >
          <div className="flex items-center gap-3.5">
            <motion.span
              variants={lineVariants}
              style={{ transformOrigin: "right center" }}
              className="h-px w-10 sm:w-14 bg-[#C99A3D]"
            />

            <div className="overflow-hidden pb-0.5">
              <motion.h2
                variants={titleMaskVariants}
                className="font-display text-3xl font-extrabold text-[#6D0826] sm:text-4xl md:text-[2.65rem] tracking-tight"
              >
                Competitions
              </motion.h2>
            </div>

            <motion.span
              variants={lineVariants}
              style={{ transformOrigin: "left center" }}
              className="h-px w-10 sm:w-14 bg-[#C99A3D]"
            />
          </div>

          <motion.p
            variants={subtitleVariants}
            className="mt-2 text-xs sm:text-sm font-semibold uppercase text-[#C99A3D]"
          >
            Challenge yourself. Showcase your talent.
          </motion.p>
        </motion.div>

        {/* Competitions Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCompetitions.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.12, ease: EASE_PREMIUM }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6D0826]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                    <Trophy size={11} className="text-[#C99A3D]" />
                    {comp.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-base sm:text-lg font-bold leading-snug group-hover:text-amber-200 transition-colors uppercase tracking-wide">
                    {comp.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-amber-100/75">{comp.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE_PREMIUM }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#competitions"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#6D0826] px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-[#430518] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>View More Competitions</span>
            <ArrowRight
              size={15}
              className="text-[#C99A3D] transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
