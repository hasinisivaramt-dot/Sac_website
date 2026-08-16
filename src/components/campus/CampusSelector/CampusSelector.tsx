import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { cn } from "@/lib/utils";
import { MapPin, Sparkles, Check, X, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function CampusSelectorModal() {
  const { isCampusModalOpen, closeCampusModal, campusId, setCampus, allCampuses } = useCampus();
  const navigate = useNavigate();

  const handleSelectCampus = (id: CampusId) => {
    setCampus(id);
    closeCampusModal();
    // Navigate to campus URL smoothly
    navigate({ to: `/${id}` as any }).catch(() => {
      // fallback
      if (typeof window !== "undefined") {
        window.history.pushState({}, "", `/${id}`);
      }
    });
  };

  return (
    <AnimatePresence>
      {isCampusModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCampusModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-200/40 bg-white p-6 shadow-2xl md:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C99A3D]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Select Your Campus
                </div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[#650B25] md:text-3xl">
                  Choose Campus Experience
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Switching campus loads exclusive clubs, events, leadership, and photo galleries for that campus.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCampusModal}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close campus selector"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Campuses Grid */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {allCampuses.map((item) => {
                const cId = item.id;
                const isSelected = cId === campusId;
                const cName = item.name;
                const badge =
                  cId === "aziz-nagar"
                    ? "Main Campus"
                    : cId === "bachupally"
                    ? "Engineering Campus"
                    : "Management & Enterprise";
                const tagline =
                  cId === "aziz-nagar"
                    ? "Flagship campus for engineering, sciences, arts, and leadership."
                    : cId === "bachupally"
                    ? "Premier technology and computational innovation campus."
                    : "School of Global Business, Leadership & Enterprise.";
                const location =
                  cId === "aziz-nagar"
                    ? "Aziz Nagar, Hyderabad"
                    : cId === "bachupally"
                    ? "Bachupally, Hyderabad"
                    : "Bowrampet / Hyderabad";

                return (
                  <motion.div
                    key={cId}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleSelectCampus(cId as CampusId)}
                    className={cn(
                      "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 cursor-pointer transition-all duration-300",
                      isSelected
                        ? "border-[#C99A3D] bg-gradient-to-b from-amber-50/60 to-white shadow-lg ring-2 ring-[#C99A3D]/40"
                        : "border-slate-200 bg-white hover:border-amber-300 hover:shadow-md"
                    )}
                  >
                    {/* Active Checkmark Pill */}
                    {isSelected && (
                      <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#6D0826] text-white shadow">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                    )}

                    <div>
                      {/* Badge */}
                      <span className="inline-block text-[0.65rem] font-extrabold uppercase tracking-wider text-[#C99A3D]">
                        {badge}
                      </span>

                      {/* Title */}
                      <h4 className="mt-1 font-display text-lg font-black text-slate-900 group-hover:text-[#6D0826] transition-colors">
                        {cName}
                      </h4>

                      {/* Tagline */}
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                        {tagline}
                      </p>

                      {/* Location */}
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-[#C99A3D] shrink-0" />
                        <span className="truncate">{location}</span>
                      </div>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-5 border-t border-slate-100 pt-3">
                      <div className="mt-1 flex items-center justify-between text-xs font-bold text-[#6D0826] group-hover:text-[#C99A3D] transition-colors">
                        <span>{isSelected ? "Currently Active" : "Switch Campus"}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Tip */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
              <span>All campus links automatically preserve your selected campus context.</span>
              <span className="font-mono text-[11px] text-[#C99A3D]">KLU SAC Platform</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function CampusBadgeButton({ className }: { className?: string }) {
  const { campus, openCampusModal } = useCampus();

  return (
    <button
      type="button"
      onClick={openCampusModal}
      className={cn(
        "group relative flex items-center gap-2 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50 via-white to-amber-50/50 px-3.5 py-1.5 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      aria-label="Change campus"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C99A3D] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C99A3D]" />
      </span>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-[0.58rem] font-extrabold uppercase tracking-widest text-[#C99A3D]">
          Active Campus
        </span>
        <span className="font-display text-xs font-black text-[#650B25] group-hover:text-[#8B1A2B]">
          {campus.shortName}
        </span>
      </div>

      <span className="rounded-full bg-[#650B25]/10 px-1.5 py-0.5 text-[0.6rem] font-bold text-[#650B25]">
        Change
      </span>
    </button>
  );
}
