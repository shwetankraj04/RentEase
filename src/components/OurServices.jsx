import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function OurServices() {
  const services = [
    "Investment Opportunity",
    "Lands & Plots Buy, Sell, & Rent",
    "Redevelopment, Research & Valuation",
    "Legal Assistance, Financial Advisory",
    "Other relevant Services like Architect, Interiors, Vastu, Sub Contracts, turnkey solutions & Furniture Shops",
    "Residential & Commercial Buy, Sell, & Lease",
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Services List */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B365D] mb-8">
            Our Services
          </h2>

          <div className="space-y-5">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-[#1B365D] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="https://systemintegration.in/wp-content/uploads/2024/02/real-estate-solutions-bmv-system-integration.webp"
            alt="Our Services"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
