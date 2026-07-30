import React, { useState } from 'react';

// ============================================================
// TYPES
// ============================================================

interface TeamMember {
  initials: string;
  name: string;
  email: string;
  role: 'Admin' | 'Engineer' | 'Viewer';
  activity: string;
  activeNow?: boolean;
}

interface Integration {
  id: string;
  name: string;
  icon: string;
  status: 'connected' | 'disconnected';
  details: string;
  action: string;
  actionType: 'configure' | 'manage' | 'connect';
}



const teamMembers: TeamMember[] = [
  {
    initials: 'EK',
    name: 'Elena Kostic',
    email: 'elena@aegis-ops.ai',
    role: 'Admin',
    activity: 'Settings View',
    activeNow: true,
  },
  {
    initials: 'JD',
    name: 'Jordan Duarte',
    email: 'j.duarte@aegis-ops.ai',
    role: 'Engineer',
    activity: '2 hours ago',
  },
  {
    initials: 'MA',
    name: 'Marcus Aoki',
    email: 'm.aoki@aegis-ops.ai',
    role: 'Viewer',
    activity: 'Yesterday',
  },
];

const integrations: Integration[] = [
  {
    id: 'aws',
    name: 'AWS',
    icon: 'cloud',
    status: 'connected',
    details: 'us-east-1',
    action: 'Configure',
    actionType: 'configure',
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: 'chat',
    status: 'connected',
    details: '#ops-alerts',
    action: 'Manage',
    actionType: 'manage',
  },
  {
    id: 'pagerduty',
    name: 'PagerDuty',
    icon: 'notifications_active',
    status: 'disconnected',
    details: 'Disconnected',
    action: 'Connect',
    actionType: 'connect',
  },
];


const SettingsPage: React.FC = () => {
  // State
  const [activeTab, setActiveTab] = useState<string>('general');
  const [workspaceName, setWorkspaceName] = useState('Aegis Core Operations');
  const [environmentTier, setEnvironmentTier] = useState<'production' | 'staging'>('production');
  const [primaryRegion, setPrimaryRegion] = useState('us-east-1');
  const [reasoningDepth, setReasoningDepth] = useState(85);
  const [operationMode, setOperationMode] = useState<'autopilot' | 'copilot'>('autopilot');

  // Tabs configuration
  const tabs = [
    { id: 'general', label: 'General', icon: 'grid_view' },
    { id: 'ai', label: 'AI Configuration', icon: 'neurology' },
    { id: 'integrations', label: 'Integrations', icon: 'extension' },
    { id: 'team', label: 'Team & Permissions', icon: 'group' },
    { id: 'api', label: 'API Keys', icon: 'key' },
    { id: 'alerts', label: 'Alert Routing', icon: 'notifications_active' },
    { id: 'billing', label: 'Billing & Plan', icon: 'payments' },
  ];

  // Helper to get status text for reasoning depth
  const getReasoningLabel = (val: number) => {
    if (val < 30) return 'Minimal (Low Cost)';
    if (val < 70) return 'Standard (Balanced)';
    return 'Extensive (High Token Use)';
  };

  return (
    <>
      {/* Fonts & Icons (assumed to be in index.html, but we include them here for completeness) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>{`
        body {
          background-color: #09090b;
          color: #e5e1e4;
          -webkit-font-smoothing: antialiased;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .active-tab-indicator {
          position: absolute;
          left: -16px;
          width: 4px;
          height: 24px;
          background-color: #a6c8ff;
          border-radius: 0 4px 4px 0;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #404753;
          border-radius: 10px;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #a6c8ff !important;
          box-shadow: 0 0 0 2px rgba(166, 200, 255, 0.2);
        }
        .animate-in {
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="flex h-screen w-full px-8">
        {/* SideNavBar */}
        {/* Main Content Area */}
        <main className=" flex-1 flex flex-col h-full bg-background relative overflow-hidden w-full">
          {/* TopAppBar */}

          {/* Settings Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Settings Sub-Navigation */}
            <aside className="w-64 border-r border-outline-variant/20 bg-surface/30 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-2 px-2">Settings</h2>
              <nav className="space-y-4">
                {/* Workspace */}
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant/60 mb-3 px-2">Workspace</p>
                  <div className="space-y-1">
                    {['general', 'ai', 'integrations'].map((tabId) => {
                      const tab = tabs.find((t) => t.id === tabId)!;
                      const isActive = activeTab === tabId;
                      return (
                        <button
                          key={tabId}
                          className={`nav-tab w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary/10 text-primary font-bold'
                              : 'text-on-surface-variant hover:bg-surface-container-high'
                          }`}
                          onClick={() => setActiveTab(tabId)}
                        >
                          <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                          <span className="font-body-md">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* Access Control */}
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant/60 mb-3 px-2">Access Control</p>
                  <div className="space-y-1">
                    {['team', 'api'].map((tabId) => {
                      const tab = tabs.find((t) => t.id === tabId)!;
                      const isActive = activeTab === tabId;
                      return (
                        <button
                          key={tabId}
                          className={`nav-tab w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary/10 text-primary font-bold'
                              : 'text-on-surface-variant hover:bg-surface-container-high'
                          }`}
                          onClick={() => setActiveTab(tabId)}
                        >
                          <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                          <span className="font-body-md">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* Operations */}
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant/60 mb-3 px-2">Operations</p>
                  <div className="space-y-1">
                    {['alerts', 'billing'].map((tabId) => {
                      const tab = tabs.find((t) => t.id === tabId)!;
                      const isActive = activeTab === tabId;
                      return (
                        <button
                          key={tabId}
                          className={`nav-tab w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary/10 text-primary font-bold'
                              : 'text-on-surface-variant hover:bg-surface-container-high'
                          }`}
                          onClick={() => setActiveTab(tabId)}
                        >
                          <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                          <span className="font-body-md">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </aside>

            {/* Configuration Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-surface-dim/20">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* General Settings */}
                {activeTab === 'general' && (
                  <section className="settings-content animate-in">
                    <header className="mb-6">
                      <h3 className="font-headline-lg text-headline-lg mb-1">General Settings</h3>
                      <p className="text-on-surface-variant">Configure your global workspace parameters and environment identity.</p>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass-panel p-6 rounded-xl space-y-4">
                        <div>
                          <label className="block font-label-caps text-label-caps text-primary mb-2">Workspace Name</label>
                          <input
                            className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-3 text-body-md"
                            type="text"
                            value={workspaceName}
                            onChange={(e) => setWorkspaceName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block font-label-caps text-label-caps text-primary mb-2">Workspace ID</label>
                          <div className="flex items-center gap-2 bg-surface-container-lowest/50 border border-outline-variant rounded-lg p-3">
                            <code className="text-code-md text-secondary">ws_aegis_prod_882x</code>
                            <button className="ml-auto material-symbols-outlined text-[16px] text-on-surface-variant hover:text-primary">
                              content_copy
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="glass-panel p-6 rounded-xl space-y-4">
                        <div>
                          <label className="block font-label-caps text-label-caps text-primary mb-2">Environment Tier</label>
                          <div className="flex p-1 bg-surface-container-lowest border border-outline-variant rounded-lg">
                            <button
                              className={`flex-1 py-2 text-body-sm font-bold rounded-md transition-colors ${
                                environmentTier === 'production'
                                  ? 'bg-primary text-on-primary'
                                  : 'text-on-surface-variant hover:text-on-surface'
                              }`}
                              onClick={() => setEnvironmentTier('production')}
                            >
                              Production
                            </button>
                            <button
                              className={`flex-1 py-2 text-body-sm font-bold rounded-md transition-colors ${
                                environmentTier === 'staging'
                                  ? 'bg-primary text-on-primary'
                                  : 'text-on-surface-variant hover:text-on-surface'
                              }`}
                              onClick={() => setEnvironmentTier('staging')}
                            >
                              Staging
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-caps text-label-caps text-primary mb-2">Primary Region</label>
                          <select
                            className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-3 text-body-md appearance-none"
                            value={primaryRegion}
                            onChange={(e) => setPrimaryRegion(e.target.value)}
                          >
                            <option value="us-east-1">us-east-1 (N. Virginia)</option>
                            <option value="eu-central-1">eu-central-1 (Frankfurt)</option>
                            <option value="ap-southeast-1">ap-southeast-1 (Singapore)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* AI Configuration */}
                {activeTab === 'ai' && (
                  <section className="settings-content animate-in">
                    <header className="mb-6">
                      <h3 className="font-headline-lg text-headline-lg mb-1">AI Agent Configuration</h3>
                      <p className="text-on-surface-variant">Fine-tune the autonomous capabilities and reasoning depth of the Aegis core.</p>
                    </header>
                    <div className="space-y-6">
                      <div className="glass-panel p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h4 className="font-headline-md text-headline-md mb-1">Operation Mode</h4>
                            <p className="text-body-sm text-on-surface-variant">How much autonomy should the AI possess during critical incidents?</p>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center gap-2">
                              <button
                                className={`w-24 h-12 rounded-xl bg-surface-container-lowest border-2 flex items-center justify-center relative overflow-hidden ${
                                  operationMode === 'autopilot' ? 'border-primary' : 'border-outline-variant opacity-50 grayscale'
                                }`}
                                onClick={() => setOperationMode('autopilot')}
                              >
                                <span className="material-symbols-outlined text-primary" data-weight="fill">
                                  smart_toy
                                </span>
                              </button>
                              <span className={`font-label-caps text-label-caps ${operationMode === 'autopilot' ? 'text-primary' : ''}`}>
                                Autopilot
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <button
                                className={`w-24 h-12 rounded-xl bg-surface-container-lowest border-2 flex items-center justify-center ${
                                  operationMode === 'copilot' ? 'border-primary' : 'border-outline-variant opacity-50 grayscale'
                                }`}
                                onClick={() => setOperationMode('copilot')}
                              >
                                <span className="material-symbols-outlined">person_pin</span>
                              </button>
                              <span className={`font-label-caps text-label-caps ${operationMode === 'copilot' ? 'text-primary' : ''}`}>
                                Copilot
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between mb-2">
                              <label className="font-label-caps text-label-caps text-primary">Reasoning Depth</label>
                              <span className="text-body-sm font-bold text-on-surface">{getReasoningLabel(reasoningDepth)}</span>
                            </div>
                            <input
                              className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                              max={100}
                              min={1}
                              type="range"
                              value={reasoningDepth}
                              onChange={(e) => setReasoningDepth(parseInt(e.target.value, 10))}
                            />
                            <div className="flex justify-between mt-2">
                              <span className="text-[10px] text-on-surface-variant/40">FAST/HEURISTIC</span>
                              <span className="text-[10px] text-on-surface-variant/40">DEEP/ANALYTIC</span>
                            </div>
                          </div>
                          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex gap-4">
                            <span className="material-symbols-outlined text-primary">info</span>
                            <p className="text-body-sm text-on-surface-variant">
                              <strong className="text-on-surface">Pro Tip:</strong> Intensive reasoning depth is recommended for multi-cloud network failures but may increase response latency by 1.2s.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-panel p-6 rounded-xl">
                          <label className="block font-label-caps text-label-caps text-primary mb-3">Active Inference Model</label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-surface-container-lowest border-2 border-primary/50 rounded-lg">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary">verified</span>
                                <div>
                                  <p className="text-body-md font-bold">Llama-3-Ops-Optimized</p>
                                  <p className="text-[11px] text-on-surface-variant">Recommended for Infrastructure Ops</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-surface-container-lowest/30 border border-outline-variant/30 rounded-lg opacity-60">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined">analytics</span>
                                <div>
                                  <p className="text-body-md font-bold">GPT-4-Turbo-O1</p>
                                  <p className="text-[11px] text-on-surface-variant">High Cost / High Accuracy</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-secondary">rocket_launch</span>
                          </div>
                          <h5 className="text-body-md font-bold mb-1">Model Performance</h5>
                          <p className="text-[12px] text-on-surface-variant mb-4 px-4">
                            Your current model is performing 22% better than industry standard for SRE tasks.
                          </p>
                          <button className="text-primary text-body-sm font-bold hover:underline">View Benchmarks</button>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Team & Permissions */}
                {activeTab === 'team' && (
                  <section className="settings-content animate-in">
                    <header className="mb-6 flex justify-between items-end">
                      <div>
                        <h3 className="font-headline-lg text-headline-lg mb-1">Team &amp; Permissions</h3>
                        <p className="text-on-surface-variant">Manage access levels and monitor active sessions for your organization.</p>
                      </div>
                      <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-body-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                        Invite Member
                      </button>
                    </header>
                    <div className="glass-panel rounded-xl overflow-hidden">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-surface-container-highest/50 border-b border-outline-variant">
                            <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">User</th>
                            <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">Role</th>
                            <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">Activity</th>
                            <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                          {teamMembers.map((member, idx) => (
                            <tr key={idx} className="hover:bg-surface-container-high/20 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                                    member.role === 'Admin' ? 'bg-primary/20 text-primary' :
                                    member.role === 'Engineer' ? 'bg-secondary/20 text-secondary' :
                                    'bg-tertiary/20 text-tertiary'
                                  }`}>
                                    {member.initials}
                                  </div>
                                  <div>
                                    <p className="text-body-md font-bold">{member.name}</p>
                                    <p className="text-[11px] text-on-surface-variant">{member.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`border px-2 py-0.5 rounded text-[11px] font-bold ${
                                  member.role === 'Admin' ? 'bg-primary/10 text-primary border-primary/20' :
                                  member.role === 'Engineer' ? 'bg-surface-container-highest text-on-surface-variant border-outline-variant/50' :
                                  'bg-surface-container-highest text-on-surface-variant border-outline-variant/50'
                                }`}>
                                  {member.role}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <p className={`text-body-sm ${member.activeNow ? '' : 'text-on-surface-variant'}`}>
                                  {member.activeNow ? 'Active Now' : member.activity}
                                </p>
                                {member.activeNow && (
                                  <p className="text-[10px] text-secondary font-bold">{member.activity}</p>
                                )}
                              </td>
                              <td className="px-6 py-4">
                                <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface">
                                  more_vert
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {/* Integrations */}
                {activeTab === 'integrations' && (
                  <section className="settings-content animate-in">
                    <header className="mb-6">
                      <h3 className="font-headline-lg text-headline-lg mb-1">Integrations &amp; Cloud</h3>
                      <p className="text-on-surface-variant">Connect your external ecosystem to Aegis for seamless data ingestion and orchestration.</p>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {integrations.map((integration) => {
                        const isConnected = integration.status === 'connected';
                        return (
                          <div
                            key={integration.id}
                            className={`glass-panel p-6 rounded-xl flex flex-col items-center text-center relative overflow-hidden group ${
                              !isConnected ? 'border-dashed opacity-70' : ''
                            }`}
                          >
                            {isConnected && (
                              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
                            )}
                            <div className={`w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-4 border border-outline-variant group-hover:border-primary transition-colors`}>
                              <span className="material-symbols-outlined text-[32px]">{integration.icon}</span>
                            </div>
                            <h4 className="font-bold text-body-lg mb-1">{integration.name}</h4>
                            <p className="text-[11px] text-on-surface-variant mb-6 uppercase tracking-wider">
                              {isConnected ? `Connected • ${integration.details}` : integration.details}
                            </p>
                            <button
                              className={`w-full py-2 rounded-lg text-body-sm font-bold transition-colors ${
                                integration.actionType === 'connect'
                                  ? 'bg-primary text-on-primary'
                                  : 'border border-outline-variant hover:bg-surface-container-highest'
                              }`}
                            >
                              {integration.action}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Placeholder for other tabs */}
                {['api', 'alerts', 'billing'].includes(activeTab) && (
                  <section className="settings-content animate-in">
                    <header className="mb-6">
                      <h3 className="font-headline-lg text-headline-lg mb-1">
                        {tabs.find(t => t.id === activeTab)?.label || 'Settings'}
                      </h3>
                      <p className="text-on-surface-variant">This section is under construction.</p>
                    </header>
                    <div className="glass-panel p-12 rounded-xl flex flex-col items-center justify-center text-center">
                      <span className="material-symbols-outlined text-6xl text-on-surface-variant/20">construction</span>
                      <p className="text-body-lg font-medium mt-4">Coming soon</p>
                      <p className="text-body-sm text-on-surface-variant">We're working on this feature.</p>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>

          {/* Sticky Action Bar */}
          <div className="sticky bottom-8 left-0 right-0 z-10 flex justify-end gap-3 pointer-events-none">
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-6 shadow-2xl pointer-events-auto border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-body-sm font-medium text-on-surface-variant">All changes synced</span>
              </div>
              <div className="h-6 w-[1px] bg-outline-variant/30"></div>
              <div className="flex gap-2">
                <button className="px-6 py-2 rounded-lg text-body-sm font-bold border border-outline-variant hover:bg-surface-container-high transition-colors">
                  Discard
                </button>
                <button className="px-6 py-2 rounded-lg text-body-sm font-bold bg-primary text-on-primary hover:opacity-90 shadow-[0_0_15px_rgba(166,200,255,0.4)] transition-all transform active:scale-95">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30" />
        </main>
      </div>
    </>
  );
};

export default SettingsPage;