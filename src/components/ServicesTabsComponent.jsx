"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  UserCheck,
  Search,
  Award,
  Briefcase,
  Monitor,
  Database,
  Cloud,
  Settings,
  Rocket,
  Target,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const ServicesTabsComponent = () => {
  const [activeTab, setActiveTab] = useState("talent");

  const tabs = [
    {
      id: "talent",
      label: "Talent Agency",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      shadowColor: "shadow-lg shadow-blue-200",
    },
    {
      id: "development",
      label: "Development Services",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      shadowColor: "shadow-lg shadow-green-200",
    },
    {
      id: "apps",
      label: "In-House Apps",
      icon: Smartphone,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      shadowColor: "shadow-lg shadow-purple-200",
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="feature_project_content mb-12">
          <p className="tagline_text text-brandOrange">Our Comprehensive</p>
          <h2 className="sub_heading mt-6 max-w-[900px] text-gray-800">
            Discover our range of professional services designed to accelerate your business growth and digital
            transformation.
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-[16px] font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `${tab.bgColor} ${tab.color} ${tab.borderColor} border-2 shadow-brandShadow`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
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
            className={`${activeTabData.bgColor} ${activeTabData.shadowColor} rounded-[24px] p-8 mb-8 border ${activeTabData.borderColor}`}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
              <p className={`text-xl font-semibold ${activeTabData.color} mb-4`}>{currentContent.subtitle}</p>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">{currentContent.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-[16px] p-6 shadow-brandShadow">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
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
                className={`bg-white rounded-[16px] p-8 border border-gray-100 transition-all duration-300 ${
                  activeTab === "talent"
                    ? "shadow-lg shadow-blue-200"
                    : activeTab === "development"
                    ? "shadow-lg shadow-green-200"
                    : "shadow-lg shadow-purple-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${activeTabData.bgColor} rounded-[16px] flex items-center justify-center`}>
                    {service.icon && <service.icon className={`w-7 h-7 ${activeTabData.color}`} />}

                    {service.img && <img src={service.img} className={`w-9 h-9 ${activeTabData.color}`} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    {service.status && (
                      <span
                        className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${
                          service.status === "Live Product"
                            ? "bg-green-100 text-green-700"
                            : service.status === "Beta Release"
                            ? "bg-yellow-100 text-yellow-700"
                            : service.status === "In Development"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
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
            className={`${activeTabData.bgColor} rounded-[24px] p-8 text-center border ${activeTabData.borderColor}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
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
                  className={`px-8 py-4 bg-white ${activeTabData.color} rounded-[12px] font-semibold hover:shadow-brandShadow transition duration-300 flex items-center justify-center gap-2`}
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              {/* <Link href="/portfolio" className="inline-block">
                <button className="px-8 py-4 bg-white/50 text-gray-700 rounded-[12px] font-semibold hover:bg-white/70 transition duration-300 border border-gray-200">
                  {currentContent.ctaText}
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsComponent;
