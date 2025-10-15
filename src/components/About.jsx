export default function About() {
  return (
    <section className="bg-gray-50 py-20 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B365D] text-center mb-12 leading-snug">
          About RentEase
        </h2>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60"
              alt="About RentEase"
              className="rounded-3xl shadow-xl w-full max-h-[450px] object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              At RentEase, our mission is to simplify the rental experience for
              everyone. Whether you are a tenant, owner, or broker, we provide
              seamless solutions to manage properties, pay rent, and explore
              packages that suit your needs.
            </p>

            <p className="mb-4">
              Our platform combines technology with ease of use, ensuring a
              smooth journey from searching properties to managing payments —
              all in one place. We focus on providing transparency, real-time
              updates, and secure transactions so that users can have peace of
              mind while finding or listing properties.
            </p>

            {/* <p className="mb-6">
              With RentEase, you can explore verified listings, connect directly
              with property owners, and benefit from tailored services for
              different types of properties, including residential, commercial,
              PG/co-living, and plots. Our goal is to make property management
              intuitive, efficient, and stress-free.
            </p> */}

            <button className="bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white px-7 py-2.5 rounded-full font-semibold text-base hover:opacity-90 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
