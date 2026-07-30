const PredictiveAnalytics: React.FC = () => {
  return (
    <div className="w-full text-on-surface font-body-md selection:bg-primary/30 selection:text-primary">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-primary mb-1">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_graph</span>
              <span className="font-label-caps text-label-caps">LIVE PREDICTIVE ENGINE</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Predictive Analytics Center</h2>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-1.5 rounded-lg text-body-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.5)]"></span>
              AI Model: Llama-3-Ops-Optimized
            </div>
            <button className="bg-surface-container-high hover:bg-surface-container-highest px-4 py-1.5 rounded-lg border border-outline-variant text-body-sm font-medium transition-all">
              Generate Report
            </button>
          </div>
        </div>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-12 gap-6">
          {/* Hero Chart: Projected Resource Usage */}
          <div className="col-span-8 glass-panel rounded-xl p-6 glow-primary relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-primary-container font-label-caps text-label-caps flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">bolt</span> 84% CONFIDENCE
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">query_stats</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md">Projected Resource Usage</h3>
                <p className="text-body-sm text-on-surface-variant">Next 72 hours forecast across cluster-α</p>
              </div>
            </div>
            <div className="h-64 w-full relative flex items-end justify-between gap-1 mt-4">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-t border-white/5 w-full h-0"></div>
                <div className="border-t border-white/5 w-full h-0"></div>
                <div className="border-t border-white/5 w-full h-0"></div>
                <div className="border-t border-white/5 w-full h-0"></div>
              </div>
              {/* Chart Bars */}
              {Array.from({ length: 24 }, (_, i) => {
                const height = 30 + Math.random() * 60;
                const isFuture = i > 12;
                return (
                  <div key={i} className="flex-1 group/bar relative">
                    <div 
                      className="w-full bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm cursor-help relative" 
                      style={{ height: `${height}%` }}
                    >
                      {isFuture && (
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(166,200,255,0.1)_5px,rgba(166,200,255,0.1)_10px)]"></div>
                      )}
                      <div className="hidden group-hover/bar:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest px-2 py-1 rounded text-[10px] whitespace-nowrap z-10 border border-outline-variant">
                        {Math.round(height)}% Util
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-outline-variant/30">
              <div className="flex gap-6">
                <div>
                  <p className="text-label-caps text-on-surface-variant mb-1">CURRENT PEAK</p>
                  <p className="font-headline-md text-primary">4.2 TB/s</p>
                </div>
                <div>
                  <p className="text-label-caps text-on-surface-variant mb-1">EST. GROWTH</p>
                  <p className="font-headline-md text-secondary">+12.4%</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-body-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary/20 rounded-sm"></span> Historical</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary/20 border-l border-t border-dashed border-primary rounded-sm overflow-hidden"><div className="bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(166,200,255,0.2)_2px,rgba(166,200,255,0.2)_4px)] w-full h-full"></div></span> Projected</span>
              </div>
            </div>
          </div>

          {/* Probability of Failure Scores */}
          <div className="col-span-4 glass-panel rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-error/10 rounded-lg text-error">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md">Risk Radar</h3>
                <p className="text-body-sm text-on-surface-variant">Service failure probabilities</p>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant hover:border-error/50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-sm font-medium">Auth-Gateway-01</span>
                  <span className="text-error font-code-md">0.04%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[4%]"></div>
                </div>
              </div>
              <div className="p-3 bg-surface-container-high rounded-lg border border-error/30 relative">
                <div className="absolute -top-2 -right-1 bg-error text-on-error text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">High Risk</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-sm font-medium">DB-Cluster-Primary</span>
                  <span className="text-error font-code-md">18.2%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-error w-[18.2%]"></div>
                </div>
                <p className="text-[10px] text-error/80 mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">info</span> Potential memory leak detected in node_3
                </p>
              </div>
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-sm font-medium">Edge-Cache-Global</span>
                  <span className="text-error font-code-md">1.12%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[10%]"></div>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-surface-container-highest border border-outline-variant rounded-lg text-body-sm hover:text-primary transition-colors flex items-center justify-center gap-2">
              View Full Risk Matrix <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Seasonality Analysis Section */}
          <div className="col-span-7 glass-panel rounded-xl p-6 relative">
            <div className="absolute top-0 left-0 w-full h-full ai-shimmer pointer-events-none opacity-50"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md">Seasonality Analysis</h3>
                <p className="text-body-sm text-on-surface-variant">Autonomous pattern recognition & recurring trends</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-4">
                <div className="bg-surface/40 p-4 rounded-xl border border-outline-variant/30">
                  <h4 className="text-secondary font-label-caps text-label-caps mb-2">DETECTED PATTERN: "MONDAY SPIKE"</h4>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">
                    Aegis has identified a consistent <span className="text-on-surface font-bold">14% increase</span> in API traffic beginning every Monday at 08:30 UTC. This correlates with regional batch synchronization tasks from external partners.
                  </p>
                </div>
                <div className="bg-surface/40 p-4 rounded-xl border border-outline-variant/30">
                  <h4 className="text-primary font-label-caps text-label-caps mb-2">RECOMMENDED ACTION</h4>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">
                    Pre-provision 4 additional instances of <span className="text-on-surface">Service-Auth</span> at 08:15 UTC to mitigate latency.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #8a919e 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
                </div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin-slow mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-4xl">psychology</span>
                  </div>
                  <p className="text-on-surface font-headline-md">AI Syncing...</p>
                  <p className="text-body-sm text-on-surface-variant mt-1">Cross-referencing historical cycles</p>
                </div>
              </div>
            </div>
          </div>

          {/* What-If Simulation Panel */}
          <div className="col-span-5 glass-panel rounded-xl p-6 border-l-4 border-l-primary glow-secondary">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">experiment</span>
                </div>
                <h3 className="font-headline-md text-headline-md">What-If Simulator</h3>
              </div>
              <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Sandbox Mode</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-body-sm text-on-surface-variant">Simulate Traffic Surge (%)</label>
                  <span className="text-primary font-code-md text-body-sm">+250%</span>
                </div>
                <input className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" max="500" min="0" type="range" defaultValue="250" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-body-sm text-on-surface-variant">Resource Ceiling (vCPUs)</label>
                  <span className="text-primary font-code-md text-body-sm">1,200</span>
                </div>
                <input className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" max="2000" min="100" type="range" defaultValue="1200" />
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant border-dashed">
                <h4 className="text-label-caps text-on-surface-variant mb-3">PREDICTED SIMULATION OUTCOME</h4>
                <div className="flex items-center gap-4">
                  <div className="text-center flex-1">
                    <p className="text-xs text-on-surface-variant">Latency</p>
                    <p className="text-xl font-bold text-error">+45ms</p>
                  </div>
                  <div className="h-8 w-[1px] bg-outline-variant"></div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-on-surface-variant">Cost Inc.</p>
                    <p className="text-xl font-bold text-secondary">$1,240/hr</p>
                  </div>
                  <div className="h-8 w-[1px] bg-outline-variant"></div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-on-surface-variant">Reliability</p>
                    <p className="text-xl font-bold text-primary">99.8%</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 transition-all">Apply to Policy</button>
                <button className="flex-1 py-2.5 bg-surface-container-high text-on-surface border border-outline-variant rounded-lg hover:bg-surface-container-highest transition-all">Reset Sim</button>
              </div>
            </div>
          </div>

          {/* Anomaly Forecast Cards */}
          <div className="col-span-12">
            <h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">flare</span>
              Impending Anomalies <span className="text-body-sm font-normal text-on-surface-variant">(Predicted)</span>
            </h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="glass-panel p-4 rounded-xl border-t-2 border-t-secondary/50 group hover:glow-secondary transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">storage</span>
                  </div>
                  <div className="bg-secondary/20 text-secondary text-[10px] px-2 py-0.5 rounded font-bold uppercase">In 4.2h</div>
                </div>
                <h4 className="font-bold text-on-surface mb-1">Storage Saturation</h4>
                <p className="text-body-sm text-on-surface-variant">Predicted overflow on volume 'logs-v4'. AI suggests clearing archive.</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="text-secondary text-[11px] font-bold uppercase tracking-wider hover:underline">Auto-Fix</button>
                  <span className="text-outline text-[10px]">|</span>
                  <button className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider hover:text-on-surface">Dismiss</button>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-xl border-t-2 border-t-error/50 group hover:glow-primary transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center text-error">
                    <span className="material-symbols-outlined">link_off</span>
                  </div>
                  <div className="bg-error/20 text-error text-[10px] px-2 py-0.5 rounded font-bold uppercase">In 18m</div>
                </div>
                <h4 className="font-bold text-on-surface mb-1">Packet Drop Surge</h4>
                <p className="text-body-sm text-on-surface-variant">Congestion projected at US-EAST-1 node. Re-routing recommended.</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="text-error text-[11px] font-bold uppercase tracking-wider hover:underline">Re-route</button>
                  <span className="text-outline text-[10px]">|</span>
                  <button className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider hover:text-on-surface">Dismiss</button>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-xl border-t-2 border-t-primary/50 group hover:glow-primary transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase">In 2.5d</div>
                </div>
                <h4 className="font-bold text-on-surface mb-1">SSL Cert Expiry</h4>
                <p className="text-body-sm text-on-surface-variant">Staging environments certs set to expire. AI auto-renew scheduled.</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="text-primary text-[11px] font-bold uppercase tracking-wider hover:underline">Manage</button>
                  <span className="text-outline text-[10px]">|</span>
                  <button className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider hover:text-on-surface">Dismiss</button>
                </div>
              </div>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="material-symbols-outlined text-4xl mb-2">add_circle</span>
                <p className="text-body-sm font-medium">Add Target Service</p>
                <p className="text-[10px] text-on-surface-variant">Start forecasting for new nodes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Co-pilot Persistent Floating Bubble */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <button className="relative bg-surface p-4 rounded-full border border-outline-variant shadow-2xl flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <span className="font-label-caps text-label-caps pr-2 hidden group-hover:block">Ask Aegis Predictor</span>
          </button>
        </div>
      </div>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .glow-primary {
          box-shadow: 0 0 20px rgba(166, 200, 255, 0.15);
        }
        .glow-secondary {
          box-shadow: 0 0 15px rgba(78, 222, 163, 0.2);
        }
        .ai-shimmer {
          background: linear-gradient(90deg, rgba(166, 200, 255, 0) 0%, rgba(166, 200, 255, 0.05) 50%, rgba(166, 200, 255, 0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .chart-grid-line {
          stroke: rgba(255, 255, 255, 0.05);
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #404753; border-radius: 10px; }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-outline { color: #8a919e; }
        .text-outline-variant { color: #404753; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-error { color: #ffb4ab; }
        .bg-background { background-color: #131315; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-primary-container { background-color: #3192fc; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary/20 { background-color: rgba(78, 222, 163, 0.2); }
        .bg-error/10 { background-color: rgba(255, 180, 171, 0.1); }
        .bg-error/20 { background-color: rgba(255, 180, 171, 0.2); }
        .border-outline-variant { border-color: #404753; }
        .border-primary { border-color: #a6c8ff; }
        .border-error/30 { border-color: rgba(255, 180, 171, 0.3); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .text-on-primary { color: #00315f; }
        .text-primary-container { color: #3192fc; }
        .text-on-error { color: #690005; }
        .border-l-primary { border-left-color: #a6c8ff; }
        .border-t-secondary/50 { border-top-color: rgba(78, 222, 163, 0.5); }
        .border-t-error/50 { border-top-color: rgba(255, 180, 171, 0.5); }
        .border-t-primary/50 { border-top-color: rgba(166, 200, 255, 0.5); }
        .border-white/5 { border-color: rgba(255, 255, 255, 0.05); }
        .bg-surface/40 { background-color: rgba(19, 19, 21, 0.4); }
        .bg-surface-container/40 { background-color: rgba(32, 31, 34, 0.4); }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-primary/30 { background-color: rgba(166, 200, 255, 0.3); }
        .text-on-surface-variant/50 { color: rgba(192, 199, 213, 0.5); }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&family=Geist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </div>
  );
};

export default PredictiveAnalytics;