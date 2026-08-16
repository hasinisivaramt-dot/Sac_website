import { useEffect, useState } from 'react';

/** Returns scrollY and a 0–1 progress value for a given max scroll distance. Useful for parallax. */
export function useScrollAnimation(maxScroll = 800) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollY, progress: Math.min(scrollY / maxScroll, 1) };
}
