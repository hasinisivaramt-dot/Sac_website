import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#6D0826] text-white hover:bg-[#430518]",
  accent: "bg-[#C99A3D] text-[#1F2933] hover:bg-[#D9B771]",
  outline: "border border-slate-300 text-slate-800 hover:border-[#6D0826] hover:text-[#6D0826]",
};

export function Button({ as: Tag = "button", variant = "primary", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variants[variant] || variants.primary,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
