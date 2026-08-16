import React, { useState, useEffect } from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, MapPin } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export function CampusHero() {
  const { campus, openCampusModal } = useCampus();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = campus.heroImages && campus.heroImages.length > 0
    ? campus.heroImages
    : ["/pictures/common/default-image.jpg"];

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white pt-24 md:pt-32 pb-16 flex items-center">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#650B25]/5 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-[#C99A3D]/10 blur-3xl" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-1.5 shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-[#C99A3D]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#650B25]">
                {campus.fullName}
              </span>
              <button
                type="button"
                onClick={openCampusModal}
                className="ml-2 rounded-full bg-amber-100/80 px-2 py-0.5 text-[10px] font-bold text-[#650B25] hover:bg-[#650B25] hover:text-white transition-colors"
              >
                Change Campus
              </button>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.06]"
            >
              Explore. Engage. <br />
              <span className="bg-gradient-to-r from-[#650B25] via-[#8B1A2B] to-[#C99A3D] bg-clip-text text-transparent">
                Excel at SAC.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {campus.description || "Welcome to the Student Activity Center."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#clubs" className="btn-base btn-burgundy text-sm">
                Explore {campus.shortName} Clubs
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#events" className="btn-base btn-outline-gold text-sm">
                View Event Calendar
              </a>
            </motion.div>

            {/* Stats */}
            {campus.stats && campus.stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 pt-6"
              >
                {campus.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-display text-2xl font-black text-[#650B25] sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-amber-200/60 bg-white p-3 shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                {images.map((img, idx) => (
                  <img
                    key={img + idx}
                    src={img}
                    alt={`${campus.name} Campus Life`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/pictures/common/default-image.jpg";
                    }}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                      idx === activeImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between rounded-xl bg-black/60 p-3 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="h-4 w-4 text-[#C99A3D]" />
                    <span className="font-semibold">{campus.location}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C99A3D]">
                    {campus.badge}
                  </span>
                </div>
              </div>

              {images.length > 1 && (
                <div className="flex justify-center gap-1.5 pt-3 pb-1">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeImageIndex ? "w-6 bg-[#650B25]" : "w-2 bg-slate-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
