import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { Compass, Target, Flag, Users, Award, Zap } from "lucide-react";

export function AboutSection() {
  const { campus } = useCampus();

  const pillars = [
    {
      icon: Compass,
      title: "Explore Passions",
      desc: "Dive into specialized clubs spanning visual arts, competitive computing, music, and social leadership.",
    },
    {
      icon: Target,
      title: "Engage & Collaborate",
      desc: "Work on interdisciplinary student teams, organize massive campus fests, and build lifelong networks.",
    },
    {
      icon: Award,
      title: "Excel Nationally",
      desc: "Represent KL University at prestigious national hackathons, cultural festivals, and business case arenas.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-18 md:py-24">
      <div className="section-shell">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="eyebrow">About {campus.shortName} SAC</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
            Where Ambition Meets Action
          </h2>
          <span className="gold-rule mt-3" />
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            The Student Activity Center at {campus.name} is the heartbeat of non-academic student life. We provide the mentorship, funding, infrastructure, and platform for students to lead.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#C99A3D] group-hover:bg-[#650B25] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-[#1F2933] group-hover:text-[#650B25] transition-colors">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>

                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#C99A3D]">
                  <span>SAC Core Value</span>
                  <span className="h-1 w-1 rounded-full bg-[#C99A3D]" />
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
