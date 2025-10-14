import React from "react";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center relative">
      <div className="max-w-3xl mx-auto">
        <Quote className="text-blue-400 w-10 h-10 mx-auto mb-4 opacity-70" />
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          By Robert Kiyosaki
        </h3>
        <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-100">
          “Real estate is the foundation of wealth, providing a path to
          financial freedom and security like no other.”
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
