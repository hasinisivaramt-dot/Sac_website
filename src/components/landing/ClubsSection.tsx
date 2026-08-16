import React, { useState } from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowRight, Sparkles, Star } from "lucide-react";

export function ClubsSection() {
  const { clubs, campus } = useCampus();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(clubs.map((c) => c.category)))];

  const filteredClubs =
    activeCategory === "All" ? clubs : clubs.filter((c) => c.category === activeCategory);

  return (
    <section id="clubs" className="relative overflow-hidden bg-slate-50/60 py-18 md:py-24 border-t border-slate-100">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{campus.shortName} Student Guilds</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
              Active Clubs & Societies
            </h2>
            <span className="gold-rule mt-3" />
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Discover student-led clubs operating at {campus.name}. From creative fine arts to deep tech and venture creation.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-slate-200">
            <Users className="h-4 w-4 text-[#C99A3D]" />
            <span className="text-xs font-bold text-[#650B25]">
              {clubs.length} Official Clubs Registered
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#650B25] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-amber-50 hover:text-[#650B25] border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredClubs.map((club, idx) => (
              <motion.div
                key={club.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
              >
                <div>
                  {/* Club Image Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-sm">
                      {club.category}
                    </div>
                  </div>

                  {/* Club Info */}
                  <h3 className="mt-4 font-display text-lg font-bold text-[#1F2933] group-hover:text-[#650B25] transition-colors">
                    {club.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {club.description}
                  </p>

                  {/* Featured Project */}
                  <div className="mt-3 rounded-xl bg-amber-50/60 p-2 text-[11px] text-[#650B25]">
                    <span className="font-bold">Key Project: </span>
                    <span className="text-slate-600">{club.featuredProject}</span>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-[#C99A3D]" />
                    <span className="font-semibold">{club.membersCount} Members</span>
                  </div>

                  <span className="text-[11px] font-bold text-[#650B25] group-hover:text-[#C99A3D] transition-colors flex items-center gap-1">
                    Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
