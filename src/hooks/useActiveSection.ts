import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  // Store whether the active section was manually set (by nav click) to avoid
  // the observer overriding it before the scroll animation completes.
  const manualRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const setActiveSectionManual = (id: string) => {
    manualRef.current = true;
    setActiveSection(id);
    // Release manual lock after scroll has likely settled
    setTimeout(() => {
      manualRef.current = false;
    }, 800);
  };

  return { activeSection, setActiveSection: setActiveSectionManual };
}
