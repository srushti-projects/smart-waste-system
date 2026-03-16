function Dashboard({ reports }) {

  const totalReports = reports.length;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">

      {/* Hero Section */}
      <div className="bg-green-700 text-white p-10 rounded-xl shadow-lg text-center mb-10">

        <h1 className="text-4xl font-bold mb-3">
          Smart Waste Management System
        </h1>

        <p className="text-lg opacity-90">
          Help keep the city clean by reporting garbage locations in real-time.
        </p>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">

          <h3 className="text-gray-600 mb-2">
            Total Complaints
          </h3>

          <p className="text-4xl font-bold text-green-700">
            {totalReports}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">

          <h3 className="text-gray-600 mb-2">
            Pending Cleanup
          </h3>

          <p className="text-4xl font-bold text-yellow-500">
            {totalReports}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">

          <h3 className="text-gray-600 mb-2">
            Resolved Cases
          </h3>

          <p className="text-4xl font-bold text-green-500">
            0
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;