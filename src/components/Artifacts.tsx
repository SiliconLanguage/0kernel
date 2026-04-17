const ARTIFACTS = [
  {
    id: 'brief-001',
    classification: 'BRIEF-001',
    title: 'Interception Integrity Brief: Solving the Platform Compatibility Gap for High-Performance Infrastructure.',
    description:
      'A doctrine-level brief on preserving compatibility and auditability while achieving near bare-metal execution paths across heterogeneous systems.',
    tags: ['INTERCEPTION', 'COMPATIBILITY', 'INFRASTRUCTURE'],
    status: 'AVAILABLE',
    pdf: '/research/Artifact_Interception_Integrity-Double-Trampoline.pdf',
    linkLabel: '[ VIEW_TECHNICAL_BRIEF ]',
    restricted: true,
  },
  {
    id: 'brief-002',
    classification: 'BRIEF-002',
    title: 'Monadic Data Plane Architecture: Zero-Host-CPU Integration of GPUDirect & Libfabric.',
    description:
      'Explores direct accelerator-memory pathways and fabric-first orchestration that minimize host CPU involvement for deterministic throughput.',
    tags: ['MONADIC', 'GPUDIRECT', 'LIBFABRIC'],
    status: 'AVAILABLE',
    pdf: '/research/Monadic_Data_Plane_Architecture_GPUDirect_Update.pdf',
    linkLabel: '[ OPEN_ARCH_SPEC ]',
    restricted: false,
  },
  {
    id: 'brief-003',
    classification: 'BRIEF-003',
    title: 'The Convergence of Domain-Specific Compilation: Bridging LLM Siliconization and Infrastructure Offloading.',
    description:
      'Maps compiler-enforced co-design patterns that align model siliconization with infrastructure offloading into a unified execution strategy.',
    tags: ['COMPILATION', 'LLM_SILICONIZATION', 'OFFLOADING'],
    status: 'AVAILABLE',
    pdf: '/research/domain-specific-compilation.pdf',
    linkLabel: '[ READ_RESEARCH_PAPER ]',
    restricted: false,
  },
] as const;

const STATUS_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  AVAILABLE:  { bg: 'bg-[#00f2ff]/10',   text: 'text-[#00f2ff]',    label: 'AVAILABLE' },
  REDACTED:   { bg: 'bg-[#ffb4ab]/10',   text: 'text-[#ffb4ab]',    label: 'REDACTED' },
  CLASSIFIED: { bg: 'bg-[#849495]/10',   text: 'text-[#849495]/60', label: 'CLASSIFIED' },
};

export default function Artifacts() {
  return (
    <section
      className="section-shell relative px-5 sm:px-8 lg:px-16 xl:px-24 py-24 lg:py-32"
      data-section="research"
      id="research"
    >
      {/* Section tag */}
      <div className="mb-12 flex items-center gap-4">
        <span className="h-px w-10 bg-[#3a494b]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#849495]">
          04 // RESEARCH &amp; BRIEFS
        </span>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#e5e2e1]">
              System
              <br />
              <span className="text-[#00f2ff]">Logs &amp; Artifacts</span>
            </h2>
            <p className="max-w-lg text-base font-light text-[#849495] leading-relaxed">
              Published briefs, proofs, and technical dispatches from the sovereign kernel project.
              Clearance levels apply.
            </p>
          </div>
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#849495]/40">
            {ARTIFACTS.length + 1} RECORDS FOUND
          </span>
        </div>

        <div className="grid gap-px bg-[#3a494b]/10 sm:grid-cols-2">
          {ARTIFACTS.map((artifact) => {
            const badge = STATUS_BADGE[artifact.status] ?? STATUS_BADGE['CLASSIFIED'];
            const isAvailable = artifact.status === 'AVAILABLE';

            return (
              <div
                key={artifact.id}
                className={`group flex flex-col bg-[#0e0e0e] p-6 transition-colors ${
                  isAvailable ? 'hover:bg-[#131313] cursor-pointer' : 'cursor-not-allowed'
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#849495]/50">
                    {artifact.classification}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-[0.6rem] uppercase tracking-widest px-2 py-0.5 ${badge.bg} ${badge.text}`}
                  >
                    {badge.label}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`mb-3 text-base font-light leading-snug ${
                    isAvailable ? 'text-[#e5e2e1] group-hover:text-[#00f2ff] transition-colors' : 'text-[#849495]/60'
                  }`}
                >
                  {artifact.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-[#849495]">
                  {artifact.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {artifact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] uppercase tracking-widest px-1.5 py-0.5 border border-[#3a494b]/25 text-[#849495]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                {isAvailable && (
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={artifact.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artifact-link"
                    >
                      {artifact.linkLabel}
                    </a>
                    {artifact.restricted && (
                      <span className="font-mono text-[0.56rem] tracking-wide text-[#849495]/40 leading-snug">
                        (RESTRICTED_FULL_DECK_AVAILABLE_ON_REQUEST)
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Foundry Card */}
          <div className="foundry-card group flex flex-col bg-[#0e0e0e] p-6 cursor-pointer">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#849495]/50">
                FOUNDRY-001
              </span>
              <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-widest px-2 py-0.5 bg-[#00f2ff]/10 text-[#00f2ff]">
                LIVE
              </span>
            </div>

            {/* Icon + Title */}
            <div className="mb-3 flex items-start gap-3">
              <svg
                className="mt-0.5 shrink-0 text-[#00f2ff]/60 group-hover:text-[#00f2ff] transition-colors"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="12" cy="18" r="2" />
                <line x1="6" y1="8" x2="6" y2="14" />
                <line x1="6" y1="14" x2="12" y2="16" />
                <line x1="18" y1="8" x2="18" y2="14" />
                <line x1="18" y1="14" x2="12" y2="16" />
                <line x1="6" y1="6" x2="18" y2="6" />
              </svg>
              <h3 className="text-base font-light leading-snug text-[#e5e2e1] group-hover:text-[#00f2ff] transition-colors">
                The SiliconLanguage Foundry
              </h3>
            </div>

            {/* Description */}
            <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-[#849495]">
              Simulating the Sovereign Data Plane. Active repositories, open builds, and engineering
              artifacts from the kernel project in-progress.
            </p>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {(['SOURCE_CODE', 'OPEN_BUILD', 'ACTIVE'] as const).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.58rem] uppercase tracking-widest px-1.5 py-0.5 border border-[#3a494b]/25 text-[#849495]/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action */}
            <a
              href="https://github.com/SiliconLanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="artifact-link"
            >
              [ ACCESS_SOURCE_CODE ]
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-[#3a494b]/20 pt-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-[#849495]/30">
            // ADDITIONAL ARTIFACTS PENDING DECLASSIFICATION — EST. RELEASE: [REDACTED]
          </p>
        </div>
      </div>
    </section>
  );
}
