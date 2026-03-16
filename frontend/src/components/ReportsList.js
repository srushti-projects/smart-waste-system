function ReportsList({ reports }) {
  return (
    <div className="max-w-5xl mx-auto mt-10">

      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Recent Garbage Reports
      </h2>

      {reports.length === 0 && (
        <p className="text-gray-500">No complaints yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">

        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg"
          >

            {report.image && (
              <img
                src={report.image}
                alt="garbage"
                className="rounded mb-3"
              />
            )}

            <p className="text-sm text-gray-600">
              <strong>Latitude:</strong> {report.lat}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Longitude:</strong> {report.lng}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Report #{index + 1}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ReportsList;