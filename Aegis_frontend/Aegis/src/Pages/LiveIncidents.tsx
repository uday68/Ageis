const LiveIncidents: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col min-h-screen w-full relative bg-background">
      {/* Page Content */}
      <div className="flex-1 p-margin-desktop overflow-y-auto">
        <div className="max-w-[max-width] mx-auto space-y-gutter">
          {/* Incident Header */}
          <div className="glass-panel rounded-xl p-gutter flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded font-label-caps text-label-caps flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  CRITICAL
                </span>
                <span className="text-on-surface-variant font-label-caps text-label-caps border border-outline-variant px-2 py-0.5 rounded">INC-2023-8942</span>
                <span className="text-on-surface-variant font-label-caps text-label-caps">Production</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">Database Connection Pool Exhaustion</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Service: <span className="text-on-surface font-medium">auth-service</span> | Cluster: <span className="text-on-surface font-medium">us-east-1-prod</span> | Started: <span className="text-on-surface font-medium">11:05 UTC</span></p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-body-sm text-body-sm text-on-surface-variant">System Impact Score</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="font-display text-display text-6xl text-error leading-none">92</span>
                <span className="font-body-md text-body-md text-on-surface-variant mb-1">/100</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-outline-variant flex overflow-x-auto hide-scrollbar">
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-primary border-b-2 border-primary whitespace-nowrap">Overview</button>
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Timeline</button>
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Logs</button>
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Metrics</button>
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Root Cause</button>
            <button className="px-4 py-3 font-body-md text-body-md font-medium text-primary-fixed-dim hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              AI Analysis
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
            {/* Left Column: AI Analysis & Metrics */}
            <div className="xl:col-span-2 space-y-gutter">
              {/* AI Root Cause Summary */}
              <div className="glass-panel ai-glow rounded-xl p-gutter relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container via-primary to-secondary-container opacity-50"></div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim animate-pulse">psychology</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">AI Root Cause Analysis</h2>
                  <span className="ml-auto font-label-caps text-label-caps text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">CONFIDENCE: 96%</span>
                </div>
                <div className="space-y-4">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The <code className="font-code-md text-code-md bg-surface-container-high px-1 rounded text-on-surface">auth-service</code> experienced connection pool exhaustion primarily driven by an unindexed query introduced in deployment <code className="font-code-md text-code-md bg-surface-container-high px-1 rounded text-primary">v2.4.1</code>. The query <code className="font-code-md text-code-md bg-surface-container-high px-1 rounded text-error-container">SELECT * FROM sessions WHERE last_active &lt; ?</code> caused sequential table scans, increasing transaction duration by 450% and saturating the HikariCP pool of 50 connections.
                  </p>
                  <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-3">
                    <h3 className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">build</span>
                      Suggested Remediation
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface mb-3">Apply a composite index on <code className="font-code-md text-code-md">sessions.last_active</code> and <code className="font-code-md text-code-md">sessions.user_id</code> or revert to deployment <code className="font-code-md text-code-md">v2.4.0</code> immediately to restore service.</p>
                    <div className="flex gap-2">
                      <button className="bg-primary text-on-primary font-body-sm text-body-sm font-medium py-1.5 px-3 rounded flex items-center gap-1 hover:bg-primary-fixed transition-colors">
                        <span className="material-symbols-outlined text-[16px]">history</span>
                        Revert Deployment
                      </button>
                      <button className="border border-outline-variant text-on-surface font-body-sm text-body-sm font-medium py-1.5 px-3 rounded flex items-center gap-1 hover:bg-surface-bright transition-colors">
                        <span className="material-symbols-outlined text-[16px]">database</span>
                        Generate Index SQL
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Metrics */}
              <div className="glass-panel rounded-xl p-gutter">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined">monitoring</span>
                    Connection Pool Saturation
                  </h2>
                  <span className="flex items-center gap-1 font-body-sm text-body-sm text-error">
                    <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                    Live
                  </span>
                </div>
                {/* Chart Placeholder */}
                <div className="p-8 h-64 bg-surface-container-lowest rounded border border-outline-variant/30 flex items-end relative overflow-hidden  gap-1">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-2 opacity-10">
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                  </div>
                  <div className="w-full h-full flex items-end gap-1 px-4 relative z-10">
                    <div className="w-1/12 bg-primary/40 h-[20%] rounded-t"></div>
                    <div className="w-1/12 bg-primary/40 h-[22%] rounded-t"></div>
                    <div className="w-1/12 bg-primary/40 h-[19%] rounded-t"></div>
                    <div className="w-1/12 bg-primary/40 h-[25%] rounded-t"></div>
                    <div className="w-1/12 bg-tertiary-container/60 h-[45%] rounded-t transition-all duration-500"></div>
                    <div className="w-1/12 bg-error-container/80 h-[85%] rounded-t transition-all duration-500"></div>
                    <div className="w-1/12 bg-error/90 h-full rounded-t transition-all duration-500 relative">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface-container-high border border-outline-variant px-2 py-1 rounded text-xs whitespace-nowrap text-error font-mono">100% Full</div>
                    </div>
                    <div className="w-1/12 bg-error/90 h-full rounded-t"></div>
                    <div className="w-1/12 bg-error/90 h-full rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="xl:col-span-1">
              <div className="glass-panel rounded-xl p-gutter h-full">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">schedule</span>
                  Incident Timeline
                </h2>
                <div className="relative space-y-6">
                  <div className="timeline-item relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
                    </div>
                    <div className="font-label-caps text-label-caps text-primary mb-1">11:05 UTC</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">CPU Spike Detected</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">auth-service-pod-xyz reported 90% CPU utilization.</div>
                  </div>
                  <div className="timeline-item relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
                    </div>
                    <div className="font-label-caps text-label-caps text-tertiary-container mb-1">11:07 UTC</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">Database Latency Increase</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Query duration on 'sessions' table exceeded 500ms threshold.</div>
                  </div>
                  <div className="timeline-item relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                    </div>
                    <div className="font-label-caps text-label-caps text-error mb-1">11:08 UTC</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium text-error">Pool Saturation Reached</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">HikariCP active connections hit max limit (50/50). Thread starvation began.</div>
                  </div>
                  <div className="timeline-item relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                    </div>
                    <div className="font-label-caps text-label-caps text-error mb-1">11:10 UTC</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">Service Degradation</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">503 Service Unavailable responses spiked to 45% of traffic on API gateway.</div>
                  </div>
                  <div className="timeline-item relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 w-6 h-6 rounded-full bg-error/20 border border-error flex items-center justify-center z-10 animate-pulse">
                      <span className="material-symbols-outlined text-[14px] text-error">warning</span>
                    </div>
                    <div className="font-label-caps text-label-caps text-error mb-1">11:11 UTC</div>
                    <div className="font-body-md text-body-md text-on-surface font-bold">Critical Incident Triggered</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Automated pager duty alert dispatched to On-Call Engineer (Team Alpha).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel {
          background: rgba(24, 24, 27, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .ai-glow {
          box-shadow: 0 0 15px rgba(166, 200, 255, 0.15), inset 0 0 20px rgba(166, 200, 255, 0.05);
          border: 1px solid rgba(166, 200, 255, 0.2);
        }
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 11px;
          top: 24px;
          bottom: -24px;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }
        .timeline-item:last-child .timeline-line::before {
          display: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-primary { color: #a6c8ff; }
        .text-primary-fixed-dim { color: #a6c8ff; }
        .text-secondary-fixed-dim { color: #4edea3; }
        .text-error { color: #ffb4ab; }
        .text-error-container { color: #93000a; }
        .text-tertiary-container { color: #ff5446; }
        .bg-background { background-color: #131315; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-bright { background-color: #39393b; }
        .bg-surface-variant { background-color: #353437; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-error { background-color: #ffb4ab; }
        .bg-error/20 { background-color: rgba(255, 180, 171, 0.2); }
        .bg-error/90 { background-color: rgba(255, 180, 171, 0.9); }
        .bg-error-container { background-color: #93000a; }
        .bg-error-container/80 { background-color: rgba(147, 0, 10, 0.8); }
        .bg-tertiary-container/60 { background-color: rgba(255, 84, 70, 0.6); }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .border-primary { border-color: #a6c8ff; }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .border-error { border-color: #ffb4ab; }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .text-on-error-container { color: #ffdad6; }
        .text-on-primary { color: #00315f; }
        .bg-primary-fixed { background-color: #d5e3ff; }
        .bg-primary-container { background-color: #3192fc; }
        .text-secondary-container { color: #00a572; }
        .bg-secondary-container { background-color: #00a572; }
        .from-primary-container { --tw-gradient-from: #3192fc; }
        .via-primary { --tw-gradient-via: #a6c8ff; }
        .to-secondary-container { --tw-gradient-to: #00a572; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .text-error-container { color: #93000a; }
        .bg-error/90 { background-color: rgba(255, 180, 171, 0.9); }
        .bg-error-container/80 { background-color: rgba(147, 0, 10, 0.8); }
        .bg-tertiary-container/60 { background-color: rgba(255, 84, 70, 0.6); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .border-surface-container-high { border-color: #2a2a2c; }
        .text-primary/20 { color: rgba(166, 200, 255, 0.2); }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .bg-error/10 { background-color: rgba(255, 180, 171, 0.1); }
        .bg-error/20 { background-color: rgba(255, 180, 171, 0.2); }
        .text-error/90 { color: rgba(255, 180, 171, 0.9); }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .text-primary-fixed-dim { color: #a6c8ff; }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .bg-tertiary-container/60 { background-color: rgba(255, 84, 70, 0.6); }
        .bg-error-container/80 { background-color: rgba(147, 0, 10, 0.8); }
        .bg-error/90 { background-color: rgba(255, 180, 171, 0.9); }
        .text-error { color: #ffb4ab; }
        .bg-error/20 { background-color: rgba(255, 180, 171, 0.2); }
        .border-error { border-color: #ffb4ab; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/20 { border-color: rgba(64, 71, 83, 0.2); }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .text-primary/20 { color: rgba(166, 200, 255, 0.2); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .bg-primary { background-color: #a6c8ff; }
        .text-on-primary { color: #00315f; }
        .bg-primary-fixed { background-color: #d5e3ff; }
        .bg-surface-bright { background-color: #39393b; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .border-outline-variant/20 { border-color: rgba(64, 71, 83, 0.2); }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-bright/50 { background-color: rgba(57, 57, 59, 0.5); }
        .bg-surface-container/60 { background-color: rgba(32, 31, 34, 0.6); }
        .bg-surface/80 { background-color: rgba(19, 19, 21, 0.8); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </main>
  );
};

export default LiveIncidents;