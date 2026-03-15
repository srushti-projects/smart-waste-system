function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold">
          Smart Waste System
        </h1>

        <div className="space-x-6">
          <button className="hover:text-green-200">Home</button>
          <button className="hover:text-green-200">Report Waste</button>
          <button className="hover:text-green-200">Dashboard</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;