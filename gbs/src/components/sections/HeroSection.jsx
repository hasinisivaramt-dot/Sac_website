import React from "react";
import { ArrowRight } from "lucide-react";
import { globalAsset } from "@/utils/imagePath";
const heroCampus = globalAsset("hero-campus.jpg");
import { useCampus } from "@/hooks/useCampus";
import { motion, useReducedMotion } from "framer-motion";
const EASE_PREMIUM = [0.22, 1, 0.36, 1];
const EASE_OUT = [0.16, 1, 0.3, 1];
export function HeroSection() {
  const {
    campus
  } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const labelVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      letterSpacing: "0.3em"
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.24em",
      transition: {
        duration: 0.75,
        ease: EASE_PREMIUM
      }
    }
  };
  const lineMaskVariants = delay => ({
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
        duration: 0.95,
        ease: EASE_PREMIUM,
        delay
      }
    }
  });
  const quoteVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: EASE_OUT,
        delay: 0.3
      }
    }
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      y: 16
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: EASE_PREMIUM,
        delay: 0.45
      }
    }
  };
  const heroImage = campus.hero?.image;
  const eyebrowText = campus.hero?.eyebrow;
  const titleText = campus.hero?.title;
  const subtitleText = campus.hero?.subtitle;
  if (!titleText || !heroImage) {
    return null;
  }
  return <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-20">
      {/* Background Image */}
      <img src={heroImage} alt={`${campus.name} Student Activity Center campus life`} width={1920} height={1080} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />

      {/* Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/88 via-black/65 to-black/30" />

      {/* Subtle Warm Particle Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-[#C99A3D]/15 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[#6D0826]/20 blur-3xl" />
      </div>

      <div className="section-shell w-full py-20 md:py-28">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow Label */}
          <motion.div initial="hidden" animate="visible" className="flex items-center gap-3 select-none">
            <span className="h-px w-8 bg-[#C99A3D]" />
            <motion.span variants={labelVariants} className="text-xs font-black uppercase text-[#C99A3D]">
              {eyebrowText}
            </motion.span>
          </motion.div>

          {/* Staggered Masked Reveal Hero Heading */}
          <div className="space-y-1 select-none">
            <div className="overflow-hidden pb-1">
              <motion.h1 variants={lineMaskVariants(0.1)} initial="hidden" animate="visible" className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.05]">
                {titleText}
              </motion.h1>
            </div>
          </div>

          {/* Subtitle Quote with Blur Dissolve */}
          <motion.div variants={quoteVariants} initial="hidden" animate="visible" className="flex items-start gap-2.5 text-base sm:text-lg md:text-xl font-medium text-amber-100/90 italic">
            <span className="text-[#C99A3D] text-2xl font-serif leading-none">
              &ldquo;
            </span>
            <p className="leading-relaxed">
              {subtitleText}
            </p>
            <span className="text-[#C99A3D] text-2xl font-serif leading-none">
              &rdquo;
            </span>
          </motion.div>

          {/* Action Buttons with Subtle Lift & Arrow Shift */}
          <motion.div variants={buttonVariants} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#clubs" className="group inline-flex items-center gap-2.5 rounded-xl bg-[#6D0826] px-7 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#430518] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10">
              <span>Explore</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a href="#about" className="group inline-flex items-center gap-2.5 rounded-xl bg-[#C99A3D] px-7 py-3 text-sm font-bold text-[#1F2933] shadow-lg hover:bg-[#D9B771] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              <span>Register</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}