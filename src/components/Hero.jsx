function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 mt-20">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Find Your Perfect <span className="text-blue-600">Home</span> Today
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Discover rental homes, apartments, and properties that fit your needs.
          Pay rent, post properties, or explore packages for owners and brokers
          — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/house-searching-concept-illustration_114360-4779.jpg?t=st=1728759602~exp=1728763202~hmac=a7b9c7b5bda3162a9075b6b93d21fbd0c7016b8e5aab13aa71d0d7d65d5f5404&w=740"
          alt="Hero illustration"
          className="w-4/5 md:w-full max-w-md"
        />
      </div>
    </section>
  );
}

export default Hero;
