import { useState } from "react";
import { ArrowRight, Expand } from "lucide-react";
import { galleryImages } from "@/lib/sac-data";
import { cn } from "@/lib/utils";
import { GalleryLightbox } from "./GalleryLightbox";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  const count = galleryImages.length;

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments That Define Us"
          subtitle="Explore life beyond the classroom."
        />

        <Reveal className="mt-14">
          <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[11rem] md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.alt}
                onClick={() => setOpen(i)}
                aria-label={`Open image: ${img.alt}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]",
                  spans[i],
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:var(--ease-premium)] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/45" />
                <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-navy-deep/60 text-gold backdrop-blur-sm">
                    <Expand size={18} />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <a href="#gallery" className="btn-base btn-outline-navy group">
            View Full Gallery
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      {open !== null ? (
        <GalleryLightbox
          images={galleryImages}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => ((i ?? 0) - 1 + count) % count)}
          onNext={() => setOpen((i) => ((i ?? 0) + 1) % count)}
        />
      ) : null}
    </section>
  );
}
