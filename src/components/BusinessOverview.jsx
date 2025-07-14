"use client";
import { Code, Cpu, Database, Shield, Star, Target, Zap } from "lucide-react";

const BusinessOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-25 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Points */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-48 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-emerald-400/30 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-300 shadow-sm">
            <Zap className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent font-semibold">
              AI-Powered Talent Matching
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-2"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font_poppins leading-tight mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              AI-Driven Technical
            </span>
            <br />
            <span className="text-gray-900">Talent Acquisition</span>
          </h2>

          <p className="text-gray-600 text-xl md:text-2xl font-normal max-w-3xl mx-auto mb-6">
            Perfect Solution to Your Business Growth
          </p>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font_avenir">
            Access top-tier developers vetted by AI-backed screening, testing, and portfolio analysis—instantly scalable
            to your needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="group p-6 bg-white border border-cyan-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl w-fit mb-4">
              <Cpu className="w-8 h-8 text-cyan-500" />
            </div>
            <h3 className="text-gray-800 font-bold text-xl mb-2">AI-Driven Precision Screening</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-Driven Precision Screening - Automated resume scoring, coding tests & AI video analysis for rapid,
              bias-reduced selection
            </p>
          </div>

          <div className="group p-6 bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-sky-100 rounded-xl w-fit mb-4">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-gray-800 font-bold text-xl mb-2">Portfolio + Technical Assessments</h3>
            <p className="text-gray-600 leading-relaxed">
              Portfolio + Technical Assessments - Candidates evaluated via skill-based tests and real-world portfolio
              reviews, ensuring quality hires
            </p>
          </div>

          <div className="group p-6 bg-white border border-teal-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl w-fit mb-4">
              <Database className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-gray-800 font-bold text-xl mb-2">Faster Time-to-Hire</h3>
            <p className="text-gray-600 leading-relaxed">
              Faster Time-to-Hire, Lower Cost - Save weeks and reduce hiring overhead with intelligent candidate
              matching
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-sky-50 border border-cyan-200 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                50%
              </div>
            </div>
            <div className="text-gray-600 font-medium">Time-to-Fill Reduction: Faster Placement</div>
          </div>

          <div className="text-center p-6 bg-sky-50 border border-blue-200 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
                +30%
              </div>
            </div>
            <div className="text-gray-600 font-medium">
              Engagement Boost: AI-personalized outreach increases candidate response rates
            </div>
          </div>

          <div className="text-center p-6 bg-sky-50 border border-emerald-200 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                <Target className="h-14 w-14 text-emerald-400" />
              </div>
            </div>
            <div className="text-gray-600 font-medium">Hiring Accuracy: Smarter matches reduce early turnover</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
