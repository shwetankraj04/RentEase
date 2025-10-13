export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
            alt="About RentEase"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About RentEase
          </h2>
          <p className="text-gray-600 mb-4">
            At RentEase, our mission is to simplify the rental experience for
            everyone. Whether you are a tenant, owner, or broker, we provide
            seamless solutions to manage properties, pay rent, and explore
            packages that suit your needs.
          </p>
          <p className="text-gray-600 mb-4">
            Our platform combines technology with ease of use, ensuring a smooth
            journey from searching properties to managing payments — all in one
            place. We focus on providing transparency, real-time updates, and
            secure transactions so that users can have peace of mind while
            finding or listing properties.
          </p>
          <p className="text-gray-600 mb-6">
            With RentEase, you can explore verified listings, connect directly
            with property owners, and benefit from tailored services for
            different types of properties, including residential, commercial,
            PG/co-living, and plots. Our goal is to make property management
            intuitive, efficient, and stress-free.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
