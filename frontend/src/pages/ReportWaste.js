import { useState } from "react";
import { FaTrash, FaMapMarkerAlt, FaCamera, FaPaperPlane, FaCheckCircle, FaCrosshairs, FaSpinner } from "react-icons/fa";

function ReportWaste({ addReport }) {
  const [wasteType, setWasteType] = useState("Organic");
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });
        setLocation(`📍 Fixed: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        setIsDetecting(false);
      },
      (error) => {
        console.error("Error detecting location:", error);
        alert("Unable to retrieve your location. Please enter it manually.");
        setIsDetecting(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      wasteType,
      location,
      lat: coords?.lat || 19.076 + (Math.random() - 0.5) * 0.1, // Fallback to Mumbai range
      lng: coords?.lng || 72.8777 + (Math.random() - 0.5) * 0.1,
      image: image ? URL.createObjectURL(image) : null,
      status: "Pending",
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    addReport(newReport);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setWasteType("Organic");
    setLocation("");
    setCoords(null);
    setImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          Report Waste
        </h2>
        <p className="text-muted-foreground mt-2">Help us keep the city clean and green</p>
      </div>

      {submitted ? (
        <div className="glass-card p-12 rounded-3xl text-center animate-float">
          <FaCheckCircle className="text-6xl text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Report Submitted!</h3>
          <p className="text-muted-foreground mt-2">Thank you for your contribution to a cleaner environment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="flex items-center space-x-2 font-semibold">
                <FaTrash className="text-emerald-500" />
                <span>Waste Type</span>
              </label>
              <select
                className="w-full p-4 bg-secondary rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
              >
                <option>Organic</option>
                <option>Plastic</option>
                <option>Metal</option>
                <option>Electronic</option>
                <option>Hazardous</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between font-semibold">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-emerald-500" />
                  <span>Location</span>
                </div>
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  disabled={isDetecting}
                  className="text-xs flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-500/10 px-3 py-1 rounded-full font-bold disabled:opacity-50"
                >
                  {isDetecting ? <FaSpinner className="animate-spin" /> : <FaCrosshairs />}
                  <span>{isDetecting ? "Detecting..." : "Detect Device Location"}</span>
                </button>
              </label>
              <input
                type="text"
                placeholder="Enter street or landmark"
                className="w-full p-4 bg-secondary rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center space-x-2 font-semibold">
              <FaCamera className="text-emerald-500" />
              <span>Evidence (Optional)</span>
            </label>
            <div className="relative group">
              <input
                type="file"
                className="hidden"
                id="image-upload"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-emerald-500/30 rounded-2xl cursor-pointer bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-all hover:border-emerald-500"
              >
                {image ? (
                  <span className="text-emerald-600 font-medium">{image.name}</span>
                ) : (
                  <>
                    <FaCamera className="text-4xl text-emerald-500 mb-2" />
                    <span className="text-sm text-muted-foreground">Click to upload image (not required)</span>
                  </>
                )}
              </label>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center space-x-2 text-lg">
            <FaPaperPlane />
            <span>Send Request</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default ReportWaste;