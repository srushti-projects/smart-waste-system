import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ reports }) {
  const center = [19.076, 72.8777];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((report, index) => (
        <Marker key={index} position={[report.lat, report.lng]}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold mb-2">Garbage Report</p>

              {report.image && (
                <img
                  src={report.image}
                  alt="garbage"
                  style={{
                    width: "120px",
                    borderRadius: "8px"
                  }}
                />
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;