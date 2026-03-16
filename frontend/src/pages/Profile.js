import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaEnvelope, FaShieldAlt, FaPallet, FaMoon, FaSun, FaEdit, FaCheck } from "react-icons/fa";

function Profile() {
  const { user, role, setUser, theme, toggleTheme } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleSave = () => {
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Basic Stats */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="w-24 h-24 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-emerald-500 font-medium capitalize">{role}</p>
            <div className="mt-6 pt-6 border-t border-emerald-500/10 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-500">12</p>
                <p className="text-xs text-muted-foreground">Reports</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-500">450</p>
                <p className="text-xs text-muted-foreground">Points</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-bold flex items-center space-x-2">
              <FaPallet className="text-emerald-500" />
              <span>Theme Settings</span>
            </h3>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-all"
            >
              <span className="capitalize">{theme} Mode</span>
              {theme === "light" ? <FaMoon className="text-emerald-500" /> : <FaSun className="text-yellow-500" />}
            </button>
          </div>
        </div>

        {/* Right Column: Edit Details */}
        <div className="md:col-span-2">
          <div className="glass-card p-8 rounded-3xl h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Personal Information</h3>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all ${
                  isEditing 
                    ? "bg-emerald-500 text-white border-emerald-500" 
                    : "border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
                }`}
              >
                {isEditing ? <FaCheck /> : <FaEdit />}
                <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
                  <FaUser className="text-emerald-500" />
                  <span>Full Name</span>
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className="w-full p-4 bg-secondary rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                ) : (
                  <p className="p-4 bg-secondary/50 rounded-2xl">{user?.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
                  <FaEnvelope className="text-emerald-500" />
                  <span>Email Address</span>
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    className="w-full p-4 bg-secondary rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                ) : (
                  <p className="p-4 bg-secondary/50 rounded-2xl">{user?.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
                  <FaShieldAlt className="text-emerald-500" />
                  <span>Account Type</span>
                </label>
                <p className="p-4 bg-secondary/50 rounded-2xl capitalize">{role}</p>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <h4 className="font-bold text-emerald-700">Green Status</h4>
              <p className="text-sm text-emerald-600/80 mt-1">You've saved 24kg of CO2 this month!</p>
              <div className="mt-4 h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;