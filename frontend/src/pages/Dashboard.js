function Dashboard({ reports }) {

  const totalReports = reports.length;

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Municipality Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Total Complaints</h3>
          <p className="text-3xl font-bold text-green-700">
            {totalReports}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Pending Cleanup</h3>
          <p className="text-3xl font-bold text-yellow-500">
            {totalReports}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Resolved</h3>
          <p className="text-3xl font-bold text-green-500">
            0
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;