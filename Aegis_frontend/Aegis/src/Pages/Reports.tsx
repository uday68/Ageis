const Reports: React.FC = () => {
  return (
    <main className="ml-70 mt-8 fixed inset-0 bg-[#09090B] text-on-surface font-body-md text-body-md overflow-y-auto p-8">
      <div className="pt-8 pb-12 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">AI Generated Reports</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Comprehensive post-mortem and operational reports automatically synthesized from logs, metrics, and incident timelines.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary/90 transition-colors flex items-center gap-2 ai-glow">
                <span className="material-symbols-outlined text-[18px]">ios_share</span>Export All
              </button>
              <button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-variant/30 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filter
              </button>
              <button className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-variant/50 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Last 30 Days
              </button>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Report Card 1: Critical DB Issue */}
            <article className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 ambient-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full -z-10"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 items-center">
                  <span className="px-2 py-1 rounded bg-error/10 text-error font-label-caps text-label-caps border border-error/20 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                    SEV-1
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-caps text-label-caps border border-outline-variant/30">
                    DATABASE
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export PDF">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export JSON">
                    <span className="material-symbols-outlined text-[20px]">data_object</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export Markdown">
                    <span className="material-symbols-outlined text-[20px]">markdown</span>
                  </button>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Post-Mortem: Primary RDS Connection Pool Exhaustion</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">Aegis AI analysis indicates a sudden spike in malformed queries from the auth service led to connection pool exhaustion on the primary user database, resulting in a 42-minute partial outage.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-surface-container-high border border-outline-variant/20">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Root Cause</div>
                  <div className="font-body-sm text-body-sm text-on-surface">Unbounded retry loop in auth-service v2.4.1</div>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-high border border-outline-variant/20">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Impact</div>
                  <div className="font-body-sm text-body-sm text-on-surface">12,400 user sessions interrupted</div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">Resolution Timeline</div>
                <div className="relative pl-4 border-l border-outline-variant/30 space-y-3 font-code-md text-code-md">
                  <div className="relative">
                    <div className="absolute-left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-error border-2 border-surface"></div>
                    <span className="text-on-surface-variant w-16 inline-block">14:02</span> <span className="text-on-surface">Alert triggered by latency spike</span>
                  </div>
                  <div className="relative">
                    <div className="absolute-left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface"></div>
                    <span className="text-on-surface-variant w-16 inline-block">14:05</span> <span className="text-on-surface">Aegis AI identified runaway queries</span>
                  </div>
                  <div className="relative">
                    <div className="absolute-left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-surface"></div>
                    <span className="text-on-surface-variant w-16 inline-block">14:44</span> <span className="text-on-surface">Circuit breaker applied manually. Recovery.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Generated Oct 24, 2023
                </div>
                <button className="text-primary font-body-sm text-body-sm hover:underline flex items-center gap-1">
                  View Full Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Report Card 2: Memory Leak */}
            <article className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 ambient-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 items-center">
                  <span className="px-2 py-1 rounded bg-secondary/10 text-secondary font-label-caps text-label-caps border border-secondary/20 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    SEV-2
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-caps text-label-caps border border-outline-variant/30">
                    MEMORY
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export PDF">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export JSON">
                    <span className="material-symbols-outlined text-[20px]">data_object</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors" title="Export Markdown">
                    <span className="material-symbols-outlined text-[20px]">markdown</span>
                  </button>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Investigation: Slow OOM Kills in Payment Processing Pods</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">Anomaly detection flagged a recurring pattern of Out-Of-Memory kills across payment-worker nodes over a 72-hour period. Aegis identified a caching issue.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-surface-container-high border border-outline-variant/20">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Root Cause</div>
                  <div className="font-body-sm text-body-sm text-on-surface">Uncollected Redis cache connections</div>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-high border border-outline-variant/20">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Suggested Fix</div>
                  <div className="font-body-sm text-body-sm text-on-surface">Implement connection pooling timeouts</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20 mb-6 font-code-md text-code-md text-on-surface-variant">
                <div className="text-primary mb-2 text-xs">AI Suggested Patch Snippet</div>
                <code>
                  redis_client.pool.disconnect(timeout=30)<br />
                  if memory_usage &gt; limit:<br />
                  &nbsp;&nbsp;flush_local_cache()
                </code>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Generated Oct 22, 2023
                </div>
                <button className="text-primary font-body-sm text-body-sm hover:underline flex items-center gap-1">
                  View Full Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Report Card 3: Weekly Summary */}
            <article className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 ambient-shadow xl:col-span-2">
              <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-tertiary"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Weekly System Health Summary</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Week 42 • Oct 16 - Oct 22, 2023</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-variant/80 transition-colors flex items-center gap-2 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[16px]">share</span>
                    Share
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-body-sm text-body-sm hover:bg-primary/20 transition-colors flex items-center gap-2 border border-primary/20">
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    Export Full PDF
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">Total Incidents</div>
                  <div className="font-display text-display text-on-surface">14</div>
                  <div className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 12% vs last week
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">Avg MTTR</div>
                  <div className="font-display text-display text-on-surface">18m</div>
                  <div className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 5m vs last week
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">AI Auto-Resolved</div>
                  <div className="font-display text-display text-primary">6</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    42% of total volume
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">System Uptime</div>
                  <div className="font-display text-display text-secondary">99.98%</div>
                  <div className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 0.01% vs last week
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/20 pt-4">
                <strong>AI Summary:</strong> System stability improved overall this week. The AI agent successfully preempted 4 potential cache stampedes. However, recurring minor latency spikes in the European ingress controller require manual review.
              </p>
            </article>
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .ai-glow {
          box-shadow: 0 0 15px rgba(166, 200, 255, 0.15);
        }
        .ambient-shadow {
          box-shadow: 0px 4px 20px rgba(0,0,0,0.5);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-error { color: #ffb4ab; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-variant { background-color: #353437; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary/20 { background-color: rgba(78, 222, 163, 0.2); }
        .bg-error/5 { background-color: rgba(255, 180, 171, 0.05); }
        .bg-error/10 { background-color: rgba(255, 180, 171, 0.1); }
        .bg-error/20 { background-color: rgba(255, 180, 171, 0.2); }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/10 { border-color: rgba(64, 71, 83, 0.1); }
        .border-outline-variant/20 { border-color: rgba(64, 71, 83, 0.2); }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .border-primary/50 { border-color: rgba(166, 200, 255, 0.5); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .text-on-primary { color: #00315f; }
        .bg-primary/90 { background-color: rgba(166, 200, 255, 0.9); }
        .bg-surface-variant/30 { background-color: rgba(53, 52, 55, 0.3); }
        .bg-surface-variant/50 { background-color: rgba(53, 52, 55, 0.5); }
        .bg-surface-variant/80 { background-color: rgba(53, 52, 55, 0.8); }
        .bg-surface-variant/20 { background-color: rgba(53, 52, 55, 0.2); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-secondary/5 { background-color: rgba(78, 222, 163, 0.05); }
        .border-primary { border-color: #a6c8ff; }
        .border-secondary { border-color: #4edea3; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .from-primary { --tw-gradient-from: #a6c8ff; }
        .via-secondary { --tw-gradient-via: #4edea3; }
        .to-tertiary { --tw-gradient-to: #ffb4aa; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .border-surface { border-color: #131315; }
        .bg-error { background-color: #ffb4ab; }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
    </main>
  );
};

export default Reports;