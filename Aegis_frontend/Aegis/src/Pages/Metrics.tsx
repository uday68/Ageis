import PredictiveAnalysis from './Metrics/PredictiveAnalysis';
import ServiceMetrics from './Metrics/ServiceMetrics';

const Metrics: React.FC = () => {
  return (
    <main className="mt-9 ml-70 fixed inset-0 metric-grid-bg font-body-md text-body-md overflow-y-auto">
      <div className="p-8">
        {/* Metrics Controls Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Metrics Center</h2>
            <p className="text-on-surface-variant font-body-md mt-1">Global performance engineering & autonomous load analysis.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="glass-panel flex items-center rounded-lg overflow-hidden border-outline-variant">
              <button className="px-4 py-2 text-body-sm font-medium border-r border-outline-variant hover:bg-surface-container-high transition-colors">1H</button>
              <button className="px-4 py-2 text-body-sm font-medium border-r border-outline-variant bg-primary-container text-on-primary-container">6H</button>
              <button className="px-4 py-2 text-body-sm font-medium border-r border-outline-variant hover:bg-surface-container-high transition-colors">24H</button>
              <button className="px-4 py-2 text-body-sm font-medium border-r border-outline-variant hover:bg-surface-container-high transition-colors">7D</button>
              <button className="px-4 py-2 text-body-sm font-medium hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">calendar_today</span></button>
            </div>
            <button className="glass-panel px-4 py-2 rounded-lg text-body-sm font-medium flex items-center gap-2 border-outline-variant hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-lg">tune</span>
              Granularity: 1m
            </button>
            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-body-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">ios_share</span>
              Export
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* CPU Performance (Large) */}
          <div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="scanline"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">3p</span>
                  CPU Performance
                </h3>
                <div className="flex gap-4 mt-1">
                  <span className="text-body-sm text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Cluster Avg: 42.8%</span>
                  <span className="text-body-sm text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-secondary"></div> Peak Node: 78.1%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-headline-md font-bold text-primary">42.8%</span>
                <p className="text-[10px] text-outline-variant font-label-caps uppercase">System Load</p>
              </div>
            </div>
            {/* Chart Placeholder */}
            <div className="h-64 relative flex items-end gap-[2px]">
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '40%' }}></div>
              <div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '38%' }}></div>
              <div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '55%' }}></div>
              <div className="flex-1 bg-error/40 hover:bg-error/60 transition-all rounded-t-sm relative group" style={{ height: '85%' }}>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block z-10 glass-panel p-2 rounded text-[10px] whitespace-nowrap">AI Anomaly: Unexpected Spike</div>
              </div>
              <div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '50%' }}></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '42%' }}></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '40%' }}></div>
              <div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '38%' }}></div>
              <div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '55%' }}></div>
              <div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '50%' }}></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{ height: '42%' }}></div>
              <div className="absolute w-full h-[1px] bg-error border-dashed border-t border-error/50 bottom-[80%] left-0 z-0">
                <span className="absolute right-0 -top-4 text-[10px] text-error font-bold">CRITICAL THRESHOLD 80%</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-outline-variant pt-4">
              <div className="flex gap-4">
                <button className="text-[10px] font-bold text-on-surface-variant flex items-center gap-1 uppercase hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">visibility</span> Show Prediction
                </button>
                <button className="text-[10px] font-bold text-on-surface-variant flex items-center gap-1 uppercase hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_alt</span> Multi-node View
                </button>
              </div>
              <span className="text-[10px] text-outline font-label-caps">LAST UPDATE: 2 SECONDS AGO</span>
            </div>
          </div>

          {/* AI Correlation Panel */}
          <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border-primary/30 active-glow flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-tertiary">psychology</span>
              <h3 className="font-headline-md text-headline-md">Metric Correlation</h3>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
              <div className="bg-surface-container-high/50 p-4 rounded-lg border border-outline-variant hover:border-primary/50 transition-colors cursor-help group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-primary font-bold text-body-sm">Strong Correlation (0.94)</span>
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">AI DISCOVERY</span>
                </div>
                <p className="text-body-sm text-on-surface leading-snug">CPU Spike on <span className="text-primary">Node-04</span> linked to elevated <span className="text-tertiary">Network Latency</span> in Zone-B.</p>
                <div className="mt-3 h-1 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[94%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-high/50 p-4 rounded-lg border border-outline-variant hover:border-primary/50 transition-colors cursor-help group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-secondary font-bold text-body-sm">Hidden Relationship</span>
                  <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">STOCHASTIC</span>
                </div>
                <p className="text-body-sm text-on-surface leading-snug">Memory leak pattern detected in <span className="text-secondary">Auth-Service</span> following cache eviction cycles.</p>
                <div className="mt-3 flex justify-between">
                  <button className="text-[10px] text-primary hover:underline font-bold uppercase">Investigate Trace</button>
                  <button className="text-[10px] text-outline-variant font-bold uppercase">Dismiss</button>
                </div>
              </div>
              <div className="bg-surface-container-high/50 p-4 rounded-lg border border-outline-variant opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-on-surface-variant font-bold text-body-sm">Low Correlation (0.12)</span>
                </div>
                <p className="text-body-sm text-on-surface-variant leading-snug">Disk I/O vs User Sign-ins. No significant relationship found during this period.</p>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-surface-container border border-outline-variant rounded-lg text-body-sm font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">refresh</span>
              Refresh AI Models
            </button>
          </div>

          {/* Memory Usage */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline-md text-headline-md flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">memory</span>
                Memory
              </h4>
              <span className="text-secondary font-code-md">124.5 GB / 256 GB</span>
            </div>
            <div className="h-40 relative border-l border-b border-outline-variant flex items-end">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0 40 L0 25 C20 15 40 35 60 20 C80 5 90 20 100 15 L100 40 Z" fill="rgba(78, 222, 163, 0.1)" stroke="#4edea3" strokeWidth="0.5"></path>
              </svg>
              <div className="absolute bottom-1/2 left-0 w-full h-[1px] border-t border-secondary/20 z-0"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-outline-variant">
              <div>
                <p className="text-[10px] text-outline-variant uppercase font-bold">Swap Usage</p>
                <p className="text-body-md text-on-surface font-code-md">1.2 GB</p>
              </div>
              <div>
                <p className="text-[10px] text-outline-variant uppercase font-bold">Cache Hit Rate</p>
                <p className="text-body-md text-on-surface font-code-md">98.4%</p>
              </div>
            </div>
          </div>

          {/* Disk I/O */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline-md text-headline-md flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">storage</span>
                Disk I/O
              </h4>
              <span className="text-tertiary font-code-md">450 MB/s</span>
            </div>
            <div className="h-40 relative flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] w-8 font-bold text-outline">READ</span>
                <div className="flex-1 h-3 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[65%] shadow-[0_0_10px_rgba(255,180,170,0.3)]"></div>
                </div>
                <span className="text-[10px] font-code-md">292MB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] w-8 font-bold text-outline">WRITE</span>
                <div className="flex-1 h-3 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary/60 w-[35%]"></div>
                </div>
                <span className="text-[10px] font-code-md">158MB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] w-8 font-bold text-outline">IOPs</span>
                <div className="flex-1 h-3 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary/30 w-[82%]"></div>
                </div>
                <span className="text-[10px] font-code-md">12.4k</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between">
              <span className="text-[10px] text-outline-variant font-bold uppercase">Latency (Avg)</span>
              <span className="text-body-md text-tertiary font-code-md">0.42 ms</span>
            </div>
          </div>

          {/* Network Throughput */}
          <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline-md text-headline-md flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lan</span>
                Network
              </h4>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-outline-variant uppercase font-bold">Ingress</p>
                  <p className="text-headline-md font-code-md text-primary">8.2 GB/s</p>
                </div>
                <div className="w-32 h-8 bg-surface-container-high rounded flex items-end gap-0.5 px-1 pb-1">
                  <div className="w-1 bg-primary/40 h-[40%]"></div>
                  <div className="w-1 bg-primary/40 h-[60%]"></div>
                  <div className="w-1 bg-primary/40 h-[50%]"></div>
                  <div className="w-1 bg-primary/40 h-[80%]"></div>
                  <div className="w-1 bg-primary/40 h-[70%]"></div>
                  <div className="w-1 bg-primary/40 h-[90%]"></div>
                  <div className="w-1 bg-primary/40 h-[40%]"></div>
                  <div className="w-1 bg-primary/40 h-[60%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-outline-variant uppercase font-bold">Egress</p>
                  <p className="text-headline-md font-code-md text-secondary">4.1 GB/s</p>
                </div>
                <div className="w-32 h-8 bg-surface-container-high rounded flex items-end gap-0.5 px-1 pb-1">
                  <div className="w-1 bg-secondary/40 h-[30%]"></div>
                  <div className="w-1 bg-secondary/40 h-[20%]"></div>
                  <div className="w-1 bg-secondary/40 h-[40%]"></div>
                  <div className="w-1 bg-secondary/40 h-[35%]"></div>
                  <div className="w-1 bg-secondary/40 h-[50%]"></div>
                  <div className="w-1 bg-secondary/40 h-[45%]"></div>
                  <div className="w-1 bg-secondary/40 h-[30%]"></div>
                  <div className="w-1 bg-secondary/40 h-[25%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant">
              <div className="flex justify-between text-[10px] font-bold text-outline uppercase">
                <span>Packet Loss</span>
                <span className="text-secondary">0.0001%</span>
              </div>
            </div>
          </div>

          {/* Full Width Node Table */}
          <div className="col-span-12 glass-panel rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
              <h4 className="font-headline-md text-headline-md">Active Node Fleet</h4>
              <div className="flex gap-4">
                <span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> 42 Online</span>
                <span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> 1 Degraded</span>
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container text-[10px] font-bold text-outline uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 border-b border-outline-variant">Node ID</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Status</th>
                  <th className="px-6 py-3 border-b border-outline-variant">CPU Usage</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Mem Usage</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Disk Latency</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Load Avg</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                <tr className="hover:bg-surface-container-high/40 transition-colors">
                  <td className="px-6 py-4 font-code-md text-primary">us-east-1a-001</td>
                  <td className="px-6 py-4"><span className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Healthy</span></td>
                  <td className="px-6 py-4 font-code-md">12.4%</td>
                  <td className="px-6 py-4 font-code-md">45.1GB</td>
                  <td className="px-6 py-4 font-code-md">0.12ms</td>
                  <td className="px-6 py-4 font-code-md">0.8, 1.2, 1.1</td>
                  <td className="px-6 py-4"><button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">terminal</button></td>
                </tr>
                <tr className="hover:bg-surface-container-high/40 transition-colors">
                  <td className="px-6 py-4 font-code-md text-primary">us-east-1a-002</td>
                  <td className="px-6 py-4"><span className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Healthy</span></td>
                  <td className="px-6 py-4 font-code-md">18.9%</td>
                  <td className="px-6 py-4 font-code-md">48.2GB</td>
                  <td className="px-6 py-4 font-code-md">0.15ms</td>
                  <td className="px-6 py-4 font-code-md">1.1, 1.0, 0.9</td>
                  <td className="px-6 py-4"><button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">terminal</button></td>
                </tr>
                <tr className="hover:bg-surface-container-high/40 transition-colors bg-error/5">
                  <td className="px-6 py-4 font-code-md text-error">us-west-2c-014</td>
                  <td className="px-6 py-4"><span className="flex items-center gap-2 text-error"><div className="w-2 h-2 bg-error rounded-full status-dot-pulse"></div> High Load</span></td>
                  <td className="px-6 py-4 font-code-md text-error">92.1%</td>
                  <td className="px-6 py-4 font-code-md">118.4GB</td>
                  <td className="px-6 py-4 font-code-md text-error">4.52ms</td>
                  <td className="px-6 py-4 font-code-md">8.4, 7.2, 6.8</td>
                  <td className="px-6 py-4"><button className="material-symbols-outlined text-error hover:scale-110 transition-transform">bolt</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Service Metrics Section */}
          <div className="col-span-12 glass-panel rounded-xl p-6 border border-outline-variant/50">
            <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">speed</span>
              Service Metrics & SLO
            </h4>
            <div className="bg-surface-container-low/30 rounded-lg p-4 border border-outline-variant/30">
              <ServiceMetrics />
            </div>
          </div>

          {/* Predictive Analysis Section */}
          <div className="col-span-12 glass-panel rounded-xl p-6 border border-outline-variant/50">
            <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_graph</span>
              Predictive Analytics
            </h4>
            <div className="bg-surface-container-low/30 rounded-lg p-4 border border-outline-variant/30">
              <PredictiveAnalysis />
            </div>
          </div>
        </div>
      </div>

      {/* AI Co-pilot Panel */}
      <div className="fixed right-6 bottom-6 flex flex-col items-end pointer-events-none z-50">
        <div className="glass-panel w-80 mb-4 p-4 rounded-xl border-primary/50 pointer-events-auto shadow-2xl transition-all duration-500 translate-y-4 opacity-0" id="ai-suggestion-box">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h5 className="font-bold text-body-sm text-primary">Aegis Intelligence</h5>
            <button className="ml-auto material-symbols-outlined text-outline hover:text-on-surface" onClick={() => toggleAIBox()}>close</button>
          </div>
          <p className="text-body-sm text-on-surface mb-3 leading-relaxed">
            Detected potential IO throttling on <span className="text-tertiary">Cluster Beta</span>. Current read rates exceed provisioned throughput by 12%.
          </p>
          <div className="flex gap-2">
            <button className="flex-1 bg-primary text-on-primary py-2 rounded text-[10px] font-bold uppercase active:scale-95 transition-transform">Optimize Disk</button>
            <button className="flex-1 bg-surface-container py-2 rounded text-[10px] font-bold text-on-surface-variant border border-outline-variant uppercase">Ignore</button>
          </div>
        </div>
        <button className="pointer-events-auto bg-primary-container text-on-primary-container p-4 rounded-full shadow-lg active:scale-90 transition-transform flex items-center justify-center" onClick={() => toggleAIBox()}>
          <span className="material-symbols-outlined text-2xl">smart_toy</span>
        </button>
      </div>

      <style>{`
        body {
          background-color: #131315;
          color: #e5e1e4;
          overflow-x: hidden;
        }

        .glass-panel {
          background: rgba(24, 24, 27, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.4);
        }

        .metric-grid-bg {
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .active-glow {
          box-shadow: 0 0 15px rgba(166, 200, 255, 0.15);
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .status-dot-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          70% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(0.9); opacity: 1; }
        }

        .scanline {
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #a6c8ff, transparent);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.2;
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        /* Tailwind-like utility classes */
        .text-on-surface { color: #e5e1e4; }
        .text-on-surface-variant { color: #c0c7d5; }
        .text-outline { color: #8a919e; }
        .text-outline-variant { color: #404753; }
        .text-primary { color: #a6c8ff; }
        .text-secondary { color: #4edea3; }
        .text-tertiary { color: #ffb4aa; }
        .text-error { color: #ffb4ab; }
        .bg-primary-container { background-color: #3192fc; }
        .bg-surface-container { background-color: #201f22; }
        .bg-surface-container-low { background-color: #1c1b1d; }
        .bg-surface-container-high { background-color: #2a2a2c; }
        .bg-surface-container-highest { background-color: #353437; }
        .bg-surface-container-lowest { background-color: #0e0e10; }
        .bg-primary/10 { background-color: rgba(166, 200, 255, 0.1); }
        .bg-primary/20 { background-color: rgba(166, 200, 255, 0.2); }
        .bg-primary/30 { background-color: rgba(166, 200, 255, 0.3); }
        .bg-primary/40 { background-color: rgba(166, 200, 255, 0.4); }
        .bg-secondary/10 { background-color: rgba(78, 222, 163, 0.1); }
        .bg-secondary/40 { background-color: rgba(78, 222, 163, 0.4); }
        .bg-tertiary/30 { background-color: rgba(255, 180, 170, 0.3); }
        .bg-tertiary/60 { background-color: rgba(255, 180, 170, 0.6); }
        .bg-error/5 { background-color: rgba(255, 180, 171, 0.05); }
        .bg-error/40 { background-color: rgba(255, 180, 171, 0.4); }
        .border-outline-variant { border-color: #404753; }
        .border-primary/30 { border-color: rgba(166, 200, 255, 0.3); }
        .border-primary/50 { border-color: rgba(166, 200, 255, 0.5); }
        .border-error/50 { border-color: rgba(255, 180, 171, 0.5); }
        .border-secondary/20 { border-color: rgba(78, 222, 163, 0.2); }
        .text-on-primary-container { color: #002a53; }
        .text-on-primary { color: #00315f; }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&family=Geist:wght@500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </main>
  );
};

// Helper function for AI panel toggle
function toggleAIBox() {
  const box = document.getElementById('ai-suggestion-box');
  if (box) {
    box.classList.toggle('opacity-0');
    box.classList.toggle('translate-y-4');
    box.classList.toggle('opacity-100');
    box.classList.toggle('translate-y-0');
  }
}

export default Metrics;