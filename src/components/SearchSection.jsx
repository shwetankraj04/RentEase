import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchSection({ onSearch }) {
  const [category, setCategory] = useState("Buy");
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    query: "",
  });

  const categories = [
    "Buy",
    "Rent",
    "New Launch",
    "Commercial",
    "PG/Co-Living",
    "Plots/Land",
    "Projects",
  ];

  const locations = [
    "Civil Lines",
    "Shankar Nagar",
    "Naya Raipur",
    "Dhurva",
    "Pandri",
    "Geetanjali Nagar",
    "Banjari",
    "Mowa",
    "Fafadih",
    "Mana",
  ];

  const propertyTypes = ["Apartment", "Villa", "Independent House", "Plot"];
  const priceRanges = ["< ₹50L", "₹50L–₹1Cr", "₹1Cr–₹2Cr", "> ₹2Cr"];
  const bedroomOptions = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

  const handleInputChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="relative z-20 mt-10 md:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8 w-full mx-auto">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  category === cat
                    ? "bg-[#1B365D] text-white border-[#1B365D]"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Filters Row */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-between">
            <select
              value={filters.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="w-full md:w-[18%] px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-[#1B365D] focus:outline-none"
            >
              <option value="">Location</option>
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={filters.propertyType}
              onChange={(e) =>
                handleInputChange("propertyType", e.target.value)
              }
              className="w-full md:w-[18%] px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-[#1B365D] focus:outline-none"
            >
              <option value="">Property Type</option>
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            <select
              value={filters.priceRange}
              onChange={(e) => handleInputChange("priceRange", e.target.value)}
              className="w-full md:w-[18%] px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-[#1B365D] focus:outline-none"
            >
              <option value="">Price Range</option>
              {priceRanges.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>

            <select
              value={filters.bedrooms}
              onChange={(e) => handleInputChange("bedrooms", e.target.value)}
              className="w-full md:w-[18%] px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-[#1B365D] focus:outline-none"
            >
              <option value="">Bedrooms</option>
              {bedroomOptions.map((room) => (
                <option key={room}>{room}</option>
              ))}
            </select>

            <input
              type="text"
              value={filters.query}
              onChange={(e) => handleInputChange("query", e.target.value)}
              placeholder="Search for projects or localities..."
              className="w-full md:flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-[#1B365D] focus:outline-none"
            />

            <button
              onClick={() => onSearch({ category, ...filters })}
              className="flex items-center justify-center gap-1 bg-[#1B365D] hover:bg-[#2C4E80] text-white px-6 py-2 rounded-md text-sm font-medium shadow-md transition"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
