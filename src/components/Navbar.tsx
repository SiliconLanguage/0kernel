import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'declaration', label: '01_DECLARATION' },
  { id: 'thesis', label: '02_THESIS' },
  { id: 'path', label: '03_THE_PATH' },
  { id: 'research', label: '04_RESEARCH' },
  { id: 'identity', label: '05_IDENTITY' },
] as const;

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleClick = (id: string) => {
    onNavClick(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Command Hub header ── */}
      <header className="command-hub" role="banner">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <button
            aria-label="Go to top"
            className="logo-glow terminal-text text-[1.15rem] font-light text-[#00F2FF] bg-transparent border-none cursor-pointer leading-none"
            style={{ textTransform: 'none' }}
            onClick={() => handleClick('declaration')}
          >
            0kernel.ai
          </button>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`command-link${activeSection === id ? ' is-active' : ''}`}
                onClick={() => handleClick(id)}
              >
                [ {label} ]
              </button>
            ))}
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden md:inline-flex items-center gap-2 bg-[#00f2ff] text-[#002022] px-4 py-2 font-mono text-[0.7rem] tracking-widest uppercase glow-cyan hover:brightness-110 transition-all active:scale-95"
              onClick={() => handleClick('identity')}
            >
              ESTABLISH_CONNECTION
            </button>

            {/* Mobile hamburger */}
            <button
              aria-controls="system-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close system menu' : 'Open system menu'}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center border border-[#3a494b]/40 text-[#00f2ff] bg-transparent cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-[1.3rem] leading-none">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen system menu ── */}
      {menuOpen && (
        <div
          aria-label="System menu"
          className="system-menu-panel"
          id="system-menu"
          role="dialog"
        >
          <div className="mx-auto flex flex-col h-full max-w-lg px-6 pt-24 pb-10">

            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#00f2ff]">
                // SYSTEM_MENU
              </span>
              <button
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#3a494b]/40 text-[#849495] hover:text-[#00f2ff] transition-colors bg-transparent cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[1.2rem] leading-none">close</span>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-6 grow">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  className={`command-link text-sm text-left${activeSection === id ? ' is-active' : ''}`}
                  onClick={() => handleClick(id)}
                >
                  [ {label} ]
                </button>
              ))}
            </nav>

            <button
              className="mt-10 flex justify-center bg-[#00f2ff] py-3.5 px-5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[#002022] glow-cyan"
              onClick={() => handleClick('identity')}
            >
              ESTABLISH_CONNECTION
            </button>
          </div>
        </div>
      )}
    </>
  );
}
