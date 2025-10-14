import { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${form.name}! We will contact you soon at ${form.email} / ${form.number}`
    );
    setForm({ name: "", email: "", number: "", query: "" });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Let's Turn Your <span className="text-blue-600">Dream</span>{" "}
            Property into Reality
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have a question or want to discuss your next investment? Fill out
            the form and our team will reach out shortly.
          </p>
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Enquiry Illustration"
            className="w-72 md:w-80 mx-auto md:mx-0 drop-shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Send an Enquiry
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <User className="text-blue-600 mr-3" size={20} />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Mail className="text-blue-600 mr-3" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Phone className="text-blue-600 mr-3" size={20} />
              <input
                type="tel"
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Query */}
            <div className="flex items-start border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <MessageSquare className="text-blue-600 mr-3 mt-1" size={20} />
              <textarea
                name="query"
                value={form.query}
                onChange={handleChange}
                placeholder="Your Query"
                rows="4"
                required
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 active:scale-100 cursor-pointer"
            >
              Get a Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
