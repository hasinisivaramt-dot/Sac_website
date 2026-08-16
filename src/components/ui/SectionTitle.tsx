import React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  const alignment = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-2xl", alignment[align], className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      <span className={cn("gold-rule mt-3", align === "center" && "mx-auto")} />
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
