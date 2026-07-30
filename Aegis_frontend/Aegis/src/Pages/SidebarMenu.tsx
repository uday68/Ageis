import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
const links =[
    { to: "/", label: "Dashboard", icon: "dashboard" },
    { to: "/live-incidents", label: "Live Incidents", icon: "emergency" },
    { to: "/ai-investigation", label: "AI Investigation", icon: "psychology" },
    { to: "/infrastructure", label: "Infrastructure", icon: "dns" },
    { to: "/services", label: "Services", icon: "hub" },
    { to: "/logs", label: "Logs", icon: "description" },
    { to: "/metrics", label: "Metrics", icon: "monitoring" },
    { to: "/agent-memory", label: "Agent Memory", icon: "memory" },
    { to: "/reports", label: "Reports", icon: "assessment" },
    { to: "/team", label: "Team", icon: "group" },
    { to: "/settings", label: "Settings", icon: "settings" },
    { to: "/investigate", label: "Investigate Incident", icon: "search", action: true },
    
]
const SidebarMenu:React.FC=() =>{
  return (
<nav className="fixed left-0 top-0 h-full w-60 bg-surface text-primary font-body-md text-body-md shadow-sm bg-surface-container-low backdrop-blur-xl flex flex-col py-6 z-50 border-r border-surface-variant">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary font-bold" data-icon="shield">shield</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Aegis AI</h1>
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Autonomous Operations</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto flex flex-col gap-1 px-3">
        {links.map((link) => {
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer active:scale-95",
                  isActive
                    ? "text-primary bg-surface-variant/30 ring-1 ring-primary/20 border-l-2 border-primary"
                    : "text-on-surface-variant hover:bg-surface-variant/50"
                )
              }
            >
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon={link.icon}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </div>
<div className="px-4 mt-auto pt-6">
<button className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors rounded-lg py-2 flex items-center justify-center gap-2 font-body-md font-medium">
<span className="material-symbols-outlined text-[18px]">search</span>
                Investigate Incident
            </button>
</div>
</nav>
  )
}

export default SidebarMenu
