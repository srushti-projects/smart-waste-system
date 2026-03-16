import { useState } from "react";

function ReportWaste() {

  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        alert("Unable to retrieve location");
      }
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Report Garbage
      </h2>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Upload Garbage Photo
        </label>

        <input
          type="file"
          onChange={handleImageChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Location Button */}
      <div className="mb-4">
        <button
          onClick={getLocation}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Detect My Location
        </button>
      </div>

      {/* Show Location */}
      {location && (
        <p className="mb-4 text-sm text-gray-600">
          Latitude: {location.lat} | Longitude: {location.lng}
        </p>
      )}

      {/* Submit */}
      <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
        Submit Complaint
      </button>

    </div>
  );
}

export default ReportWaste;