import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export function CampusEvents() {
  const { events, campus } = useCampus();

  return (
    <section id="events" className="relative overflow-hidden bg-white py-18 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{campus.shortName} Live Calendar</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
              Flagship Events & Fests
            </h2>
            <span className="gold-rule mt-3" />
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Experience the energy of {campus.name}. Mark your calendar for upcoming collegiate celebrations, hackathons, and symposiums.
            </p>
          </div>

          <a
            href="#events"
            className="btn-base btn-outline-gold text-xs px-4 py-2 font-bold uppercase tracking-wider"
          >
            All Event Archives
          </a>
        </div>

        {events.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title={`No Upcoming Events Scheduled for ${campus.shortName}`}
              message="Check back soon for upcoming campus fests, hackathons, and guest lectures."
            />
          </div>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={event.image || "/pictures/common/default-image.jpg"}
                    alt={event.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/pictures/common/default-image.jpg";
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4 flex flex-col items-center rounded-2xl bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md border border-amber-200">
                    <span className="font-display text-xl font-black text-[#650B25] leading-none">
                      {event.day}
                    </span>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#C99A3D] uppercase">
                      {event.month}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                    {event.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1F2933] group-hover:text-[#650B25] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#C99A3D]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#C99A3D]" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        event.registrationOpen
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {event.registrationOpen ? "Open for Registration" : "Completed / Closed"}
                    </span>

                    <button
                      type="button"
                      className="text-xs font-bold text-[#650B25] group-hover:text-[#C99A3D] transition-colors flex items-center gap-1"
                    >
                      View Details <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
