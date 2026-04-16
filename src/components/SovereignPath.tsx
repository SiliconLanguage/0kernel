import { useEffect, useRef, useState } from 'react';

const STAGES = [
  {
    id: '01',
    title: 'The Great Escape (Kernel Bypassing)',
    description:
      'Removing the OS from the data path. Utilizing SPDK/DPDK to eliminate the 20,000-instruction Von Neumann tax.',
  },
  {
    id: '02',
    title: 'Platform Integrity (Interception & Observability)',
    description:
      'Achieving bare-metal speed for unmodified binaries via the Double Trampoline. Maintaining 100% security auditability and observability across the platform without reintroducing the kernel tax.',
  },
  {
    id: '03',
    title: 'Zero-Host-CPU Orchestration (Sovereign Execution Plane Synthesis)',
    description:
      'Transcending the CPU-centric bottleneck. Orchestrating the Sovereign Execution Plane to enable direct, autonomous pathways between the network fabric and accelerator memory. The host CPU is relegated to a pure administrative agent.',
  },
  {
    id: '04',
    title: 'Sovereign Control (Compiler-Enforced HW/SW Binding)',
    description:
      'Replacing heuristic schedulers with deterministic execution pipelines in Rust or Go. The compiler enforces physical hardware constraints, ensuring software is as rigid and predictable as the silicon it governs.',
  },
  {
    id: '05',
    title: 'The Monadic Horizon (Cloud to Edge Pervasive Compute Fabric)',
    description:
      'The physical limit where Compute, Memory, I/O, OS, and Hypervisor fuse into a single unit of structure. This structural fusion transforms the network into a Cloud to Edge Pervasive Compute Fabric-a unified execution entity constrained only by the physics of silicon.',
  },
] as const;

export default function SovereignPath() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stageEls = Array.from(
      section.querySelectorAll<HTMLElement>('[data-stage-index]'),
    );
    const visibility = new Array(stageEls.length).fill(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.stageIndex);
          if (Number.isFinite(index)) {
            visibility[index] = entry.isIntersecting ? entry.intersectionRatio : 0;
          }
        });

        let nextIndex = activeStage;
        let maxRatio = -1;
        visibility.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextIndex = index;
          }
        });

        if (maxRatio > 0 && nextIndex !== activeStage) {
          setActiveStage(nextIndex);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-20% 0px -30% 0px',
      },
    );

    stageEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeStage]);

  return (
    <section
      ref={sectionRef}
      className="section-shell relative px-5 sm:px-8 lg:px-16 xl:px-24 py-24 lg:py-32"
      data-section="path"
      id="path"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="h-px w-10 bg-[#3a494b]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#849495]">
          03 // THE SOVEREIGN PATH
        </span>
      </div>

      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#e5e2e1]">
          The Vertical
          <br />
          <span className="text-[#00f2ff]">Sovereign Progression</span>
        </h2>
        <p className="mb-20 max-w-3xl text-base font-light text-[#a7a7a7] leading-relaxed">
          A deterministic transition from legacy kernels to the Cloud to Edge Pervasive Compute
          Fabric.
        </p>

        <div className="relative">
          <div className="sovereign-line absolute left-[1.75rem] lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              const isActive = index === activeStage;

              return (
                <div
                  key={stage.id}
                  data-stage-index={index}
                  className={`relative flex items-start lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } pb-12 lg:pb-20`}
                >
                  <div className="absolute left-[1.75rem] lg:left-1/2 -translate-x-1/2 z-10 mt-1 lg:mt-0">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-[#0a0a0a] transition-all duration-300 ${
                        isActive ? 'bg-[#00f2ff] shadow-[0_0_14px_#00f2ff] pulse-cyan' : 'bg-[#3a494b]'
                      }`}
                    />
                  </div>

                  <div
                    className={`hidden lg:flex w-1/2 ${
                      isEven ? 'justify-end pr-12' : 'justify-start pl-12'
                    } items-center`}
                  >
                    <span className="font-mono text-[3.5rem] font-light leading-none text-[#1a1a1a] select-none">
                      {stage.id}
                    </span>
                  </div>

                  <div
                    className={`ml-16 lg:ml-0 lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'} border p-6 transition-all duration-300 ${
                      isActive
                        ? 'border-[#00f2ff]/35 bg-[#0b0b0b] shadow-[inset_0_0_0_1px_rgba(0,242,255,0.18),0_0_28px_rgba(0,242,255,0.1)]'
                        : 'border-[#3a494b]/20 bg-[#0c0c0c]'
                    }`}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#849495]/70">
                        STAGE_{stage.id}
                      </span>
                    </div>

                    <h3
                      className={`mb-3 text-xl font-light tracking-tight transition-colors ${
                        isActive ? 'text-[#00f2ff] pulse-cyan' : 'text-[#e5e5e5]'
                      }`}
                    >
                      {stage.title}
                    </h3>

                    <p className="text-sm font-light leading-relaxed text-[#bdbdbd]">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
