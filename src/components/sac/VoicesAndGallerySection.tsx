import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";

export function VoicesAndGallerySection() {
  const { campus } = useCampus();
  const [activeDot, setActiveDot] = useState(0);
  const displayGallery = (campus.gallery || []).slice(0, 7);
  const displayTestimonials = campus.testimonials || [];

  return (
    <section id="voices-gallery" className="relative bg-[#FAFAF8] py-16 md:py-20 border-b border-[#EAE6DF]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Student Voices */}
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
                  Student Voices
                </h3>
                <span className="h-px w-8 bg-[#C99A3D]" />
              </div>
              <p className="mt-1 text-xs text-[#68636A]">
                Real stories. Real impact.
              </p>

              {/* Testimonial Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {displayTestimonials.slice(0, 3).map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-10 w-10 rounded-full object-cover border border-amber-200"
                      />
                      <div>
                        <h4 className="font-display text-xs font-bold text-slate-900 leading-tight">
                          {t.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-medium">{t.club}</p>
                      </div>
                    </div>

                    <div className="my-3">
                      <span className="text-[#C99A3D] text-lg font-serif leading-none">&ldquo;</span>
                      <p className="text-[11px] leading-relaxed text-[#5A555C] italic line-clamp-4">
                        {t.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-0.5 text-[#C99A3D]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={11} className="fill-[#C99A3D]" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="mt-6 flex items-center justify-center gap-1.5">
                {[0, 1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    type="button"
                    onClick={() => setActiveDot(dot)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeDot === dot ? "w-5 bg-[#6D0826]" : "w-1.5 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Gallery Mosaic */}
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
                  Gallery
                </h3>
                <span className="h-px w-8 bg-[#C99A3D]" />
              </div>
              <p className="mt-1 text-xs text-[#68636A]">
                Moments that define us
              </p>

              {/* Mosaic Image Grid */}
              <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-2.5">
                {/* Row 1: 4 thumbnails */}
                {displayGallery.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-sm"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                ))}

                {/* Row 2: 3 larger thumbnails spanning 4 cols */}
                {displayGallery.slice(4, 7).map((img, i) => (
                  <div
                    key={i}
                    className={`group relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-sm ${
                      i === 2 ? "col-span-2 sm:col-span-2" : "col-span-1"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#gallery"
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
