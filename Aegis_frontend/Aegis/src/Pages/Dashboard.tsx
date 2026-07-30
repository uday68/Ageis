const Dashboard:React.FC = () => {
	return (
		<>
		<style>{`
			body { background-color: #131315; color: #e5e1e4; }
			.glass-panel {
				background-color: rgba(24, 24, 27, 0.7);
				backdrop-filter: blur(12px);
				-webkit-backdrop-filter: blur(12px);
				border: 1px solid #404753;
			}
			.ai-glow {
				box-shadow: 0 0 15px rgba(49, 146, 252, 0.3);
				border-color: #3192fc;
			}
			.critical-glow {
				box-shadow: 0 0 15px rgba(255, 180, 171, 0.2);
				border-color: #ffb4ab;
			}
			.ambient-shadow { box-shadow: 0px 4px 20px rgba(0,0,0,0.5); }
			
			/* Minimalist Scrollbar */
			::-webkit-scrollbar { width: 6px; height: 6px; }
			::-webkit-scrollbar-track { background: transparent; }
			::-webkit-scrollbar-thumb { background: #353437; border-radius: 0.75rem; }
			::-webkit-scrollbar-thumb:hover { background: #404753; }
		`}</style>
    
<main className="mt-3 flex-1 overflow-y-auto p-gutter md:p-margin-desktop lg:p-margin-desktop-lg surface ">
<div className="mb-6 flex justify-between items-end gap-4">
<div>
<h2 className="font-display text-display text-on-surface">Command Center</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time system observability and autonomous response.</p>
</div>
<div className="flex gap-2">
<span className="flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-1 rounded">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Last updated: Just now
</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-gutter">
<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">Active Incidents</span>
<span className="material-symbols-outlined text-error text-[16px]">warning</span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">4</span>
<div className="w-12 h-6 flex items-end gap-0.5">
<div className="w-1/4 bg-error/40 h-1/2 rounded-t-sm"></div>
<div className="w-1/4 bg-error/60 h-3/4 rounded-t-sm"></div>
<div className="w-1/4 bg-error/80 h-full rounded-t-sm"></div>
<div className="w-1/4 bg-error h-1/2 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow critical-glow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">Critical Alerts</span>
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-error">2</span>
<div className="w-12 h-6 flex items-end gap-0.5">
<div className="w-1/4 bg-error/20 h-1/4 rounded-t-sm"></div>
<div className="w-1/4 bg-error/40 h-1/3 rounded-t-sm"></div>
<div className="w-1/4 bg-error/60 h-2/3 rounded-t-sm"></div>
<div className="w-1/4 bg-error h-full rounded-t-sm"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">System Health</span>
<span className="material-symbols-outlined text-secondary text-[16px]">health_and_safety</span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">98%</span>
<div className="w-12 h-6 flex items-end gap-0.5">
<div className="w-1/5 bg-secondary h-full rounded-t-sm"></div>
<div className="w-1/5 bg-secondary h-[95%] rounded-t-sm"></div>
<div className="w-1/5 bg-secondary h-full rounded-t-sm"></div>
<div className="w-1/5 bg-secondary/60 h-[80%] rounded-t-sm"></div>
<div className="w-1/5 bg-secondary h-[98%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">Services</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">hub</span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">124</span>
<span className="font-body-sm text-body-sm text-secondary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 3</span>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow ai-glow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">AI Running</span>
<span className="material-symbols-outlined text-primary-container text-[16px]">psychology</span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-primary-container">3</span>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" style={{ animationDelay: "0.2s" }}></span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" style={{ animationDelay: "0.4s" }}></span>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex flex-col justify-between ambient-shadow">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">MTTR</span>
<span className="material-symbols-outlined text-secondary text-[16px]">timer</span>
</div>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">14m</span>
<span className="font-body-sm text-body-sm text-secondary flex items-center">-2m</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter h-[calc(100vh-280px)]min-h-[500px]">
<div className="lg:col-span-2 flex flex-col gap-unit">
<div className="flex justify-between items-center mb-2 px-1">
<h3 className="font-headline-md text-headline-md text-on-surface">Incident Feed</h3>
<button className="font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">filter_list</span> Filter
</button>
</div>
<div className="flex-1 overflow-y-auto space-y-3 pr-2">

<div className="glass-panel rounded-xl p-4 critical-glow border-l-4 border-l-error">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<span className="bg-error/10 text-error px-2 py-0.5 rounded font-label-caps text-label-caps border border-error/20">CRITICAL</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">ID: INC-9824 • 2m ago</span>
</div>
<div className="flex gap-2">
<button className="bg-surface-variant hover:bg-surface-bright text-on-surface font-label-caps text-label-caps px-3 py-1 rounded border border-outline-variant transition-colors">Acknowledge</button>
</div>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Database Connection Pool Exhaustion</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Primary PostgreSQL cluster showing 100% connection utilization. Spiking error rates on User Authentication service.</p>
<div className="bg-surface-container rounded p-3 font-code-md text-code-md text-on-surface-variant mb-3 border border-outline-variant/50">
<div>[FATAL] connection to server at "db-primary.prod.internal", port 5432 failed: FATAL: remaining connection slots are reserved for non-replication superuser connections</div>
</div>
<div className="flex items-center gap-3 mt-4 pt-3 border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-primary-container border border-surface flex items-center justify-center"><span className="material-symbols-outlined text-[12px] text-on-primary-container">psychology</span></div>
</div>
<span className="font-body-sm text-body-sm text-primary">AI Investigation running...</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 border-l-4 border-l-tertiary">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded font-label-caps text-label-caps border border-tertiary/20">WARNING</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">ID: INC-9823 • 15m ago</span>
</div>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">API Gateway Latency Spike</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-3">P99 latency on /api/v2/checkout increased from 120ms to 850ms. Alert threshold crossed.</p>
<div className="flex items-center gap-3 mt-2 pt-3 border-t border-outline-variant/30">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Auto-scaled replica count to mitigate.</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col h-full ai-glow relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-2 mb-4 relative z-10">
<span className="material-symbols-outlined text-primary-container">psychology</span>
<h3 className="font-headline-md text-headline-md text-on-surface">AI Co-pilot Analysis</h3>
</div>
<div className="bg-surface-container/50 border border-outline-variant rounded p-3 mb-4 relative z-10">
<div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Target</div>
<div className="font-code-md text-code-md text-on-surface">INC-9824: DB Conn Pool</div>
</div>
<div className="flex-1 overflow-y-auto relative z-10">
<div className="relative border-l border-outline-variant ml-3 space-y-6 pb-4">
<div className="relative pl-6">
<span className=" top-1 w-4 h-4 rounded-full bg-secondary border-4 border-surface"></span>
<div className="font-label-caps text-label-caps text-secondary mb-1">Log Analysis Agent • Complete</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Scanned 4.2M logs. Identified spike in slow queries originating from 'ReportingService' impacting primary DB.</p>
</div>
<div className="relative pl-6">
<span className="absolute-left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-surface"></span>
<div className="font-label-caps text-label-caps text-secondary mb-1">Metrics Agent • Complete</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Correlated CPU spike on DB cluster (95%) with connection queue depth (1000+).</p>
</div>
<div className="relative pl-6">
<span className="absolute-left-[9px] top-1 w-4 h-4 rounded-full bg-primary-container border-4 border-surface animate-pulse"></span>
<div className="font-label-caps text-label-caps text-primary-container mb-1 flex items-center gap-2">
Correlation Agent • Running
<span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
</div>
<div className="bg-surface-container rounded p-2 mt-2 font-code-md text-code-md text-on-surface-variant text-[11px]">
&gt; Cross-referencing Git commits...<br/>
&gt; Fetching PR #4092 metadata...
</div>
</div>
<div className="relative pl-6 opacity-50">
<span className="absolute-left-[9px] top-1 w-4 h-4 rounded-full bg-surface-variant border-4 border-surface"></span>
<div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Root Cause Agent • Pending</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Awaiting correlation data to formulate hypothesis.</p>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant relative z-10">
<button className="w-full bg-transparent border border-primary text-primary font-label-caps text-label-caps py-2 rounded flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[16px]">stop_circle</span> Halt Investigation
</button>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</main>
		</>
  )
}

export default Dashboard
