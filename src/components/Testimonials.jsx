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
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Users Say
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Thousands of owners, brokers, and tenants trust our platform every
            day. Here’s what some of them have to say:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
