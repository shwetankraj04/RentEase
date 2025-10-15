import { useState } from "react";
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
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);

  const handleQuestion = (faq) => {
    setMessages((prev) => [...prev, { from: "user", text: faq.question }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: faq.answer }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#1B365D] hover:bg-[#2C4E80] text-white p-4 rounded-full shadow-lg z-50"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-[#1B365D] text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button onClick={() => setOpen(false)}>
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 max-h-64">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.from === "bot"
                    ? "bg-gray-100 self-start"
                    : "bg-[#1B365D] text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* FAQ Buttons */}
          <div className="p-3 border-t border-gray-200 flex flex-col gap-2">
            {faqData.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestion(faq)}
                className="bg-[#F3F4F6] hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm text-left"
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
