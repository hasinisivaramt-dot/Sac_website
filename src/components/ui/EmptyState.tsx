import React from "react";
import { FolderOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title = "No Content Available",
  message = "Updates and records for this section will be published soon.",
  actionText,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50/60 p-8 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#C99A3D] shadow-sm">
        {icon || <FolderOpen className="h-7 w-7 stroke-[1.5]" />}
      </div>

      <h4 className="mt-4 font-display text-lg font-bold text-slate-800">{title}</h4>
      <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-500">{message}</p>

      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 rounded-xl bg-[#650B25] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#4A071B] transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
