import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "50+",
      label: "Projects Marketed",
    },
    {
      number: "2.5 Lakh+",
      label: "Sq. Ft. Property Ventured",
    },
    {
      number: "20+",
      label: "Projects Underway",
    },
    {
      number: "150+",
      label: "Joint Ventures Completed",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Achievemets
        </h2>
        <p className="text-gray-600 text-2xl max-w-3xl mx-auto mb-12">
          One of the leading real estate companies. Our mission is to give
          direction to your investment dreams, turning them into a memorable
          experience for a lifetime.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
