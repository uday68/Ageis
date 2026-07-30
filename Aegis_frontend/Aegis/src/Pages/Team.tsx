import React, { useState } from "react";
import { Link } from "react-router-dom";

const Team: React.FC = () => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Sample team members data
  const members = [
    {
      name: "Elena Rodriguez",
      email: "elena.r@aegis.ai",
      role: "Admin",
      status: "On-Call",
      lastActive: "Just now",
      activity: "Investigating 'Kernel Panic' incident",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfCOIkjeQQIH1hURTMwIka1UpU-1FpPzGsBG3rEfP6cCuu17IqMa6neTKwPnLyoVToSNpg8N9GST-0SKCRD12ySJzO2ax8AbfcCnyhgWGximPUlVrmcjX3Ow9sazrTYm96Cqj4jW86hnsLfqBfDzGTWiajQBM8iAuygf7OuondqPGybZIfHqN2jCcNm8PX8Oi-mL70ESQWHRjKYO8cbL65vOPQbAN04pbFQr9ihCva1I4fijmqoZSK",
    },
    {
      name: "Marcus Chen",
      email: "m.chen@aegis.ai",
      role: "Engineer",
      status: "Active",
      lastActive: "12m ago",
      activity: "Reviewing Security Logs v2.4",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAcSvePAQNwT2ESMYbXKD5oO6EmHNft4k4rFQMq-71-eh6Rs0IIMczgx5mK6dqOvVjJhJxj6av6eqRc76UhxhH8egxj9uQUHGIHD_neeDsJbIbLtxm2CjF_OWpSD6hSc_gDbtn_r8olwt1F-R5Qn180hQ_f0w_vIKojD_PNnvOfbJPQOstSXQJFmXwFGUPCqC-0FldhO07aJcLHP2RajVBxmW3WxhwFQ9vBvgDl_RoKN7cPNxlXyNT4",
    },
    {
      name: "Sarah Jenkins",
      email: "s.jenkins@aegis.ai",
      role: "Viewer",
      status: "Offline",
      lastActive: "2h ago",
      activity: "Accessed Report: Annual Audit",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPZOJjnTH7Zi6qTPqYObmRbS036gvfTV7osxYezopPN_CcJAkHxD7udbn9cKl8TDKfy4T3ycEEG8MjB1dHdmz7nurRuQzvDIotmI5TkXOE-oCXTsgMjg4Yilz75dZpVK9eIKeIozHjovmmOZLhMrHELQOIEaoZgXHLGD3m6ZZ6WJxhdYidW44hoHeywskXayHd_cUk3JHcpCUqdw8A1TzpUY_JYpxnD_Pp1hePWSYLTiCwsrxazqG4",
    },
  ];

  // Pending invitations
  const invitations = [
    {
      email: "david.kovac@external.tech",
      invitedBy: "Elena Rodriguez",
      time: "4 hours ago",
      role: "Engineer",
    },
    {
      email: "security-audit-bot@partner.ai",
      invitedBy: "AI Autopilot",
      time: "1 day ago",
      role: "Service Account",
    },
  ];

  return (
    <>
      {/* Component‑specific styles – can be moved to a global CSS file */}
      <style>{`
        .glass-panel {
          background: rgba(24, 24, 27, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .status-glow {
          box-shadow: 0 0 8px currentColor;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #404753;
          border-radius: 10px;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
          display: inline-block;
          line-height: 1;
        }
      `}</style>

      <div className="p-margin-desktop space-y-gutter overflow-y-auto max-w-max-width mx-auto w-full">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Team Management
            </h2>
            <p className="text-on-surface-variant font-body-md mt-1">
              Manage infrastructure permissions and on-call rotations for Aegis AI units.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full font-body-md font-semibold hover:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">person_add</span>
              Invite Member
            </button>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="glass-panel p-5 rounded-xl flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-caps uppercase">
              Total Members
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-on-surface">24</span>
              <span className="text-secondary text-sm font-medium">+2 this month</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border-l-4 border-l-secondary">
            <span className="text-on-surface-variant font-label-caps uppercase">
              Currently On-Call
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-secondary">3</span>
              <span className="text-on-surface-variant text-sm font-medium">
                Rotation Alpha
              </span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-xl flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-caps uppercase">
              Average Response Time
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-on-surface">4.2m</span>
              <span className="text-primary text-sm font-medium">AI Assisted</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-xl flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-caps uppercase">
              Active Invitations
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-on-surface">5</span>
              <span className="text-on-surface-variant text-sm font-medium">
                Expiring soon
              </span>
            </div>
          </div>
        </div>

        {/* Main Table Section */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-headline-md text-headline-md">Active Personnel</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-bright rounded text-on-surface-variant">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="p-2 hover:bg-surface-bright rounded text-on-surface-variant">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-caps uppercase text-[10px] tracking-wider">
                  <th className="px-6 py-3 border-b border-outline-variant">Name</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Role</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Status</th>
                  <th className="px-6 py-3 border-b border-outline-variant">
                    Last Active (AI Context)
                  </th>
                  <th className="px-6 py-3 border-b border-outline-variant text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {members.map((member, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-surface-bright/40 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant overflow-hidden">
                          <img
                            className="w-full h-full rounded-full object-cover"
                            src={member.avatar}
                            alt={member.name}
                          />
                        </div>
                        <div>
                          <div className="text-on-surface font-medium font-body-md">
                            {member.name}
                          </div>
                          <div className="text-on-surface-variant text-xs">
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-[11px] font-bold border uppercase tracking-tighter ${
                          member.role === "Admin"
                            ? "bg-secondary/10 text-secondary border-secondary/20"
                            : member.role === "Engineer"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-surface-container-highest text-on-surface-variant border-outline-variant"
                        }`}
                      >
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            member.status === "On-Call" || member.status === "Active"
                              ? "bg-secondary status-glow"
                              : "bg-outline-variant"
                          }`}
                        ></span>
                        <span
                          className={
                            member.status === "Offline"
                              ? "text-on-surface-variant"
                              : "text-on-surface"
                          }
                        >
                          {member.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-body-md">
                          {member.lastActive}
                        </span>
                        <span
                          className={`text-[10px] ${
                            member.status === "On-Call"
                              ? "text-primary"
                              : "text-on-surface-variant italic"
                          }`}
                        >
                          {member.activity}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Invitations & Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Pending Invitations */}
          <div className="lg:col-span-2 glass-panel rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-md text-headline-md">
                Pending Invitations
              </h3>
            </div>
            <div className="p-2">
              <div className="space-y-1">
                {invitations.map((inv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 hover:bg-surface-bright/20 rounded-lg transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant text-on-surface-variant">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <div className="text-on-surface font-medium">
                          {inv.email}
                        </div>
                        <div className="text-on-surface-variant text-xs">
                          Invited by {inv.invitedBy} • {inv.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-label-caps text-on-surface-variant border border-outline-variant px-2 py-1 rounded">
                        {inv.role}
                      </span>
                      <button className="px-3 py-1 text-xs font-medium text-error hover:bg-error/10 rounded transition-all">
                        Revoke
                      </button>
                      <button className="p-1 text-on-surface-variant group-hover:text-primary">
                        <span className="material-symbols-outlined text-[18px]">
                          content_copy
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <div className="glass-panel rounded-xl overflow-hidden relative">
            <div className="relative z-10 px-6 py-4 border-b border-outline-variant bg-surface-container-lowest/80">
              <h3 className="font-headline-md text-headline-md flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                AI Team Insights
              </h3>
            </div>
            <div className="relative z-10 p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-label-caps text-primary uppercase text-[10px]">
                  Optimization Alert
                </p>
                <p className="text-body-md text-on-surface">
                  The European shift currently lacks a Senior Engineer with 'Network
                  Protocol' expertise. Recommendation: Promote Marcus Chen to On-Call
                  for the next 4 hours.
                </p>
              </div>
              <div className="h-[1px] bg-outline-variant"></div>
              <div className="space-y-2">
                <p className="text-label-caps text-secondary uppercase text-[10px]">
                  Efficiency Metric
                </p>
                <p className="text-body-md text-on-surface">
                  On-call handovers have improved by{" "}
                  <span className="text-secondary font-bold">18%</span> since the
                  implementation of AI Incident Summaries.
                </p>
              </div>
              <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-body-md font-semibold hover:bg-primary/5 transition-all mt-4">
                View Full Organizational Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;