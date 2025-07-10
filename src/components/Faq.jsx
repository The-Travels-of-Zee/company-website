"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Brain,
  Users,
  Shield,
  Briefcase,
  ZapIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does AI enhance your talent acquisition?",
      answer:
        "Our AI automates screening, scores coding skills, reviews portfolios, and runs unbiased video assessments, letting you focus on the best-fit candidates. The system processes thousands of profiles in minutes, identifying top talent based on technical competency, cultural fit, and project requirements.",
      icon: Brain,
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      id: 2,
      question: "Will AI replace human hiring?",
      answer:
        "No, AI amplifies our recruiters' expertise with data-backed insights. Human judgment remains central. Our AI handles the initial screening and analysis, while experienced recruiters make final decisions, conduct interviews, and ensure cultural alignment.",
      icon: Users,
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/30",
    },
    {
      id: 3,
      question: "Are results unbiased and compliant?",
      answer:
        "Yes. We use transparent AI tools with bias monitoring, aligned with best practices and regulations. Our algorithms are regularly audited for fairness, and we maintain compliance with GDPR, EEOC guidelines, and industry standards.",
      icon: Shield,
      color: "text-purple-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: 4,
      question: "What roles do you fill?",
      answer:
        "Specialist technical talent, backend/frontend engineers, data scientists, AI/ML engineers, via on-demand hiring and scalable sourcing. We cover full-stack development, DevOps, cloud architecture, mobile development, and emerging technologies.",
      icon: Briefcase,
      color: "text-blue-400",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/4 to-pink-500/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/3 to-teal-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-48 w-2 h-2 bg-emerald-400/20 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 shadow-lg">
            <HelpCircle className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              AI-Powered Talent Acquisition
            </span>
            <br />
            <span className="text-white">Everything You Need to Know</span>
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Get answers to common questions about our AI-driven recruitment process and how we revolutionize talent
            acquisition.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-[16px] border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-600/50 ${
                activeIndex === index ? `${faq.borderColor} shadow-lg` : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.bgGradient} rounded-[12px] flex items-center justify-center backdrop-blur-sm border ${faq.borderColor}`}
                    >
                      <faq.icon className={`w-6 h-6 ${faq.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  </div>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${
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
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className={`w-5 h-5 ${faq.color}`} />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-[24px] p-8 border border-cyan-500/30 shadow-lg shadow-cyan-500/25">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our AI-powered recruitment experts are here to help. Get personalized answers and discover how we can
              transform your hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group font-semibold px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-[12px] hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <span className="relative flex items-center gap-2">
                  <ZapIcon className="w-5 h-5 animate-pulse" />
                  Schedule AI Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-[12px] hover:bg-slate-700/50 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 font-semibold">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
