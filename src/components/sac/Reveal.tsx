import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  duration = 750,
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
  variant?: RevealVariant | undefined;
  duration?: number | undefined;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      data-variant={variant}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={cn("reveal", `reveal-${variant}`, className)}
    >
      {children}
    </div>
  );
}
