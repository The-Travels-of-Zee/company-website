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
    <section className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
            <Handshake className="w-5 h-5 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transparent Comparison
            </span>
            <br />
            <span className="text-white">For Every Stage</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access top-tier AI and ML engineers at competitive rates. All plans include comprehensive support and
            quality assurance.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mt-20 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">In-House Hiring vs Remote AI Talent</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-sm text-slate-300 border-separate border-spacing-y-3">
              <thead>
                <tr className="text-slate-400 text-sm">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">In-House Hiring</th>
                  <th className="px-4 py-2">Travels of Zee Remote Talent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(([feature, inHouse, remote], index) => (
                  <tr key={index} className="bg-slate-700/20 rounded-lg">
                    <td className="px-4 py-3 font-medium">{feature}</td>
                    <td className="px-4 py-3">{inHouse}</td>
                    <td className="px-4 py-3">{remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Line */}
          <div className="mt-6 text-center text-slate-200 text-base">
            <p className="mb-2 font-semibold">
              <span className="text-emerald-400">Bottom Line:</span> Travels of Zee saves you{" "}
              <span className="text-cyan-300">40-60% in cost</span> & <span className="text-cyan-300">80% in time</span>{" "}
              while delivering elite developers faster, with total flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
