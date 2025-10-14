export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
          Find Your Perfect <span className="text-blue-400">Home</span> Today
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Discover verified listings, trusted brokers, and the easiest way to
          rent or buy your dream property — all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition cursor-pointer">
            Explore Properties
          </button>
          <button className="bg-white text-blue-700 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-semibold shadow-lg transition cursor-pointer">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
}
