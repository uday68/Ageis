const Logs: React.FC = () => {
  return (
    <main className="mt-3 ml-70 fixed inset-0 flex flex-col bg-[#09090B] text-[#e5e1e4] overflow-hidden font-body-md text-body-md selection:bg-primary/30">
      {/* --- Content Area (full viewport, no nav/header) --- */}
      <div className="flex-1 flex overflow-hidden">
        {/* Log Stream Terminal */}
        <div className="flex-1 flex flex-col bg-surface-container-lowest overflow-hidden relative">
          {/* Table Header */}
          <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-2 border-b border-outline-variant bg-surface-container text-outline font-label-caps text-label-caps uppercase tracking-wider">
            <div>Timestamp</div>
            <div>Service</div>
            <div>Level</div>
            <div>Message</div>
          </div>

          {/* Log Entries */}
          <div className="flex-1 overflow-y-auto log-terminal font-code-md text-code-md py-2" id="log-container">
            {/* Entry: INFO */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 hover:bg-surface-container-high transition-colors border-b border-outline-variant/10 group cursor-pointer">
              <div className="text-outline/70">2023-10-27 14:42:01.442</div>
              <div className="text-primary/80">auth-service</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span className="text-secondary/80">INFO</span></div>
              <div className="text-on-surface truncate">Successfully validated JWT for user <span className="text-tertiary">u_9921_ax</span></div>
            </div>
            {/* Entry: ERROR with AI Anomaly Glow */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 anomaly-glow-error border-b border-outline-variant/10 group cursor-pointer">
              <div className="text-outline/70">2023-10-27 14:42:03.001</div>
              <div className="text-primary/80">payment-gw</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-error"></span><span className="text-error font-bold">ERROR</span></div>
              <div className="text-on-surface">Connection timeout to downstream Stripe API (latency &gt; 5000ms)</div>
              {/* AI Insight Overlay */}
              <div className="col-start-4 mt-2 mb-1 p-2 bg-error-container/20 border border-error/20 rounded flex items-center gap-3">
                <span className="material-symbols-outlined text-error text-[18px]">psychology</span>
                <span className="text-body-sm text-error/90 italic">AI detected correlation with upstream "ingress-gateway" circuit breaker trip.</span>
              </div>
            </div>
            {/* Entry: WARN */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 anomaly-glow-warn border-b border-outline-variant/10 group cursor-pointer">
              <div className="text-outline/70">2023-10-27 14:42:04.215</div>
              <div className="text-primary/80">db-cluster-01</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span><span className="text-tertiary">WARN</span></div>
              <div className="text-on-surface">High memory pressure detected on node <span className="bg-surface-container-highest px-1 rounded">worker-4</span> (usage 89%)</div>
            </div>
            {/* Entry: INFO */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 hover:bg-surface-container-high transition-colors border-b border-outline-variant/10 group cursor-pointer">
              <div className="text-outline/70">2023-10-27 14:42:05.101</div>
              <div className="text-primary/80">auth-service</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span className="text-secondary/80">INFO</span></div>
              <div className="text-on-surface">Refreshing session cache for 14 active connections...</div>
            </div>
            {/* Entry: FATAL */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 bg-error-container/10 border-b border-outline-variant/20 group cursor-pointer">
              <div className="text-outline/70">2023-10-27 14:42:06.882</div>
              <div className="text-primary/80">data-warehouse</div>
              <div className="flex items-center gap-2 font-extrabold text-error"><span className="w-1.5 h-1.5 rounded-full bg-error"></span>FATAL</div>
              <div className="text-on-surface">RuntimeError: Out of memory during large partition reindex. Terminating process.</div>
            </div>
            {/* More entries */}
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 hover:bg-surface-container-high border-b border-outline-variant/10 group">
              <div className="text-outline/70">2023-10-27 14:42:07.012</div><div className="text-primary/80">notification-svc</div><div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>INFO</div><div className="text-on-surface">Push notification batch sent (count: 452)</div>
            </div>
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 hover:bg-surface-container-high border-b border-outline-variant/10 group">
              <div className="text-outline/70">2023-10-27 14:42:08.555</div><div className="text-primary/80">auth-service</div><div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>INFO</div><div className="text-on-surface">Validated session for token_0x88...</div>
            </div>
            <div className="grid grid-cols-[160px_140px_100px_1fr] px-6 py-1.5 hover:bg-surface-container-high border-b border-outline-variant/10 group">
              <div className="text-outline/70">2023-10-27 14:42:09.111</div><div className="text-primary/80">search-api</div><div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>INFO</div><div className="text-on-surface">Query latency: 12ms for index 'users'</div>
            </div>
          </div>

          {/* AI Floating Summary Bar */}
          <div className="ml-70 absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl z-30">
            <div className="bg-surface-container-highest/90 border border-primary/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-center gap-4">
              <div className="p-2 bg-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div className="flex-1">
                <p className="text-body-md text-on-surface leading-tight">
                  <span className="font-bold text-primary">AI Summary:</span> Logs indicate a 15% increase in 5xx errors from 'auth-service'—likely related to the current DB exhaustion incident.
                </p>
              </div>
              <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold px-4 py-1.5 rounded-lg text-body-sm transition-all border border-primary/20">
                Deep Dive
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel - Log Insights */}
        <aside className="w-80 border-l border-outline-variant bg-surface-container-low flex flex-col p-6 gap-8 overflow-y-auto">
          {/* Pattern Clustering Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-label-caps text-label-caps text-outline uppercase">Pattern Clustering</h3>
              <span className="material-symbols-outlined text-outline text-[20px]">info</span>
            </div>
            <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/50">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-headline-lg font-bold text-primary leading-none">14</span>
                <span className="text-body-sm text-on-surface-variant pb-1">patterns detected</span>
              </div>
              <p className="text-body-sm text-outline leading-relaxed mb-4">AI detected 14 recurring patterns in the last 5 minutes. 2 are new since last deployment.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-body-sm bg-surface-container-high p-2 rounded border border-outline-variant/30">
                  <span className="truncate pr-4 text-code-md">GET /api/v1/user/*</span>
                  <span className="font-bold">4.2k/m</span>
                </div>
                <div className="flex items-center justify-between text-body-sm bg-surface-container-high p-2 rounded border border-outline-variant/30">
                  <span className="truncate pr-4 text-code-md">DB Connection Error</span>
                  <span className="font-bold text-error">128/m</span>
                </div>
              </div>
            </div>
          </section>

          {/* Error Rate Sparkline */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-label-caps text-label-caps text-outline uppercase">Global Error Rate</h3>
              <span className="text-error text-body-sm font-bold">+8.4%</span>
            </div>
            <div className="h-24 w-full relative group">
              <div className="absolute inset-0 flex items-end gap-[2px]">
                <div className="flex-1 bg-outline-variant/20 h-[30%] rounded-t-sm transition-all group-hover:h-[35%]"></div>
                <div className="flex-1 bg-outline-variant/20 h-[25%] rounded-t-sm transition-all group-hover:h-[28%]"></div>
                <div className="flex-1 bg-outline-variant/20 h-[40%] rounded-t-sm transition-all group-hover:h-[42%]"></div>
                <div className="flex-1 bg-outline-variant/20 h-[35%] rounded-t-sm transition-all group-hover:h-[38%]"></div>
                <div className="flex-1 bg-outline-variant/20 h-[60%] rounded-t-sm transition-all group-hover:h-[65%]"></div>
                <div className="flex-1 bg-error/40 h-[85%] rounded-t-sm transition-all group-hover:h-[90%]"></div>
                <div className="flex-1 bg-error h-[100%] rounded-t-sm transition-all group-hover:opacity-80 animate-pulse"></div>
                <div className="flex-1 bg-error/80 h-[80%] rounded-t-sm transition-all group-hover:h-[85%]"></div>
                <div className="flex-1 bg-error/50 h-[70%] rounded-t-sm transition-all group-hover:h-[75%]"></div>
                <div className="flex-1 bg-outline-variant/20 h-[40%] rounded-t-sm transition-all group-hover:h-[45%]"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-label-caps text-outline uppercase">
              <span>15m ago</span>
              <span>Now</span>
            </div>
          </section>

          {/* Top Services Section */}
          <section>
            <h3 className="font-label-caps text-label-caps text-outline uppercase mb-4">Log Volume by Service</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-body-sm mb-1.5">
                  <span className="font-medium">auth-service</span>
                  <span className="text-outline">42.1 GB</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-body-sm mb-1.5">
                  <span className="font-medium">ingress-gw</span>
                  <span className="text-outline">28.4 GB</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary/60 h-full w-[60%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-body-sm mb-1.5">
                  <span className="font-medium">payment-gw</span>
                  <span className="text-outline">12.2 GB</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary/40 h-full w-[35%]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* System Health Snapshot */}
          <section className="mt-auto pt-6 border-t border-outline-variant/30">
            <div className="flex items-center gap-3 p-3 bg-surface-container-highest/30 rounded-xl">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary/10">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
              </div>
              <div>
                <p className="text-body-sm font-bold text-on-surface">Data Integrity</p>
                <p className="text-[11px] text-outline">All nodes reporting.</p>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {/* Tailwind / Fonts / Material Icons (inline for isolated component) */}
      <style>{`
        .log-terminal::-webkit-scrollbar {
            width: 8px;
        }
        .log-terminal::-webkit-scrollbar-track {
            background: rgba(14, 14, 16, 1);
        }
        .log-terminal::-webkit-scrollbar-thumb {
            background: #3F3F46;
            border-radius: 4px;
        }
        .log-terminal::-webkit-scrollbar-thumb:hover {
            background: #52525B;
        }
        .anomaly-glow-warn {
            box-shadow: inset 4px 0 0 0 #ffb4ab;
            background: linear-gradient(90deg, rgba(147, 0, 10, 0.1) 0%, transparent 100%);
        }
        .anomaly-glow-error {
            box-shadow: inset 4px 0 0 0 #ff5446;
            background: linear-gradient(90deg, rgba(92, 0, 2, 0.15) 0%, transparent 100%);
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }
        .live-dot {
            animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        /* tailwind style overrides / complement */
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .text-on-surface { color: #e5e1e4; }
        .text-outline { color: #8a919e; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-tertiary { color: #ffb4aa; }
        .text-error { color: #ffb4ab; }
        .border-outline-variant { border-color: #404753; }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-error-container/10 { background-color: rgba(147, 0, 10, 0.1); }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .bg-error/40 { background-color: rgba(255, 180, 171, 0.4); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .border-primary/40 { border-color: rgba(166, 200, 255, 0.4); }
        .text-error/90 { color: rgba(255, 180, 171, 0.9); }
        .bg-surface-container-highest/90 { background-color: rgba(53, 52, 55, 0.9); }
        .bg-surface-container-highest/30 { background-color: rgba(53, 52, 55, 0.3); }
        .text-secondary/80 { color: rgba(78, 222, 163, 0.8); }
        .text-tertiary/80 { color: rgba(255, 180, 170, 0.8); }
        .text-primary/80 { color: rgba(166, 200, 255, 0.8); }
        .text-outline/70 { color: rgba(138, 145, 158, 0.7); }
        .text-on-surface-variant { color: #c0c7d5; }
        .bg-error-container/20 { background-color: rgba(147, 0, 10, 0.2); }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .bg-error { background-color: #ffb4ab; }
        .bg-secondary { background-color: #4edea3; }
        .bg-tertiary { background-color: #ffb4aa; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-outline-variant/20 { background-color: rgba(64, 71, 83, 0.2); }
        .bg-outline-variant/30 { background-color: rgba(64, 71, 83, 0.3); }
        .bg-surface-container-high/30 { background-color: rgba(42, 42, 44, 0.3); }
        .border-outline-variant/10 { border-color: rgba(64, 71, 83, 0.1); }
        .border-outline-variant/20 { border-color: rgba(64, 71, 83, 0.2); }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .text-primary/40 { color: rgba(166, 200, 255, 0.4); }
        .bg-primary/60 { background-color: rgba(166, 200, 255, 0.6); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .text-on-primary { color: #00315f; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-outline/50 { color: rgba(138, 145, 158, 0.5); }
        .bg-outline-variant/30 { background-color: rgba(64, 71, 83, 0.3); }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </main>
  );
};

export default Logs;