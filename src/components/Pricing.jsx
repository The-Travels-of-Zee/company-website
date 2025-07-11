import React from "react";
import { Check, Star, Zap, Shield, Users, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Intermediate Engineers",
      subtitle: "1-3 Years' Experience",
      popular: false,
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500/30 to-blue-500/30",
      icon: Users,
      roles: [
        { name: "AI Research Assistant", hourly: 12, monthly: 1800 },
        { name: "Python Developer", hourly: 10, monthly: 1300 },
        { name: "AI Engineer", hourly: 15, monthly: 2000 },
        { name: "Data Engineer (Python-based)", hourly: 14, monthly: 1900 },
        { name: "Data Scientist", hourly: 15, monthly: 2000 },
        { name: "Machine Learning Developer", hourly: 15, monthly: 2000 },
        { name: "NLP Engineer", hourly: 15, monthly: 2000 },
        { name: "Computer Vision Engineer", hourly: 15, monthly: 2000 },
        { name: "ML Ops Engineer", hourly: 15, monthly: 2000 },
        { name: "Deep Learning Engineer", hourly: 15, monthly: 2200 },
      ],
    },
    {
      title: "Senior Engineers",
      subtitle: "3-5 Years' Experience",
      popular: true,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      icon: Star,
      roles: [
        { name: "AI Research Assistant", hourly: 18, monthly: 2500 },
        { name: "Python Developer", hourly: 20, monthly: 2000 },
        { name: "AI Engineer", hourly: 20, monthly: 3000 },
        { name: "Data Engineer (Python-based)", hourly: 20, monthly: 2800 },
        { name: "Data Scientist", hourly: 22, monthly: 3000 },
        { name: "Machine Learning Developer", hourly: 22, monthly: 3000 },
        { name: "NLP Engineer", hourly: 22, monthly: 3000 },
        { name: "Computer Vision Engineer", hourly: 22, monthly: 3000 },
        { name: "ML Ops Engineer", hourly: 22, monthly: 3000 },
        { name: "Deep Learning Engineer", hourly: 23, monthly: 3200 },
      ],
    },
    {
      title: "Lead Engineers",
      subtitle: "5+ Years' Experience",
      popular: false,
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
      icon: Zap,
      roles: [
        { name: "AI Research Assistant", hourly: 22, monthly: 3200 },
        { name: "Python Developer", hourly: 25, monthly: 3000 },
        { name: "AI Engineer", hourly: 25, monthly: 4000 },
        { name: "Data Engineer (Python-based)", hourly: 26, monthly: 3800 },
        { name: "Data Scientist", hourly: 28, monthly: 4200 },
        { name: "Machine Learning Developer", hourly: 28, monthly: 4200 },
        { name: "NLP Engineer", hourly: 28, monthly: 4200 },
        { name: "Computer Vision Engineer", hourly: 28, monthly: 4200 },
        { name: "ML Ops Engineer", hourly: 28, monthly: 4200 },
        { name: "Deep Learning Engineer", hourly: 30, monthly: 4500 },
      ],
    },
  ];

  const features = [
    "AI-vetted engineers with verified portfolios",
    "Time zone aligned engineers",
    "Free QA & Project Manager (4+ hires)",
    "Weekly updates, Slack/Email/Zoom collaboration",
    "NDAs, IP protection & performance tracking",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              AI-Powered Pricing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
            <br />
            <span className="text-white">For Every Stage</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access top-tier AI and ML engineers at competitive rates. All plans include comprehensive support and
            quality assurance.
          </p>
        </div>

        {/* Pricing Cards */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-300 ${tier.popular ? "lg:scale-105" : ""}`}
              >
                <div
                  className={`relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gradient-to-r ${tier.borderGradient} hover:border-opacity-70 transition-all duration-300 transform group-hover:scale-[1.05]`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-2xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${tier.gradient} rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                        <p className="text-slate-400 text-sm">{tier.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {tier.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg"
                        >
                          <span className="text-slate-300 text-sm font-medium">{role.name}</span>
                          <div className="text-right">
                            <div className="text-white font-semibold">${role.hourly}/hr</div>
                            <div className="text-slate-400 text-xs">${role.monthly}/mo</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Features Section */}
        <div className="bg-slate-800/30 flex flex-col items-center backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">All Plans Include</h3>
            <div className="flex justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-lg">
                <div className="p-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-slate-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="mt-8">
            <button className="group font-poppins font-semibold text-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-blue-700 duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
              <span className="relative flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                More About Pricings
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
