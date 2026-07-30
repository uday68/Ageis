const AutonomousAgentFleet: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface px-32 ">
      <div className="max-w-max-width mx-auto">
        {/* Page Header & Global Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">Autonomous Agent Fleet</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and monitor AI agents dedicated to system observability.</p>
          </div>
          {/* Global Toggle */}
          <div className="flex items-center gap-3 bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 shadow-md whitespace-nowrap">
            <div className="flex flex-col gap-0.5">
              <span className="font-body-sm text-body-sm font-medium text-on-surface">Autonomous Remediation</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Global Status</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-2">
              <input checked className="sr-only peer" type="checkbox" value="" />
              <div className="w-12 h-7 bg-surface-variant rounded-full peer peer-checked:bg-secondary-container transition-colors relative">
                <div className="absolute top-1 left-1 w-5 h-5 bg-on-surface rounded-full shadow-md transition-transform peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter gap-3">
          {/* Agent Card: Log Analysis */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-primary/30 rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-primary transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined" data-icon="description">description</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Log Analysis</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Core Agent</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-label-caps text-label-caps">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">45.2k req/s</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-secondary">99.8%</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">120ms</p>
              </div>
            </div>
          </div>

          {/* Agent Card: Metrics Agent */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-primary/30 rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-primary transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Metrics Forecaster</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Analytics Agent</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-label-caps text-label-caps">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">High</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-secondary">98.5%</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">450ms</p>
              </div>
            </div>
          </div>

          {/* Agent Card: Correlation Agent */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-primary/30 rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-primary transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined" data-icon="hub">hub</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Event Correlation</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Synthesis Agent</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-label-caps text-label-caps">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">Moderate</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-secondary">99.1%</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">1.2s</p>
              </div>
            </div>
          </div>

          <div className=" bg-surface-container/40 backdrop-blur-md border border-outline-variant rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-outline transition-colors">
            <div className="flex justify-between items-start opacity-70 gap-3">
              <div className="flex items-center gap-">
                <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined" data-icon="troubleshoot">troubleshoot</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Root Cause Explorer</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Deep Analysis</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant font-label-caps text-label-caps">
                Idle
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30 opacity-70">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">0 req/s</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-on-surface">--</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">--</p>
              </div>
            </div>
          </div>

          {/* Agent Card: Recommendation Agent */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-primary/30 rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-primary transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined" data-icon="recommend">recommend</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Action Recommender</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Remediation Agent</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-label-caps text-label-caps">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">Low</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-secondary">95.4%</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">2.1s</p>
              </div>
            </div>
          </div>

          {/* Agent Card: Report Agent */}
          <div className="bg-surface-container/40 backdrop-blur-md border border-outline-variant rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-outline transition-colors">
            <div className="flex justify-between items-start opacity-70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Incident Reporter</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Documentation</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant font-label-caps text-label-caps">
                Idle
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30 opacity-70">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Workload</p>
                <p className="font-code-md text-code-md text-on-surface">Scheduled</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Success Rate</p>
                <p className="font-code-md text-code-md text-on-surface">100%</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Avg Time</p>
                <p className="font-code-md text-code-md text-on-surface">5.4s</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
          font-variation-settings: 'FILL' 1;
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-variant { background-color: #353437; }
        .bg-surface-bright { background-color: #39393b; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/30 { background-color: rgba(166, 200, 255, 0.3); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary-container { background-color: #00a572; }
        .border-primary { border-color: #a6c8ff; }
        .border-primary/30 { border-color: rgba(166, 200, 255, 0.3); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .text-on-background { color: #e5e1e4; }
        .bg-background { background-color: #131315; }
        .bg-on-surface { background-color: #e5e1e4; }
        .text-secondary-container { color: #00a572; }
        .bg-surface-container/60 { background-color: rgba(32, 31, 34, 0.6); }
        .bg-surface-container/40 { background-color: rgba(32, 31, 34, 0.4); }
        .border-outline-variant { border-color: #404753; }
        .border-primary/30 { border-color: rgba(166, 200, 255, 0.3); }
        .bg-secondary-container { background-color: #00a572; }
        .bg-surface-variant { background-color: #353437; }
        .text-on-surface-variant { color: #c0c7d5; }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .border-primary/30 { border-color: rgba(166, 200, 255, 0.3); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .text-secondary { color: #4edea3; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .bg-surface-variant/40 { background-color: rgba(53, 52, 55, 0.4); }
        .bg-surface-container-highest/30 { background-color: rgba(53, 52, 55, 0.3); }
        .bg-surface-container/70 { background-color: rgba(32, 31, 34, 0.7); }
        .bg-primary/5 { background-color: rgba(166, 200, 255, 0.05); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .text-on-surface/70 { color: rgba(229, 225, 228, 0.7); }
        .bg-secondary/5 { background-color: rgba(78, 222, 163, 0.05); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </main>
  );
};

export default AutonomousAgentFleet;