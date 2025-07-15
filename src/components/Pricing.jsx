"use client";

import React from "react";
import { Check, Star, Zap, Shield, Users, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  // const pricingTiers = [
  //   {
  //     title: "Intermediate Engineers",
  //     subtitle: "1–3 Years' Experience",
  //     popular: false,
  //     gradient: "from-cyan-100 to-blue-100",
  //     borderGradient: "from-cyan-200 to-blue-200",
  //     icon: Users,
  //     roles: [
  //       { name: "AI Research Assistant", hourly: 12, monthly: 1800 },
  //       { name: "Python Developer", hourly: 10, monthly: 1300 },
  //       { name: "AI Engineer", hourly: 15, monthly: 2000 },
  //       { name: "Data Engineer (Python-based)", hourly: 14, monthly: 1900 },
  //       { name: "Data Scientist", hourly: 15, monthly: 2000 },
  //       { name: "Machine Learning Developer", hourly: 15, monthly: 2000 },
  //       { name: "NLP Engineer", hourly: 15, monthly: 2000 },
  //       { name: "Computer Vision Engineer", hourly: 15, monthly: 2000 },
  //       { name: "ML Ops Engineer", hourly: 15, monthly: 2000 },
  //       { name: "Deep Learning Engineer", hourly: 15, monthly: 2200 },
  //     ],
  //   },
  //   {
  //     title: "Senior Engineers",
  //     subtitle: "3–5 Years' Experience",
  //     popular: true,
  //     gradient: "from-purple-100 to-pink-100",
  //     borderGradient: "from-purple-200 to-pink-200",
  //     icon: Star,
  //     roles: [
  //       { name: "AI Research Assistant", hourly: 18, monthly: 2500 },
  //       { name: "Python Developer", hourly: 20, monthly: 2000 },
  //       { name: "AI Engineer", hourly: 20, monthly: 3000 },
  //       { name: "Data Engineer (Python-based)", hourly: 20, monthly: 2800 },
  //       { name: "Data Scientist", hourly: 22, monthly: 3000 },
  //       { name: "Machine Learning Developer", hourly: 22, monthly: 3000 },
  //       { name: "NLP Engineer", hourly: 22, monthly: 3000 },
  //       { name: "Computer Vision Engineer", hourly: 22, monthly: 3000 },
  //       { name: "ML Ops Engineer", hourly: 22, monthly: 3000 },
  //       { name: "Deep Learning Engineer", hourly: 23, monthly: 3200 },
  //     ],
  //   },
  //   {
  //     title: "Lead Engineers",
  //     subtitle: "5+ Years' Experience",
  //     popular: false,
  //     gradient: "from-emerald-100 to-teal-100",
  //     borderGradient: "from-emerald-200 to-teal-200",
  //     icon: Zap,
  //     roles: [
  //       { name: "AI Research Assistant", hourly: 22, monthly: 3200 },
  //       { name: "Python Developer", hourly: 25, monthly: 3000 },
  //       { name: "AI Engineer", hourly: 25, monthly: 4000 },
  //       { name: "Data Engineer (Python-based)", hourly: 26, monthly: 3800 },
  //       { name: "Data Scientist", hourly: 28, monthly: 4200 },
  //       { name: "Machine Learning Developer", hourly: 28, monthly: 4200 },
  //       { name: "NLP Engineer", hourly: 28, monthly: 4200 },
  //       { name: "Computer Vision Engineer", hourly: 28, monthly: 4200 },
  //       { name: "ML Ops Engineer", hourly: 28, monthly: 4200 },
  //       { name: "Deep Learning Engineer", hourly: 30, monthly: 4500 },
  //     ],
  //   },
  // ];

  const features = [
    "AI-vetted engineers with verified portfolios",
    "Time zone aligned engineers",
    "Free QA & Project Manager (4+ hires)",
    "Weekly updates, Slack/Email/Zoom collaboration",
    "NDAs, IP protection & performance tracking",
  ];

  return (
    <section className="py-20 min-w-full bg-transparent relative overflow-hidden" id="pricing">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600 px-6 py-2 rounded-full text-sm font-medium border border-cyan-200">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
            <br />
            <span className="text-gray-900">For Every Stage</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access top-tier AI and ML engineers at competitive rates. All plans include comprehensive support and
            quality assurance.
          </p>
        </div>

        {/* Pricing Cards */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-300 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl ${
                  tier.popular ? "scale-[1.03] border-purple-300" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${tier.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{tier.title}</h3>
                      <p className="text-sm text-gray-500">{tier.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {tier.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                        <span className="text-sm text-gray-700">{role.name}</span>
                        <div className="text-right">
                          <div className="text-gray-900 font-medium">${role.hourly}/hr</div>
                          <div className="text-xs text-gray-500">${role.monthly}/mo</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Features */}
        <div className="bg-gray-100 rounded-2xl border bg-gray-100/60 border-gray-200 px-8 py-12 text-gray-800">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">All Plans Include</h3>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <div className="p-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/pricing" target="_blank">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-cyan-500/30">
                <DollarSign className="w-5 h-5" />
                More About Pricings
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
