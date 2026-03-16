import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ReportWaste from "./pages/ReportWaste";
import Dashboard from "./pages/Dashboard";
import MapView from "./components/MapView";
import ReportsList from "./components/ReportsList";

function App() {

  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, report]);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard reports={reports} />}
        />

        <Route
          path="/report"
          element={<ReportWaste addReport={addReport} />}
        />

        <Route
          path="/map"
          element={
            <>
              <div className="max-w-4xl mx-auto mt-10">
                <MapView reports={reports} />
              </div>

              <ReportsList reports={reports} />
            </>
          }
        />

      </Routes>

    </div>
  );
}

export default App;