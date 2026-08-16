import React from "react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { cn } from "@/lib/utils";

export function CampusSwitcher({ className }: { className?: string }) {
  const { campusId, setCampus, allCampuses } = useCampus();

  return (
    <div className={cn("inline-flex rounded-xl bg-slate-100 p-1", className)}>
      {allCampuses.map((c) => {
        const isActive = c.id === campusId;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => setCampus(c.id as CampusId)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
              isActive
                ? "bg-[#6D0826] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
