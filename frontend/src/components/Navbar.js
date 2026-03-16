import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">

      <h1 className="font-bold text-lg">
        Smart Waste System
      </h1>

      <div className="space-x-6">

        <Link to="/">Dashboard</Link>

        <Link to="/report">Report</Link>

        <Link to="/map">Map</Link>

      </div>

    </nav>
  );
}

export default Navbar;