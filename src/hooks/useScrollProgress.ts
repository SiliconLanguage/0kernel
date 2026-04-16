import { useState, useEffect } from 'react';

/**
 * Tracks scroll progress (0–1) through a given section, accounting for
 * viewport offset so the bar feels natural as you scroll through content.
 */
export function useScrollProgress(sectionId: string): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Start filling when the section top reaches 35% from the bottom of the viewport
      // Finish when section bottom exits the top 35% of the viewport
      const start = sectionTop - viewportHeight * 0.65;
      const end = sectionTop + sectionHeight - viewportHeight * 0.35;
      const distance = Math.max(end - start, 1);
      const p = Math.min(Math.max((window.scrollY - start) / distance, 0), 1);

      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(rafId);
    };
  }, [sectionId]);

  return progress;
}
