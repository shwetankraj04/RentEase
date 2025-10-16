import { useState, useRef, useEffect } from "react";
import SearchSection from "./SearchSection";
import SearchList from "./SearchList";

const allListings = [
  {
    id: 1,
    title: "Modern 2BHK Apartment",
    location: "Civil Lines, Raipur",
    price: "₹25,000/month",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
    category: "Buy",
  },
  {
    id: 2,
    title: "Cozy Studio Flat",
    location: "Shankar Nagar, Raipur",
    price: "₹18,000/month",
    image:
      "https://r1imghtlak.mmtcdn.com/95aa40ad-86df-4042-8c92-290bd5b9ec4f.png",
    category: "Rent",
  },
  {
    id: 3,
    title: "Spacious 3BHK Villa",
    location: "Naya Raipur, Raipur",
    price: "₹40,000/month",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    category: "Buy",
  },
  {
    id: 4,
    title: "Luxury 4BHK Penthouse",
    location: "Dhurva, Raipur",
    price: "₹65,000/month",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    category: "Buy",
  },
  {
    id: 5,
    title: "Elegant 1BHK Apartment",
    location: "Pandri, Raipur",
    price: "₹15,000/month",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
    category: "Rent",
  },
  {
    id: 6,
    title: "Modern 3BHK Independent House",
    location: "Geetanjali Nagar, Raipur",
    price: "₹35,000/month",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9c6eb05?auto=format&fit=crop&w=800&q=60",
    category: "Buy",
  },
];

export default function SearchAndListings() {
  const [filteredListings, setFilteredListings] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  const handleSearch = (filters) => {
    const results = allListings.filter((listing) => {
      const matchCategory = filters.category
        ? listing.category === filters.category
        : true;
      const matchLocation = filters.location
        ? listing.location.includes(filters.location)
        : true;
      const matchQuery = filters.query
        ? listing.title.toLowerCase().includes(filters.query.toLowerCase())
        : true;
      return matchCategory && matchLocation && matchQuery;
    });

    setFilteredListings(results);
    setShowResults(true);
  };

  // Scroll to results when showResults becomes true
  useEffect(() => {
    if (showResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResults]);

  return (
    <div>
      <SearchSection onSearch={handleSearch} />

      {showResults && (
        <div ref={resultsRef} className="mt-10">
          <SearchList listings={filteredListings} />
        </div>
      )}
    </div>
  );
}
