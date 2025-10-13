import { useState } from "react";

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
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Send an Enquiry
        </h2>
        <p className="text-gray-600 mb-10">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl p-8 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="tel"
            name="number"
            value={form.number}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            name="query"
            value={form.query}
            onChange={handleChange}
            placeholder="Your Query"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-2 cursor-pointer"
          >
            Get a Callback
          </button>
        </form>
      </div>
    </section>
  );
}
