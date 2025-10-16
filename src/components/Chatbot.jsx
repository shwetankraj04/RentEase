import { useState, useEffect, useRef } from "react";
import { XMarkIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide property listings, rent management, and packages for landlords, tenants, and brokers.",
  },
  {
    question: "How can I list my property?",
    answer:
      "You can list your property by clicking on 'Post Property' and filling out the required details.",
  },
  {
    question: "How do I pay rent?",
    answer:
      "Rent can be paid securely through our platform using multiple payment options.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us via the 'Enquiry' section or click 'Talk to us' anywhere on the site.",
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! Before we start, could you please share your details?",
    },
  ]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Reference for auto-scroll
  const chatEndRef = useRef(null);

  // ✅ Auto-scroll to bottom when new message appears
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, submitted]);

  const handleQuestion = (faq) => {
    setMessages((prev) => [...prev, { from: "user", text: faq.question }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: faq.answer }]);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "be48254e-341a-4dbf-a886-8a9c0ceb103d");
    formData.append("subject", "New Chatbot Lead");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", "User submitted chatbot details.");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: `Thanks ${form.name}! Your details have been submitted successfully.`,
          },
          { from: "bot", text: "How can I help you today?" },
        ]);
        setSubmitted(true);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Oops! Something went wrong. Please try again.",
          },
        ]);
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Network error. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 bg-[#1B365D] hover:bg-[#2C4E80] text-white p-4 rounded-full shadow-lg z-50"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-[#1B365D]/20">
          {/* Header */}
          <div className="bg-[#1B365D] text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button onClick={() => setOpen(false)}>
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className={`p-4 flex-1 overflow-y-auto space-y-3 bg-gray-50 transition-all duration-300 ${
              submitted ? "max-h-72" : "max-h-64"
            }`}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.from === "bot"
                    ? "bg-white text-gray-800 self-start border border-gray-200"
                    : "bg-[#1B365D] text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} /> {/* 👇 Scroll anchor */}
          </div>

          {/* Form Before Chat */}
          {!submitted && (
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white border-t border-gray-200"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full mb-3 p-2 border border-gray-300 rounded-lg text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1B365D] hover:bg-[#2C4E80] text-white py-2 rounded-lg text-sm transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}

          {/* FAQ Buttons */}
          {submitted && (
            <div className="p-3 border-t border-gray-200 bg-white flex flex-col gap-2 max-h-40 overflow-y-auto">
              {faqData.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestion(faq)}
                  className="bg-[#F3F4F6] hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm text-left transition"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
