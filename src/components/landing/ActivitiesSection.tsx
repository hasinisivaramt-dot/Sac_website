import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { Zap, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

export function ActivitiesSection() {
  const { activities, campus } = useCampus();

  return (
    <section id="activities" className="relative overflow-hidden bg-slate-50/70 py-18 md:py-24 border-y border-slate-100">
      <div className="section-shell">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="eyebrow">{campus.shortName} Continuous Learning</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
            Workshops & Weekly Activities
          </h2>
          <span className="gold-rule mt-3" />
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Beyond annual festivals, student life at {campus.name} is powered by weekly masterclasses, coding sprints, tournaments, and hands-on maker labs.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
            >
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#C99A3D]">
                  <Zap className="h-3 w-3" />
                  {act.badge}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-lg font-bold text-[#1F2933] group-hover:text-[#650B25] transition-colors leading-snug">
                  {act.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                  {act.description}
                </p>
              </div>

              {/* Specs */}
              <div className="mt-6 border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-400">Frequency:</span>
                  <span className="font-bold text-[#650B25]">{act.frequency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-400">Audience:</span>
                  <span className="font-bold text-slate-700">{act.participants}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
