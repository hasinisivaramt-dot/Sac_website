import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

/**
 * useHoloTilt — shared logic behind the site's holographic tilt-card
 * effect: on hover the card tilts toward the cursor in 3D and a
 * rainbow/gold sheen tracks the pointer across it. Flat and sheen-free at
 * rest; respects prefers-reduced-motion by skipping the tilt.
 *
 * Usage: spread `handlers` onto the outer motion.div, attach `cardRef` to
 * the element whose bounding box defines the tilt area, and apply
 * `rotateX`/`rotateY` to the tilting layer plus `sheenX`/`sheenY`/
 * `sheenOpacity` to a sheen overlay (see ClubCard.jsx / EventCard.jsx).
 */
export function useHoloTilt({ maxTilt = 13 } = {}) {
  const cardRef = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sheenOpacity = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), { stiffness: 250, damping: 20 });
  const sheenX = useTransform(px, (v) => `${v * 100}%`);
  const sheenY = useTransform(py, (v) => `${v * 100}%`);

  function handleMove(e) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    px.set(Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1));
    py.set(Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1));
  }

  function handleEnter() {
    animate(sheenOpacity, 1, { duration: 0.25, ease: 'easeOut' });
  }

  function handleLeave() {
    animate(px, 0.5, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
    animate(py, 0.5, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
    animate(sheenOpacity, 0, { duration: 0.4, ease: 'easeOut' });
  }

  return {
    cardRef,
    rotateX,
    rotateY,
    sheenX,
    sheenY,
    sheenOpacity,
    handlers: { onMouseMove: handleMove, onMouseEnter: handleEnter, onMouseLeave: handleLeave },
  };
}
