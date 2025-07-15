"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MessageCircle } from "lucide-react";

const TestimonialList = ({ activeTab = "talent", testimonials }) => {
  const themes = {
    talent: {
      primary: "from-cyan-500 to-blue-600",
      secondary: "from-cyan-50 to-blue-50",
      accent: "text-cyan-600",
      border: "border-cyan-200",
      shadow: "shadow-cyan-300/30",
      focus: "focus:ring-cyan-200 focus:border-cyan-300",
      hover: "hover:border-cyan-400",
      gradient: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
      ping: "from-cyan-200 to-blue-200",
      textGradient: "from-cyan-500 to-blue-500",
    },
    development: {
      primary: "from-emerald-500 to-teal-600",
      secondary: "from-emerald-50 to-teal-50",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      shadow: "shadow-emerald-300/30",
      focus: "focus:ring-emerald-200 focus:border-emerald-300",
      hover: "hover:border-emerald-400",
      gradient: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
      ping: "from-emerald-200 to-teal-200",
      textGradient: "from-emerald-500 to-teal-500",
    },
    apps: {
      primary: "from-purple-500 to-pink-600",
      secondary: "from-purple-50 to-pink-50",
      accent: "text-purple-600",
      border: "border-purple-200",
      shadow: "shadow-purple-300/30",
      focus: "focus:ring-purple-200 focus:border-purple-300",
      hover: "hover:border-purple-400",
      gradient: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      ping: "from-purple-200 to-pink-200",
      textGradient: "from-purple-500 to-pink-500",
    },
  };

  const currentTheme = themes[activeTab] || themes.talent;

  return (
    <section className="py-10 bg-transparent relative overflow-hidden" id="testimonials">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentTheme.ping} ${currentTheme.accent} px-6 py-3 rounded-full text-sm font-medium mb-6 border ${currentTheme.border}`}
          >
            <MessageCircle className={`w-5 h-5 animate-pulse ${currentTheme.accent}`} />
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              Our Happy Clients
            </span>
            <br />
            <span className="text-gray-800">Success Stories</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who have transformed their businesses with our AI and ML talent solutions.
          </p>
        </div>

        {/* Swiper wrapper */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet bg-gray-300",
              bulletActiveClass: `swiper-pagination-bullet-active ${currentTheme.accent}`,
            }}
            breakpoints={{
              640: { slidesPerView: 1, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
              768: { slidesPerView: 2, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
              1024: { slidesPerView: 3, slidesOffsetBefore: 64, slidesOffsetAfter: 64 },
            }}
            a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`testimonial_card my-10 bg-white border ${currentTheme.border} ${currentTheme.hover} transition-all duration-300 px-6 py-12 rounded-2xl flex flex-col items-center group hover:shadow-md`}
                >
                  <div className="image_container mb-6">
                    <img
                      className={`rounded-2xl w-[100px] h-[100px] object-cover border-2 border-gray-200 group-hover:${currentTheme.border} transition-all duration-300`}
                      src={t.image}
                      alt={`Photo of ${t.name}`}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between text-center">
                    <p className="font-poppins font-normal text-gray-700 text-center mb-8 leading-relaxed">"{t.msg}"</p>

                    <div>
                      <p
                        className={`font-poppins font-semibold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent text-[18px] text-center mb-2`}
                      >
                        {t.project_name}
                      </p>
                      <p className="font-poppins font-normal text-gray-500 text-center">
                        {t.name}, {t.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className={`swiper-button-prev !text-2xl after:!content-['←'] !-left-10 !top-2/3 !transform !-translate-y-1/2 !w-12 !h-12 !bg-white !border ${currentTheme.border} !rounded-full !flex !items-center !justify-center hover:!bg-opacity-50 hover:!border-opacity-80 ${currentTheme.accent} transition-all duration-300`}
          ></div>
          <div
            className={`swiper-button-next !text-2xl after:!content-['→'] !-right-10 !top-2/3 !transform !-translate-y-1/2 !w-12 !h-12 !bg-white !border ${currentTheme.border} !rounded-full !flex !items-center !justify-center hover:!bg-opacity-50 hover:!border-opacity-80 ${currentTheme.accent} transition-all duration-300`}
          ></div>

          {/* Pagination */}
          <div className="swiper-pagination !bottom-0 !relative !mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
