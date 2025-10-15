import { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import "@fontsource/poppins";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const endpoint = "https://api.web3forms.com/submit";
    const data = {
      access_key: "be48254e-341a-4dbf-a886-8a9c0ceb103d",
      name: form.name,
      email: form.email,
      phone: form.number,
      message: form.query,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Thank you! Your enquiry has been sent successfully.");
        setForm({ name: "", email: "", number: "", query: "" });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section
      id="enquiry"
      className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-24 font-poppins"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Let's Turn Your <span className="text-blue-600">Dream</span>{" "}
            Property into Reality
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Have a question or want to discuss your next investment? Fill out
            the form and our team will reach out shortly.
          </p>
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Enquiry Illustration"
            className="w-72 md:w-80 mx-auto md:mx-0 drop-shadow-xl"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Send an Enquiry
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                rows="5"
                required
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#1E3A8A]/90  text-white py-3 md:py-4 rounded-xl font-semibold text-lg md:text-xl shadow-lg hover:bg-[#1E3A8A]/110  transition transform hover:scale-105 active:scale-100 cursor-pointer"
            >
              Get a Callback
            </button>

            {status && (
              <p
                className={`text-center mt-4 text-sm md:text-base ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
