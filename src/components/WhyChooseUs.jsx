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
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Point 1 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <BriefcaseIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Deep Expertise
              </h3>
              <p className="text-gray-600">
                With 11 years of experience, we have developed a profound
                understanding of business needs in the commercial real estate
                market.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <UsersIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Networking Power
              </h3>
              <p className="text-gray-600">
                Our extensive network with BNI, NAR-I, CGAR, and CG REAR ensures
                we are well-connected and informed about market dynamics.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <LightBulbIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                We provide tailored support, assisting you in evaluating your
                spatial requirements and negotiating favorable lease terms.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <BuildingOfficeIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Property Diversity
              </h3>
              <p className="text-gray-600">
                Whether you’re looking for retail, office, or warehouse space,
                we have the expertise to meet your specific needs.
              </p>
            </div>
          </div>

          {/* Point 5 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <CheckCircleIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Stress-Free Process
              </h3>
              <p className="text-gray-600">
                We understand the challenges of finding the right commercial
                space and are dedicated to making the process as smooth as
                possible.
              </p>
            </div>
          </div>

          {/* Point 6 */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <HandThumbUpIcon className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Our dedicated, professional team pays meticulous attention to
                detail to ensure your goals are met at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
