import React, { useRef, useState } from "react";
import { ArrowRight, Users } from "lucide-react";
import councilImg from "@/assets/student-council.jpg";
import { useCampus } from "@/hooks/useCampus";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function StudentCouncilSection() {
  const { campus } = useCampus();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  if (!campus.studentCouncil?.title || !campus.studentCouncil?.image) {
    return null;
  }


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-10, 10]
  );
  const descParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-5, 5]
  );

  const labelVariants: Variants = {
    hidden: { opacity: 0, y: 10, letterSpacing: "0.28em" },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.24em",
      transition: { duration: 0.75, ease: EASE_PREMIUM },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: EASE_PREMIUM },
    },
  };

  const wordVariants = (delay: number): Variants => ({
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : "100%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.95,
        ease: EASE_PREMIUM,
        delay,
      },
    },
  });

  const descVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: EASE_OUT, delay: 0.25 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE_PREMIUM, delay: 0.4 },
    },
  };

  const imageContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 25,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: EASE_PREMIUM,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="student-council"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAFAF8] py-20 sm:py-24 md:py-28 border-b border-[#EAE6DF]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[32rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6D0826]/4 blur-3xl" />
      </div>

      <div className="w-[92vw] max-w-[1520px] mx-auto px-2 sm:px-4">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6 sm:space-y-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex items-center gap-3 select-none"
            >
              <motion.span
                variants={lineVariants}
                style={{ transformOrigin: "left center" }}
                className="h-[1.5px] w-10 sm:w-12 rounded-full bg-[#C99A3D]"
              />

              <span className="text-[10px] font-black text-[#C99A3D]">◆</span>

              <motion.span
                variants={labelVariants}
                className="text-[11px] font-extrabold uppercase text-[#C99A3D]"
              >
                STUDENT GOVERNANCE &amp; LEADERSHIP
              </motion.span>
            </motion.div>

            <motion.div
              style={{ y: headingParallaxY }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
              className="relative cursor-default select-none"
            >
              <div className="overflow-hidden pb-1 flex flex-wrap items-baseline gap-x-3.5">
                <motion.span
                  variants={wordVariants(0.12)}
                  className="inline-block font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#6D0826] leading-[1.02] tracking-tight"
                >
                  Student
                </motion.span>
                <motion.span
                  variants={wordVariants(0.22)}
                  className="inline-block font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#6D0826] leading-[1.02] tracking-tight"
                >
                  Council
                </motion.span>
              </div>

              <div
                className={`mt-3 h-[2px] rounded-full bg-gradient-to-r from-[#C99A3D] via-[#D9B771] to-transparent transition-all duration-500 ease-out ${
                  isHeadingHovered ? "w-44 opacity-100" : "w-16 opacity-50"
                }`}
              />
            </motion.div>

            <motion.div
              style={{ y: descParallaxY }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={descVariants}
              className="max-w-lg text-base sm:text-lg font-normal leading-relaxed text-[#5A555C]"
            >
              <p>
                {campus.studentCouncil?.description ||
                  "The Student Council is the backbone of SAC, working together to represent students, organize events, and bring new ideas to life."}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={buttonVariants}
              className="pt-1"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#6D0826] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-[#430518] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/10"
              >
                <span className="tracking-wide">Know More</span>
                <ArrowRight
                  size={16}
                  className="text-[#C99A3D] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-6 lg:col-span-7 flex items-center justify-center">
            <motion.div
              variants={imageContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              className="relative w-full aspect-[16/11] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] bg-slate-950 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] border border-slate-200/90 group cursor-pointer"
            >
              <img
                src={campus.studentCouncil?.image || councilImg}
                alt={`${campus.name} Student Council Members`}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-center transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:contrast-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 inline-flex items-center gap-2 rounded-xl bg-black/60 px-3.5 py-1.5 text-xs md:text-sm font-bold text-white backdrop-blur-md border border-white/15 shadow-xl select-none">
                <Users
                  size={15}
                  className="text-[#C99A3D] transition-transform duration-300"
                  style={{
                    transform: isImageHovered ? "translateX(3px)" : "none",
                  }}
                />
                <span className="tracking-wide">SAC Council Cabinet</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-8 lg:p-10 text-white space-y-1.5 select-none">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#C99A3D] drop-shadow-md">
                  Student Leadership
                </p>
                <h3 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-white drop-shadow-lg">
                  Representing 3,500+ Students
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
