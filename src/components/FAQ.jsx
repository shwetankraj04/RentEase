import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQ() {
  const faqs = [
    {
      question: "What documents are required to rent a property?",
      answer:
        "Typically, you need valid ID proofs, address proof, and sometimes income proof or employment details. The landlord may also ask for references.",
    },
    {
      question: "How do I verify if a property is legitimate?",
      answer:
        "Check property ownership documents, encumbrance certificates, and verify with local authorities or legal advisors before making payments.",
    },
    {
      question: "Can I buy property through your platform?",
      answer:
        "Yes! RentEase offers options for buying, selling, and leasing properties across residential and commercial segments.",
    },
    {
      question: "What is the process for tenant screening?",
      answer:
        "Tenant screening typically involves verifying ID, employment, income, previous rental history, and background checks to ensure credibility.",
    },
    {
      question: "Do you provide legal and financial advisory services?",
      answer:
        "Yes, we offer legal assistance, financial advisory, and valuation services to help landlords and tenants make informed decisions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B365D] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-5 text-left text-gray-700 font-medium focus:outline-none"
              >
                {faq.question}
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`px-5 pb-5 text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
