"use client";

import React from "react";
import { workLists, workLists2 } from "@/constants";
import { Zap } from "lucide-react";

const WorkList = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-transparent" id="worklist">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-lime-100 text-emerald-700 px-6 py-3 text-sm font-medium mb-6 border border-emerald-200 rounded-full">
            <Zap className="w-4 h-4 animate-pulse text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-lime-500 to-green-500 bg-clip-text text-transparent">
              Perfect Solution
            </span>
            <br />
            <span className="text-gray-800">to Your Business Growth</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our streamlined and proven process to deliver high-impact results with clarity and confidence.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative my-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-lime-300 transform -translate-x-1/2 z-0" />

          <div className="flex flex-col space-y-12 md:space-y-8 relative z-10">
            {workLists2.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-center justify-center">
                  {/* Left Card */}
                  <div className={`hidden md:flex md:col-span-4 justify-end ${isLeft ? "" : "invisible"}`}>
                    <div className="p-6 bg-white border border-emerald-200 rounded-xl shadow-md max-w-[380px] transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="col-span-1 flex flex-col items-center z-10 relative">
                    <div className="relative">
                      <span className="absolute inline-flex h-8 w-8 -top-1.5 -left-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/30" />
                      </span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-br from-emerald-400 to-lime-400 border-2 border-white shadow" />

                      {index !== 0 && (
                        <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-emerald-300 to-lime-300 transform -translate-x-1/2" />
                      )}
                      {index !== workLists2.length - 1 && (
                        <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-gradient-to-t from-transparent via-emerald-300 to-lime-300 transform -translate-x-1/2" />
                      )}
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className={`hidden md:flex md:col-span-4 justify-start ${!isLeft ? "" : "invisible"}`}>
                    <div className="p-6 bg-white border border-emerald-200 rounded-xl shadow-md max-w-[380px] transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden mt-6 px-4">
                    <div className="p-6 bg-gray-50 border border-emerald-100 rounded-xl shadow">
                      <h3 className="text-lg font-semibold text-emerald-700">{item.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start mt-20">
          {workLists.map((item, index) => (
            <div
              key={index}
              className="px-6 py-12 bg-white h-full border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all"
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
              <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
