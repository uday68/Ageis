import React, { useEffect, useRef } from "react";

const NotFound: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Mouse parallax effect for the grid background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      gridRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Periodic glitch effect on code elements
  useEffect(() => {
    glitchIntervalRef.current = setInterval(() => {
      const glitchTargets = document.querySelectorAll(".font-code-md");
      if (glitchTargets.length === 0) return;
      const target = glitchTargets[Math.floor(Math.random() * glitchTargets.length)] as HTMLElement;
      if (Math.random() > 0.7) {
        target.classList.add("text-primary");
        setTimeout(() => {
          target.classList.remove("text-primary");
        }, 150);
      }
    }, 3000);

    return () => {
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
    };
  }, []);

  return (
    <>
      {/* Inline styles – you can move these to a global CSS file */}
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
        
        .glitch-text {
          text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 1s infinite;
        }

        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
          14% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
          15% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
          49% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
          50% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
          99% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75); }
        }

        .scanline {
          width: 100%;
          height: 100px;
          z-index: 10;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(166, 200, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%);
          opacity: 0.1;
          position: absolute;
          bottom: 100%;
          animation: scanline 6s linear infinite;
        }

        @keyframes scanline {
          0% { bottom: 100%; }
          100% { bottom: -100px; }
        }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }

        .infra-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>

      <div className="mt-3 ml-100 p-5 bg-background text-on-background font-body-md overflow-hidden flex items-center justify-center min-h-screen relative scale-90">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0">
          {/* Infrastructure Grid with parallax */}
          <div ref={gridRef} className="absolute inset-0 infra-grid opacity-50"></div>
          <div className="absolute inset-0 noise-bg"></div>
          <div className="scanline"></div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 opacity-40 flex flex-col gap-2">
            <div className="font-label-caps text-label-caps text-primary">SYSTEM_STATUS: CORRUPT</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">TRACE_ID: 88-AF-32-11-XX</div>
          </div>
          <div className="absolute bottom-10 right-10 opacity-40 text-right">
            <div className="font-label-caps text-label-caps text-primary">AEGIS_COORDINATES</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">NODE_LAT: 37.7749 / NODE_LONG: -122.4194</div>
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-20 w-full max-w-2xl px-margin-mobile md:px-0">
          <div className="flex flex-col items-center text-center">
            {/* Branding */}
            <div className="mb-12 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">shield</span>
              <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary uppercase">
                Aegis AI
              </span>
            </div>

            {/* Error Title Section */}
            <div className="relative mb-8">
              <h1 className="font-display text-[120px] md:text-[180px] leading-none text-primary/10 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-surface-container/40 backdrop-blur-md px-6 py-2 border border-outline-variant/30 rounded-lg">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-wide glitch-text">
                    NODE NULL
                  </h2>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-10 leading-relaxed">
              The requested resource has been decoupled from the primary intelligence grid. The neural path to{" "}
              <span className="font-code-md text-code-md text-secondary">/resources/active_nodes</span> is no longer valid or has been sequestered by the Aegis core.
            </p>

            {/* Primary Action */}
            <div className="mb-16">
              <a
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-headline-md text-headline-md rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(166,200,255,0.3)] hover:shadow-[0_0_30px_rgba(166,200,255,0.5)]"
                href="/"
              >
                <span className="material-symbols-outlined">terminal</span>
                Back to Command Center
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Quick Links (Bento-style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
              <a
                className="group flex flex-col items-start p-6 bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/20 rounded-xl transition-all hover:bg-surface-container-high hover:border-primary/50"
                href="/"
              >
                <div className="p-2 bg-primary-container/20 rounded-lg mb-4 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">dashboard</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface mb-1">DASHBOARD</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-left">
                  Return to global monitoring metrics.
                </span>
              </a>

              <a
                className="group flex flex-col items-start p-6 bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/20 rounded-xl transition-all hover:bg-surface-container-high hover:border-tertiary/50"
                href="/live-incidents"
              >
                <div className="p-2 bg-tertiary-container/20 rounded-lg mb-4 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface mb-1">INCIDENTS</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-left">
                  View active investigation alerts.
                </span>
              </a>

              <a
                className="group flex flex-col items-start p-6 bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/20 rounded-xl transition-all hover:bg-surface-container-high hover:border-secondary/50"
                href="#"
              >
                <div className="p-2 bg-secondary-container/20 rounded-lg mb-4 text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface mb-1">SUPPORT</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-left">
                  Access technical documentation.
                </span>
              </a>
            </div>

            {/* Footer Meta */}
            <div className="mt-16 pt-8 border-t border-outline-variant/10 w-full flex flex-wrap justify-between items-center gap-4 opacity-40">
              <div className="flex items-center gap-4">
                <span className="font-code-md text-code-md">ERROR_CODE: 0x404_NULL_REF</span>
                <span className="w-1 h-1 bg-on-surface-variant rounded-full"></span>
                <span className="font-code-md text-code-md">SEC_LEVEL: ALPHA</span>
              </div>
              <div className="font-code-md text-code-md">v2.4.0-STABLE</div>
            </div>
          </div>
        </main>

        {/* Floating Atmospheric Blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </>
  );
};

export default NotFound;