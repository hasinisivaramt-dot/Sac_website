import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { globalAsset } from "@/utils/imagePath";
const achievementsImg = globalAsset("achievements.jpg");
const eventTalent = globalAsset("event-talent.jpg");
import { useCampus } from "@/hooks/useCampus";
import { motion, useInView, useScroll, useTransform, useReducedMotion, animate } from "framer-motion";
const EASE_DRIBBBLE = [0.77, 0, 0.175, 1];
const EASE_PREMIUM = [0.22, 1, 0.36, 1];
const EASE_OUT = [0.16, 1, 0.3, 1];

// ---------------------------------------------------------------------------
// PROGRESSIVE ODOMETER COUNT-UP ENGINE WITH LOCALIZATION FORMATTING
// ---------------------------------------------------------------------------
function OdometerCounter({
  target,
  suffix = "+",
  delay = 0
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.25
  });
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplayValue(target.toLocaleString());
      return;
    }
    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        // Natural deceleration curve
        onUpdate: latest => {
          setDisplayValue(Math.floor(latest).toLocaleString());
        }
      });
      return () => controls.stop();
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, delay, prefersReducedMotion]);
  return <span ref={ref} className="font-display font-black tracking-tight">
      {displayValue}
      {suffix}
    </span>;
}

// ---------------------------------------------------------------------------
// STATS DATA (01, 02, 03, 04)
// ---------------------------------------------------------------------------
const defaultStats = [{
  index: "01",
  value: 50,
  suffix: "+",
  label: "Awards Won"
}, {
  index: "02",
  value: 25,
  suffix: "+",
  label: "Competitions"
}, {
  index: "03",
  value: 10,
  suffix: "+",
  label: "National Recognitions"
}, {
  index: "04",
  value: 1000,
  suffix: "+",
  label: "Students Impacted"
}];

// ---------------------------------------------------------------------------
// INDIVIDUAL STATISTIC BLOCK COMPONENT (Progressive Impact Reveal + Hover)
// ---------------------------------------------------------------------------
function StatBlockItem({
  stat,
  idx
}) {
  const prefersReducedMotion = useReducedMotion();
  // Sequential stagger timing: 160ms between columns
  const blockDelay = 0.35 + idx * 0.16;
  return <motion.div initial={{
    opacity: 0,
    y: prefersReducedMotion ? 0 : 35
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.2
  }} transition={{
    duration: 0.9,
    delay: blockDelay,
    ease: EASE_PREMIUM
  }} className="stat-card group flex flex-col space-y-2.5 select-none transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-default">
      {/* 1. Small Index & Extending Gold Line */}
      <div className="flex items-center gap-2.5 overflow-hidden pb-0.5">
        <motion.span initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 8,
        letterSpacing: "0.28em"
      }} whileInView={{
        opacity: 1,
        y: 0,
        letterSpacing: "0.22em"
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.55,
        delay: blockDelay,
        ease: EASE_OUT
      }} className="text-xs font-bold tracking-widest text-[#C99A3D] transition-transform duration-300 group-hover:scale-105">
          {stat.index || `0${idx + 1}`}
        </motion.span>
        <motion.div initial={{
        scaleX: 0
      }} whileInView={{
        scaleX: 1
      }} viewport={{
        once: true,
        amount: 0.2
      }} style={{
        transformOrigin: "left center"
      }} transition={{
        duration: 0.65,
        delay: blockDelay + 0.06,
        ease: EASE_PREMIUM
      }} className="h-[1.5px] bg-[#C99A3D]/50 w-8 transition-[width,background-color] duration-300 group-hover:w-14 group-hover:bg-[#C99A3D]" />
      </div>

      {/* 2. Large Burgundy Number with Blur-to-Sharp Reveal & Count-Up */}
      <div className="overflow-hidden py-0.5">
        <motion.div initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 15,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)"
      }} whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.8,
        delay: blockDelay + 0.1,
        ease: EASE_PREMIUM
      }} className="text-4xl sm:text-5xl md:text-6xl font-black text-[#6D0826] tracking-tight leading-none transition-transform duration-300 ease-out group-hover:scale-[1.03] origin-left">
          <OdometerCounter target={stat.value} suffix={stat.suffix} delay={blockDelay + 0.12} />
        </motion.div>
      </div>

      {/* 3. Descriptive Label (Slides upward 8px while fading in) */}
      <motion.p initial={{
      opacity: 0,
      y: prefersReducedMotion ? 0 : 8
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      amount: 0.2
    }} transition={{
      duration: 0.6,
      delay: blockDelay + 0.24,
      ease: EASE_OUT
    }} className="text-xs md:text-sm font-medium text-[#5A555C] tracking-wide transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-slate-900">
        {stat.label}
      </motion.p>
    </motion.div>;
}

// ---------------------------------------------------------------------------
// MAIN ACHIEVEMENTS SECTION COMPONENT
// ---------------------------------------------------------------------------
export function AchievementsSection() {
  const {
    campus
  } = useCampus();
  const sectionRef = useRef(null);
  const mainImageRef = useRef(null);
  const statsSectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [shiftX, setShiftX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const achievementStatsList = campus.achievements?.stats || [];
  const mainAchieveImg = campus.achievements?.image;
  const secondaryAchieveImg = campus.achievements?.talentImage;
  if (!mainAchieveImg && achievementStatsList.length === 0) {
    return null;
  }

  // Scroll depth parallax
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const textParallaxY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-5, 5]);
  const mainImageParallaxY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const secondaryParallaxY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-15, 15]);

  // =========================================================================
  // CHOREOGRAPHED ANIMATION TIMELINE VARIANTS
  // =========================================================================

  const goldLineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: EASE_PREMIUM,
        delay: 0.0
      }
    }
  };
  const eyebrowVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 18,
      letterSpacing: "0.32em"
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.26em",
      transition: {
        duration: 0.7,
        ease: EASE_PREMIUM,
        delay: 0.1
      }
    }
  };
  const yearBadgeVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.92,
      y: prefersReducedMotion ? 0 : 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: EASE_OUT,
        delay: 0.2
      }
    }
  };
  const headingLineVariants = delay => ({
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? "0%" : "100%"
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.95,
        ease: EASE_DRIBBBLE,
        delay
      }
    }
  });
  const descVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 25,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: EASE_OUT,
        delay: 0.65
      }
    }
  };
  const mainImageMaskVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 1.04,
      clipPath: prefersReducedMotion ? "inset(0% 0% 0% 0%)" : "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 1.3,
        ease: EASE_DRIBBBLE,
        delay: 0.9
      }
    }
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_PREMIUM,
        delay: 1.1
      }
    }
  };
  const captionVariants = delay => ({
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 12
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_OUT,
        delay
      }
    }
  });
  const secondaryImageVariants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : 35,
      y: prefersReducedMotion ? 0 : 25,
      scale: prefersReducedMotion ? 1 : 0.92
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: EASE_PREMIUM,
        delay: 1.45
      }
    }
  };

  // Cursor Parallax on Main Image
  const handleMouseMove = e => {
    if (prefersReducedMotion || !mainImageRef.current) return;
    const rect = mainImageRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    setShiftX(normalizedX * 36);
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setShiftX(0);
    setIsHovering(false);
  };
  return <section id="achievements" ref={sectionRef} className="relative overflow-hidden bg-[#FAFAF8] py-20 sm:py-24 md:py-28 border-b border-[#EAE6DF]">
      {/* Subtle Ambient Warm Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[32rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6D0826]/4 blur-3xl" />
      </div>

      <div className="w-[92vw] max-w-[1500px] mx-auto px-3 sm:px-6">
        {/* =============================================================== */}
        {/* TOP ROW: EDITORIAL SHOWCASE (TEXT + 2 HERO PHOTOGRAPHS)          */}
        {/* =============================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* ============================================================= */}
          {/* LEFT COLUMN: EDITORIAL RECOGNITION CONTENT                    */}
          {/* ============================================================= */}
          <motion.div style={{
          y: textParallaxY
        }} className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Stage 1: Eyebrow & Stage 2: Year Badge */}
            <div className="flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <motion.span variants={goldLineVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.25
              }} style={{
                transformOrigin: "left center"
              }} className="h-px w-8 bg-[#C99A3D]" />
                <motion.span variants={eyebrowVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.25
              }} className="text-[11px] font-black uppercase text-[#C99A3D]">
                  RECOGNITION &middot; EXCELLENCE &middot; IMPACT
                </motion.span>
              </div>

              <motion.span variants={yearBadgeVariants} initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.25
            }} className="hidden sm:inline-block rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C99A3D] border border-amber-200/60 shadow-sm">
                2024 &mdash; 2026
              </motion.span>
            </div>

            {/* Stage 3: Masked Staggered Heading Lines */}
            <div className="select-none space-y-1">
              <div className="overflow-hidden pb-1">
                <motion.h2 variants={headingLineVariants(0.3)} initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.25
              }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.02] tracking-tight">
                  Celebrating
                </motion.h2>
              </div>
              <div className="overflow-hidden pb-1">
                <motion.h2 variants={headingLineVariants(0.42)} initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.25
              }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#6D0826] leading-[1.02] tracking-tight">
                  Student Excellence.
                </motion.h2>
              </div>
            </div>

            {/* Stage 4: Description with Soft Blur Dissolve */}
            <motion.p variants={descVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} className="max-w-xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#5A555C]">
              SAC students and clubs continue to achieve excellence across
              diverse platforms, winning top honours at inter-college, state,
              and national stages every year.
            </motion.p>

            {/* Stage 6: Explore Achievements Button */}
            <motion.div variants={buttonVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} className="pt-2">
              <a href="#achievements" className="group inline-flex items-center gap-3 rounded-2xl bg-[#6D0826] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-[#430518] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/10">
                <span className="tracking-wide">Explore Achievements</span>
                <ArrowRight size={16} className="text-[#C99A3D] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* ============================================================= */}
          {/* RIGHT COLUMN: MAIN HERO TROPHY IMAGE + OVERLAPPING SECONDARY   */}
          {/* ============================================================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] pb-10 sm:pb-12 md:pb-14 pr-6 sm:pr-8 md:pr-10">
              {/* Offset Gold Decorative Backplate */}
              <div aria-hidden className="absolute inset-0 top-3 left-3 bottom-12 right-8 rounded-[28px] border-2 border-[#C99A3D]/40 bg-amber-50/20 -z-10 pointer-events-none" />

              {/* 1. Main Hero Trophy Image Container */}
              <motion.div ref={mainImageRef} style={{
              y: mainImageParallaxY
            }} variants={mainImageMaskVariants} initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.25
            }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.22)] border border-slate-200/90 aspect-[16/11] sm:aspect-[16/10.5] group cursor-pointer">
                {/* Inner Sliding Parallax Image with Smooth Inertia */}
                <motion.div animate={{
                x: shiftX,
                scale: isHovering ? 1.025 : 1
              }} transition={isHovering ? {
                type: "spring",
                stiffness: 140,
                damping: 22,
                mass: 0.7
              } : {
                duration: 0.75,
                ease: EASE_OUT
              }} className="h-full w-full">
                  <img src={mainAchieveImg} alt={`${campus.name} student achievers celebrating victory with trophy`} loading="lazy" decoding="async" className="h-full w-full object-cover object-center transition-[filter] duration-500 group-hover:contrast-[1.03]" />
                </motion.div>

                {/* Soft Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-10" />

                {/* Subtle Cinematic Dark Gradient Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top-Left Floating Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 rounded-xl bg-black/60 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/15 shadow-xl select-none">
                  <Trophy size={14} className="text-[#C99A3D]" />
                  <span className="tracking-wide">National Champions</span>
                </div>

                {/* Main Image Sequential Captions */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white space-y-1 select-none">
                  <motion.p variants={captionVariants(1.35)} initial="hidden" whileInView="visible" viewport={{
                  once: true,
                  amount: 0.25
                }} className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C99A3D]">
                    VICTORY MOMENTS
                  </motion.p>
                  <motion.h3 variants={captionVariants(1.45)} initial="hidden" whileInView="visible" viewport={{
                  once: true,
                  amount: 0.25
                }} className="font-display text-base sm:text-lg md:text-xl font-bold leading-tight text-white drop-shadow-md">
                    Inter-University Overall Championship
                  </motion.h3>
                </div>
              </motion.div>

              {/* 2. Secondary Overlapping Photograph */}
              <motion.div style={{
              y: secondaryParallaxY
            }} animate={{
              x: shiftX * 0.22
            }} transition={{
              type: "spring",
              stiffness: 140,
              damping: 22,
              mass: 0.7
            }} variants={secondaryImageVariants} initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.25
            }} className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-3 w-40 sm:w-48 md:w-56 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)] border-3 border-white ring-2 ring-[#C99A3D]/40 group transition-transform duration-400 hover:-translate-y-1.5 hover:scale-[1.02] cursor-pointer select-none">
                <img src={secondaryAchieveImg} alt={`${campus.name} student holding champion trophy`} loading="lazy" decoding="async" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                    Grand Trophy Winner
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* BOTTOM ROW: PROGRESSIVE IMPACT REVEAL STATISTICS TIMELINE        */}
        {/* =============================================================== */}
        <motion.div ref={statsSectionRef} initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.25
      }} transition={{
        duration: 1.0,
        ease: EASE_PREMIUM
      }} className="relative mt-16 sm:mt-20 md:mt-24 pt-10 sm:pt-12">
          {/* Top Gold Guide Line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] overflow-hidden">
            <motion.div initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true,
            amount: 0.2
          }} style={{
            transformOrigin: "left center"
          }} transition={{
            duration: 1.2,
            ease: EASE_PREMIUM
          }} className="h-full w-full bg-[#EAE6DF]" />
            <motion.div initial={{
            x: "-100%"
          }} whileInView={{
            x: "200%"
          }} viewport={{
            once: true,
            amount: 0.2
          }} transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }} className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-[#C99A3D]/70 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-8 md:grid-cols-4 lg:gap-10">
            {achievementStatsList.map((stat, idx) => <StatBlockItem key={`${stat.label}-${idx}`} stat={stat} idx={idx} />)}
          </div>
        </motion.div>
      </div>
    </section>;
}