import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { events, competitions } from "@/lib/sac-data";
import { motion } from "framer-motion";

export function EventsAndCompetitionsSection() {
  const displayEvents = events.slice(0, 3);
  const displayCompetitions = competitions.slice(0, 3);

  return (
    <section id="events-competitions" className="relative bg-white py-16 md:py-20 border-b border-[#EAE6DF]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Events */}
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
                  Events
                </h3>
                <span className="h-px w-8 bg-[#C99A3D]" />
              </div>
              <p className="mt-1 text-xs text-[#68636A]">
                What&rsquo;s happening in college
              </p>

              {/* 3 Event Cards */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {displayEvents.map((event) => (
                  <div
                    key={event.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Background image */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                      {/* Date Stamp */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col items-center rounded-lg bg-black/60 px-2 py-1 text-white backdrop-blur-sm border border-white/10">
                        <span className="font-display text-base font-black leading-none text-[#C99A3D]">
                          {event.day}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                          {event.month}
                        </span>
                      </div>

                      {/* Title & Location at bottom */}
                      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                        <h4 className="font-display text-xs font-bold leading-tight group-hover:text-amber-200 transition-colors line-clamp-2">
                          {event.title}
                        </h4>
                        <div className="mt-1.5 flex items-center gap-1 text-[10px] text-amber-100/80">
                          <MapPin size={11} className="text-[#C99A3D] shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6D0826] px-6 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#430518] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                View More
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Competitions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between lg:border-l lg:border-[#EAE6DF] lg:pl-12"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C99A3D]" />
                <h3 className="font-display text-2xl font-extrabold text-[#6D0826] md:text-3xl">
                  Competitions
                </h3>
                <span className="h-px w-8 bg-[#C99A3D]" />
              </div>
              <p className="mt-1 text-xs text-[#68636A]">
                Challenge yourself. Showcase your talent.
              </p>

              {/* 3 Competition Cards */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {displayCompetitions.map((comp) => (
                  <div
                    key={comp.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={comp.image}
                        alt={comp.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                      <div className="absolute inset-x-0 bottom-0 p-3 text-center text-white">
                        <span className="font-display text-xs font-black uppercase tracking-wider text-white group-hover:text-[#C99A3D] transition-colors leading-tight">
                          {comp.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#competitions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6D0826] px-6 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#430518] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                View More
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
