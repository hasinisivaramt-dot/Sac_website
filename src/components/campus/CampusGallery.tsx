import React, { useState } from "react";
import { useCampus } from "@/hooks/useCampus";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export function CampusGallery() {
  const { gallery, campus } = useCampus();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((g) => g.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-18 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{campus.shortName} Moments in Focus</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
              Campus Photo Highlights
            </h2>
            <span className="gold-rule mt-3" />
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              A curated photographic chronicle of student victories, festival celebrations, and stage showcases at {campus.name}.
            </p>
          </div>

          {gallery.length > 0 && (
            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-[#650B25] border border-amber-200">
              <ImageIcon className="h-4 w-4 text-[#C99A3D]" />
              <span>{gallery.length} High-Res Visuals</span>
            </div>
          )}
        </div>

        {gallery.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title={`No Gallery Photos Yet for ${campus.shortName}`}
              message="High-resolution event photos will be curated and uploaded soon."
            />
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#650B25] text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-[#650B25]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredGallery.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ y: -6 }}
                    onClick={() => handleOpenLightbox(idx)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-md transition-all duration-300 hover:border-amber-300 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.image || "/pictures/common/default-image.jpg"}
                        alt={item.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/pictures/common/default-image.jpg";
                        }}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C99A3D]">
                        {item.category} • {item.date}
                      </span>
                      <h3 className="mt-1 font-display text-base font-bold leading-tight group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
          <div
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl"
            >
              <img
                src={filteredGallery[selectedImageIndex].image || "/pictures/common/default-image.jpg"}
                alt={filteredGallery[selectedImageIndex].title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/pictures/common/default-image.jpg";
                }}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
              <div className="p-6 text-white bg-slate-950/90">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C99A3D]">
                  {filteredGallery[selectedImageIndex].category} • {filteredGallery[selectedImageIndex].date}
                </span>
                <h4 className="mt-1 font-display text-xl font-extrabold">
                  {filteredGallery[selectedImageIndex].title}
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  {filteredGallery[selectedImageIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
