import {
  AcademicCapIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B365D] mb-12">
          Who We Are
        </h2>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-10 mb-16">
          <img
            src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc="
            alt="Nikhil Verma"
            className="w-65 h-65 rounded-full object-cover shadow-md mb-6 md:mb-0 md:mr-10 border-4 border-[#1B365D]"
          />
          <div className="text-left md:text-justify max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Mahesh
            </h3>
            <p className="text-[#1B365D] font-medium mb-4">
              Founder, Mahesh Ventures Group
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nikhil Verma comes from a diverse business background but
              pioneered his own path in real estate. He began his journey early,
              working as a Business Associate with Re/Max Corporate Services,
              driven by the belief that “Nobody in the world sells more Real
              Estate than RE/MAX.”
            </p>
            <p className="text-gray-700 leading-relaxed">
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
        <div className="flex flex-col md:flex-row gap-10">
          {/* Mission Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center mb-4">
              <LightBulbIcon className="w-12 h-12 text-[#1B365D]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-2 leading-relaxed">
              Simplifying the rental experience for tenants, owners, and brokers
              with smart technology and transparency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Reducing friction in property management, making payments secure,
              and ensuring everyone finds the right property effortlessly.
            </p>
          </div>

          {/* Values Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center mb-4">
              <AcademicCapIcon className="w-12 h-12 text-[#1B365D]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-700 mb-2 leading-relaxed">
              Integrity, transparency, and ease of use are at the core of
              everything we do.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every feature is built with user convenience in mind, keeping
              honesty and accountability at the forefront.
            </p>
          </div>

          {/* Team Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center mb-4">
              <UsersIcon className="w-12 h-12 text-[#1B365D]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-700 mb-2 leading-relaxed">
              A dedicated group of professionals passionate about modernizing
              rentals and property management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With diverse expertise in tech, design, and customer service, our
              team works tirelessly to provide solutions that make renting
              easier for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
