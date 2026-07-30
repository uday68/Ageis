import '../styles/theme.css';
import '../styles/infrastructure.css';
import React, { useState } from 'react';

const InfrastructureDashboard: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('payment');
  const [panelOpen, setPanelOpen] = useState<boolean>(true);

  const selectNode = (nodeId: string) => {
    setSelectedNode(nodeId);
    setPanelOpen(true);
  };

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    // Added a full-screen flex wrapper so the absolute aside has a relative boundary
    <div className="flex h-screen w-full relative overflow-hidden bg-background">
      <main className="flex-1 relative text-on-surface font-body-md flex overflow-clip">
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#404753 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Canvas */}
        <div className="flex-1 relative z-10 p-8 flex items-center justify-center">
          {/* SVG Connections */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: -1 }}
          >
            <path
              className="dash-anim pulse-green"
              d="M 200,300 L 400,300"
              fill="none"
              stroke="#4edea3"
              strokeWidth="2"
            />
            <path
              className="dash-anim-fast pulse-red"
              d="M 400,300 L 600,150"
              fill="none"
              stroke="#ff5446"
              strokeWidth="3"
            />
            <path
              className="dash-anim-fast pulse-red"
              d="M 400,300 L 600,450"
              fill="none"
              stroke="#ff5446"
              strokeWidth="3"
            />
            <path
              className="dash-anim pulse-green"
              d="M 600,150 L 800,150"
              fill="none"
              stroke="#4edea3"
              strokeWidth="2"
            />
            <path
              className="dash-anim pulse-yellow"
              d="M 600,450 L 800,450"
              fill="none"
              stroke="#ffb4aa"
              strokeWidth="2.5"
            />
            <path
              className="dash-anim pulse-green"
              d="M 600,450 L 800,300"
              fill="none"
              stroke="#4edea3"
              strokeWidth="2"
            />
            <path
              className="dash-anim pulse-green"
              d="M 800,300 L 1000,300"
              fill="none"
              stroke="#4edea3"
              strokeWidth="2"
            />
            <rect
              fill="none"
              height="440"
              rx="16"
              stroke="#404753"
              strokeDasharray="5,5"
              strokeWidth="1"
              width="550"
              x="500"
              y="80"
            />
            <text
              fill="#8a919e"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.05em"
              x="520"
              y="110"
            >
              KUBERNETES CLUSTER (us-east-1)
            </text>
          </svg>

          {/* Nodes */}
          <div className="relative w-full h-full max-w-6xl">
            {/* Frontend */}
            <div
              className={`absolute left-[100px] top-[260px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'frontend' ? 'selected' : ''
              }`}
              onClick={() => selectNode('frontend')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">desktop_windows</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Frontend App</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">
                  React / Next.js
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_#4edea3]" />
            </div>

            {/* API Gateway */}
            <div
              className={`absolute left-[300px] top-[260px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'apigw' ? 'selected' : ''
              }`}
              onClick={() => selectNode('apigw')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">router</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">API Gateway</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Kong</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary-container rounded-full shadow-[0_0_8px_#ff5446] animate-pulse" />
            </div>

            {/* Auth */}
            <div
              className={`absolute left-[500px] top-[110px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'auth' ? 'selected' : ''
              }`}
              onClick={() => selectNode('auth')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">lock</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Auth Service</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Go</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary-container rounded-full shadow-[0_0_8px_#ff5446]" />
            </div>

            {/* Payment */}
            <div
              className={`absolute left-[500px] top-[410px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'payment' ? 'selected' : ''
              }`}
              onClick={() => selectNode('payment')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg border border-primary/30">
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Payment Service</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Node.js</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary rounded-full shadow-[0_0_8px_#ffb4aa]" />
            </div>

            {/* Redis */}
            <div
              className={`absolute left-[700px] top-[110px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'redis' ? 'selected' : ''
              }`}
              onClick={() => selectNode('redis')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">memory</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Redis Cache</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Cluster</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_#4edea3]" />
            </div>

            {/* Kafka */}
            <div
              className={`absolute left-[700px] top-[260px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'kafka' ? 'selected' : ''
              }`}
              onClick={() => selectNode('kafka')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">stream</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Kafka</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Message Bus</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_#4edea3]" />
            </div>

            {/* PostgreSQL */}
            <div
              className={`absolute left-[700px] top-[410px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'postgres' ? 'selected' : ''
              }`}
              onClick={() => selectNode('postgres')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">database</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">PostgreSQL</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Primary</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary rounded-full shadow-[0_0_8px_#ffb4aa]" />
            </div>

            {/* Notification */}
            <div
              className={`absolute left-[900px] top-[260px] glass-panel node-glow rounded-xl p-4 w-48 cursor-pointer flex items-center gap-3 ${
                selectedNode === 'notification' ? 'selected' : ''
              }`}
              onClick={() => selectNode('notification')}
            >
              <div className="bg-surface-container-high p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">mark_email_unread</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">Notification</div>
                <div className="font-code-md text-code-md text-on-surface-variant text-xs mt-1">Python</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_#4edea3]" />
            </div>
          </div>
        </div>
      </main>
      
      {/* Side Panel: Added absolute positioning, defined width (w-96), and right-0 */}
      <aside
        className={`absolute right-0 top-0 w-96 p-8 bg-surface/90 backdrop-blur-xl border-l border-outline-variant h-full flex flex-col z-20 shrink-0 transform transition-transform duration-300 ${
          panelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="health-panel"
      >
        <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
          <h2 className="font-headline-md text-headline-md text-on-surface">Node Details</h2>
          <button
            className="text-on-surface-variant hover:text-primary"
            onClick={togglePanel}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-2xl">payments</span>
            </div>
            <div>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Payment Service</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="font-code-md text-code-md text-tertiary">Degraded</span>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 18 }}
              >
                auto_awesome
              </span>
              <span className="font-label-caps text-label-caps text-primary">AI Insight</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              High latency detected between API Gateway and Payment Service. Root cause likely related to slow queries on PostgreSQL Primary database during high transaction volume.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">CPU Usage</div>
              <div className="font-headline-md text-headline-md text-on-surface">78%</div>
              <div className="font-code-md text-code-md text-tertiary-container text-xs mt-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%
              </div>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Memory</div>
              <div className="font-headline-md text-headline-md text-on-surface">1.2 GB</div>
              <div className="font-code-md text-code-md text-secondary text-xs mt-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2%
              </div>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Error Rate</div>
              <div className="font-headline-md text-headline-md text-tertiary-container">4.2%</div>
              <div className="font-code-md text-code-md text-tertiary-container text-xs mt-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 3.1%
              </div>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Latency (p99)</div>
              <div className="font-headline-md text-headline-md text-tertiary">850ms</div>
              <div className="font-code-md text-code-md text-tertiary-container text-xs mt-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 400ms
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface mb-3">Active Alerts</h4>
            <div className="space-y-2">
              <div className="bg-surface-container-lowest border border-error/30 p-3 rounded-lg flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-error mt-0.5"
                  style={{ fontSize: 16 }}
                >
                  error
                </span>
                <div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium">DB Connection Timeout</div>
                  <div className="font-code-md text-[10px] text-on-surface-variant mt-1">2 mins ago</div>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-tertiary/30 p-3 rounded-lg flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-tertiary mt-0.5"
                  style={{ fontSize: 16 }}
                >
                  warning
                </span>
                <div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium">High API Latency</div>
                  <div className="font-code-md text-[10px] text-on-surface-variant mt-1">5 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-outline-variant bg-surface-container-low/50">
          <button className="w-full bg-surface-bright text-on-surface hover:bg-surface-container-highest border border-outline-variant py-2 rounded-md font-label-caps text-label-caps transition-colors">
            View Detailed Logs
          </button>
        </div>
      </aside>
    </div>
  );
};

export default InfrastructureDashboard;