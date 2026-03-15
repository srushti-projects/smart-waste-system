import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

      <div className="flex items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to Smart Waste Management
        </h1>
      </div>

    </div>
  );
}

export default App;