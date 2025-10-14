import React from "react";

export default function AssociatesWith() {
  const associates = [
    {
      id: 1,
      title: "BNI (Business Network International)",
      image: "https://bansodrealtors.com/wp-content/uploads/2021/05/1-1.jpg",
      description:
        "BNI is the largest and most successful business networking organization with Members and Chapters in 74+ countries.",
    },
    {
      id: 2,
      title: "RERA (Real Estate Regulatory Authority)",
      image: "https://bansodrealtors.com/wp-content/uploads/2021/05/2-1.jpg",
      description:
        "The State government notified RERA rules to bring transparency and efficiency in the real estate sector and safeguard the interest of homebuyers.",
    },
    {
      id: 3,
      title: "CGAR (Chhattisgarh Association of Realtors)",
      image: "https://bansodrealtors.com/wp-content/uploads/2021/05/3-1.jpg",
      description:
        "CGAR is a local association body of NAR-INDIA, with over 50+ members across Chhattisgarh associated with it.",
    },
    {
      id: 4,
      title: "RE/MAX India",
      image: "https://bansodrealtors.com/wp-content/uploads/2021/05/4-1.jpg",
      description:
        "India’s most reliable broker network, with more than 1700 locations nationwide offering unmatched reach and trust.",
    },
    {
      id: 5,
      title: "NAR-INDIA (National Association of Realtors)",
      image: "https://bansodrealtors.com/wp-content/uploads/2021/05/5-1.jpg",
      description:
        "NAR-INDIA encourages Realtors to maintain the highest professional and ethical standards within the real estate industry.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          RentEase’s Associates With
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {associates.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-cover rounded-t-2xl bg-white p-4"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
