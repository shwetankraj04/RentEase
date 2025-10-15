const listings = [
  {
    id: 1,
    title: "Modern 2BHK Apartment",
    location: "Koramangala, Bangalore",
    price: "₹25,000/month",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Cozy Studio Flat",
    location: "Powai, Mumbai",
    price: "₹18,000/month",
    image:
      "https://r1imghtlak.mmtcdn.com/95aa40ad-86df-4042-8c92-290bd5b9ec4f.png",
  },
  {
    id: 3,
    title: "Spacious 3BHK Villa",
    location: "Sector 62, Noida",
    price: "₹40,000/month",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Listings() {
  return (
    <section id="listings" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured <span className="text-[#1B365D]">Listings</span>
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Discover premium properties handpicked for you. Browse through top
          apartments, villas, and studios in India’s leading cities.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {listing.title}
                </h3>
                <p className="text-gray-600 mb-2">{listing.location}</p>
                <p className="text-[#D4AF37] font-bold text-lg mb-4">
                  {listing.price}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white py-2.5 rounded-lg hover:opacity-90 transition font-medium cursor-pointer">
                    Rent Now
                  </button>
                  <button className="flex-1 border-2 border-[#1B365D] text-[#1B365D] py-2.5 rounded-lg hover:bg-[#1B365D] hover:text-white transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="mt-14 bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition cursor-pointer">
          View All Properties
        </button>
      </div>
    </section>
  );
}
