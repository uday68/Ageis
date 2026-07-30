const ServiceMetrics: React.FC = () => {
  return (
    <div className="w-full text-on-background font-body-md">
      <div className="w-full space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary text-label-caps uppercase tracking-widest font-bold">SLO Service Level Objective</span>
              <div className="h-px w-12 bg-outline-variant"></div>
            </div>
            <h2 className="font-headline-md text-headline-lg text-on-surface">Service Metrics Center</h2>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg">
              <span className="material-symbols-outlined text-secondary text-[18px]">timer</span>
              <span className="text-body-sm text-on-surface-variant">Last 24 Hours</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export SLI
            </button>
          </div>
        </div>

        {/* Top Row: High-Level SLO Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Experience Score */}
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-caps text-on-surface-variant">User Experience Score</span>
                <span className="text-secondary text-body-sm font-bold">+0.4%</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-headline-md font-bold text-on-surface">98.2</span>
                <span className="text-body-sm text-on-surface-variant">/ 100</span>
              </div>
              <div className="mt-6 flex items-end gap-1 h-12">
                <div className="w-full h-8 bg-secondary/10 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0 35 Q 20 20, 40 25 T 80 10 T 100 15 V 40 H 0 Z" fill="none" stroke="#4edea3" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">sentiment_satisfied</span>
            </div>
          </div>

          {/* Error Budget Remaining */}
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-caps text-on-surface-variant">Error Budget (30d)</span>
                <span className="text-primary text-body-sm font-bold">Stable</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-headline-md font-bold text-on-surface">99.85</span>
                <span className="text-body-sm text-on-surface-variant">%</span>
              </div>
              <div className="mt-6 w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label-caps">
                <span>0.15% BURNT</span>
                <span>0.85% REMAINING</span>
              </div>
            </div>
          </div>

          {/* Global Latency P99 */}
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-caps text-on-surface-variant">Avg. Latency (P99)</span>
                <span className="text-error text-body-sm font-bold">+12ms</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-headline-md font-bold text-on-surface">242</span>
                <span className="text-body-sm text-on-surface-variant">ms</span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 flex gap-0.5 items-end h-8">
                  <div className="bg-secondary w-full h-[60%] rounded-t-sm opacity-60"></div>
                  <div className="bg-secondary w-full h-[70%] rounded-t-sm opacity-60"></div>
                  <div className="bg-secondary w-full h-[65%] rounded-t-sm opacity-60"></div>
                  <div className="bg-error w-full h-[95%] rounded-t-sm"></div>
                  <div className="bg-secondary w-full h-[55%] rounded-t-sm opacity-60"></div>
                  <div className="bg-secondary w-full h-[40%] rounded-t-sm opacity-60"></div>
                </div>
                <span className="text-[10px] text-on-surface-variant font-label-caps">LAST 1H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mid Section: Service Health Heat Map & Scatter Plot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Heat Map (Service Health) */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary status-pulse"></div>
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Service Health Matrix</h3>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-sm bg-secondary/20"></div>
                <div className="w-3 h-3 rounded-sm bg-secondary/60"></div>
                <div className="w-3 h-3 rounded-sm bg-secondary"></div>
                <div className="w-3 h-3 rounded-sm bg-error"></div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-1.5" id="heatMapContainer">
              {/* JS generated cells */}
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">ACTIVE SERVICES</span>
                  <span className="text-body-md font-bold text-on-surface">144 Nodes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">CRITICAL ALERTS</span>
                  <span className="text-body-md font-bold text-error">2 Alerts</span>
                </div>
              </div>
              <button className="text-primary text-body-sm font-medium hover:underline">View All Dependencies</button>
            </div>
          </div>

          {/* Scatter Plot Placeholder (Throughput vs Latency) */}
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface mb-6">Throughput vs Latency</h3>
            <div className="relative h-64 bg-surface-container-lowest/50 rounded-lg border border-outline-variant/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-4 border-l border-b border-outline-variant/50"></div>
              <div className="absolute bottom-12 left-20 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
              <div className="absolute bottom-20 left-32 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
              <div className="absolute bottom-28 left-16 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
              <div className="absolute bottom-40 left-44 w-4 h-4 bg-error rounded-full shadow-[0_0_15px_rgba(255,180,171,0.5)] animate-pulse"></div>
              <div className="absolute bottom-16 left-52 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
              <div className="absolute bottom-32 left-40 w-3 h-3 bg-secondary/50 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-2 h-2 bg-secondary/30 rounded-full"></div>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-label-caps text-on-surface-variant">THROUGHPUT (REQ/S)</span>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-label-caps text-on-surface-variant">LATENCY (MS)</span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-on-surface-variant">System Saturation</span>
                <span className="font-bold text-on-surface">42%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full">
                <div className="h-full bg-secondary-container" style={{ width: '42%' }}></div>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed italic">"Correlation indicates latency spikes are tied to Auth-Service database locks in US-East-1."</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: AI Analysis & Regional Saturation */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Regional Saturation Bento Box */}
          <div className="lg:col-span-1 glass-panel p-5 rounded-xl border-l-4 border-l-primary">
            <h4 className="font-label-caps text-[11px] text-primary mb-4">REGION: US-EAST-1</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Compute load</span>
                <span className="text-body-lg font-bold text-on-surface">78%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Memory cap</span>
                <span className="text-body-lg font-bold text-on-surface">62%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Network I/O</span>
                <span className="text-body-lg font-bold text-secondary">Optimal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 glass-panel p-5 rounded-xl border-l-4 border-l-secondary">
            <h4 className="font-label-caps text-[11px] text-secondary mb-4">REGION: EU-WEST-2</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Compute load</span>
                <span className="text-body-lg font-bold text-on-surface">34%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Memory cap</span>
                <span className="text-body-lg font-bold text-on-surface">41%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-body-sm text-on-surface">Network I/O</span>
                <span className="text-body-lg font-bold text-secondary">Optimal</span>
              </div>
            </div>
          </div>

          {/* AI Co-pilot Summary Panel */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">AI Observation Report</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded bg-primary/5 border border-primary/10">
                <p className="text-body-sm text-on-surface leading-relaxed">
                  <span className="font-bold text-primary">Anomaly Detected:</span> Service <code className="bg-surface-container px-1 rounded text-primary-fixed">payment-gateway-v2</code> is showing a 15% increase in P99 latency while throughput remains constant. This suggests a downstream lock rather than traffic surge.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-2 rounded-lg bg-surface-container-high border border-outline-variant text-body-sm font-medium hover:border-primary transition-all">View Trace Log</button>
                <button className="flex-1 py-2 rounded-lg bg-primary text-on-primary font-bold text-body-sm shadow-lg shadow-primary/20">Scale Resources</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .heat-map-cell {
          aspect-ratio: 1 / 1;
          transition: transform 0.2s ease;
        }
        .heat-map-cell:hover {
          transform: scale(1.1);
          z-index: 10;
        }
        .status-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-on-background { color: #e5e1e4; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-error { color: #ffb4ab; }
        .text-primary-fixed { color: #d5e3ff; }
        .bg-background { background-color: #131315; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-variant { background-color: #353437; }
        .bg-secondary-container { background-color: #00a572; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-primary/5 { background-color: rgba(166, 200, 255, 0.05); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary/20 { background-color: rgba(78, 222, 163, 0.2); }
        .bg-secondary/40 { background-color: rgba(78, 222, 163, 0.4); }
        .bg-secondary/60 { background-color: rgba(78, 222, 163, 0.6); }
        .bg-secondary { background-color: #4edea3; }
        .bg-error { background-color: #ffb4ab; }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .border-primary/10 { border-color: rgba(166, 200, 255, 0.1); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .border-l-primary { border-left-color: #a6c8ff; }
        .border-l-secondary { border-left-color: #4edea3; }
        .text-on-primary { color: #00315f; }
        .shadow-primary/20 { box-shadow: 0 4px 6px -1px rgba(166, 200, 255, 0.2); }
        .bg-secondary/30 { background-color: rgba(78, 222, 163, 0.3); }
        .bg-secondary/50 { background-color: rgba(78, 222, 163, 0.5); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <script>{`
        const container = document.getElementById('heatMapContainer');
        if (container) {
          const cellCount = 144; // 12x12 grid
          
          for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div');
            cell.className = 'heat-map-cell rounded-sm';
            
            const rand = Math.random();
            if (rand > 0.95) {
              cell.classList.add('bg-error');
            } else if (rand > 0.85) {
              cell.classList.add('bg-secondary/40');
            } else if (rand > 0.2) {
              cell.classList.add('bg-secondary/20');
            } else {
              cell.classList.add('bg-surface-container-highest');
            }
            
            container.appendChild(cell);
          }
        }`}
      </script>
    </div>
  );
};

export default ServiceMetrics;