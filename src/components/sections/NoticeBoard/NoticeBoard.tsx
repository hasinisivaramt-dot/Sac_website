import React from "react";
import { ArrowRight, Bell } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useCampus } from "@/hooks/useCampus";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function NoticeBoard() {
  const { campusId } = useCampus();
  const prefersReducedMotion = useReducedMotion();

  const isAzizNagar = campusId === "aziz-nagar" || (campusId as string) === "aziznagar";
  if (!isAzizNagar) {
    return null;
  }


  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 15,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="notices" className="relative overflow-hidden bg-[#5B0820] py-8 md:py-10 text-white">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6 select-none"
        >
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7F3EC] text-[#5B0820] shadow-md">
              <Bell size={22} className="fill-current text-[#5B0820]" />
            </div>

            <motion.div variants={titleVariants}>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                Notice Board
              </h3>
              <p className="mt-0.5 text-xs text-amber-100/80">
                Stay updated with the latest announcements and important information.
              </p>
            </motion.div>
          </div>

          {/* Right: Button with hover slide */}
          <div className="shrink-0">
            <a
              href="#notices"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/30 bg-[#430518] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#320412] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>View Notices</span>
              <ArrowRight
                size={14}
                className="text-[#C99A3D] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
