"use client";
import { Code, Cpu, Database, Shield, Star, ZapIcon } from "lucide-react";

const BusinessOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/6 to-pink-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-48 right-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-emerald-400/30 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 shadow-lg">
            <ZapIcon className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              AI-Powered Talent Matching
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-2"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font_poppins leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Driven Technical
            </span>
            <br />
            <span className="text-white">Talent Acquisition</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-xl md:text-2xl font-normal max-w-3xl mx-auto mb-8">
            Perfect Solution to Your Business Growth
          </p>

          {/* Description */}
          <p className="font_avenir text-lg font-normal text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Access top-tier developers vetted by AI-backed screening, testing, and portfolio analysis, instantly
            scalable to your needs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
              <Cpu className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">AI-Driven Precision Screening</h3>
            <p className="text-slate-400 leading-relaxed">
              Automated resume scoring, coding tests & AI video analysis for rapid candidate evaluation and selection.
            </p>
          </div>

          <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Portfolio + Technical Assessments</h3>
            <p className="text-slate-400 leading-relaxed">
              Candidates evaluated via comprehensive skill-based tests and real-world portfolio reviews for quality
              assurance.
            </p>
          </div>

          <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
              <Database className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Faster Time-to-Hire</h3>
            <p className="text-slate-400 leading-relaxed">
              Lower cost and reduced hiring overhead with intelligent candidate matching and streamlined processes.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                99.2%
              </div>
            </div>
            <div className="text-slate-400 font-medium">AI Match Accuracy</div>
          </div>

          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                4.8h
              </div>
            </div>
            <div className="text-slate-400 font-medium">Avg. Processing Time</div>
          </div>

          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                500+
              </div>
            </div>
            <div className="text-slate-400 font-medium">Elite Developers</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <ZapIcon className="w-5 h-5 text-cyan-400" />
            <span className="font-medium">Instant Scaling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
