import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useCampus } from "@/hooks/useCampus";
import type { Visionary } from "@/data/types";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// ---------------------------------------------------------------------------
// INDIVIDUAL VISIONARY CARD WITH LARGE PORTRAIT & LIGHT SWEEP
// ---------------------------------------------------------------------------

function VisionaryProfileCard({
  person,
  index,
}: {
  person: Visionary;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Base entrance delay per profile
  const baseDelay = 0.85 + index * 0.1;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 45,
      scale: prefersReducedMotion ? 1 : 0.94,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: EASE_PREMIUM,
        delay: baseDelay,
      },
    },
  };

  const nameVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_OUT,
        delay: baseDelay + 0.25,
      },
    },
  };

  const roleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_OUT,
        delay: baseDelay + 0.38,
      },
    },
  };

  const circleStrokeVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: EASE_PREMIUM,
        delay: baseDelay + 0.05,
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || "ontouchstart" in window) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4; // subtle 2px max
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
    setMouseOffset({ x, y });
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMouseOffset({ x: 0, y: 0 });
      }}
      className="group flex flex-col items-center text-center select-none"
    >
      {/* =================================================================== */}
      {/* 1. LARGE CIRCULAR PORTRAIT (Significantly increased scale)          */}
      {/* =================================================================== */}
      <motion.div
        animate={{
          x: isHovered ? mouseOffset.x : 0,
          y: isHovered ? mouseOffset.y : 0,
          scale: isHovered ? 1.035 : 1,
        }}
        transition={{
          duration: isHovered ? 0.2 : 0.45,
          ease: EASE_PREMIUM,
        }}
        className="relative aspect-square w-36 sm:w-44 md:w-52 lg:w-56 xl:w-64 overflow-hidden rounded-full bg-slate-50 shadow-[0_16px_36px_-12px_rgba(109,8,38,0.2)] transition-shadow duration-400 group-hover:shadow-[0_22px_45px_-10px_rgba(201,154,61,0.35)]"
      >
        {/* Leader High-Resolution Photograph */}
        <img
          src={person.image}
          alt={person.name}
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-[filter,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:contrast-[1.05]"
        />

        {/* Circular Gold Stroke Drawing Animation SVG Overlay */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={circleStrokeVariants}
          />
        </svg>

        {/* Subtle Diagonal Light Highlight Sweep on Hover */}
        <div
          className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out ${
            isHovered ? "translate-x-full" : "-translate-x-full"
          }`}
        />
      </motion.div>

      {/* =================================================================== */}
      {/* 2. STAGGERED NAME REVEAL                                            */}
      {/* =================================================================== */}
      <motion.h3
        variants={nameVariants}
        className="mt-5 sm:mt-6 font-display text-base sm:text-lg md:text-xl font-bold text-[#272329] transition-colors duration-300 group-hover:text-[#6D0826] leading-snug max-w-[15rem]"
      >
        {person.name}
      </motion.h3>

      {/* =================================================================== */}
      {/* 3. STAGGERED DESIGNATION REVEAL                                     */}
      {/* =================================================================== */}
      <motion.p
        variants={roleVariants}
        className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C99A3D] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        {person.role}
      </motion.p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// MAIN VISIONARIES SECTION COMPONENT
// ---------------------------------------------------------------------------

export function VisionariesSection() {
  const { campus } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const displayVisionaries = campus.visionaries || [];

  // 1. Two Gold Decorative Lines (0.0s)
  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: EASE_PREMIUM,
        delay: 0.0,
      },
    },
  };

  // 2. "Visionaries" Staggered Mask Reveal (0.1s)
  const titleMaskVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 50,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.95,
        ease: EASE_PREMIUM,
        delay: 0.1,
      },
    },
  };

  // 3. "GUIDING · INSPIRING · LEADING" Subtitle Reveal (0.6s)
  const subtitleVariants: Variants = {
    hidden: {
      opacity: 0,
      letterSpacing: "0.35em",
      y: 12,
    },
    visible: {
      opacity: 1,
      letterSpacing: "0.22em",
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE_OUT,
        delay: 0.55,
      },
    },
  };

  return (
    <section
      id="visionaries"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28 border-b border-[#EAE6DF]"
    >
      {/* Subtle Ambient Background Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[60rem] rounded-full bg-[#C99A3D]/5 blur-3xl" />
      </div>

      <div className="w-[94vw] max-w-[1560px] mx-auto px-3 sm:px-6">
        {/* ================================================================= */}
        {/* 1. SECTION HEADING & EDITORIAL SUBTITLE                           */}
        {/* ================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center select-none"
        >
          {/* Main Title & Expanding Gold Rules */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            <motion.span
              variants={lineVariants}
              style={{ transformOrigin: "right center" }}
              className="h-px w-12 sm:w-16 md:w-24 bg-[#C99A3D]"
            />

            <div className="overflow-hidden pb-1">
              <motion.h2
                variants={titleMaskVariants}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#6D0826] tracking-tight uppercase"
              >
                Visionaries
              </motion.h2>
            </div>

            <motion.span
              variants={lineVariants}
              style={{ transformOrigin: "left center" }}
              className="h-px w-12 sm:w-16 md:w-24 bg-[#C99A3D]"
            />
          </div>

          {/* Subtitle with Letter-Spacing Animation */}
          <motion.p
            variants={subtitleVariants}
            className="mt-3 text-xs sm:text-sm font-semibold uppercase text-[#C99A3D]"
          >
            Guiding &middot; Inspiring &middot; Leading
          </motion.p>
        </motion.div>

        {/* ================================================================= */}
        {/* 2. LEADERSHIP PROFILES (Large-Scale Editorial Presentation)       */}
        {/* ================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-10 xl:gap-14"
        >
          {displayVisionaries.map((person, index) => (
            <VisionaryProfileCard
              key={`${person.name}-${index}`}
              person={person}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
