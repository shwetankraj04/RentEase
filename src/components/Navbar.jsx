import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/60 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          RentEase
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-200 hover:text-blue-400 font-medium cursor-pointer">
            Pay Rent
          </button>
          <button className="text-gray-200 hover:text-blue-400 font-medium cursor-pointer">
            For Owner
          </button>
          <button className="text-gray-200 hover:text-blue-400 font-medium cursor-pointer">
            For Tenant
          </button>
          <button className="text-gray-200 hover:text-blue-400 font-medium cursor-pointer">
            For Broker
          </button>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-200 hover:text-blue-400 font-medium flex items-center gap-1 cursor-pointer"
            >
              Packages
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 shadow-lg rounded-md">
                <a
                  href="#owners"
                  className="block px-4 py-2 hover:bg-gray-700 text-gray-200 cursor-pointer"
                >
                  For Owners
                </a>
                <a
                  href="#brokers"
                  className="block px-4 py-2 hover:bg-gray-700 text-gray-200 cursor-pointer"
                >
                  For Brokers
                </a>
              </div>
            )}
          </div>

          <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition cursor-pointer">
            Post Property
          </button>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
            Login / Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col items-start px-6 py-4 space-y-3">
            <button className="text-gray-200 hover:text-blue-400 font-medium">
              Pay Rent
            </button>
            <button className="text-gray-200 hover:text-blue-400 font-medium">
              For Owner
            </button>
            <button className="text-gray-200 hover:text-blue-400 font-medium">
              For Tenant
            </button>
            <button className="text-gray-200 hover:text-blue-400 font-medium">
              For Broker
            </button>

            <div className="w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-200 hover:text-blue-400 font-medium flex items-center gap-1"
              >
                Packages
                <svg
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <a
                    href="#owners"
                    className="block text-gray-200 hover:text-blue-400"
                  >
                    For Owners
                  </a>
                  <a
                    href="#brokers"
                    className="block text-gray-200 hover:text-blue-400"
                  >
                    For Brokers
                  </a>
                </div>
              )}
            </div>

            <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition w-full text-center">
              Post Property
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full text-center">
              Login / Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
