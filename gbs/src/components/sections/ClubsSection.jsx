import React from "react";
import { ClubCard } from "./ClubCard";
import { useCampus } from "@/hooks/useCampus";
import { motion, useReducedMotion } from "framer-motion";
const EASE_PREMIUM = [0.22, 1, 0.36, 1];
export function ClubsSection() {
  const {
    campus
  } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const displayClubs = campus.clubs || [];
  if (displayClubs.length === 0) {
    return null;
  }
  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: EASE_PREMIUM
      }
    }
  };
  const titleMaskVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : "100%",
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: EASE_PREMIUM,
        delay: 0.08
      }
    }
  };
  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 8,
      letterSpacing: "0.3em"
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.25em",
      transition: {
        duration: 0.75,
        ease: EASE_PREMIUM,
        delay: 0.2
      }
    }
  };
  return <section id="clubs" className="relative bg-[#FAFAF8] py-16 md:py-20 border-b border-[#EAE6DF]">
      <div className="section-shell">
        {/* Section Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }} className="flex flex-col items-center text-center select-none">
          <div className="flex items-center gap-3.5">
            <motion.span variants={lineVariants} style={{
            transformOrigin: "right center"
          }} className="h-px w-10 sm:w-14 bg-[#C99A3D]" />

            <div className="overflow-hidden pb-0.5">
              <motion.h2 variants={titleMaskVariants} className="font-display text-3xl font-extrabold text-[#6D0826] sm:text-4xl md:text-[2.65rem] tracking-tight">
                Clubs
              </motion.h2>
            </div>

            <motion.span variants={lineVariants} style={{
            transformOrigin: "left center"
          }} className="h-px w-10 sm:w-14 bg-[#C99A3D]" />
          </div>

          <motion.p variants={subtitleVariants} className="mt-2 text-xs font-bold uppercase text-[#C99A3D]">
            Explore. Engage. Excel.
          </motion.p>
        </motion.div>

        {/* Club Cards */}
        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-8">
          {displayClubs.map((club, idx) => <motion.div key={`${club.name}-${idx}`} initial={{
          opacity: 0,
          y: 25
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.55,
          delay: idx * 0.05,
          ease: EASE_PREMIUM
        }}>
              <ClubCard name={club.name} image={club.image} icon={club.icon} />
            </motion.div>)}
        </div>
      </div>
    </section>;
}