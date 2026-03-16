import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView() {
  const position = [19.076, 72.8777]; // Mumbai

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Garbage Report Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;