import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ReportWaste from "./pages/ReportWaste";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectorPanel from "./pages/CollectorPanel";
import MapView from "./components/MapView";

function App() {
  const { user, role } = useAuth();
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, { ...report, id: Date.now(), status: "Pending", timestamp: new Date().toISOString() }]);
  };

  const markCollected = (id) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: "Collected" } : r));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard reports={reports} />} />
            <Route
              path="/report"
              element={role === 'citizen' ? <ReportWaste addReport={addReport} /> : <Navigate to="/login" />}
            />
            <Route
              path="/collector"
              element={role === 'collector' ? <CollectorPanel reports={reports} markCollected={markCollected} /> : <Navigate to="/login" />}
            />
            <Route
              path="/map"
              element={<MapView reports={reports} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;