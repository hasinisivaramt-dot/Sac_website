import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, UserPlus, HelpCircle } from "lucide-react";

export function CTASection() {
  const { campus } = useCampus();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#650B25] via-[#8B1A2B] to-[#4A071B] py-20 text-white">
      {/* Decorative ambient rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full border border-white" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full border border-[#C99A3D]" />
      </div>

      <div className="section-shell relative z-10 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#C99A3D] backdrop-blur-sm border border-white/15">
            <Sparkles className="h-3.5 w-3.5" />
            Be a Part of Something Extraordinary
          </div>

          <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight text-white">
            Ready to Shape Your Student Life at {campus.name}?
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Join a club, lead a festival, participate in national hackathons, or pitch your startup idea. The Student Activity Center is your launchpad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#clubs"
              className="btn-base btn-gold text-sm font-bold shadow-xl"
            >
              Join a {campus.shortName} Club
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${campus.email}`}
              className="btn-base bg-white/15 text-white hover:bg-white/25 border border-white/20 text-sm font-bold backdrop-blur-sm"
            >
              Contact {campus.shortName} SAC Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
