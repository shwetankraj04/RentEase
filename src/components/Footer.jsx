import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">RentEase</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Simplifying your rental journey. Pay rent, post properties, and
            explore tailored packages for owners and brokers — all at one place.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="hover:text-white transition-colors"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="#post-property"
                className="hover:text-white transition-colors"
              >
                Post Property
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            For Partners
          </h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <a href="#owners" className="hover:text-white transition-colors">
                For Owners
              </a>
            </li>
            <li>
              <a href="#brokers" className="hover:text-white transition-colors">
                For Brokers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li>📍 Raipur, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@rentease.com</li>
          </ul>
          <div className="flex items-center space-x-5 mt-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm md:text-base text-gray-500">
        © {new Date().getFullYear()} Mahesh Ventures. All Rights Reserved.
      </div>
    </footer>
  );
}
