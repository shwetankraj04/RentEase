import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E3A8A]/90 backdrop-blur-lg shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#FBBF24] cursor-pointer tracking-wide">
          Mahesh Ventures
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { label: "Home", target: "hero" },
            { label: "Services", target: "services" },
            { label: "About Us", target: "about" },
            // { label: "Contact Us", target: "enquiry" },
          ].map(({ label, target }, idx) => (
            <button
              key={idx}
              onClick={() => {
                const section = document.getElementById(target);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  setDropdownOpen(false);
                }
              }}
              className="text-gray-100 hover:text-[#FBBF24] font-medium cursor-pointer transition-colors duration-300"
            >
              {label}
            </button>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-100 hover:text-[#FBBF24] font-medium flex items-center gap-1 cursor-pointer transition"
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
              <div className="absolute right-0 mt-2 w-44 bg-[#1E3A8A] border border-[#2563EB]/30 shadow-lg rounded-md">
                <button
                  onClick={() => {
                    const section = document.getElementById("packages");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      setDropdownOpen(false); // close dropdown after clicking
                    }
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#2563EB] text-gray-100 rounded-t-md cursor-pointer"
                >
                  For Owners
                </button>

                <button
                  onClick={() => {
                    const section = document.getElementById("packages");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      setDropdownOpen(false);
                    }
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#2563EB] text-gray-100 rounded-b-md cursor-pointer"
                >
                  For Brokers
                </button>
              </div>
            )}
          </div>

          {/* Buttons */}
          {/* <button className="border border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-[#1E3A8A] px-4 py-2 rounded-lg transition font-medium">
            Contact Us
          </button> */}

          <button
            onClick={() => {
              const section = document.getElementById("enquiry");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
          >
            Contact Us
          </button>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/YOUR_DOCUMENT_ID_HERE/export?format=pdf",
                "_blank"
              )
            }
            className="cursor-pointer bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-100 focus:outline-none"
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
        <div className="md:hidden bg-[#1E3A8A]/95 backdrop-blur-lg border-t border-[#2563EB]/30">
          <div className="flex flex-col items-start px-6 py-4 space-y-3">
            {[
              { label: "Home", target: "hero" },
              { label: "Services", target: "services" },
              { label: "About Us", target: "about" },
            ].map(({ label, target }, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const section = document.getElementById(target);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setDropdownOpen(false);
                    setMenuOpen(false); // ✅ close main menu after clicking
                  }
                }}
                className="text-gray-100 hover:text-[#FBBF24] font-medium cursor-pointer transition-colors duration-300"
              >
                {label}
              </button>
            ))}

            {/* Packages Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-100 hover:text-[#FBBF24] font-medium flex items-center gap-1 transition"
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
                  <button
                    onClick={() => {
                      const section = document.getElementById("packages");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setDropdownOpen(false);
                        setMenuOpen(false); // ✅ close mobile menu
                      }
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-[#2563EB] text-gray-100 rounded-t-md cursor-pointer"
                  >
                    For Owners
                  </button>

                  <button
                    onClick={() => {
                      const section = document.getElementById("packages");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setDropdownOpen(false);
                        setMenuOpen(false); // ✅ close mobile menu
                      }
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-[#2563EB] text-gray-100 rounded-b-md cursor-pointer"
                  >
                    For Brokers
                  </button>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button
              onClick={() => {
                const section = document.getElementById("enquiry");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  setDropdownOpen(false);
                  setMenuOpen(false); // ✅ close mobile menu
                }
              }}
              className="cursor-pointer bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
            >
              Contact Us
            </button>

            {/* Get Quote */}
            <button
              onClick={() => {
                window.open(
                  "https://docs.google.com/document/d/YOUR_DOCUMENT_ID_HERE/export?format=pdf",
                  "_blank"
                );
                setMenuOpen(false); // ✅ close menu after click
              }}
              className="cursor-pointer bg-gradient-to-r from-[#1B365D] to-[#2C4E80] text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
