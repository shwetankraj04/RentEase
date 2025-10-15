export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center pt-16 lg:pt-0"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
          Find Your Perfect <span className="text-[#FBBF24]">Home</span> Today
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Discover verified listings, trusted brokers, and the easiest way to
          rent or buy your dream property — all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              const section = document.getElementById("listings");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setDropdownOpen(false); // close dropdown after clicking
              }
            }}
            className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            Explore Properties
          </button>

          <button className="border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-[#1E3A8A] px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
}
