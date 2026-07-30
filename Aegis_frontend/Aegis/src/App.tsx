import { Routes, Route, Outlet } from "react-router-dom";
import SidebarMenu from "./Pages/SidebarMenu";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import LiveIncidents from "./Pages/LiveIncidents";
import AgentMemory from "./Pages/AgentMemory";
import Settings from "./Pages/Settings";
import Metrics from "./Pages/Metrics";
import Team from "./Pages/Team";
import AIInvestigation from "./Pages/AIInvestigation";
import Infrastructure from "./Pages/Infrastructure";
import Services from "./Pages/Services";
import Logs from "./Pages/Logs";
import Reports from "./Pages/Reports";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/SignUp";
import Verification from "./Pages/Authentication/Verification";
import "./App.css";
import LandingPage from "./Pages/LandingPage";

// Layout component that includes the sidebar and header
const Layout = () => {
  return (
    <div className="bg-background text-on-background min-h-screen overflow-hidden">
      <SidebarMenu />
      <Header />
      <div className="ml-64 p-4 md:p-6 lg:p-8 flex-1 flex flex-col min-w-0">
        <Outlet /> {/* This is where nested route content will render */}
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Public routes – no layout */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verification />} />

      {/* Protected routes with layout */}
      <Route element={<Layout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
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
      </Route>
    </Routes>
  );
}

export default App;