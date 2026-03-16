import ReportsList from "./components/ReportsList";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ReportWaste from "./pages/ReportWaste";
import MapView from "./components/MapView";
import Dashboard from "./pages/Dashboard";

function App() {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, report]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Dashboard reports={reports} />

      <ReportWaste addReport={addReport} />

      <div className="max-w-4xl mx-auto mt-10">
        <MapView reports={reports} />
      </div>
      <ReportsList reports={reports} />
    </div>
  );
}

export default App;