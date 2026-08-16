import React, { useRef, useState, useEffect } from "react";
import { useCampus } from "@/hooks/useCampus";
import type { ImpactStat } from "@/data/types";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// ANIMATED COUNT-UP NUMBER COMPONENT
// ---------------------------------------------------------------------------
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.8,
      ease: EASE_PREMIUM,
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [inView, target, prefersReducedMotion]);

  return (
    <span ref={ref} className="font-display font-extrabold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ---------------------------------------------------------------------------
// DEFAULT IMPACT METRICS
// ---------------------------------------------------------------------------
const defaultImpactStats: ImpactStat[] = [
  { value: 9, suffix: "", label: "Active Clubs & Societies" },
  { value: 100, suffix: "+", label: "Events Conducted Annually" },
  { value: 50, suffix: "+", label: "Student Leaders" },
  { value: 12, suffix: "+", label: "Publications & Media" },
];

// Ambient glowing particles (warm golden lights drifting in the burgundy current)
const particles = [
  { id: 1, top: "22%", left: "14%", size: 4, duration: 6.2, delay: 0 },
  { id: 2, top: "28%", left: "82%", size: 3, duration: 5.5, delay: 1.2 },
  { id: 3, top: "68%", left: "20%", size: 5, duration: 7.0, delay: 0.8 },
  { id: 4, top: "75%", left: "78%", size: 3.5, duration: 6.8, delay: 2.1 },
  { id: 5, top: "42%", left: "6%", size: 4, duration: 5.8, delay: 1.5 },
  { id: 6, top: "38%", left: "92%", size: 4.5, duration: 7.4, delay: 0.3 },
  { id: 7, top: "64%", left: "46%", size: 3, duration: 6.0, delay: 2.7 },
  { id: 8, top: "20%", left: "60%", size: 4, duration: 6.5, delay: 1.8 },
];

export function ImpactSection() {
  const { campus } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const impactStats = campus.impactStats || defaultImpactStats;

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#6D0826] py-24 sm:py-28 text-white select-none shadow-2xl"
    >
      {/* =================================================================== */}
      {/* 1. TOP FLOWING RIVER BORDER (Continuous Liquid SVG Waves)           */}
      {/* =================================================================== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-12 md:h-14 overflow-hidden z-20"
      >
        <div className="flex w-[200%] h-full">
          {/* Base Flow Wave 1 (Forward Flow) */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-full h-full"
          >
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,0 C300,30 600,5 900,25 C1050,35 1150,15 1200,0 L1200,0 L0,0 Z" />
            </svg>
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,0 C300,30 600,5 900,25 C1050,35 1150,15 1200,0 L1200,0 L0,0 Z" />
            </svg>
          </motion.div>
        </div>

        {/* Secondary Translucent Wave 2 for Depth */}
        <div className="flex w-[200%] h-full absolute inset-0 opacity-40">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: ["-50%", "0%"],
                  }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-full h-full"
          >
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,0 C250,22 550,8 850,28 C1020,12 1120,24 1200,0 L1200,0 L0,0 Z" />
            </svg>
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,0 C250,22 550,8 850,28 C1020,12 1120,24 1200,0 L1200,0 L0,0 Z" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. BOTTOM FLOWING RIVER BORDER (Counter-Flow Liquid Waves)          */}
      {/* =================================================================== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 md:h-14 overflow-hidden z-20"
      >
        <div className="flex w-[200%] h-full">
          {/* Base Flow Wave 1 (Counter Flow Backward) */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: ["-50%", "0%"],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-full h-full"
          >
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,40 C300,10 600,35 900,15 C1050,5 1150,25 1200,40 L1200,40 L0,40 Z" />
            </svg>
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,40 C300,10 600,35 900,15 C1050,5 1150,25 1200,40 L1200,40 L0,40 Z" />
            </svg>
          </motion.div>
        </div>

        {/* Secondary Translucent Wave 2 for Depth */}
        <div className="flex w-[200%] h-full absolute inset-0 opacity-40">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-full h-full"
          >
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,40 C200,18 500,38 800,12 C1000,28 1100,15 1200,40 L1200,40 L0,40 Z" />
            </svg>
            <svg
              className="w-1/2 h-full shrink-0"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              fill="#FAFAF8"
            >
              <path d="M0,40 C200,18 500,38 800,12 C1000,28 1100,15 1200,40 L1200,40 L0,40 Z" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. AMBIENT DRIFTING WARM PARTICLES                                  */}
      {/* =================================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -12, 0],
                    x: [0, 15, 0],
                    opacity: [0.2, 0.85, 0.2],
                    scale: [0.9, 1.25, 0.9],
                  }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#E5B869] shadow-[0_0_10px_#C99A3D]"
          />
        ))}
      </div>

      {/* Subtle Central Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.16),transparent_70%)] blur-3xl z-0"
      />

      {/* =================================================================== */}
      {/* 4. CENTRAL IMPACT CONTENT (Editorial Layout & Count-Up Numbers)     */}
      {/* =================================================================== */}
      <div className="section-shell relative z-10">
        {/* Eyebrow & Headline */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="text-center space-y-2.5 mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#C99A3D]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.26em] text-[#E5B869]">
              OUR REACH &amp; ENGAGEMENT
            </span>
            <span className="h-px w-6 bg-[#C99A3D]" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-white drop-shadow-sm">
            Our Impact at a Glance
          </h2>
        </motion.div>

        {/* 4 Statistics Columns */}
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:gap-12 text-center">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + idx * 0.1,
                ease: EASE_PREMIUM,
              }}
              className="space-y-2"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-md">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-200/90 max-w-[12rem] mx-auto leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
