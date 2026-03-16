import { FaTrash, FaCheckCircle, FaExclamationTriangle, FaLeaf, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { useAuth } from "../context/AuthContext";

function Dashboard({ reports }) {
  const { user, role } = useAuth();
  const totalReports = reports.length;
  const pendingReports = reports.filter(r => r.status === "Pending").length;
  const collectedReports = reports.filter(r => r.status === "Collected").length;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-12 text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
            <FaLeaf className="text-emerald-300" />
            <span>Pioneering Sustainable Urban Living</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hello, <span className="text-emerald-300">{user?.name || "Eco Warrior"}</span>! <br />
            Ready to make a difference?
          </h1>
          <p className="text-xl text-emerald-50 opacity-90 mb-8">
            Your contribution today helps build a cleaner, greener tomorrow. 
            {role === 'citizen' ? " Report waste in your area and earn rewards." : " Efficiently manage collections and optimize routes."}
          </p>
          <div className="flex space-x-4">
            {role === 'citizen' && (
              <a href="/report" className="px-8 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-white/20">
                Report Waste Now
              </a>
            )}
            <a href="/map" className="px-8 py-3 bg-emerald-500/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-emerald-500/30 transition-all">
              View Activity Map
            </a>
          </div>
        </div>
        {/* Abstract shapes for visual flair */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -ml-20 -mb-20 w-60 h-60 bg-teal-500/20 rounded-full blur-2xl" />
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<FaChartLine className="text-emerald-500" />} 
          label="Total Activity" 
          value={totalReports} 
          subText="Reports submitted" 
        />
        <StatCard 
          icon={<FaExclamationTriangle className="text-yellow-500" />} 
          label="Pending Tasks" 
          value={pendingReports} 
          subText="Awaiting collection" 
          color="yellow"
        />
        <StatCard 
          icon={<FaCheckCircle className="text-teal-500" />} 
          label="Resolved" 
          value={collectedReports} 
          subText="Successfully cleaned" 
          color="teal"
        />
        <StatCard 
          icon={<FaLeaf className="text-emerald-600" />} 
          label="Impact Score" 
          value={collectedReports * 50} 
          subText="CO2 offset points" 
          suffix=" XP"
        />
      </section>

      {/* Recent Activity Feature */}
      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold flex items-center space-x-2">
              <FaMapMarkerAlt className="text-emerald-500" />
              <span>Community Impact</span>
            </h3>
            <button className="text-emerald-500 font-semibold text-sm hover:underline">View All Notifications</button>
          </div>
          <div className="space-y-6">
            {reports.slice(0, 3).map((report, i) => (
              <div key={i} className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-secondary/50 transition-all border border-transparent hover:border-emerald-500/10">
                <div className={`p-4 rounded-2xl ${report.status === 'Collected' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                  <FaTrash size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{report.wasteType} Waste detected</h4>
                  <p className="text-muted-foreground">{report.location}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${report.status === 'Collected' ? 'bg-emerald-500/20 text-emerald-600' : 'bg-yellow-500/20 text-yellow-600'}`}>
                    {report.status}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2">Just now</p>
                </div>
              </div>
            ))}
            {reports.length === 0 && (
              <div className="text-center py-12 text-muted-foreground italic">
                No recent activity. Be the first to report!
              </div>
            )}
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Green Rewards</h3>
            <p className="opacity-90 mb-6">You're in the top 15% of contributors this month. Keep it up to unlock the "Eco Legend" badge!</p>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer">
              <h4 className="font-bold">Next Milestone</h4>
              <p className="text-sm opacity-80">500 points to unlock Amazon Voucher</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value, subText, color = "emerald", suffix = "" }) {
  return (
    <div className="glass-card p-8 rounded-3xl hover:translate-y-[-5px] transition-all duration-300">
      <div className="p-4 bg-secondary rounded-2xl inline-block mb-4">
        {icon}
      </div>
      <p className="text-muted-foreground font-medium text-sm mb-1">{label}</p>
      <h3 className="text-4xl font-extrabold mb-2">
        <CountUp end={value} duration={2} />{suffix}
      </h3>
      <p className="text-xs font-semibold text-emerald-600">{subText}</p>
    </div>
  );
}

export default Dashboard;