import React from "react";
import {
  CheckCircleIcon,
  BuildingOfficeIcon,
  UsersIcon,
  HandThumbUpIcon,
  BriefcaseIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100 font-poppins">
      <div className="max-w-[90rem] mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {[
            {
              icon: BriefcaseIcon,
              title: "Deep Expertise",
              description:
                "With 11 years of experience, we have developed a profound understanding of business needs in the commercial real estate market.",
            },
            {
              icon: UsersIcon,
              title: "Networking Power",
              description:
                "Our extensive network with BNI, NAR-I, CGAR, and CG REAR ensures we are well-connected and informed about market dynamics.",
            },
            {
              icon: LightBulbIcon,
              title: "Customized Solutions",
              description:
                "We provide tailored support, assisting you in evaluating your spatial requirements and negotiating favorable lease terms.",
            },
            {
              icon: BuildingOfficeIcon,
              title: "Property Diversity",
              description:
                "Whether you’re looking for retail, office, or warehouse space, we have the expertise to meet your specific needs.",
            },
            {
              icon: CheckCircleIcon,
              title: "Stress-Free Process",
              description:
                "We understand the challenges of finding the right commercial space and are dedicated to making the process as smooth as possible.",
            },
            {
              icon: HandThumbUpIcon,
              title: "Personalized Service",
              description:
                "Our dedicated, professional team pays meticulous attention to detail to ensure your goals are met at every step.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
            >
              <div className="flex-none w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
