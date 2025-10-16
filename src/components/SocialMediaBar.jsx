import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function SocialMediaBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-40 transition-all duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-[85%] sm:translate-x-0"
      }`}
    >
      {/* Container */}
      <div
        className={`flex items-center ${
          isOpen ? "flex-row-reverse" : "flex-row"
        } sm:flex-col sm:items-stretch`}
      >
        {/* Toggle button for small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden bg-[#1B365D] text-white p-2 rounded-l-md shadow-md hover:bg-[#2C4E80] transition-colors"
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Social media icons */}
        <div
          className={`flex sm:flex-col space-x-3 sm:space-x-0 sm:space-y-3 bg-white/90 backdrop-blur-md p-3 rounded-l-xl shadow-md transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"
          }`}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#2C4E80] transition-transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#2C4E80] transition-transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#2C4E80] transition-transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#2C4E80] transition-transform hover:scale-110"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaBar;
