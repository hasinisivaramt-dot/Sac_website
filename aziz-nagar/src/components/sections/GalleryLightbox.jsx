import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);
  if (!isOpen || images.length === 0) return null;
  const current = images[currentIndex];
  if (!current) return null;
  return <div role="dialog" aria-modal="true" aria-label="Gallery lightbox" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6">
      <button type="button" onClick={onClose} aria-label="Close lightbox" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
        <X size={20} />
      </button>

      <button type="button" onClick={onPrev} aria-label="Previous image" className="absolute left-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
        <ChevronLeft size={22} />
      </button>

      <button type="button" onClick={onNext} aria-label="Next image" className="absolute right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
        <ChevronRight size={22} />
      </button>

      <div className="relative max-h-[85vh] max-w-[90vw]">
        <img src={current.src} alt={current.alt} className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain" />
        <p className="mt-3 text-center text-xs text-white/70">{current.alt}</p>
      </div>
    </div>;
}