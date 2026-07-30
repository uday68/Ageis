import SidebarMenu from "./Pages/SidebarMenu";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import LiveIncidents from "./Pages/LiveIncidents";
import { Routes, Route } from "react-router-dom";
import AgentMemory from "./Pages/AgentMemory";
import Settings from "./Pages/Settings";
import Metrics from "./Pages/Metrics";
import Team from "./Pages/Team";
import AIInvestigation from "./Pages/AIInvestigation";
import Infrastructure from "./Pages/Infrastructure";
import Services from "./Pages/Services";
import Logs from "./Pages/Logs";
import Reports from "./Pages/Reports";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen overflow-hidden" >
      <SidebarMenu />
      <Header />
      <div className="ml-64 p-4 md:p-6 lg:p-8 flex-1 flex flex-col min-w-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live-incidents" element={<LiveIncidents />} />
          <Route path="/ai-investigation" element={<AIInvestigation />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/agent-memory" element={<AgentMemory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
