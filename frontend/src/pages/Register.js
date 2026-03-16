import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaLock, FaEnvelope, FaTruck, FaUsers } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, email }, role);
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-3xl animate-float">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            Create Account
          </h2>
          <p className="text-muted-foreground mt-2">Start your sustainable journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setRole("citizen")}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                role === "citizen"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                  : "border-transparent bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              <FaUsers />
              <span>Citizen</span>
            </button>
            <button
              type="button"
              onClick={() => setRole("collector")}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                role === "collector"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                  : "border-transparent bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              <FaTruck />
              <span>Collector</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-3 rounded-xl">
            Register
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="text-emerald-500 font-semibold hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;