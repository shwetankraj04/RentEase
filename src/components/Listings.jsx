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
    <section id="listings" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Featured Listings
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {listing.title}
                </h3>
                <p className="text-gray-600 mb-1">{listing.location}</p>
                <p className="text-blue-600 font-semibold">{listing.price}</p>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Rent Now
                </button>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ml-2">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          View All Properties
        </button>
      </div>
    </section>
  );
}
