"use client";
import Link from "next/link";
import Brand from "./Brand";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Database, Shield, Star, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 sm:pt-36 md:pt-40 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/6 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-48 w-2 h-2 bg-emerald-400/30 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="content_container mt-5 md:mt-0 px-2 transform hover:scale-[102%] transition-all duration-700">
            {/* Enhanced Badge with AI focus */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium sm:mb-6 border border-cyan-500/30 shadow-lg">
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                AI-Powered Talent Matching
              </span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-2"></div>
            </div>

            <h1 className="pt-5 mb-4 md:mt-8 md:pt-0 lg:text-5xl md:text-4xl text-3xl font-bold font_poppins max-w-[600px] text-left leading-tight space-y-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Where Ideas Travel
              </span>
              <div className="text-white">from Vision to Reality</div>
            </h1>
            <p className="mt-10 mb-14 text-slate-300 text-lg md:text-xl lg:text-2xl font-normal">
              Ready to embark on this journey? Let’s create something amazing together
            </p>

            {/* <p className="font_avenir text-lg font-normal text-slate-300 max-w-[472px] text-left mt-6 leading-relaxed">
        Access top-tier developers vetted by AI-backed screening, testing, and portfolio analysis, instantly
        scalable to your needs.
      </p> */}

            {/* Enhanced Feature Points with tech icons */}
            {/* <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4 p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
          <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <span className="text-white font-medium">AI-Driven Precision Screening</span>
            <p className="text-slate-400 text-sm">
              Automated resume scoring, coding tests & AI video analysis for rapid
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
          <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
            <Code className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <span className="text-white font-medium">Portfolio + Technical Assessments</span>
            <p className="text-slate-400 text-sm">
              Candidates evaluated via skill-based tests and real-world portfolio reviews
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
          <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg">
            <Database className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="text-white font-medium">Faster Time-to-Hire</span>
            <p className="text-slate-400 text-sm">
              Lower Cost - reduced hiring overhead with intelligent candidate matching
            </p>
          </div>
        </div>
      </div> */}

            <div className="flex flex-col sm:flex-row gap-4 mt-18">
              <Link href="/#contact">
                <button className="group font-poppins font-semibold text-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-blue-700 duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                  <span className="relative flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            {/* Enhanced Image with tech overlay */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl animate-pulse"></div>
              <Image
                className="relative z-10 w-auto mx-auto size-[400px] md:size-[480px] lg:size-[580px] object-cover drop-shadow-2xl filter contrast-110 brightness-110"
                src="/static/digital-nomad-hero-img.svg"
                alt="AI-powered talent acquisition"
                width={680}
                height={480}
              />

              {/* Enhanced floating tech elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-sm animate-pulse delay-300"></div>
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-r from-emerald-400/35 to-teal-500/35 rounded-full blur-sm animate-pulse delay-600"></div>

              {/* Circuit pattern overlay */}
              <div className="absolute top-8 right-8 w-24 h-24 opacity-30">
                <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg transform rotate-45 animate-spin-slow"></div>
              </div>
            </div>

            {/* Enhanced floating stats cards with tech styling */}
            <div className="scale-75 md:scale-100 absolute top-8 -left-4 z-10 bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  98%
                </div>
              </div>
              <div className="text-sm text-slate-400">AI Match Accuracy</div>
            </div>

            <div className="scale-75 md:scale-100 absolute bottom-14 z-10 right-14 bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {"<1h"}
                </div>
              </div>
              <div className="text-sm text-slate-400">Avg. Processing Time</div>
            </div>

            <div className="scale-75 md:scale-100 absolute top-1/3 -right-4 z-10 bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  300+
                </div>
              </div>
              <div className="text-sm text-slate-400">Elite Developers</div>
            </div>
          </div>
        </div>

        <div className="brand_container mt-24">
          <Brand />
        </div>
      </div>

      {/* Add custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
