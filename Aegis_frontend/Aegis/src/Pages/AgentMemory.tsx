const AgentMemory: React.FC = () => {
  return (
    <main className="mt-3 flex-1 flex flex-col h-full bg-background relative overflow-y-auto">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto p-gutter lg:p-margin-desktop">
        <div className="max-w-[max-width] mx-auto space-y-gutter">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>memory</span>
                Agent Knowledge Graph
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Continuous learning repository detailing pattern recognition, automated playbooks, and root cause resolutions derived from historical ops data.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="glass-panel px-4 py-2 rounded-lg font-body-md text-on-surface hover:border-primary/50 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export Data
              </button>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-body-md font-medium hover:bg-primary-fixed-dim transition-colors ai-glow flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">model_training</span>
                Force Sync
              </button>
            </div>
          </div>

          {/* Top Stats Bento */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-6">
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Total Learned Patterns</p>
              <h3 className="font-display text-display text-on-surface">14.2k</h3>
              <div className="mt-4 flex items-center gap-2 text-secondary font-body-sm">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+342 this week</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Resolution Accuracy</p>
              <h3 className="font-display text-display text-on-surface">98.4<span className="text-headline-md">%</span></h3>
              <div className="mt-4 flex items-center gap-2 text-secondary font-body-sm">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+1.2% this month</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Active Playbooks</p>
              <h3 className="font-display text-display text-on-surface">843</h3>
              <div className="mt-4 flex items-center gap-2 text-on-surface-variant font-body-sm">
                <span className="material-symbols-outlined text-[16px]">history</span>
                <span>Last updated 2m ago</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 flex justify-between items-center">
                  System Status
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-2">Nominal</h3>
              </div>
              <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full" style={{ width: '100%' }}></div>
              </div>
              <p className="font-body-sm text-on-surface-variant mt-2 text-right">Training Cluster Idle</p>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Left Column: Knowledge Graph / Chart */}
            <div className="lg:col-span-2 space-y-gutter">
              <div className="glass-panel rounded-xl flex flex-col min-h-[400px]">
                <div className="p-4 border-b border-surface-variant/50 flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
                    Knowledge Correlation Growth
                  </h3>
                  <div className="flex gap-2">
                    <select className="bg-surface-container border border-surface-variant rounded-md text-body-sm text-on-surface py-1 pl-2 pr-8 focus:ring-primary focus:border-primary">
                      <option>Last 30 Days</option>
                      <option>Last 7 Days</option>
                      <option>24 Hours</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1 p-6 relative chart-grid flex items-end gap-2 justify-between">
                  <div className="w-full flex items-end justify-between h-[250px] mt-auto relative z-10 px-4">
                    <div className="w-8 bg-surface-variant rounded-t-sm relative group"><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 1</div></div>
                    <div className="w-8 bg-surface-variant rounded-t-sm relative group" style={{ height: '20%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 5</div></div>
                    <div className="w-8 bg-primary/40 rounded-t-sm relative group" style={{ height: '35%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 10</div></div>
                    <div className="w-8 bg-surface-variant rounded-t-sm relative group" style={{ height: '30%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 15</div></div>
                    <div className="w-8 bg-primary/60 rounded-t-sm relative group" style={{ height: '55%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 20</div></div>
                    <div className="w-8 bg-surface-variant rounded-t-sm relative group" style={{ height: '45%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 25</div></div>
                    <div className="w-8 bg-primary/80 rounded-t-sm relative group" style={{ height: '70%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Jan 30</div></div>
                    <div className="w-8 bg-primary rounded-t-sm relative group ai-glow" style={{ height: '85%' }}><div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface-container-high text-xs py-1 px-2 rounded border border-outline-variant">Feb 4</div></div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <path className="opacity-50" d="M40,300 L120,280 L200,200 L280,220 L360,150 L440,180 L520,80 L600,40" fill="none" stroke="rgba(166, 200, 255, 0.5)" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>

              {/* Recent Learned Patterns List */}
              <div className="glass-panel rounded-xl overflow-hidden">
                <div className="p-4 border-b border-surface-variant/50 flex justify-between items-center bg-surface-container-low/50">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Recent Memory Commits</h3>
                  <div className="flex gap-2">
                    <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
                  </div>
                </div>
                <div className="divide-y divide-surface-variant/50">
                  <div className="p-4 hover:bg-surface-variant/20 transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-error/10 flex items-center justify-center border border-error/20">
                          <span className="material-symbols-outlined text-error text-[18px]">database</span>
                        </div>
                        <div>
                          <h4 className="font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">PostgreSQL Connection Pool Exhaustion</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-code-md bg-surface-variant text-on-surface-variant">INC-8492</span>
                            <span className="text-on-surface-variant text-body-sm">•</span>
                            <span className="text-on-surface-variant text-body-sm">2 hours ago</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 text-xs font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">done_all</span> Validated
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant ml-11 mb-3">Agent identified correlation between spike in background jobs and connection pool limits. Playbook updated to dynamically scale pool size based on queue depth.</p>
                    <div className="ml-11 flex gap-2">
                      <span className="px-2 py-1 rounded bg-surface-container text-on-surface text-xs border border-outline-variant/30 font-code-md">max_connections</span>
                      <span className="px-2 py-1 rounded bg-surface-container text-on-surface text-xs border border-outline-variant/30 font-code-md">pgbouncer</span>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-surface-variant/20 transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
                          <span className="material-symbols-outlined text-primary text-[18px]">dns</span>
                        </div>
                        <div>
                          <h4 className="font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">Kubelet Not Ready - Node Starvation</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-code-md bg-surface-variant text-on-surface-variant">INC-8488</span>
                            <span className="text-on-surface-variant text-body-sm">•</span>
                            <span className="text-on-surface-variant text-body-sm">5 hours ago</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 text-xs font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">done_all</span> Validated
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant ml-11 mb-3">Learned to predict node starvation 15 minutes prior to kubelet failure by monitoring memory pressure rate-of-change vs absolute limits.</p>
                    <div className="ml-11 flex gap-2">
                      <span className="px-2 py-1 rounded bg-surface-container text-on-surface text-xs border border-outline-variant/30 font-code-md">kubernetes</span>
                      <span className="px-2 py-1 rounded bg-surface-container text-on-surface text-xs border border-outline-variant/30 font-code-md">oom_killer</span>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-surface-variant/20 transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-tertiary-container/10 flex items-center justify-center border border-tertiary-container/20">
                          <span className="material-symbols-outlined text-tertiary-container text-[18px]">api</span>
                        </div>
                        <div>
                          <h4 className="font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">Gateway Timeout Cascade Prevention</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-code-md bg-surface-variant text-on-surface-variant">MANUAL_INPUT</span>
                            <span className="text-on-surface-variant text-body-sm">•</span>
                            <span className="text-on-surface-variant text-body-sm">Yesterday</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-surface-variant/50 text-on-surface-variant border border-outline-variant/30 text-xs font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">sync</span> Pending Review
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant ml-11">SRE supplied new runbook for API Gateway circuit breaking. Agent has ingested rules and is monitoring staging for validation.</p>
                  </div>
                </div>
                <div className="p-3 border-t border-surface-variant/50 bg-surface-container-lowest text-center">
                  <button className="text-primary text-body-sm font-medium hover:underline">View All Commits</button>
                </div>
              </div>
            </div>

            {/* Right Column: Context & Filters */}
            <div className="space-y-gutter">
              <div className="glass-panel rounded-xl p-5">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Memory Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Domain Knowledge</label>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-body-sm">Database</button>
                      <button className="px-3 py-1 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant text-body-sm hover:bg-surface-variant">Networking</button>
                      <button className="px-3 py-1 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant text-body-sm hover:bg-surface-variant">Kubernetes</button>
                      <button className="px-3 py-1 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant text-body-sm hover:bg-surface-variant">App Logic</button>
                    </div>
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Confidence Level</label>
                    <input className="w-full accent-primary" max="100" min="0" type="range" defaultValue="80" />
                    <div className="flex justify-between text-xs text-on-surface-variant mt-1">
                      <span>0%</span>
                      <span>&gt; 80%</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-surface-variant/50">
                    <button className="w-full bg-surface-variant hover:bg-surface-variant/80 text-on-surface py-2 rounded-lg font-medium transition-colors">Apply Filters</button>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                <div className="p-5 border-b border-surface-variant/30 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">hub</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Active Context</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="p-3 bg-surface-container-lowest/50 rounded-lg border border-surface-variant">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-code-md text-primary">RULE_098</span>
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    </div>
                    <p className="text-body-sm text-on-surface">If CPU &gt; 85% on `worker-nodes` AND Redis latency &gt; 50ms, suspect cache eviction storm.</p>
                  </div>
                  <div className="p-3 bg-surface-container-lowest/50 rounded-lg border border-surface-variant opacity-70">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-code-md text-on-surface-variant">RULE_112</span>
                      <span className="w-2 h-2 rounded-full bg-surface-variant"></span>
                    </div>
                    <p className="text-body-sm text-on-surface">Evaluating correlation between Kafka lag and downstream API 5xx errors...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .ai-glow {
          box-shadow: 0 0 15px rgba(166, 200, 255, 0.15);
        }
        .chart-grid {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-error { color: #ffb4ab; }
        .bg-background { background-color: #131315; }
        .bg-surface { background-color: #131315; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-variant { background-color: #353437; }
        .bg-primary { background-color: #a6c8ff; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-primary/60 { background-color: rgba(166, 200, 255, 0.6); }
        .bg-primary/80 { background-color: rgba(166, 200, 255, 0.8); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary-container/10 { background-color: rgba(0, 165, 114, 0.1); }
        .bg-secondary-container/5 { background-color: rgba(0, 165, 114, 0.05); }
        .bg-tertiary-container/10 { background-color: rgba(255, 84, 70, 0.1); }
        .bg-error/10 { background-color: rgba(255, 180, 171, 0.1); }
        .bg-surface-variant/20 { background-color: rgba(53, 52, 55, 0.2); }
        .bg-surface-variant/30 { background-color: rgba(53, 52, 55, 0.3); }
        .bg-surface-variant/50 { background-color: rgba(53, 52, 55, 0.5); }
        .bg-surface-variant/80 { background-color: rgba(53, 52, 55, 0.8); }
        .border-surface-variant { border-color: #353437; }
        .border-surface-variant/30 { border-color: rgba(53, 52, 55, 0.3); }
        .border-surface-variant/50 { border-color: rgba(53, 52, 55, 0.5); }
        .border-outline-variant { border-color: #404753; }
        .border-outline-variant/30 { border-color: rgba(64, 71, 83, 0.3); }
        .border-outline-variant/50 { border-color: rgba(64, 71, 83, 0.5); }
        .border-primary/20 { border-color: rgba(166, 200, 255, 0.2); }
        .border-primary/30 { border-color: rgba(166, 200, 255, 0.3); }
        .border-primary/50 { border-color: rgba(166, 200, 255, 0.5); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
        .border-error/20 { border-color: rgba(255, 180, 171, 0.2); }
        .border-tertiary-container/20 { border-color: rgba(255, 84, 70, 0.2); }
        .border-primary { border-color: #a6c8ff; }
        .text-on-primary { color: #00315f; }
        .bg-primary-fixed-dim { background-color: #a6c8ff; }
        .text-tertiary-container { color: #ff5446; }
        .bg-tertiary-container/10 { background-color: rgba(255, 84, 70, 0.1); }
        .text-primary/20 { color: rgba(166, 200, 255, 0.2); }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .text-primary/50 { color: rgba(166, 200, 255, 0.5); }
        .bg-primary/5 { background-color: rgba(166, 200, 255, 0.05); }
        .bg-secondary { background-color: #4edea3; }
        .bg-secondary-container { background-color: #00a572; }
        .text-secondary/10 { color: rgba(78, 222, 163, 0.1); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
    </main>
  );
};

export default AgentMemory;