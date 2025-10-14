import {
  AcademicCapIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Who We Are</h2>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-8 mb-16">
          {/* Founder Image */}
          <img
            src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=" // Replace with actual image URL
            alt="Nikhil Verma"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-6 md:mb-0 md:mr-8"
          />

          {/* Founder Details */}
          <div className="text-left md:text-justify max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Nikhil Verma
            </h3>
            <p className="text-blue-600 font-medium mb-4">
              Founder, RentEase Group
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nikhil Verma comes from a diverse business background but
              pioneered his own path in real estate. He began his journey early,
              working as a Business Associate with Re/Max Corporate Services,
              driven by the belief that “Nobody in the world sells more Real
              Estate than RE/MAX.”
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Starting modestly as an agent in Raipur, his perseverance and
              passion for learning led him to greater opportunities. After
              completing his MBA in Travel, Tourism & Hospitality from
              Switzerland, he honed his entrepreneurial and management skills in
              the USA, working with the Historic Hotel of America, Memphis,
              Tennessee — an experience that shaped his vision for creating a
              smarter, more customer-focused real estate ecosystem.
            </p>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 - Mission */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <LightBulbIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-2">
              Simplifying the rental experience for tenants, owners, and brokers
              with smart technology and transparency.
            </p>
            <p className="text-gray-600">
              We aim to reduce friction in property management, make payments
              secure, and ensure everyone finds the right property effortlessly.
              Our platform is designed to save time, enhance convenience, and
              build trust across the rental ecosystem.
            </p>
          </div>

          {/* Card 2 - Values */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <AcademicCapIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600 mb-2">
              Integrity, transparency, and ease of use are at the core of
              everything we do.
            </p>
            <p className="text-gray-600">
              We strive to deliver a platform that is intuitive and secure,
              ensuring that all transactions are reliable. Every feature is
              built with user convenience in mind, keeping honesty and
              accountability at the forefront.
            </p>
          </div>

          {/* Card 3 - Team */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <UsersIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-600 mb-2">
              A dedicated group of professionals passionate about modernizing
              rentals and property management.
            </p>
            <p className="text-gray-600">
              With diverse expertise in tech, design, and customer service, our
              team works tirelessly to provide solutions that make renting
              easier for everyone. Collaboration, innovation, and customer focus
              are our guiding principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
