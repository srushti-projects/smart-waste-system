import { FaTruck, FaCheckCircle, FaClock, FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";

function CollectorPanel({ reports, markCollected }) {
  const pendingReports = reports.filter(r => r.status === "Pending");
  const collectedReports = reports.filter(r => r.status === "Collected");

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            Collector Panel
          </h2>
          <p className="text-muted-foreground mt-2">Manage city-wide waste collection efficiently</p>
        </div>
        <div className="flex space-x-4">
          <div className="glass-card px-6 py-3 rounded-2xl flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-bold">{pendingReports.length} Pending</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-2xl flex items-center space-x-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span className="font-bold">{collectedReports.length} Collected</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pending Tasks */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center space-x-2 px-2">
            <FaClock className="text-yellow-500" />
            <span>Active Requests</span>
          </h3>
          <div className="space-y-4">
            {pendingReports.length > 0 ? (
              pendingReports.map((report) => (
                <div key={report.id} className="glass-card p-6 rounded-3xl hover:border-emerald-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                        <FaTruck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{report.wasteType} Waste</h4>
                        <p className="text-sm text-muted-foreground flex items-center space-x-1">
                          <FaMapMarkerAlt size={12} />
                          <span>{report.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-600 text-xs font-bold rounded-full uppercase">
                      {report.status}
                    </span>
                  </div>
                  
                  {report.image && (
                    <img src={report.image} alt="Evidence" className="w-full h-40 object-cover rounded-2xl mb-4 border border-emerald-500/10" />
                  )}

                  <button
                    onClick={() => markCollected(report.id)}
                    className="w-full btn-primary py-3 rounded-2xl flex items-center justify-center space-x-2 group-hover:bg-emerald-500"
                  >
                    <FaCheckCircle />
                    <span>Mark as Collected</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="glass-card p-12 rounded-3xl text-center border-dashed border-2 border-emerald-500/10 bg-emerald-500/5">
                <FaCheckCircle className="text-4xl text-emerald-500/20 mx-auto mb-2" />
                <p className="text-muted-foreground">All caught up! No pending requests.</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity / Collected */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center space-x-2 px-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>Successfully Collected</span>
          </h3>
          <div className="space-y-4">
            {collectedReports.length > 0 ? (
              collectedReports.map((report) => (
                <div key={report.id} className="glass-card p-6 rounded-3xl opacity-80 border-transparent">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
                        <FaCheckCircle size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold">{report.location}</h4>
                        <p className="text-xs text-muted-foreground">{report.wasteType} • Collected just now</p>
                      </div>
                    </div>
                    <div className="text-emerald-500 flex items-center space-x-1">
                      <span className="text-sm font-bold">+50 XP</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground p-8">No collections recorded in this session.</p>
            )}
          </div>

          <div className="mt-8 p-6 glass-card rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/10">
            <h4 className="font-bold flex items-center space-x-2 mb-2 text-emerald-700">
              <FaExclamationTriangle className="text-yellow-500" />
              <span>Safety Reminder</span>
            </h4>
            <p className="text-sm text-muted-foreground">Always wear protective gear while handling hazardous or sharp waste materials. Stay safe!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectorPanel;