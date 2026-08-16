import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  offset?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  offset = 20,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={cn("overflow-hidden rounded-3xl", containerClassName)}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover scale-110", className)}
      />
    </div>
  );
}
