import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import clubPhotography from "@/assets/club-photography.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubArts from "@/assets/club-arts.jpg";
import clubFashion from "@/assets/club-fashion.jpg";
import eventInauguration from "@/assets/event-inauguration.jpg";
import eventCultural from "@/assets/event-cultural.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import { cn } from "@/lib/utils";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

interface MasonryItem {
  src: string;
  alt: string;
  aspectClass: string;
}

// 5 Asymmetric Editorial Columns for Desktop / Tablet / Mobile
const masonryColumns: { offsetClass: string; items: MasonryItem[] }[] = [
  {
    offsetClass: "pt-0",
    items: [
      {
        src: eventCultural,
        alt: "Cultural festival crowd celebrating at night",
        aspectClass: "aspect-[4/3]",
      },
      {
        src: clubArts,
        alt: "Student artwork and painting showcase",
        aspectClass: "aspect-[3/4]",
      },
    ],
  },
  {
    offsetClass: "pt-4 sm:pt-8 md:pt-12 lg:pt-14",
    items: [
      {
        src: galleryMusic,
        alt: "Live campus music concert performance",
        aspectClass: "aspect-[9/13]",
      },
      {
        src: clubPhotography,
        alt: "Student photographer capturing campus moments",
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    offsetClass: "pt-0 lg:pt-2",
    items: [
      {
        src: galleryCelebration,
        alt: "Students celebrating outdoor milestone on campus",
        aspectClass: "aspect-[3/4]",
      },
      {
        src: clubFashion,
        alt: "Student fashion show runway production",
        aspectClass: "aspect-[16/11]",
      },
    ],
  },
  {
    offsetClass: "pt-3 sm:pt-6 md:pt-10 lg:pt-16",
    items: [
      {
        src: clubDance,
        alt: "Student dance performance on main auditorium stage",
        aspectClass: "aspect-[4/3]",
      },
      {
        src: galleryWorkshop,
        alt: "Students painting collaborative campus mural in art workshop",
        aspectClass: "aspect-[3/4]",
      },
    ],
  },
  {
    offsetClass: "pt-2 sm:pt-4 md:pt-8 lg:pt-6",
    items: [
      {
        src: clubMusic,
        alt: "Student performing live music on guitar",
        aspectClass: "aspect-[3/4]",
      },
      {
        src: eventInauguration,
        alt: "Inauguration ceremony in the university auditorium",
        aspectClass: "aspect-[16/11]",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: EASE_PREMIUM,
    },
  },
};

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FAFAF8] py-16 sm:py-20 md:py-24 border-b border-[#EAE6DF]"
    >
      {/* Subtle Ambient Background Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[32rem] w-[65rem] rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.06),transparent_70%)] blur-3xl" />
      </div>

      <div className="w-[94vw] max-w-[1560px] mx-auto px-2 sm:px-4">
        {/* ================================================================= */}
        {/* 1. EDITORIAL HEADER                                               */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          className="flex flex-col items-center text-center select-none"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 sm:w-14 bg-[#C99A3D]" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold text-[#6D0826] tracking-tight">
              Gallery
            </h2>
            <span className="h-px w-10 sm:w-14 bg-[#C99A3D]" />
          </div>

          <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#C99A3D]">
            Moments that define us
          </p>
        </motion.div>

        {/* ================================================================= */}
        {/* 2. ASYMMETRIC MASONRY EDITORIAL WALL                              */}
        {/* ================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 items-start"
        >
          {masonryColumns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={cn(
                "flex flex-col gap-3.5 sm:gap-4 md:gap-5 lg:gap-6",
                col.offsetClass,
                // On 2-col mobile: display all 5 columns across 2 columns naturally
                // On 3-col tablet: hide 5th column or let it wrap seamlessly
                colIdx === 4 ? "col-span-2 sm:col-span-1 md:hidden lg:flex" : "col-span-1"
              )}
            >
              {col.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.35rem] md:rounded-[1.5rem] bg-slate-900 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.12)] cursor-pointer"
                >
                  <div className={cn("relative w-full overflow-hidden", item.aspectClass)}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />

                    {/* Subtle Dark Vignette on Hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-90" />

                    {/* Minimal Hover Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-[11px] sm:text-xs font-semibold leading-tight line-clamp-1 text-amber-200/95">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* ================================================================= */}
        {/* 3. VIEW MORE PHOTOS CTA BUTTON                                    */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35, ease: EASE_PREMIUM }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#6D0826] px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#430518] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/10"
          >
            <span>View More Photos</span>
            <ArrowRight
              size={15}
              className="text-[#C99A3D] transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
