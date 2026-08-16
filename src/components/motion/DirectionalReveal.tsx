import React from "react";
import { motion } from "framer-motion";

export interface DirectionalRevealProps {
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export function DirectionalReveal({
  direction = "up",
  distance = 40,
  duration = 0.8,
  delay = 0,
  children,
  className,
}: DirectionalRevealProps) {
  const initialVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
