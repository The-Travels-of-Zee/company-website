"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Brain, Users, Shield, Briefcase, CheckCircle } from "lucide-react";
import Link from "next/link";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does AI enhance your talent acquisition?",
      answer:
        "Our AI automates screening, scores coding skills, reviews portfolios, and runs unbiased video assessments, letting you focus on the best-fit candidates. The system processes thousands of profiles in minutes, identifying top talent based on technical competency, cultural fit, and project requirements.",
      icon: Brain,
      color: "text-cyan-500",
      bgGradient: "from-cyan-100 to-blue-100",
      borderColor: "border-cyan-200",
    },
    {
      id: 2,
      question: "Will AI replace human hiring?",
      answer:
        "No, AI amplifies our recruiters' expertise with data-backed insights. Human judgment remains central. Our AI handles the initial screening and analysis, while experienced recruiters make final decisions, conduct interviews, and ensure cultural alignment.",
      icon: Users,
      color: "text-emerald-500",
      bgGradient: "from-emerald-100 to-teal-100",
      borderColor: "border-emerald-200",
    },
    {
      id: 3,
      question: "Are results unbiased and compliant?",
      answer:
        "Yes. We use transparent AI tools with bias monitoring, aligned with best practices and regulations. Our algorithms are regularly audited for fairness, and we maintain compliance with GDPR, EEOC guidelines, and industry standards.",
      icon: Shield,
      color: "text-purple-500",
      bgGradient: "from-purple-100 to-pink-100",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      question: "What roles do you fill?",
      answer:
        "Specialist technical talent, backend/frontend engineers, data scientists, AI/ML engineers, via on-demand hiring and scalable sourcing. We cover full-stack development, DevOps, cloud architecture, mobile development, and emerging technologies.",
      icon: Briefcase,
      color: "text-blue-500",
      bgGradient: "from-blue-100 to-indigo-100",
      borderColor: "border-blue-200",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600 px-6 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-200 shadow-sm">
            <HelpCircle className="w-4 h-4 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI-Powered Talent Acquisition
            </span>
            <br />
            Everything You Need to Know
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Get answers to common questions about our AI-driven recruitment process and how we revolutionize talent
            acquisition.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl border shadow-sm transition-all duration-300 ${
                activeIndex === index ? `border-2 ${faq.borderColor}` : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.bgGradient} rounded-xl flex items-center justify-center border ${faq.borderColor}`}
                    >
                      <faq.icon className={`w-6 h-6 ${faq.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                      faq.bgGradient
                    } flex items-center justify-center transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? (
                      <ChevronUp className={`w-5 h-5 ${faq.color}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 ${faq.color}`} />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className={`h-px bg-gradient-to-r ${faq.bgGradient} mb-4`}></div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className={`w-5 h-5 mt-1 ${faq.color}`} />
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our AI-powered recruitment experts are here to help. Get personalized answers and discover how we can
              transform your hiring process.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
