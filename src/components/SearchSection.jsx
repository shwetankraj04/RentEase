import { useState } from "react";

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
    <section className="relative z-20 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Unified Box */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition transform hover:-translate-y-1 w-4/5 mx-auto">
          {/* Category Buttons (Scrollable on Mobile) */}
          <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full font-medium transition ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs & Button */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {/* Location Dropdown */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
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
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
