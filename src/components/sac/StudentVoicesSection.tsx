import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import { useCampus } from "@/hooks/useCampus";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function StudentVoicesSection() {
  const { campus } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const [activeDot, setActiveDot] = useState(0);
  const displayTestimonials = campus.testimonials || [];

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
    <section id="student-voices" className="relative bg-white py-20 md:py-24 border-b border-[#EAE6DF]">
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
                Student Voices
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
            Real stories. Real impact.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.map((t, idx) => (
            <motion.div
              key={`${t.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: EASE_PREMIUM }}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#FAFAF8] p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-[#C99A3D]/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-13 w-13 rounded-full object-cover border-2 border-[#C99A3D]"
                    />
                    <div>
                      <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                        {t.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#6D0826]">{t.club}</p>
                    </div>
                  </div>

                  <Quote className="h-6 w-6 text-[#C99A3D]/40" />
                </div>

                <div className="mt-5">
                  <p className="text-sm leading-relaxed text-[#5A555C] italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1 text-[#C99A3D] pt-4 border-t border-slate-200/60">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#C99A3D]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setActiveDot(dot)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === dot ? "w-7 bg-[#6D0826]" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
