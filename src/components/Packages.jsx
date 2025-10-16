function Packages() {
  return (
    <section
      id="packages"
      className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 font-sans overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/10 to-[#2C4E80]/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#1B365D]">
            What We Offer
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Everything landlords, tenants, and brokers need — payments,
            listings, and curated packages that make property management easier.
          </p>
        </div>

        {/* Grid: Features + Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Highlights Card */}
          <div className="bg-gradient-to-b from-[#f0f4ff] to-white rounded-2xl p-8 shadow-lg border border-[#1B365D]/20 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Highlights
            </h4>
            <div className="w-16 h-1 bg-[#1B365D] rounded-full mb-6"></div>
            <ul className="space-y-5 text-gray-700 text-sm">
              <li className="flex gap-4 items-start">
                <span className="flex-none p-2 bg-[#1B365D]/10 rounded-lg text-[#1B365D]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-medium">Secure Rent Payments</div>
                  <div>Fast, regular, and traceable payments for tenants.</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-none p-2 bg-[#1B365D]/10 rounded-lg text-[#1B365D]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7l6 6-6 6"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-medium">Post Property Easily</div>
                  <div>
                    Add listings with photos, details and instant publishing.
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-none p-2 bg-[#1B365D]/10 rounded-lg text-[#1B365D]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-medium">Analytics for Owners</div>
                  <div>Track views, leads and rent performance over time.</div>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block text-sm font-medium text-[#1B365D] hover:underline"
              >
                Contact sales
              </a>
            </div>
          </div>

          {/* Owner Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2563EB]/20 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Owners</h4>
            <div className="w-20 h-1 bg-[#1B365D] rounded-full mb-4"></div>
            <p className="text-gray-600">
              Publish multiple properties, manage tenants, and collect rent with
              detailed reports.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>Unlimited listings</li>
              <li>Tenant screening</li>
              <li>Auto rent reminders</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white px-4 py-2.5 rounded-lg hover:opacity-90 transition font-medium">
                Choose Owner Plan
              </button>
              <a
                href="#enquiry"
                className="text-sm self-center text-gray-600 hover:underline"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* Broker Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#1D4ED8]/20 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Brokers</h4>
            <div className="w-20 h-1 bg-[#1B365D] rounded-full mb-4"></div>
            <p className="text-gray-600">
              Tools to manage clients, share listings, and gain priority
              placement in searches.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>Priority listing placement</li>
              <li>Client management tools</li>
              <li>In-platform messaging</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 border-2 border-[#1B365D] text-[#1B365D] px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#1B365D] hover:to-[#2C4E80] hover:text-white transition font-medium">
                Choose Broker Plan
              </button>
              <a
                href="#contact"
                className="text-sm self-center text-gray-600 hover:underline"
              >
                Become a partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
