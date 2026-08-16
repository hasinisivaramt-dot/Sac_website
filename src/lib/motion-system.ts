import { type Variants } from "framer-motion";

// Premium Easing Curves
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const; // expo.out / power4.out
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const; // power3.out
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// ---------------------------------------------------------------------------
// 1. SECTION HEADING — MASKED SPLIT REVEAL
// ---------------------------------------------------------------------------
export const createHeadingMaskVariants = (
  delay: number = 0,
  prefersReduced: boolean = false
): Variants => ({
  hidden: {
    opacity: 0,
    y: prefersReduced ? 0 : "110%",
    rotateX: prefersReduced ? 0 : 8,
    filter: prefersReduced ? "blur(0px)" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: EASE_PREMIUM,
      delay,
    },
  },
});

// ---------------------------------------------------------------------------
// 2. SECTION LABELS & EYEBROWS — EDITORIAL TRACKING REVEAL
// ---------------------------------------------------------------------------
export const createTrackingLabelVariants = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 10,
    letterSpacing: "0.3em",
  },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.24em",
    transition: {
      duration: 0.75,
      ease: EASE_PREMIUM,
      delay,
    },
  },
});

// ---------------------------------------------------------------------------
// 3. DECORATIVE GOLD LINES — DRAW ANIMATION
// ---------------------------------------------------------------------------
export const createLineDrawVariants = (delay: number = 0): Variants => ({
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: EASE_PREMIUM,
      delay,
    },
  },
});

// ---------------------------------------------------------------------------
// 4. SUPPORTING TEXT & PARAGRAPHS — CINEMATIC BLUR DISSOLVE
// ---------------------------------------------------------------------------
export const createBlurDissolveVariants = (
  delay: number = 0.25,
  prefersReduced: boolean = false
): Variants => ({
  hidden: {
    opacity: 0,
    y: prefersReduced ? 0 : 20,
    filter: prefersReduced ? "blur(0px)" : "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: EASE_SMOOTH,
      delay,
    },
  },
});

// ---------------------------------------------------------------------------
// 5. CINEMATIC IMAGE MASK REVEAL
// ---------------------------------------------------------------------------
export const createImageMaskVariants = (
  direction: "left" | "right" | "bottom" = "bottom",
  delay: number = 0.2,
  prefersReduced: boolean = false
): Variants => {
  if (prefersReduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay } },
    };
  }

  let clipPathHidden = "inset(100% 0 0 0)";
  let xHidden = 0;
  let yHidden = 0;

  if (direction === "left") {
    clipPathHidden = "inset(0 0 0 100%)";
    xHidden = -40;
  } else if (direction === "right") {
    clipPathHidden = "inset(0 100% 0 0)";
    xHidden = 40;
  } else {
    clipPathHidden = "inset(100% 0 0 0)";
    yHidden = 30;
  }

  return {
    hidden: {
      opacity: 0,
      scale: 1.05,
      x: xHidden,
      y: yHidden,
      clipPath: clipPathHidden,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 1.15,
        ease: EASE_PREMIUM,
        delay,
      },
    },
  };
};

// ---------------------------------------------------------------------------
// 6. ACTION & CTA BUTTONS
// ---------------------------------------------------------------------------
export const createButtonRevealVariants = (delay: number = 0.4): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 14,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
      delay,
    },
  },
});
