import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export function MotionSection({ className, children, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
