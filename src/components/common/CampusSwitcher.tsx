import React from "react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { allCampusesList, type CampusSlug } from "@/data/campuses";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CampusSwitcherProps {
  className?: string;
  variant?: "pills" | "dropdown" | "cards";
}

export function CampusSwitcher({ className, variant = "pills" }: CampusSwitcherProps) {
  const { campusId, setCampus } = useCampus();

  const idMap: Record<string, string> = {
    campus01: "aziznagar",
    campus02: "bachupally",
    campus03: "gbs",
  };

  const handleSelect = (slug: string) => {
    setCampus(slug as CampusId);
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full bg-slate-100 p-1", className)}>
      {allCampusesList.map((c) => {
        const isSelected = c.slug === campusId;

        return (
          <button
            key={c.id}
            type="button"
            onClick={() => handleSelect(c.slug)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200",
              isSelected
                ? "bg-[#650B25] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            )}
          >
            <span>{c.name}</span>
            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
          </button>
        );
      })}
    </div>
  );
}
