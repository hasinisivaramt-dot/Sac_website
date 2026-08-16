import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function GalleryLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: readonly { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const image = images[index];
  if (!image) return null;


  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-md motion-safe:animate-fade-in"
    >
      <button
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-primary-foreground transition-colors hover:bg-white/10"
      >
        <X size={20} />
      </button>

      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-primary-foreground transition-colors hover:bg-white/10 md:left-8"
      >
        <ChevronLeft size={22} />
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-5xl">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[76vh] w-auto rounded-2xl object-contain shadow-[var(--shadow-lift)] motion-safe:animate-scale-in"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-primary-foreground/70">
          <span className="min-w-0">{image.alt}</span>
          <span className="shrink-0 font-semibold text-gold">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-primary-foreground transition-colors hover:bg-white/10 md:right-8"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
