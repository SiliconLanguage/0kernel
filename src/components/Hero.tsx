interface HeroProps {
  onNavClick: (id: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      className="section-shell schematic-bg scanlines relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-16 xl:px-24 py-28"
      data-section="declaration"
      id="declaration"
    >
      {/* Corner decoration */}
      <div className="pointer-events-none absolute top-[4.5rem] left-0 w-[1px] h-40 bg-gradient-to-b from-transparent via-[#3a494b]/40 to-transparent" />
      <div className="pointer-events-none absolute top-[4.5rem] right-3 w-[1px] h-56 bg-gradient-to-b from-[#00f2ff]/20 via-[#00f2ff]/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section tag */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#00f2ff]/70" />
          <span className="font-mono text-[0.72rem] tracking-[0.3em] text-[#00f2ff] uppercase">
            HeroSection // System Initialization Complete
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-typewriter mb-8 text-[2.8rem] sm:text-[3.8rem] lg:text-[5rem] font-light leading-[1.05] tracking-[-0.02em] text-[#e5e2e1]">
          <span className="text-[#00f2ff]">&gt;</span>{' '}
          THE ERA OF THE<br className="hidden lg:block" />{' '}
          GENERAL-PURPOSE<br className="hidden lg:block" />{' '}
          KERNEL IS OVER
          <span className="cursor-blink text-[#00f2ff]">_</span>
        </h1>

        {/* Description */}
        <p className="mb-12 max-w-3xl text-base sm:text-lg font-light leading-relaxed text-[#d8d8d8]">
          The Operating System kernel was architected for the Von Neumann era—a time of distinct
          separation between compute and memory. As AI workloads demolish the memory wall, the
          legacy kernel and the Von Neumann bottleneck will fade away together, giving rise to the
          Cloud to Edge Pervasive Compute Fabric.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            className="inline-flex items-center gap-3 bg-[#00f2ff] px-7 py-3.5 font-mono text-[0.75rem] uppercase tracking-widest text-[#002022] glow-cyan hover:brightness-110 transition-all active:scale-95"
            onClick={() => onNavClick('path')}
          >
            EXPLORE THE MONADIC HORIZON
            <span className="material-symbols-outlined text-base leading-none">east</span>
          </button>
          <button
            className="inline-flex items-center gap-3 border border-[#3a494b]/40 px-7 py-3.5 font-mono text-[0.75rem] uppercase tracking-widest text-[#849495] hover:border-[#00f2ff]/40 hover:text-[#e5e2e1] transition-all"
            onClick={() => onNavClick('research')}
          >
            VIEW_REDACTED_DOCS
          </button>
        </div>

        {/* Status indicators */}
        <div className="mt-16 flex flex-wrap gap-8 text-[0.68rem] font-mono uppercase tracking-[0.22em] text-[#849495]/60">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
            NODE_ACTIVE
          </span>
          <span>KERNEL_VER 0.1.0-alpha</span>
          <span>THREAT_LVL [CLASSIFIED]</span>
        </div>
      </div>

      {/* Schematic art — bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:flex w-72 xl:w-96 h-72 items-end justify-end p-8 opacity-[0.12]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="1" y="1" width="198" height="198" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#00f2ff" strokeWidth="0.3" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="#00f2ff" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" stroke="#00f2ff" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="4" fill="#00f2ff" />
          <text x="106" y="65" fill="#00f2ff" fontSize="7" fontFamily="JetBrains Mono">0x00F2FF</text>
          <text x="106" y="108" fill="#00f2ff" fontSize="7" fontFamily="JetBrains Mono">MONADIC</text>
        </svg>
      </div>
    </section>
  );
}
