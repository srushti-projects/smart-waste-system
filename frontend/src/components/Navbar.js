import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaUserCircle, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const { user, role, logout, theme, toggleTheme } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 glass-card mx-4 mt-4 rounded-2xl flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center space-x-2 group">
        <FaLeaf className="text-2xl text-emerald-500 transition-transform group-hover:rotate-12" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          EcoClean
        </span>
      </Link>

      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-emerald-500 transition-colors">Dashboard</Link>
          {role === "citizen" && (
            <Link to="/report" className="hover:text-emerald-500 transition-colors">Report Waste</Link>
          )}
          {role === "collector" && (
            <Link to="/collector" className="hover:text-emerald-500 transition-colors">Collection Panel</Link>
          )}
          <Link to="/map" className="hover:text-emerald-500 transition-colors">Live Map</Link>
        </div>

        <div className="flex items-center space-x-4 border-l pl-6 border-emerald-500/20">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-emerald-500/10 transition-colors text-emerald-500"
            title="Toggle Theme"
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-2 group">
                <FaUserCircle size={24} className="text-emerald-500" />
                <span className="hidden sm:inline font-medium text-sm group-hover:text-emerald-500 transition-colors">
                  {user.name || "Profile"}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-red-500/10 transition-colors text-red-500"
                title="Logout"
              >
                <FaSignOutAlt size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary py-1.5 px-4 text-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;