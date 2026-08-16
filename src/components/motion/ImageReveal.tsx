import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

export function ImageReveal({
  src,
  alt,
  className,
  containerClassName,
  delay = 0,
}: ImageRevealProps) {
  return (
    <div className={cn("overflow-hidden rounded-3xl", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full w-full object-cover", className)}
      />
    </div>
  );
}
