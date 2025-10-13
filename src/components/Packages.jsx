function Packages() {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            What We Offer
          </h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Everything landlords, tenants, and brokers need — payments,
            listings, and curated packages that make property management easier.
          </p>
        </div>

        {/* Grid: Features + Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Features / Highlights */}
          <div className="md:col-span-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Highlights
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="flex-none p-2 bg-blue-50 rounded-lg">
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
                  <div className="font-medium text-gray-800">
                    Secure Rent Payments
                  </div>
                  <div className="text-sm text-gray-600">
                    Fast, regular, and traceable payments for tenants.
                  </div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="flex-none p-2 bg-blue-50 rounded-lg">
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
                  <div className="font-medium text-gray-800">
                    Post Property Easily
                  </div>
                  <div className="text-sm text-gray-600">
                    Add listings with photos, details and instant publishing.
                  </div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="flex-none p-2 bg-blue-50 rounded-lg">
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
                  <div className="font-medium text-gray-800">
                    Analytics for Owners
                  </div>
                  <div className="text-sm text-gray-600">
                    Track views, leads and rent performance over time.
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Contact sales
              </a>
            </div>
          </div>

          {/* Owner Package Card */}
          <div
            id="owners"
            className="md:col-span-1 bg-white rounded-xl p-6 shadow-md border"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-gray-800">Owners</h4>
              <span className="text-sm text-gray-500">Best for landlords</span>
            </div>

            <p className="text-gray-600 mt-4">
              Publish multiple properties, manage tenants, and collect rent with
              detailed reports.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Unlimited listings</li>
              <li>Tenant screening</li>
              <li>Auto rent reminders</li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Choose Owner Plan
              </button>
              <a
                href="#contact"
                className="text-sm self-center text-gray-600 hover:underline"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div
            id="brokers"
            className="md:col-span-1 bg-white rounded-xl p-6 shadow-md border"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-gray-800">Brokers</h4>
              <span className="text-sm text-gray-500">
                For agents & brokers
              </span>
            </div>

            <p className="text-gray-600 mt-4">
              Tools to manage clients, share listings, and gain priority
              placement in searches.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Priority listing placement</li>
              <li>Client management tools</li>
              <li>In-platform messaging</li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
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
