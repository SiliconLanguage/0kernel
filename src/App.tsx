import { useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import SovereignPath from './components/SovereignPath';
import Artifacts from './components/Artifacts';
import Identity from './components/Identity';
import { useActiveSection } from './hooks/useActiveSection';
import { useScrollProgress } from './hooks/useScrollProgress';

const SECTION_IDS = ['declaration', 'thesis', 'path', 'research', 'identity'];

export default function App() {
  const { activeSection, setActiveSection } = useActiveSection(SECTION_IDS);
  const scrollProgress = useScrollProgress('path');

  const handleNavClick = useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      setActiveSection(id);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    },
    [setActiveSection],
  );

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Scroll Progress Rail — 2px right-edge bar tracking #path section */}
      <div
        aria-hidden="true"
        className="progress-rail"
        style={{ opacity: scrollProgress > 0.01 && scrollProgress < 0.99 ? 1 : 0.3 }}
      >
        <div
          className="progress-rail__fill"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      <main className="pt-[4.5rem] global-scanlines">
        <Hero onNavClick={handleNavClick} />
        <Thesis />
        <SovereignPath />
        <Artifacts />
        <Identity />
      </main>

      <footer className="w-full py-14 border-t border-[#00F2FF]/10 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-8 mb-2">
          <span className="font-mono text-[0.68rem] uppercase text-white/25 tracking-widest">
            ENCRYPTION_PROTOCOL
          </span>
          <span className="font-mono text-[0.68rem] uppercase text-white/25 tracking-widest">
            TERMINAL_LOGS
          </span>
          <span className="font-mono text-[0.68rem] uppercase text-white/25 tracking-widest">
            SOURCE_CORE
          </span>
        </div>
        <p className="font-mono text-[0.68rem] uppercase text-white/20">
          © 2026 0KERNEL.AI // [REDACTED]
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
          <span className="font-mono text-[9px] text-[#00f2ff]/60 tracking-widest uppercase">
            Global Node Connectivity: Established
          </span>
        </div>
      </footer>
    </>
  );
}
