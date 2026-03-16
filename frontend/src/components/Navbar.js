import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-green-700">
        Smart Waste
      </h1>

      <div className="space-x-6 font-medium">

        <Link
          to="/"
          className="hover:text-green-700"
        >
          Dashboard
        </Link>

        <Link
          to="/report"
          className="hover:text-green-700"
        >
          Report
        </Link>

        <Link
          to="/map"
          className="hover:text-green-700"
        >
          Map
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;