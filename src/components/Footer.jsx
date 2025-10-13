export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">RentEase</h2>
          <p className="text-sm leading-relaxed">
            Simplifying your rental journey. Pay rent, post properties, and
            explore tailored packages for owners and brokers — all at one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
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
          <h3 className="text-lg font-semibold text-white mb-4">
            For Partners
          </h3>
          <ul className="space-y-2 text-sm">
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
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Raipur, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@rentease.com</li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} RentEase. All Rights Reserved.
      </div>
    </footer>
  );
}
