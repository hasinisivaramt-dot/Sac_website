import { useRef, useMemo, useEffect } from 'react';

/**
 * ElasticMeshImage — slices an image into a fine grid and displaces each
 * cell away from the cursor with a falloff, like poking an elastic sheet.
 * Tracks the pointer with a quick transition while active, then springs
 * every cell back to rest with a slower, elastic-feeling ease on leave.
 *
 * Built from scratch (no external mesh/shader library) using layered
 * CSS background-position slicing + per-cell transforms driven by
 * requestAnimationFrame, so it works anywhere plain React + Tailwind runs.
 */
export default function ElasticMeshImage({
  src,
  alt = '',
  className = '',
  cols = 10,
  rows = 7,
  strength = 30,
  radius = 0.42,
}) {
  const containerRef = useRef(null);
  const cellRefs = useRef([]);
  const rafRef = useRef(null);
  const pointer = useRef({ x: 0.5, y: 0.5, active: false });

  const cells = useMemo(() => {
    const list = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        list.push({ c, r });
      }
    }
    return list;
  }, [cols, rows]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function applyTransforms() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { x: mx, y: my, active } = pointer.current;

    cellRefs.current.forEach((el, i) => {
      if (!el) return;
      const { c, r } = cells[i];
      const ccx = cols === 1 ? 0.5 : c / (cols - 1);
      const ccy = rows === 1 ? 0.5 : r / (rows - 1);

      let dx = 0;
      let dy = 0;
      let scale = 1;

      if (active && !reduceMotion) {
        const ddx = ccx - mx;
        const ddy = ccy - my;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy) || 0.0001;
        const influence = Math.max(0, 1 - dist / radius);
        const eased = influence * influence;
        dx = (ddx / dist) * eased * strength;
        dy = (ddy / dist) * eased * strength;
        scale = 1 + eased * 0.1;
      }

      el.style.transition = active
        ? 'transform 110ms linear'
        : 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${scale.toFixed(3)})`;
    });

    rafRef.current = null;
  }

  function scheduleUpdate() {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(applyTransforms);
    }
  }

  function handleMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    pointer.current.x = (e.clientX - rect.left) / rect.width;
    pointer.current.y = (e.clientY - rect.top) / rect.height;
    pointer.current.active = true;
    scheduleUpdate();
  }

  function handleLeave() {
    pointer.current.active = false;
    scheduleUpdate();
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {cells.map(({ c, r }, i) => (
        <div
          key={i}
          ref={(el) => (cellRefs.current[i] = el)}
          className="absolute will-change-transform"
          style={{
            left: `${(c / cols) * 100}%`,
            top: `${(r / rows) * 100}%`,
            width: `${100 / cols + 0.6}%`,
            height: `${100 / rows + 0.6}%`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${cols * 100}% ${rows * 100}%`,
            backgroundPosition: `${cols === 1 ? 0 : (c / (cols - 1)) * 100}% ${
              rows === 1 ? 0 : (r / (rows - 1)) * 100
            }%`,
          }}
        />
      ))}
    </div>
  );
}
