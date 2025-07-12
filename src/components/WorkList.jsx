import React from "react";
import { workLists, workLists2 } from "@/constants";
import { Zap, Check, Star } from "lucide-react";

const WorkList = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="worklist">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 text-sm font-medium mb-6 border border-cyan-500/30">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Solution
            </span>
            <br />
            <span className="text-white">to Your Business Growth</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our streamlined and proven process to deliver high-impact results with clarity and confidence.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative my-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 to-blue-300 transform -translate-x-1/2 z-0" />

          <div className="flex flex-col space-y-12 md:space-y-8 z-10 relative">
            {workLists2.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-center justify-center relative">
                  {/* Left Card */}
                  <div className={`hidden md:flex md:col-span-4 justify-end ${isLeft ? "" : "invisible"}`}>
                    <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-cyan-300/10 rounded-xl max-w-[380px] transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot + Lines */}
                  <div className="col-span-1 flex flex-col items-center z-10 relative">
                    <div className="relative">
                      <span className="absolute inline-flex h-8 w-8 -top-1.5 -left-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-[50%] bg-cyan-400/30"></span>
                      </span>
                      <span className="relative inline-flex rounded-[50%] h-5 w-5 bg-gradient-to-br from-cyan-400 to-blue-400 border-2 border-white shadow-lg" />

                      {index !== 0 && (
                        <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-cyan-300 to-blue-300 transform -translate-x-1/2" />
                      )}
                      {index !== workLists2.length - 1 && (
                        <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-gradient-to-t from-transparent via-cyan-300 to-blue-300 transform -translate-x-1/2" />
                      )}
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className={`hidden md:flex md:col-span-4 justify-start ${!isLeft ? "" : "invisible"}`}>
                    <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-cyan-400/10 rounded-xl max-w-[380px] transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden mt-6 px-4">
                    <div className="p-6 bg-slate-800/30 border border-cyan-300/10 rounded-xl backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-blue-300">{item.title}</h3>
                      <p className="text-slate-300 mt-2 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card Section */}
        <div className="grid md:grid-cols-3 gap-6 items-start mt-20">
          {workLists.map((item, index) => (
            <div
              key={index}
              className="px-6 py-12 bg-slate-800/40 h-full backdrop-blur-lg border border-slate-700 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                width={128}
                height={128}
                className="mb-4 mx-auto rounded-lg pointer-events-none"
              />
              <h3 className="text-xl text-center font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
