import React from "react";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6 text-center relative">
      <div className="max-w-3xl mx-auto">
        {/* Quote Icon */}
        <Quote className="text-blue-400 w-12 h-12 mx-auto mb-6 opacity-80" />

        {/* Author */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-4">
          Robert Kiyosaki
        </h3>

        {/* Quote Text */}
        <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-100">
          “Real estate is the foundation of wealth, providing a path to
          financial freedom and security like no other.”
        </p>

        {/* Optional Accent Line */}
        <div className="mt-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default QuoteSection;
