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
  Search,
  Award,
  Briefcase,
  Monitor,
  Database,
  Cloud,
  ZapIcon,
  Zap,
} from "lucide-react";

const ServicesTabsComponent = () => {
  const [activeTab, setActiveTab] = useState("talent");

  const tabs = [
    {
      id: "talent",
      label: "Talent Agency",
      icon: Users,
      color: "text-cyan-400",
      bgColor: "bg-slate-800/50",
      borderColor: "border-cyan-500/30",
      shadowColor: "shadow-lg shadow-cyan-500/25",
      gradientBg: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
    },
    {
      id: "development",
      label: "Development Services",
      icon: Code,
      color: "text-emerald-400",
      bgColor: "bg-slate-800/50",
      borderColor: "border-emerald-500/30",
      shadowColor: "shadow-lg shadow-emerald-500/25",
      gradientBg: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10",
    },
    {
      id: "apps",
      label: "In-House Apps",
      icon: Smartphone,
      color: "text-purple-400",
      bgColor: "bg-slate-800/50",
      borderColor: "border-purple-500/30",
      shadowColor: "shadow-lg shadow-purple-500/25",
      gradientBg: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
    },
  ];

  const talentServices = [
    {
      title: "Executive Search & Recruitment",
      description: "Connect with C-level executives and senior management professionals",
      icon: Search,
      features: [
        "Executive headhunting",
        "Leadership assessment",
        "Cultural fit evaluation",
        "Compensation benchmarking",
      ],
    },
    {
      title: "Technical Talent Acquisition",
      description: "Source skilled developers, engineers, and IT professionals",
      icon: UserCheck,
      features: ["Full-stack developers", "DevOps engineers", "Data scientists", "Technical skill assessment"],
    },
    {
      title: "Contract & Freelance Staffing",
      description: "Flexible workforce solutions for project-based requirements",
      icon: Briefcase,
      features: ["Short-term contracts", "Project-based hiring", "Freelance management", "Rapid deployment"],
    },
    {
      title: "Talent Consulting",
      description: "Strategic workforce planning and HR consulting services",
      icon: Award,
      features: ["Workforce strategy", "Talent pipeline development", "Market intelligence", "Retention strategies"],
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
        "Progressive Web Apps",
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
    // {
    //   title: "DataViz Studio",
    //   description: "Interactive data visualization and business intelligence tool",
    //   icon: BarChart3,
    //   features: ["Custom dashboards", "Real-time data processing", "Multiple data sources", "Export capabilities"],
    //   status: "Beta Release",
    // },
    {
      title: "Muslifie - All in One Travel App",
      description:
        "For Muslims who have difficulty finding halal food and prayer destinations. Connect with our community of travelers and local guides.",
      // icon: MessageCircle,
      img: "/images/muslifie-logo.png",
      features: ["Halal Food Locator", "Nearby Prayer Spaces", "Become Local Guide", "Traverlers Friendly"],
      status: "In Development",
    },
    // {
    //   title: "AutoScale AI",
    //   description: "AI-powered business automation and optimization platform",
    //   icon: Rocket,
    //   features: ["Machine learning models", "Process automation", "Predictive analytics", "Custom AI solutions"],
    //   status: "Research Phase",
    // },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "talent":
        return {
          title: "Professional Talent Agency Services",
          subtitle: "Connect with Top-Tier Professionals",
          description:
            "We bridge the gap between exceptional talent and innovative companies, providing comprehensive recruitment and staffing solutions tailored to your specific needs.",
          services: talentServices,
          stats: [
            { value: "800+", label: "Candidates Placed" },
            { value: "98%", label: "Success Rate" },
            { value: "<1hr", label: "Average Response" },
          ],
          ctaText: "Find Your Perfect Match",
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
        };
    }
  };

  const currentContent = getTabContent();
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Our Comprehensive
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Discover Our Range of 
            </span>
            <br />
            <span className="text-white">Professional Services</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  : "bg-slate-800/30 text-slate-400 border-2 border-slate-700/50 hover:border-slate-600/50 hover:text-slate-300"
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
              <h3 className="text-3xl font-bold text-white mb-4">{currentContent.title}</h3>
              <p className={`text-xl font-semibold ${activeTabData.color} mb-4`}>{currentContent.subtitle}</p>
              <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed">{currentContent.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {currentContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-slate-800/50 backdrop-blur-sm rounded-[16px] p-6 border border-slate-700/50 shadow-lg"
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                      activeTabData.color === "text-cyan-400"
                        ? "from-cyan-400 to-blue-400"
                        : activeTabData.color === "text-emerald-400"
                        ? "from-emerald-400 to-teal-400"
                        : "from-purple-400 to-pink-400"
                    } bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentContent.services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-[16px] p-8 border border-slate-700/50 transition-all duration-300 hover:border-slate-600/50 ${
                  activeTab === "talent"
                    ? "hover:shadow-lg hover:shadow-cyan-500/25"
                    : activeTab === "development"
                    ? "hover:shadow-lg hover:shadow-emerald-500/25"
                    : "hover:shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${activeTabData.gradientBg} rounded-[16px] flex items-center justify-center backdrop-blur-sm border ${activeTabData.borderColor}`}
                  >
                    {service.icon && <service.icon className={`w-7 h-7 ${activeTabData.color}`} />}

                    {service.img && <img src={service.img} className={`w-9 h-9 ${activeTabData.color}`} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                    {service.status && (
                      <span
                        className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${
                          service.status === "Live Product"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : service.status === "Beta Release"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : service.status === "In Development"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-slate-500/20 text-slate-400 border border-slate-500/30"
                        }`}
                      >
                        {service.status}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activeTabData.color}`} />
                      <span className="text-slate-300">{feature}</span>
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our{" "}
              {activeTab === "talent"
                ? "talent solutions"
                : activeTab === "development"
                ? "development services"
                : "innovative applications"}{" "}
              can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <button
                  className={`group text-poppins font-bold px-8 py-4 bg-gradient-to-r ${
                    activeTabData.color === "text-cyan-400"
                      ? "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      : activeTabData.color === "text-emerald-400"
                      ? "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                      : "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  } text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden`}
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
      </div>
    </section>
  );
};

export default ServicesTabsComponent;
