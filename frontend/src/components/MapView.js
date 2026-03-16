import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaTrash, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

// Fix for default marker icons in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapView({ reports }) {
  const center = reports.length > 0 && reports[0].lat ? [reports[0].lat, reports[0].lng] : [19.076, 72.8777]; // Default Mumbai

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          Live Recovery Map
        </h2>
        <p className="text-muted-foreground mt-2">Visualize real-time cleanup efforts across the city</p>
      </div>

      <div className="glass-card p-4 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "600px", width: "100%", borderRadius: "2rem" }}
          className="z-0"
        >
          <TileLayer
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {reports.map((report) => (
            report.lat && report.lng && (
              <Marker key={report.id} position={[report.lat, report.lng]}>
                <Popup className="custom-popup">
                  <div className="p-2 min-w-[200px]">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`p-2 rounded-lg ${report.status === 'Collected' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                        <FaTrash />
                      </div>
                      <span className="font-bold text-lg">{report.wasteType}</span>
                    </div>
                    
                    {report.image && (
                      <img
                        src={report.image}
                        alt="Garbage location"
                        className="w-full h-32 object-cover rounded-xl mb-3 border border-emerald-500/10 shadow-sm"
                      />
                    )}

                    <div className="space-y-2 text-sm">
                      <p className="flex items-center space-x-2 text-muted-foreground">
                        <FaMapMarkerAlt size={12} className="text-emerald-500" />
                        <span>{report.location}</span>
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-emerald-500/10">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${report.status === 'Collected' ? 'text-emerald-500' : 'text-yellow-500'}`}>
                          {report.status === 'Collected' ? <span className="flex items-center space-x-1"><FaCheckCircle /> <span>Resolved</span></span> : 'Reported'}
                        </span>
                        <span className="text-[10px] text-muted-foreground italic">2m ago</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
        
        {/* Map Legend Overlay */}
        <div className="absolute bottom-10 left-10 z-[1000] glass-card p-4 rounded-2xl flex flex-col space-y-3 shadow-xl border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-bold">Resolved Area</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            <span className="text-xs font-bold">Pending Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;