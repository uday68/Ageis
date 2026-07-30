import React, { useState } from 'react';

// ============================================================
// TYPES
// ============================================================

interface ServiceMetric {
  label: string;
  value: string;
  sparkline: string; // SVG path
  color?: string;
}

interface Service {
  id: string;
  name: string;
  version: string;
  namespace: string;
  language: string;
  status: 'healthy' | 'warning' | 'degraded';
  statusLabel: string;
  metrics: ServiceMetric[];
  insight: string;
  insightIcon: string;
  insightColor?: string;
  insightText?: string;
}

// ============================================================
// DATA
// ============================================================

const services: Service[] = [
  {
    id: 'auth-service',
    name: 'auth-service',
    version: 'v1.42.0',
    namespace: 'security',
    language: 'Go 1.21',
    status: 'healthy',
    statusLabel: 'Healthy',
    metrics: [
      { label: 'Requests', value: '1.2k/s', sparkline: 'M0,25 L10,22 L20,24 L30,20 L40,22 L50,15 L60,18 L70,12 L80,14 L90,10 L100,12', color: '#4edea3' },
      { label: 'P99 Latency', value: '42ms', sparkline: 'M0,20 L10,21 L20,20 L30,22 L40,21 L50,20 L60,21 L70,20 L80,19 L90,20 L100,21', color: '#a6c8ff' },
      { label: 'Error Rate', value: '0.02%', sparkline: 'M0,28 L10,29 L20,28 L30,29 L40,28 L50,29 L60,28 L70,29 L80,28 L90,29 L100,28', color: '#4edea3' },
    ],
    insight: 'Service operating within SLIs',
    insightIcon: 'verified',
    insightColor: 'text-primary',
  },
  {
    id: 'payment-gw',
    name: 'payment-gw',
    version: 'v2.1.8-rc',
    namespace: 'commerce',
    language: 'Node.js',
    status: 'warning',
    statusLabel: 'Warning',
    metrics: [
      { label: 'Requests', value: '450/s', sparkline: 'M0,15 L10,25 L20,22 L30,28 L40,20 L50,24 L60,18 L70,22 L80,15 L90,20 L100,12', color: '#ffb4aa' },
      { label: 'P99 Latency', value: '340ms', sparkline: 'M0,25 L20,24 L40,20 L60,10 L80,5 L100,2', color: '#ffb4aa' },
      { label: 'Error Rate', value: '0.85%', sparkline: 'M0,28 L10,25 L20,26 L30,22 L40,25 L50,23 L60,24 L70,22 L80,23 L90,21 L100,20', color: '#a6c8ff' },
    ],
    insight: 'AI Insight: Memory Leak Detected',
    insightIcon: 'psychology',
    insightColor: 'text-tertiary',
  },
  {
    id: 'notification-svc',
    name: 'notification-svc',
    version: 'v0.9.1',
    namespace: 'infra',
    language: 'Python',
    status: 'degraded',
    statusLabel: 'Degraded',
    metrics: [
      { label: 'Requests', value: '12/s', sparkline: 'M0,5 L20,8 L40,15 L60,25 L80,28 L100,30', color: '#ffb4ab' },
      { label: 'P99 Latency', value: '2.4s', sparkline: 'M0,30 L10,25 L20,20 L30,15 L40,10 L50,5 L60,2 L70,1 L100,0', color: '#ffb4ab' },
      { label: 'Error Rate', value: '18.4%', sparkline: 'M0,30 L10,15 L20,5 L30,10 L40,0 L100,5', color: '#ffb4ab' },
    ],
    insight: 'Optimization Available: Tuning Recommended',
    insightIcon: 'emergency',
    insightColor: 'text-error',
  },
  {
    id: 'search-api',
    name: 'search-api',
    version: 'v3.0.1',
    namespace: 'discovery',
    language: 'Rust',
    status: 'healthy',
    statusLabel: 'Healthy',
    metrics: [
      { label: 'Requests', value: '2.8k/s', sparkline: 'M0,15 L20,12 L40,14 L60,10 L80,11 L100,10', color: '#4edea3' },
      { label: 'P99 Latency', value: '12ms', sparkline: 'M0,20 L100,20', color: '#a6c8ff' },
      { label: 'Error Rate', value: '0.00%', sparkline: 'M0,29 L100,29', color: '#4edea3' },
    ],
    insight: 'Peak performance maintained',
    insightIcon: 'auto_awesome',
    insightColor: 'text-on-surface-variant',
  },
  {
    id: 'user-profile',
    name: 'user-profile',
    version: 'v1.2.0',
    namespace: 'core',
    language: 'Go',
    status: 'healthy',
    statusLabel: 'Healthy',
    metrics: [
      { label: 'Requests', value: '890/s', sparkline: 'M0,20 L10,22 L20,20 L30,18 L40,19 L50,20', color: '#4edea3' },
      { label: 'P99 Latency', value: '55ms', sparkline: 'M0,20 L100,20', color: '#a6c8ff' },
      { label: 'Error Rate', value: '0.01%', sparkline: 'M0,29 L100,29', color: '#4edea3' },
    ],
    insight: 'Operating normally',
    insightIcon: 'verified',
    insightColor: 'text-on-surface-variant',
  },
];

// ============================================================
// COMPONENT
// ============================================================

const InfrastructureDashboard: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0].id);
  const [filterNamespace, setFilterNamespace] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [sortBy, setSortBy] = useState<'status' | 'name'>('status');

  const selectedService = services.find((s) => s.id === selectedServiceId) || services[0];

  const handleCardClick = (id: string) => {
    setSelectedServiceId(id);
  };

  return (
    <>
      {/* Custom Styles */}
      <style>{`
        body {
          background-color: #09090b;
          color: #e5e1e4;
          overflow-x: hidden;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .status-glow-healthy {
          box-shadow: 0 0 8px rgba(78, 222, 163, 0.4);
        }
        .status-glow-warning {
          box-shadow: 0 0 8px rgba(255, 180, 170, 0.4);
        }
        .sparkline-container {
          height: 32px;
          width: 100%;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 3px;
        }
        .service-card:hover {
          border-color: #a6c8ff;
          background: rgba(39, 39, 42, 0.8);
        }
        .service-card.selected {
          border-color: #a6c8ff !important;
          background: rgba(39, 39, 42, 0.9) !important;
          box-shadow: 0 0 20px rgba(166, 200, 255, 0.15);
        }
      `}</style>

      <main className=" min-h-screen">
        <div className="max-w-[1600px] mx-auto p-margin-desktop flex flex-col gap-gutter">
          {/* Service Health Overview Stats */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Total Services</span>
                <span className="material-symbols-outlined text-primary">hub</span>
              </div>
              <div className="text-[32px] font-bold font-display">124</div>
              <div className="text-body-sm text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +4 this week
              </div>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden border-l-4 border-l-secondary">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Healthy</span>
                <span className="w-2 h-2 rounded-full bg-secondary status-glow-healthy"></span>
              </div>
              <div className="text-[32px] font-bold font-display text-secondary">118</div>
              <div className="text-body-sm text-on-surface-variant">95.1% uptime avg</div>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden border-l-4 border-l-tertiary">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Warning</span>
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              </div>
              <div className="text-[32px] font-bold font-display text-tertiary">4</div>
              <div className="text-body-sm text-on-surface-variant">High latency detected</div>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden border-l-4 border-l-error">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Degraded</span>
                <span className="w-2 h-2 rounded-full bg-error status-glow-warning"></span>
              </div>
              <div className="text-[32px] font-bold font-display text-error">2</div>
              <div className="text-body-sm text-on-surface-variant">Action required immediately</div>
            </div>
          </section>

          {/* Filter & Search Bar Section */}
          <section className="flex flex-wrap items-center justify-between gap-4 glass-panel p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-surface-container-high rounded-lg p-1 border border-outline-variant">
                <button className="px-3 py-1 text-label-caps font-bold bg-primary-container text-on-primary-container rounded-md">All</button>
                <button className="px-3 py-1 text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">Production</button>
                <button className="px-3 py-1 text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">Staging</button>
              </div>
              <div className="h-6 w-px bg-outline-variant"></div>
              <div className="flex items-center gap-2">
                <select
                  className="bg-surface-container-low border border-outline-variant rounded-lg text-body-sm px-3 py-1.5 focus:outline-none focus:border-primary"
                  value={filterNamespace}
                  onChange={(e) => setFilterNamespace(e.target.value)}
                >
                  <option value="all">Namespace: All</option>
                  <option value="default">Namespace: default</option>
                  <option value="commerce">Namespace: commerce</option>
                  <option value="auth">Namespace: auth</option>
                </select>
                <select
                  className="bg-surface-container-low border border-outline-variant rounded-lg text-body-sm px-3 py-1.5 focus:outline-none focus:border-primary"
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                >
                  <option value="all">Language: All</option>
                  <option value="go">Go</option>
                  <option value="node">Node.js</option>
                  <option value="rust">Rust</option>
                  <option value="python">Python</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-body-sm text-on-surface-variant">Sort by:</span>
              <button
                className="flex items-center gap-1 text-body-sm font-medium hover:text-primary"
                onClick={() => setSortBy(sortBy === 'status' ? 'name' : 'status')}
              >
                {sortBy === 'status' ? 'Status' : 'Name'}
                <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
              </button>
            </div>
          </section>

          {/* Layout Wrapper for Grid and Side Panel */}
          <div className="flex gap-gutter h-[calc(100vh-320px)]">
            {/* Service Inventory Grid */}
            <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 auto-rows-max pb-8">
              {services.map((service) => {
                const isSelected = selectedServiceId === service.id;
                const statusBorder =
                  service.status === 'healthy'
                    ? 'border-l-secondary'
                    : service.status === 'warning'
                    ? 'border-l-tertiary'
                    : 'border-l-error';
                const statusColor =
                  service.status === 'healthy'
                    ? 'bg-secondary'
                    : service.status === 'warning'
                    ? 'bg-tertiary'
                    : 'bg-error';
                const statusBg =
                  service.status === 'healthy'
                    ? 'bg-secondary/10 text-secondary'
                    : service.status === 'warning'
                    ? 'bg-tertiary/10 text-tertiary'
                    : 'bg-error/10 text-error';

                return (
                  <div
                    key={service.id}
                    className={`service-card glass-panel p-5 rounded-xl transition-all cursor-pointer flex flex-col gap-4 border-l-2 ${statusBorder} ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleCardClick(service.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-md text-headline-md font-bold">{service.name}</h3>
                          <span className="text-[10px] font-label-caps bg-surface-container-highest px-2 py-0.5 rounded uppercase tracking-wider">
                            {service.version}
                          </span>
                        </div>
                        <span className="text-body-sm text-on-surface-variant">
                          Namespace: {service.namespace} • {service.language}
                        </span>
                      </div>
                      <div className={`flex items-center gap-2 ${statusBg} px-2 py-1 rounded-full text-body-sm font-medium`}>
                        <span className={`w-2 h-2 rounded-full ${statusColor} ${service.status === 'warning' ? 'animate-pulse' : ''}`}></span>
                        {service.statusLabel}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {service.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase">
                            {metric.label}
                          </span>
                          <span className="font-mono text-body-md">{metric.value}</span>
                          <div className="sparkline-container mt-1">
                            <svg className="w-full h-full" viewBox="0 0 100 30">
                              <path
                                d={metric.sparkline}
                                fill="none"
                                stroke={metric.color}
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-outline-variant">
                      <span className={`material-symbols-outlined text-[18px] ${service.insightColor || 'text-primary'}`}>
                        {service.insightIcon}
                      </span>
                      <span className={`text-body-sm font-medium ${service.insightColor || ''}`}>
                        {service.insight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Dependencies / Side Panel */}
            <aside className="w-80 h-full glass-panel rounded-xl flex flex-col overflow-hidden hidden xl:flex">
              <div className="p-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
                <h4 className="font-headline-md text-headline-md font-bold">Selected Service</h4>
                <button className="text-on-surface-variant hover:text-on-surface">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
                {/* Summary */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-[24px] font-bold">{selectedService.name}</span>
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">
                    Core authentication service handling JWT issuance and validation across all Aegis platform nodes.
                  </p>
                </div>

                {/* Active Dependencies Widget */}
                <div className="flex flex-col gap-3">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Dependency Graph
                  </span>
                  {/* Upstream */}
                  <div className="flex flex-col gap-2 p-3 bg-surface-container-high rounded-lg border border-outline-variant">
                    <span className="text-[10px] font-label-caps text-primary uppercase">Upstream (Callers)</span>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium">api-gateway</span>
                      <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium">admin-panel</span>
                      <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">Healthy</span>
                    </div>
                  </div>

                  {/* Flow Animation */}
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary opacity-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-white/40 animate-[bounce_2s_infinite]"></div>
                      </div>
                      <span className="material-symbols-outlined text-primary-container">hub</span>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-tertiary opacity-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-white/40 animate-[bounce_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Downstream */}
                  <div className="flex flex-col gap-2 p-3 bg-surface-container-high rounded-lg border border-outline-variant">
                    <span className="text-[10px] font-label-caps text-secondary uppercase">Downstream (Calls)</span>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium">user-db (PostgreSQL)</span>
                      <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium">redis-cache</span>
                      <span className="text-[10px] bg-tertiary/10 text-tertiary px-1.5 py-0.5 rounded">Warning</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium">audit-log-svc</span>
                      <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">Healthy</span>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="mt-4 p-4 rounded-lg bg-primary-container/10 border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <span className="material-symbols-outlined text-[64px]">auto_awesome</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
                    <span className="font-bold text-body-sm text-primary">Aegis AI Copilot</span>
                  </div>
                  <p className="text-body-sm leading-relaxed mb-3">
                    Service is experiencing slight cache miss increases (8%). AI suggests increasing Redis memory allocation by 512MB to maintain P99 targets.
                  </p>
                  <button className="text-[11px] font-label-caps uppercase bg-primary text-on-primary px-3 py-1.5 rounded font-bold hover:brightness-110 transition-all">
                    Apply Optimization
                  </button>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border-t border-outline-variant">
                <button className="w-full py-2 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors font-medium text-body-sm">
                  View Full Dependency Map
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>
    </>
  );
};

export default InfrastructureDashboard;