import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center pt-16 lg:pt-0 overflow-hidden"
    >
      {/* Background slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

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
              }
            }}
            className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
}
