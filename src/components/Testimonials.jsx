function Testimonials() {
  const testimonials = [
    {
      name: "Amit Verma",
      role: "Property Owner, Delhi",
      quote:
        "Posting my property here was effortless. I found verified tenants within a week and the rent collection process is so smooth!",
      img: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9670.jpg",
    },
    {
      name: "Ritu Sharma",
      role: "Broker, Mumbai",
      quote:
        "The platform saves me hours every week! Managing clients and listings together has made my work 10x more efficient.",
      img: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Rahul Singh",
      role: "Tenant, Bengaluru",
      quote:
        "I could pay my rent securely in seconds. The reminders and receipts system make it stress-free every month.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    // Add more cards if needed
  ];

  return (
    <section className="py-20 bg-gray-50 font-sans" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Users Say
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Thousands of owners, brokers, and tenants trust our platform every
            day. Here’s what some of them have to say:
          </p>
        </div>

        {/* Scrollable Testimonials */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 bg-white shadow-lg rounded-2xl p-8 flex flex-col transition transform hover:-translate-y-1 hover:shadow-2xl duration-300 snap-center"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gradient-to-r from-[#1B365D] to-[#2C4E80]"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                “{t.quote}”
              </p>

              {/* Accent line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#1B365D] to-[#2C4E80] rounded-full mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
