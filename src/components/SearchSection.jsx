import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchSection() {
  const [category, setCategory] = useState("Buy");
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");

  const categories = [
    "Buy",
    "Rent",
    "New Launch",
    "Commercial",
    "PG/Co-Living",
    "Plots/Land",
    "Projects",
  ];
  const locations = ["Bangalore", "Mumbai", "Delhi", "Noida", "Pune"];

  const handleSearch = () => {
    alert(`Searching for ${query} in ${location} under ${category}`);
  };

  return (
    <section className="relative z-20 mt-10 md:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Search Container */}
        <div className="bg-[#0F172A]/90 backdrop-blur-md text-white rounded-3xl p-8 md:p-10 shadow-2xl border border-[#1E3A8A]/40 w-11/12 mx-auto transform hover:-translate-y-1 transition">
          {/* Category Buttons */}
          <div className="flex gap-3 md:gap-5 mb-8 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all ${
                  category === cat
                    ? "bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-lg"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Location Dropdown */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-white/10 text-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc} className="text-gray-900">
                  {loc}
                </option>
              ))}
            </select>

            {/* Search Box */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for properties, localities, projects..."
              className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white/10 text-gray-100 border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg hover:shadow-blue-500/30"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
