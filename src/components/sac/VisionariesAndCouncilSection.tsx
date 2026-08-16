import React from "react";
import { ArrowRight } from "lucide-react";
import { visionaries } from "@/lib/sac-data";
import studentCouncilImg from "@/assets/student-council.jpg";
import { motion } from "framer-motion";

export function VisionariesAndCouncilSection() {
  return (
    <section id="visionaries-council" className="relative bg-white py-16 md:py-20 border-b border-[#EAE6DF]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Visionaries (KEEPING EXISTING AZIZ NAGAR VISIONARIES DATA) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C99A3D]" />
                <h3 className="font-display text-2xl font-extrabold text-[#6D0826] md:text-3xl">
                  Visionaries
                </h3>
                <span className="h-px w-8 bg-[#C99A3D]" />
              </div>
              <p className="mt-1 text-xs text-[#68636A]">
                Guiding. Inspiring. Leading.
              </p>

              {/* 4 Visionary Cards with Circular Portraits */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {visionaries.map((vis, idx) => (
                  <motion.div
                    key={vis.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-[#C99A3D]/60 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C99A3D]">
                      <img
                        src={vis.image}
                        alt={vis.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <h4 className="mt-3 font-display text-xs font-bold text-slate-900 group-hover:text-[#6D0826] transition-colors leading-snug">
                      {vis.name}
                    </h4>
                    <p className="mt-0.5 text-[10px] font-semibold text-[#C99A3D]">
                      {vis.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Student Council */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between lg:border-l lg:border-[#EAE6DF] lg:pl-12"
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-[#6D0826] md:text-3xl">
                  Student Council
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5A555C]">
                  The Student Council is the backbone of SAC, working together to represent students, organize events, and bring new ideas to life.
                </p>
              </div>

              <div>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#6D0826] px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#430518] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Know More
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Council Photo */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm mt-3">
                <img
                  src={studentCouncilImg}
                  alt="Student Council Members"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
