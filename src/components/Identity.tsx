import { useEffect, useRef, useState } from 'react';

export default function Identity() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealLog, setRevealLog] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealLog(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const specialisations = [
    '[01] Kernel Bypass',
    '[02] Systems Architecture',
    '[03] Security Research',
    '[04] Performance Analysis',
  ] as const;

  const contactNodes = [
    { label: 'WEB', text: 'siliconlanguage.com', href: 'https://siliconlanguage.com' },
    { label: 'EMAIL', text: 'fellow@0kernel.ai', href: 'mailto:fellow@0kernel.ai' },
    { label: 'LINKEDIN', text: 'linkedin.com/in/pinglong', href: 'https://www.linkedin.com/in/pinglong' },
    { label: 'SOURCE', text: 'github.com/SiliconLanguage', href: 'https://github.com/SiliconLanguage' },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="section-shell relative px-5 sm:px-8 lg:px-16 xl:px-24 py-24 lg:py-32 bg-[#0e0e0e]/60"
      data-section="identity"
      id="identity"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="h-px w-10 bg-[#3a494b]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#849495]">
          05 // IDENTITY CONSOLE
        </span>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="terminal-chrome overflow-hidden">
          <div className="terminal-chrome__bar">
            <span className="terminal-chrome__dot bg-[#ffb4ab]/70" />
            <span className="terminal-chrome__dot bg-[#ffdb99]/70" />
            <span className="terminal-chrome__dot bg-[#00f2ff]" />
            <span className="ml-4 font-mono text-[0.65rem] tracking-widest uppercase text-[#849495]">
              the_verified_identity.log
            </span>
          </div>

          <div className="p-6 space-y-5">
            <div className="space-y-1">
              <p className="font-mono text-[0.72rem] text-[#849495]">root@0kernel:~# cat identity.log</p>
            </div>

            <div className="border-t border-[#3a494b]/25 pt-5 space-y-5">
              <div className={`terminal-type-line ${revealLog ? 'is-visible' : ''}`} style={{ animationDelay: '80ms' }}>
                <p className="terminal-key font-mono text-[0.75rem] uppercase tracking-widest font-bold">HANDLE</p>
                <p className="mt-1 terminal-value font-mono text-sm">0kernel // Systems Architect</p>
              </div>

              <div className={`terminal-type-line ${revealLog ? 'is-visible' : ''}`} style={{ animationDelay: '140ms' }}>
                <p className="terminal-key font-mono text-[0.75rem] uppercase tracking-widest font-bold">MISSION</p>
                <p className="mt-1 terminal-value text-sm leading-relaxed break-words">
                  Bypassing the kernel and bridging the Cloud to Edge Pervasive Compute Fabric for
                  a post-Von Neumann event horizon. Focused on hardware-software co-design, Infra
                  optimization for AI, HPC workloads, and bare-metal performance for unmodified
                  workloads.
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-10">
                <div className={`terminal-type-line ${revealLog ? 'is-visible' : ''}`} style={{ animationDelay: '200ms' }}>
                  <p className="terminal-key font-mono text-[0.75rem] uppercase tracking-widest font-bold">
                    SPECIALISATION
                  </p>
                  <div className="mt-2 space-y-1.5">
                    {specialisations.map((item) => (
                      <p key={item} className="terminal-value font-mono text-sm leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className={`terminal-type-line border-t xl:border-t-0 xl:border-l border-[#3a494b]/25 pt-4 xl:pt-0 xl:pl-8 ${revealLog ? 'is-visible' : ''}`} style={{ animationDelay: '260ms' }}>
                  <p className="terminal-key font-mono text-[0.75rem] uppercase tracking-widest font-bold">
                    CONTACT_NODES
                  </p>

                  <div className="mt-2 space-y-1.5">
                    {contactNodes.map((node) => {
                      const isExternal = node.href.startsWith('http');
                      return (
                        <a
                          key={node.label}
                          className="signal-node-link block font-mono text-sm leading-relaxed"
                          href={node.href}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          target={isExternal ? '_blank' : undefined}
                        >
                          <span className="terminal-value">&gt; </span>
                          <span className="terminal-key">[{node.label}]</span>
                          <span className="terminal-value">: {node.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="font-mono text-[0.72rem] text-[#849495]">root@0kernel:~#</span>
              <span className="inline-block w-2.5 h-[1.1em] bg-[#00f2ff] cursor-blink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
