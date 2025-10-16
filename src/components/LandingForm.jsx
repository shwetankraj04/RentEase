import { useState, useEffect } from "react";

export default function LandingForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Open the form modal when page loads
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "be48254e-341a-4dbf-a886-8a9c0ceb103d",
          from_name: formData.name,
          from_email: formData.email,
          subject: "New Landing Page Submission",
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nNumber: ${formData.number}\nAddress: ${formData.address}`,
          sender_name: formData.name,
          reply_to: formData.email,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", number: "", address: "" });
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting the form.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-11/12 md:w-1/2 p-8 relative">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Enter Your Details
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1B365D] hover:bg-[#2C4E80] text-white py-2.5 rounded-md font-medium transition cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-600">
              Your details have been submitted successfully.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 bg-[#1B365D] hover:bg-[#2C4E80] text-white px-6 py-2 rounded-md font-medium transition cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
