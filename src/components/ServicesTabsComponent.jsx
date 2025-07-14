"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
  UserCheck,
  Briefcase,
  Monitor,
  Database,
  Cloud,
  Zap,
  Cpu,
  Star,
  Shield,
} from "lucide-react";

const ServicesTabsComponent = ({
  // Props to accept custom components for each tab
  talentAdditionalComponent = null,
  developmentAdditionalComponent = null,
  appsAdditionalComponent = null,
}) => {
  const [activeTab, setActiveTab] = useState("talent");

  const tabs = [
    {
      id: "talent",
      label: "Talent Agency",
      icon: Users,
      color: "text-cyan-600",
      bgColor: "bg-white",
      borderColor: "border-cyan-300",
      shadowColor: "shadow-xl shadow-cyan-500/20",
      gradientBg: "bg-gradient-to-r from-cyan-50/80 to-blue-50/80",
      buttonGradient: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    },
    {
      id: "development",
      label: "Development Services",
      icon: Code,
      color: "text-emerald-600",
      bgColor: "bg-white",
      borderColor: "border-emerald-300",
      shadowColor: "shadow-xl shadow-emerald-500/20",
      gradientBg: "bg-gradient-to-r from-emerald-50/80 to-teal-50/80",
      buttonGradient: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    },
    {
      id: "apps",
      label: "In-House Apps",
      icon: Smartphone,
      color: "text-purple-600",
      bgColor: "bg-white",
      borderColor: "border-purple-300",
      shadowColor: "shadow-xl shadow-purple-500/20",
      gradientBg: "bg-gradient-to-r from-purple-50/80 to-pink-50/80",
      buttonGradient: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
    },
  ];

  const talentServices = [
    {
      title: "AI-Driven Precision Screening",
      description:
        "Automated resume scoring, coding tests & AI video analysis for rapid candidate evaluation and selection.",
      icon: Cpu,
      features: [
        "Automated resume parsing and scoring",
        "AI-based video interview analysis",
        "Skill-based coding assessments",
        "Behavioral and fit prediction algorithms",
      ],
    },
    {
      title: "Technical Talent Acquisition",
      description: "Source skilled developers, engineers, and IT professionals",
      icon: UserCheck,
      features: ["AI developers", "ML engineers", "Data scientists"],
    },
    {
      title: "Portfolio + Technical Assessments",
      description:
        "Candidates evaluated via skill-based tests and real-world portfolio reviews, ensuring quality hires.",
      icon: Briefcase,
      features: [
        "Real-world portfolio analysis",
        "Role-specific technical assessments",
        "Skill benchmarking and validation",
        "Hands-on project simulations",
      ],
    },
    {
      title: "Faster Time-to-Hire",
      description: "Lower Cost - Save weeks and reduce hiring overhead with intelligent candidate matching.",
      icon: Database,
      features: [
        "Automated candidate matching",
        "Streamlined onboarding workflows",
        "Reduced time-to-fill metrics",
        "Cost-efficient hiring models",
      ],
    },
  ];

  const developmentServices = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      icon: Monitor,
      features: [
        "React & Next.js applications",
        "E-commerce platforms",
        "Wix, Shopify, Wordpress",
        "API development & integration",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      icon: Smartphone,
      features: ["iOS & Android apps", "React Native development", "Flutter applications", "App Store optimization"],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: Cloud,
      features: ["AWS & Azure deployment", "Serverless architecture", "Cloud migration", "DevOps automation"],
    },
    {
      title: "Database & Backend",
      description: "Robust backend systems and database management",
      icon: Database,
      features: [
        "RESTful API design",
        "Database optimization",
        "Microservices architecture",
        "Security implementation",
      ],
    },
  ];

  const inHouseApps = [
    {
      title: "FarahGPT - Islamic Mentorship",
      description: "FarahGPT - AI Islamic Assistant. For Muslims, by Muslims.",
      // icon: Target,
      img: "/images/farahgpt-logo.png",
      features: [
        "Faith-Aligned Guidance",
        "Authentic Knowledge Base",
        "Community-Centric Design",
        "Integrated Educational Tools",
      ],
      status: "Live Product",
    },
    {
      title: "Muslifie - All in One Travel App",
      description:
        "For Muslims who have difficulty finding halal food and prayer destinations. Connect with our community of travelers and local guides.",
      // icon: MessageCircle,
      img: "/images/muslifie-logo.png",
      features: ["Halal Food Locator", "Nearby Prayer Spaces", "Become Local Guide", "Traverlers Friendly"],
      status: "In Development",
    },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "talent":
        return {
          title: "AI-Driven Technical Talent Acquisition",
          subtitle: "Perfect Solution to Your Business Growth",
          description:
            "Access top-tier developers vetted by AI-backed screening, testing, and portfolio analysis—instantly scalable to your needs.",
          services: talentServices,
          stats: [
            { value: "50%", label: "Time-to-Fill Reduction: Faster Placement" },
            { value: "+30%", label: "Engagement Boost: AI-personalized outreach increases candidate response rates" },
            { value: "98%", label: "Hiring Accuracy: Smarter matches reduce early turnover" },
          ],
          ctaText: "Find Your Perfect Match",
          additionalComponent: talentAdditionalComponent,
        };
      case "development":
        return {
          title: "Custom Development Services",
          subtitle: "From Concept to Launch",
          description:
            "Our expert development team creates cutting-edge digital solutions that drive business growth and deliver exceptional user experiences across all platforms.",
          services: developmentServices,
          stats: [
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ],
          ctaText: "Start Your Project",
          additionalComponent: developmentAdditionalComponent,
        };
      case "apps":
        return {
          title: "Our In-House Applications",
          subtitle: "Innovation in Action",
          description:
            "Explore our portfolio of internally developed applications that showcase our technical expertise and innovative approach to solving real-world business challenges.",
          services: inHouseApps,
          stats: [
            { value: "50K+", label: "Active Users" },
            { value: "4.8/5", label: "Apps Ratings" },
            { value: "10+", label: "Awards Won" },
          ],
          ctaText: "Explore Our Apps",
          additionalComponent: appsAdditionalComponent,
        };
    }
  };

  const currentContent = getTabContent();
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="services">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-100/15 to-pink-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-100/10 to-teal-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-300/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-300/40 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-48 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm text-cyan-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-200">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              Our Comprehensive
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Discover Our Range of
            </span>
            <br />
            <span className="text-gray-900">Professional Services</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-[16px] font-semibold transition-all duration-300 backdrop-blur-sm ${
                activeTab === tab.id
                  ? `${tab.bgColor} ${tab.color} ${tab.borderColor} border-2 ${tab.shadowColor}`
                  : "bg-white/80 text-gray-500 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-700 hover:shadow-lg"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* Content Header */}
          <div
            className={`${activeTabData.gradientBg} backdrop-blur-sm rounded-[24px] p-8 mb-8 border ${activeTabData.borderColor} ${activeTabData.shadowColor}`}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
              <p className={`text-xl font-semibold ${activeTabData.color} mb-4`}>{currentContent.subtitle}</p>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">{currentContent.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {currentContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-[16px] p-6 border border-gray-200 shadow-lg"
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                      activeTabData.color === "text-cyan-600"
                        ? "from-cyan-600 to-blue-600"
                        : activeTabData.color === "text-emerald-600"
                        ? "from-emerald-600 to-teal-600"
                        : "from-purple-600 to-pink-600"
                    } bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentContent.services.map((service, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-[16px] p-8 border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl ${
                  activeTab === "talent"
                    ? "hover:shadow-cyan-500/20"
                    : activeTab === "development"
                    ? "hover:shadow-emerald-500/20"
                    : "hover:shadow-purple-500/20"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${activeTabData.gradientBg} rounded-[16px] flex items-center justify-center backdrop-blur-sm border ${activeTabData.borderColor}`}
                  >
                    {service.icon && <service.icon className={`w-7 h-7 ${activeTabData.color}`} />}
                    {service.img && <img src={service.img} className="w-9 h-9" alt={service.title} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    {service.status && (
                      <span
                        className={`inline-block px-3 py-1 rounded-lg text-sm font-medium mt-1 ${
                          service.status === "Live Product"
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : service.status === "Beta Release"
                            ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                            : service.status === "In Development"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                      >
                        {service.status}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activeTabData.color}`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`${activeTabData.gradientBg} backdrop-blur-sm rounded-[24px] p-8 text-center border ${activeTabData.borderColor} ${activeTabData.shadowColor}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our{" "}
              {activeTab === "talent"
                ? "talent solutions"
                : activeTab === "development"
                ? "development services"
                : "innovative applications"}{" "}
              can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-block">
                <button
                  className={`group text-poppins rounded-2xl font-bold px-8 py-4 bg-gradient-to-r ${activeTabData.buttonGradient} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                  <span className="relative flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Component Section */}
        {currentContent.additionalComponent && (
          <div className="mt-8 mb-12">
            <div className="transition-all duration-500 ease-in-out">{currentContent.additionalComponent}</div>
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-600" />
            <span>Instant Scaling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsComponent;
