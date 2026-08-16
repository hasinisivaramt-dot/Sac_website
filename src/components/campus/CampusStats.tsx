import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";

export function CampusStats() {
  const { campus } = useCampus();

  if (!campus.stats || campus.stats.length === 0) return null;

  return (
    <section className="bg-gradient-to-r from-[#650B25] via-[#8B1A2B] to-[#4A071B] py-12 text-white">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {campus.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <span className="font-display text-3xl font-black text-[#C99A3D] sm:text-4xl md:text-5xl">
                {stat.value}
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest text-white/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
