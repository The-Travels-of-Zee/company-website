import { brands } from "@/constants";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-3xl transform -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-400/6 to-transparent rounded-full blur-3xl transform -translate-y-1/2 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-400/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
      </div>

      {/* Advanced tech grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-1000" />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.1)" />
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="75%" y1="25%" x2="67%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Enhanced gradient edge overlays */}
        <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-slate-900/50 via-slate-900/20 to-transparent z-20 pointer-events-none" />

        {/* Main marquee container with tech styling */}
        <div className="relative bg-slate-800/40 backdrop-blur-lg border-y border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          {/* Top accent line with animation */}
          <div className="absolute top-0 left-0 w-full h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />
          </div>

          {/* Trusted by AI-powered companies header */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-slate-800/90 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Trusted by AI-Powered Companies</span>
              </div>
            </div>
          </div>

          <Marquee pauseOnHover={true} gradient={false} autoFill={true} speed={40} className="py-6">
            {brands.map((imageData, index) => (
              <div key={index} className="group mx-6 md:mx-10 lg:mx-12 flex items-center justify-center">
                {/* Enhanced AI-themed brand card */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-110 hover:bg-slate-800/80 hover:border-cyan-500/40 transform hover:-translate-y-2">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-transparent group-hover:to-purple-500/20 transition-all duration-700" />

                  {/* Tech corner indicators */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400/80 transition-all duration-300" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/30 group-hover:border-purple-400/80 transition-all duration-300" />

                  {/* Scanning line effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Brand logo with enhanced effects */}
                  <img
                    src={imageData.image}
                    alt={imageData.title}
                    className="relative z-10 h-10 md:h-12 lg:h-14 w-auto max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain invert filter grayscale brightness-10 contrast-110 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-110 group-hover:contrast-120 transition-all duration-500 group-hover:drop-shadow-lg"
                  />

                  {/* AI-styled hover tooltip */}
                  <div className="absolute top-0 left-1/2 z-10 transform -translate-x-1/2 bg-white border border-cyan-500/50 text-cyan-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                      {imageData.title}
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-200" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                  </div>

                  {/* Data flow indicators */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400/0 rounded-full group-hover:bg-cyan-400/60 transition-all duration-300 animate-pulse" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400/0 rounded-full group-hover:bg-purple-400/60 transition-all duration-300 animate-pulse delay-150" />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Bottom accent line with animation */}
          <div className="absolute bottom-0 left-0 w-full h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse delay-500" />
          </div>
        </div>
      </div>

      {/* Enhanced floating tech elements */}
      <div className="absolute top-8 left-16 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
      <div
        className="absolute top-16 right-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-400/50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-12 left-32 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-8 right-16 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"
        style={{ animationDelay: "0.5s" }}
      />

      {/* AI processing indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200" />
          <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-400" />
        </div>
      </div>

      {/* Quantum dots pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse delay-600" />
      </div>
    </section>
  );
};

export default Brand;
