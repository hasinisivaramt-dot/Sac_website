import React, { useEffect, useState, useRef } from "react";
import { ENABLE_INTRO, INTRO_STORAGE_KEY } from "@/config/intro";

interface StrokeSegment {
  id: string;
  letter: string;
  d: string;
  delayMs: number;
  durationMs: number;
}

// Master collection of independent geometric stroke paths for K L U   S A C
const STROKE_SEGMENTS: StrokeSegment[] = [
  // --- Phase 1 & 2 Fragments & Segments: Staggered drawing (0.5s - 2.8s) ---

  // --- K (Letters 1) ---
  {
    id: "k-stem-outer-top",
    letter: "K",
    d: "M 60 70 L 60 145",
    delayMs: 500,
    durationMs: 700,
  },
  {
    id: "k-upper-outer",
    letter: "K",
    d: "M 96 132 L 176 70",
    delayMs: 560,
    durationMs: 750,
  },
  {
    id: "k-stem-outer-bottom",
    letter: "K",
    d: "M 60 145 L 60 210",
    delayMs: 780,
    durationMs: 650,
  },
  {
    id: "k-lower-outer",
    letter: "K",
    d: "M 96 132 L 174 210",
    delayMs: 880,
    durationMs: 750,
  },
  {
    id: "k-top-cap",
    letter: "K",
    d: "M 60 70 L 86 70",
    delayMs: 1250,
    durationMs: 500,
  },
  {
    id: "k-upper-inner",
    letter: "K",
    d: "M 150 70 L 86 122",
    delayMs: 1350,
    durationMs: 650,
  },
  {
    id: "k-upper-cap",
    letter: "K",
    d: "M 176 70 L 150 70",
    delayMs: 1420,
    durationMs: 450,
  },
  {
    id: "k-lower-cap",
    letter: "K",
    d: "M 174 210 L 146 210",
    delayMs: 1550,
    durationMs: 450,
  },
  {
    id: "k-lower-inner",
    letter: "K",
    d: "M 146 210 L 86 154",
    delayMs: 1680,
    durationMs: 650,
  },
  {
    id: "k-stem-inner-top",
    letter: "K",
    d: "M 86 70 L 86 122",
    delayMs: 1850,
    durationMs: 550,
  },
  {
    id: "k-stem-inner-bottom",
    letter: "K",
    d: "M 86 154 L 86 210",
    delayMs: 1950,
    durationMs: 500,
  },
  {
    id: "k-bottom-cap",
    letter: "K",
    d: "M 86 210 L 60 210",
    delayMs: 2050,
    durationMs: 450,
  },

  // --- L (Letter 2) ---
  {
    id: "l-stem-outer",
    letter: "L",
    d: "M 215 70 L 215 210",
    delayMs: 640,
    durationMs: 800,
  },
  {
    id: "l-foot-outer",
    letter: "L",
    d: "M 215 210 L 315 210",
    delayMs: 920,
    durationMs: 700,
  },
  {
    id: "l-top-cap",
    letter: "L",
    d: "M 215 70 L 241 70",
    delayMs: 1300,
    durationMs: 450,
  },
  {
    id: "l-stem-inner",
    letter: "L",
    d: "M 241 70 L 241 184",
    delayMs: 1450,
    durationMs: 700,
  },
  {
    id: "l-foot-inner",
    letter: "L",
    d: "M 241 184 L 315 184",
    delayMs: 1750,
    durationMs: 600,
  },
  {
    id: "l-right-cap",
    letter: "L",
    d: "M 315 210 L 315 184",
    delayMs: 2020,
    durationMs: 450,
  },

  // --- U (Letter 3) ---
  {
    id: "u-bottom-curve-outer",
    letter: "U",
    d: "M 350 160 C 350 195 375 210 407.5 210 C 440 210 465 195 465 160",
    delayMs: 540,
    durationMs: 850,
  },
  {
    id: "u-left-outer",
    letter: "U",
    d: "M 350 70 L 350 160",
    delayMs: 720,
    durationMs: 700,
  },
  {
    id: "u-right-outer",
    letter: "U",
    d: "M 465 160 L 465 70",
    delayMs: 820,
    durationMs: 700,
  },
  {
    id: "u-bottom-curve-inner",
    letter: "U",
    d: "M 376 160 C 376 178 390 184 407.5 184 C 425 184 439 178 439 160",
    delayMs: 1280,
    durationMs: 750,
  },
  {
    id: "u-top-left-cap",
    letter: "U",
    d: "M 350 70 L 376 70",
    delayMs: 1480,
    durationMs: 450,
  },
  {
    id: "u-top-right-cap",
    letter: "U",
    d: "M 465 70 L 439 70",
    delayMs: 1520,
    durationMs: 450,
  },
  {
    id: "u-left-inner",
    letter: "U",
    d: "M 376 70 L 376 160",
    delayMs: 1650,
    durationMs: 650,
  },
  {
    id: "u-right-inner",
    letter: "U",
    d: "M 439 70 L 439 160",
    delayMs: 1720,
    durationMs: 650,
  },

  // --- S (Letter 4) ---
  {
    id: "s-spine-outer",
    letter: "S",
    d: "M 535 110 C 535 134 555 144 590 150 C 625 156 645 168 645 188",
    delayMs: 520,
    durationMs: 850,
  },
  {
    id: "s-top-outer",
    letter: "S",
    d: "M 645 102 C 645 80 625 70 590 70 C 555 70 535 85 535 110",
    delayMs: 750,
    durationMs: 800,
  },
  {
    id: "s-bottom-outer",
    letter: "S",
    d: "M 645 188 C 645 206 625 210 590 210 C 550 210 535 195 535 178",
    delayMs: 850,
    durationMs: 800,
  },
  {
    id: "s-bottom-cap",
    letter: "S",
    d: "M 535 178 L 560 178",
    delayMs: 1380,
    durationMs: 450,
  },
  {
    id: "s-spine-inner",
    letter: "S",
    d: "M 620 176 C 620 160 600 152 570 146 C 545 140 559 122 559 104",
    delayMs: 1490,
    durationMs: 800,
  },
  {
    id: "s-bottom-inner",
    letter: "S",
    d: "M 560 178 C 560 186 572 190 590 190 C 612 190 620 184 620 176",
    delayMs: 1620,
    durationMs: 700,
  },
  {
    id: "s-top-inner",
    letter: "S",
    d: "M 559 104 C 559 94 572 90 590 90 C 608 90 620 94 620 102",
    delayMs: 1780,
    durationMs: 700,
  },
  {
    id: "s-top-cap",
    letter: "S",
    d: "M 620 102 L 645 102",
    delayMs: 2000,
    durationMs: 450,
  },

  // --- A (Letter 5) ---
  {
    id: "a-left-outer",
    letter: "A",
    d: "M 740 70 L 680 210",
    delayMs: 580,
    durationMs: 850,
  },
  {
    id: "a-right-outer",
    letter: "A",
    d: "M 740 70 L 800 210",
    delayMs: 680,
    durationMs: 850,
  },
  {
    id: "a-crossbar-bottom",
    letter: "A",
    d: "M 721 172 L 759 172",
    delayMs: 950,
    durationMs: 600,
  },
  {
    id: "a-triangle-left",
    letter: "A",
    d: "M 740 110 L 728 148",
    delayMs: 1320,
    durationMs: 550,
  },
  {
    id: "a-triangle-right",
    letter: "A",
    d: "M 740 110 L 752 148",
    delayMs: 1400,
    durationMs: 550,
  },
  {
    id: "a-triangle-bar",
    letter: "A",
    d: "M 728 148 L 752 148",
    delayMs: 1540,
    durationMs: 500,
  },
  {
    id: "a-left-foot-cap",
    letter: "A",
    d: "M 680 210 L 706 210",
    delayMs: 1680,
    durationMs: 450,
  },
  {
    id: "a-right-foot-cap",
    letter: "A",
    d: "M 774 210 L 800 210",
    delayMs: 1720,
    durationMs: 450,
  },
  {
    id: "a-left-inner-lower",
    letter: "A",
    d: "M 706 210 L 721 172",
    delayMs: 1840,
    durationMs: 500,
  },
  {
    id: "a-right-inner-lower",
    letter: "A",
    d: "M 774 210 L 759 172",
    delayMs: 1900,
    durationMs: 500,
  },

  // --- C (Letter 6) ---
  {
    id: "c-top-outer",
    letter: "C",
    d: "M 945 102 C 945 78 920 70 890 70 C 855 70 835 95 835 140",
    delayMs: 600,
    durationMs: 850,
  },
  {
    id: "c-bottom-outer",
    letter: "C",
    d: "M 835 140 C 835 185 855 210 890 210 C 920 210 945 202 945 178",
    delayMs: 760,
    durationMs: 850,
  },
  {
    id: "c-top-cap",
    letter: "C",
    d: "M 920 102 L 945 102",
    delayMs: 1360,
    durationMs: 450,
  },
  {
    id: "c-bottom-cap",
    letter: "C",
    d: "M 945 178 L 920 178",
    delayMs: 1440,
    durationMs: 450,
  },
  {
    id: "c-top-inner",
    letter: "C",
    d: "M 920 102 C 920 96 906 94 890 94 C 866 94 858 110 858 140",
    delayMs: 1660,
    durationMs: 750,
  },
  {
    id: "c-bottom-inner",
    letter: "C",
    d: "M 858 140 C 858 170 866 186 890 186 C 906 186 920 184 920 178",
    delayMs: 1820,
    durationMs: 750,
  },
];

export function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (!ENABLE_INTRO) {
      return;
    }

    // Check if user has already seen the intro in this browser session
    try {
      const alreadySeen = sessionStorage.getItem(INTRO_STORAGE_KEY);
      if (alreadySeen) {
        return;
      }
    } catch {
      // sessionStorage might be restricted in some privacy modes
    }

    // Start intro
    setIsVisible(true);

    // Prevent body scrolling while intro is active
    document.body.style.overflow = "hidden";

    // 3.3s: Hold completed logo until 3.3s, then begin smooth reveal transition
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3300);

    // 3.9s: Complete reveal, restore scrolling, unmount intro
    const completeTimer = setTimeout(() => {
      handleComplete();
    }, 3900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    document.body.style.overflow = "";
    setIsVisible(false);
  };

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(handleComplete, 350);
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleSkip}
      role="dialog"
      aria-label="KLU SAC Opening Animation"
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-[#A90000] select-none cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        isFadingOut
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      style={{
        backgroundColor: "#A90000",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        .klu-segment-path {
          stroke: #ffffff;
          fill: none;
          stroke-width: 1.8px;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          opacity: 0;
          animation-name: kluStrokeDraw;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
          will-change: stroke-dashoffset, opacity;
        }

        @keyframes kluStrokeDraw {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        .klu-logo-container {
          will-change: transform, opacity;
          animation: kluLogoHold 3.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes kluLogoHold {
          0% {
            transform: scale(0.99);
          }
          70% {
            transform: scale(1);
          }
          85% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.02);
            opacity: 0.95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .klu-segment-path {
            animation: none !important;
            stroke-dashoffset: 0 !important;
            opacity: 1 !important;
          }
          .klu-logo-container {
            animation: none !important;
          }
        }
      `}</style>

      {/* Centerpiece Vector Animation */}
      <div className="klu-logo-container relative w-full max-w-[92vw] sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-4 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 280"
          className="w-full h-auto drop-shadow-none"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs / clipping or clean structure */}
          <g id="KLU_SAC_CONSTRUCTION" fill="none">
            {STROKE_SEGMENTS.map((seg) => (
              <path
                key={seg.id}
                id={seg.id}
                d={seg.d}
                pathLength="100"
                className="klu-segment-path"
                style={{
                  animationDuration: `${seg.durationMs}ms`,
                  animationDelay: `${seg.delayMs}ms`,
                }}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Subtle Skip Hint (only visible after 1.5s for accessibility) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute bottom-6 right-6 text-xs text-white/40 hover:text-white/80 transition-colors uppercase tracking-widest font-mono text-[11px] px-3 py-1.5 rounded border border-white/10 hover:border-white/30 backdrop-blur-sm"
        aria-label="Skip intro animation"
      >
        Skip
      </button>
    </div>
  );
}
