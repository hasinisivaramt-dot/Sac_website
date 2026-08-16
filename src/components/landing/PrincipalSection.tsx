import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Quote } from "lucide-react";

export function PrincipalSection() {
  const { principal, campus } = useCampus();

  return (
    <section id="principal" className="relative overflow-hidden bg-slate-50/70 py-18 md:py-24 border-y border-slate-100">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Principal Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/80 bg-white p-3 shadow-xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={principal.image}
                    alt={principal.name}
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Name Card */}
                <div className="mt-4 p-2 text-center">
                  <h4 className="font-display text-xl font-extrabold text-[#650B25]">
                    {principal.name}
                  </h4>
                  <p className="text-xs font-bold text-[#C99A3D] uppercase tracking-wider mt-0.5">
                    {principal.designation}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{principal.degree}</p>
                </div>
              </div>

              {/* Decorative Stamp */}
              <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#650B25] text-white shadow-lg border-2 border-white">
                <Award className="h-8 w-8 text-[#C99A3D]" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Message & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">{campus.shortName} Leadership</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
                From the Principal&rsquo;s Desk
              </h2>
              <span className="gold-rule mt-3" />
            </motion.div>

            {/* Featured Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-2xl border-l-4 border-[#C99A3D] bg-white p-5 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-amber-100" />
              <p className="font-display text-base font-semibold italic text-[#650B25] md:text-lg">
                &ldquo;{principal.quote}&rdquo;
              </p>
            </motion.div>

            {/* Message Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3.5 text-sm leading-relaxed text-slate-600 md:text-base"
            >
              {principal.message.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>

            {/* Highlights List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid gap-2.5 pt-2 sm:grid-cols-1"
            >
              {principal.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#C99A3D] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
