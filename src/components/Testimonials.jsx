import { FaQuoteLeft } from "react-icons/fa";

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
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 font-sans relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#d1d5db_1px,_transparent_0)] bg-[length:20px_20px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-80 md:w-96 bg-white border border-transparent bg-clip-padding rounded-2xl p-8 flex flex-col shadow-md hover:shadow-xl duration-300 snap-center transition transform hover:-translate-y-2 group"
              style={{
                borderImage: "linear-gradient(to right, #1B365D, #2C4E80) 1",
              }}
            >
              {/* Floating Quote Icon */}
              <FaQuoteLeft className="absolute top-5 right-6 text-[#1B365D]/20 text-2xl" />

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-[#1B365D]/20"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed italic flex-1">
                “{t.quote}”
              </p>

              {/* Decorative Accent */}
              <div className="mt-6 h-1.5 w-16 bg-gradient-to-r from-[#1B365D] to-[#2C4E80] rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
