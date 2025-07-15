"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  CheckCircle,
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Gift,
  LifeBuoy,
  Lock,
  Map,
  Monitor,
  RefreshCcw,
  Shield,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Gift,
  LifeBuoy,
  Lock,
  Map,
  Monitor,
  RefreshCcw,
  Shield,
  ShieldCheck,
  User,
  Users,
};

const themes = {
  talent: {
    primary: "from-cyan-500 via-blue-500 to-purple-500",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    secondary: "from-cyan-50 to-blue-50",
    iconColor: "text-white",
  },
  development: {
    primary: "from-emerald-500 via-teal-500 to-green-500",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    secondary: "from-emerald-50 to-teal-50",
    iconColor: "text-white",
  },
  apps: {
    primary: "from-purple-500 via-pink-500 to-red-500",
    accent: "text-purple-600",
    border: "border-purple-200",
    secondary: "from-purple-50 to-pink-50",
    iconColor: "text-white",
  },
};

const Faq = ({ faqs, activeTab = "talent" }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentTheme = themes[activeTab] || themes.talent;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentTheme.primary} text-white px-6 py-2 rounded-full text-sm font-medium mb-6 border ${currentTheme.border} shadow-sm`}
          >
            <HelpCircle className="w-4 h-4 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
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
          {faqs?.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl border shadow-sm transition-all duration-300 ${
                activeIndex === index ? `border-2 ${currentTheme.border}` : currentTheme.border
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${currentTheme.primary} rounded-xl flex items-center justify-center border ${currentTheme.border}`}
                    >
                      {iconMap[faq.icon] &&
                        React.createElement(iconMap[faq.icon], {
                          className: `w-6 h-6 ${currentTheme.iconColor}`,
                        })}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                      currentTheme.primary
                    } flex items-center justify-center transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? (
                      <ChevronUp className={`w-5 h-5 ${currentTheme.iconColor}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 ${currentTheme.iconColor}`} />
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
                  <div className={`h-px bg-gradient-to-r ${currentTheme.primary} mb-4`}></div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className={`w-5 h-5 mt-1 ${currentTheme.accent}`} />
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div
            className={`bg-gradient-to-r ${currentTheme.secondary} p-8 rounded-2xl border ${currentTheme.border} shadow-md`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our AI-powered recruitment experts are here to help. Get personalized answers and discover how we can
              transform your hiring process.
            </p>
            <Link href="#contact">
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
