import React, { useRef } from "react";
import { ArrowRight, Users, HeartHandshake, TrendingUp, Star } from "lucide-react";
import aboutImg from "@/assets/about-collaboration.jpg";
import { useCampus } from "@/hooks/useCampus";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
const EASE_DRIBBBLE = [0.77, 0, 0.175, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const defaultPillars = [
  {
    icon: Users,
    title: "Student-Led",
    desc: "Driven by students, for students.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative",
    desc: "Working together to achieve greater impact.",
  },
  {
    icon: TrendingUp,
    title: "Purposeful",
    desc: "Creating initiatives that create change.",
  },
  {
    icon: Star,
    title: "Inclusive",
    desc: "A platform for every student to shine.",
  },
];

export function AboutSection() {
  const { campus } = useCampus();
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------
  // REACT BITS / AWWWARDS 3D MOUSE-TRACKING SPRING ENGINE
  // -------------------------------------------------------------------------
  const mouseX = useSpring(0, { stiffness: 180, damping: 24, mass: 0.6 });
  const mouseY = useSpring(0, { stiffness: 180, damping: 24, mass: 0.6 });

  // 3D Rotational & Translational Parallax
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // =========================================================================
  // SCROLL-DRIVEN STAGGERED REVEAL VARIANTS
  // =========================================================================

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: EASE_PREMIUM, delay: 0.0 },
    },
  };

  const labelVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      letterSpacing: "0.3em",
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.24em",
      transition: { duration: 0.75, ease: EASE_PREMIUM, delay: 0.08 },
    },
  };

  const headingMaskVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? "0%" : "105%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1.0,
        ease: EASE_DRIBBBLE,
        delay: 0.16,
      },
    },
  };

  const descVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 25,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: EASE_OUT,
        delay: 0.28,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_PREMIUM,
        delay: 0.4,
      },
    },
  };

  const canvasVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.97,
      y: prefersReducedMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.05,
        ease: EASE_PREMIUM,
        delay: 0.22,
      },
    },
  };

  if (!campus.about?.title || !campus.about?.image) {
    return null;
  }

  const aboutPillars =
    campus.about?.pillars && campus.about.pillars.length > 0
      ? campus.about.pillars.map((p, idx) => ({
          ...p,
          icon: defaultPillars[idx % defaultPillars.length]?.icon || Users,
        }))
      : defaultPillars;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28 border-b border-[#EAE6DF]"
    >
      <div className="w-[92vw] max-w-[1500px] mx-auto px-3 sm:px-6">
        {/* =============================================================== */}
        {/* TOP ROW: 2-COLUMN EDITORIAL SHOWCASE                            */}
        {/* =============================================================== */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ============================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTA                       */}
          {/* ============================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-7">
            {/* Step 1: "ABOUT US" label with line draw + dot */}
            <div className="flex items-center gap-2.5 select-none">
              <motion.span
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ transformOrigin: "left center" }}
                className="h-px w-8 bg-[#C99A3D]"
              />
              <span className="text-[10px] font-black text-[#C99A3D]">•</span>
              <motion.span
                variants={labelVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-xs font-black uppercase text-[#C99A3D]"
              >
                {campus.about?.label || "ABOUT US"}
              </motion.span>
            </div>

            {/* Step 2: "About SAC" Masked Heading */}
            <div className="select-none">
              <div className="overflow-hidden pb-1">
                <motion.h2
                  variants={headingMaskVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold text-[#6D0826] tracking-tight leading-[0.96]"
                >
                  {campus.about?.title ? (
                    campus.about.title.includes(" ") ? (
                      <>
                        {campus.about.title.split(" ")[0]} <br />
                        {campus.about.title.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      campus.about.title
                    )
                  ) : (
                    <>
                      About <br />
                      SAC
                    </>
                  )}
                </motion.h2>
              </div>

              {/* Thin subtle gold accent underline */}
              <div className="mt-4 h-[1.5px] w-16 bg-[#C99A3D]/60 rounded-full" />
            </div>

            {/* Step 3: Description Paragraph */}
            <motion.p
              variants={descVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-[#5A555C]"
            >
              {campus.about?.description ||
                "The Student Activity Centre (SAC) is the heart of student life on campus. We empower students to lead, collaborate, and create meaningful impact through diverse activities and initiatives."}
            </motion.p>

            {/* Step 4: Rounded Burgundy Pill "Know More →" Button */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="pt-2"
            >
              <a
                href="#clubs"
                className="group relative inline-flex items-center gap-3.5 rounded-full bg-[#6D0826] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg overflow-hidden transition-all duration-300 hover:bg-[#430518] hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
              >
                <span className="relative z-10 tracking-wide">Know More</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 text-[#C99A3D] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </motion.div>
          </div>

          {/* ============================================================= */}
          {/* RIGHT COLUMN: COLLABORATION VISUAL (SEAMLESS WHITE MERGE)     */}
          {/* ============================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              ref={cardRef}
              variants={canvasVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
              }}
              className="relative w-full max-w-[720px] overflow-hidden select-none cursor-pointer"
            >
              {/* Inner 3D Kinetic Canvas Plane */}
              <motion.div
                style={{
                  rotateX: prefersReducedMotion ? 0 : rotateX,
                  rotateY: prefersReducedMotion ? 0 : rotateY,
                  x: prefersReducedMotion ? 0 : translateX,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] flex items-center justify-center scale-[1.03] transition-transform duration-300 ease-out"
              >
                <img
                  src={campus.about?.image || aboutImg}
                  alt={`${campus.name} - Uniting Students & Faculty`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain object-center pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* BOTTOM ROW: 4 PILLARS STRIP                                     */}
        {/* =============================================================== */}
        <div className="mt-16 sm:mt-20 md:mt-24 pt-10 sm:pt-12 border-t border-[#EAE6DF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {aboutPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + idx * 0.1,
                    ease: EASE_PREMIUM,
                  }}
                  className="flex items-start gap-4 select-none group"
                >
                  {/* Round Gold Outlined Badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C99A3D]/40 bg-amber-50/40 text-[#C99A3D] shadow-sm transition-all duration-300 group-hover:border-[#C99A3D] group-hover:bg-amber-100/50 group-hover:scale-105">
                    <Icon size={20} className="text-[#C99A3D]" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#6D0826] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#5A555C] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
