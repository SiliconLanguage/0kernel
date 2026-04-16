const LEGACY = [
  'Separated CPU and Memory.',
  'High context-switch tax.',
  'OS kernels acting as traffic controllers for the hardware-software gap.',
];

const SOVEREIGN = [
  'Unified Silicon.',
  'Monadic Execution.',
  'A Cloud to Edge Pervasive Compute Fabric where compute and storage are a single physical and logical structure across the entire continuum.',
];

export default function Thesis() {
  return (
    <section
      className="section-shell relative px-5 sm:px-8 lg:px-16 xl:px-24 py-24 lg:py-32"
      data-section="thesis"
      id="thesis"
    >
      {/* Section tag */}
      <div className="mb-12 flex items-center gap-4">
        <span className="h-px w-10 bg-[#3a494b]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#849495]">
          02 // EVOLUTIONARY THESIS
        </span>
      </div>

      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#e5e2e1]">
          Von Neumann vs.
          <br />
          <span className="text-[#00f2ff]">Post-Von Neumann</span>
        </h2>
        <p className="mb-16 max-w-3xl text-base font-light text-[#a7a7a7] leading-relaxed">
          The transition is structural, not incremental. The legacy abstraction boundary between
          compute and storage collapses into a deterministic continuum.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Legacy column */}
          <div className="terminal-chrome p-0 overflow-hidden">
            <div className="terminal-chrome__bar gap-3">
              <span className="terminal-chrome__dot bg-[#ffb4ab]/70" />
              <span className="terminal-chrome__dot bg-[#ffdb99]/70" />
              <span className="terminal-chrome__dot bg-[#849495]/40" />
              <span className="ml-4 font-mono text-[0.68rem] tracking-widest uppercase text-[#849495]">
                LEGACY_PARADIGM.c
              </span>
            </div>
            <div className="p-6">
              <div className="mb-5">
                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#849495]/60">
                  SYSTEM_ID:
                </span>
                <p className="mt-1 font-mono text-sm font-light text-[#e5e2e1]">
                  The Legacy (Von Neumann)
                </p>
              </div>
              <ul className="space-y-3">
                {LEGACY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#ffb4ab] shrink-0">
                      close
                    </span>
                    <span className="text-sm font-light text-[#849495] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sovereign column */}
          <div className="terminal-chrome p-0 overflow-hidden border-[#00f2ff]/15 stage-active-glow">
            <div className="terminal-chrome__bar gap-3 border-[#00f2ff]/10">
              <span className="terminal-chrome__dot bg-[#00f2ff]" />
              <span className="terminal-chrome__dot bg-[#00f2ff]/40" />
              <span className="terminal-chrome__dot bg-[#00f2ff]/20" />
              <span className="ml-4 font-mono text-[0.68rem] tracking-widest uppercase text-[#00f2ff]/70">
                SOVEREIGN_KERNEL.rs
              </span>
            </div>
            <div className="p-6">
              <div className="mb-5">
                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#00f2ff]/50">
                  SYSTEM_ID:
                </span>
                <p className="mt-1 font-mono text-sm font-light text-[#00f2ff]">
                  The Future (Post-Von Neumann)
                </p>
              </div>
              <ul className="space-y-3">
                {SOVEREIGN.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#00f2ff] shrink-0">
                      check
                    </span>
                    <span className="text-sm font-light text-[#b9cacb] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider footnote */}
        <div className="mt-12 border-t border-[#3a494b]/20 pt-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-[#849495]/40">
            // CLASSIFICATION: UNREDACTED — FOR SOVEREIGN OPERATORS ONLY
          </p>
        </div>
      </div>
    </section>
  );
}
