import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet.heat";

function HeatmapLayer({ reports }) {
  const map = useMap();

  useEffect(() => {
    if (!reports.length) return;

    const heatData = reports.map((r) => [r.lat, r.lng, 0.5]);

    const heat = L.heatLayer(heatData, {
      radius: 25,
      blur: 20,
      maxZoom: 17,
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [reports, map]);

  return null;
}

function MapView({ reports }) {
  const center = [19.076, 72.8777]; // Mumbai

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Heatmap Layer */}
      <HeatmapLayer reports={reports} />

      {/* Markers */}
      {reports.map((report, index) => (
        <Marker key={index} position={[report.lat, report.lng]}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold mb-2">Garbage Report</p>

              {report.image && (
                <img
                  src={report.image}
                  alt="garbage"
                  style={{ width: "120px", borderRadius: "8px" }}
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