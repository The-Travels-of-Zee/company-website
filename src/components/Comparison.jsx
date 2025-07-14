"use client";

import { Handshake } from "lucide-react";

const comparisonData = [
  ["Time to Hire", "4-12 weeks", "5-10 business days"],
  ["Access to Talent Pool", "Local talent only", "Global, AI-vetted experts"],
  ["Hiring Cost", "$15,000+ (per hire incl. recruiter fees)", "Included in monthly rates"],
  ["Flexibility", "Rigid contracts", "On-demand scaling"],
  ["Infrastructure Costs", "Office space, equipment, HR, benefits", "$0 - We handle it all"],
  ["Tech Screening", "Manual & inconsistent", "AI-driven skill tests + portfolio reviews"],
  ["Retention Risk", "High", "Optional backup talent available"],
  ["IP & Security", "Internal compliance", "Enforced NDAs + secure workspaces"],
];

const Comparison = () => {
  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 text-cyan-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-200">
            <Handshake className="w-5 h-5 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Comparison
            </span>
            <br />
            <span className="text-gray-900">For Every Stage</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access top-tier AI and ML engineers at competitive rates. All plans include comprehensive support and
            quality assurance.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-20 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">In-House Hiring vs Remote AI Talent</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-sm text-gray-700 border-separate border-spacing-y-3">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">In-House Hiring</th>
                  <th className="px-4 py-2">Travels of Zee Remote Talent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(([feature, inHouse, remote], index) => (
                  <tr key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                    <td className="px-4 py-3 font-medium">{feature}</td>
                    <td className="px-4 py-3">{inHouse}</td>
                    <td className="px-4 py-3">{remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Line */}
          <div className="mt-6 text-center text-gray-700 text-base">
            <p className="mb-2 font-semibold">
              Travels of Zee saves you <span className="text-cyan-600">40-60% in cost</span> &{" "}
              <span className="text-cyan-600">80% in time</span> while delivering elite developers faster, with total
              flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
