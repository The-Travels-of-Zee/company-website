"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "@/constants";

const TestimonialList = () => {
  return (
    <section className="pt-16 pb-20 bg-brandsBG" id="testimonials">
      <div className="container">
        <div className="content">
          <p className="tagline_text">Testimonial List</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Our Happy Clients</h2>
        </div>

        {/* Swiper wrapper */}
        <div className="mt-[50px]">
          <Swiper
            // Register modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
              768: { slidesPerView: 1, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
              1024: { slidesPerView: 1, slidesOffsetBefore: 64, slidesOffsetAfter: 64 },
            }}
            a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial_card my-10 bg-white shadow-brandShadow md:hover:shadow-brandOrange transition-all duration-300 px-6 py-12 rounded-[20px] md:w-[90%] flex flex-col items-center">
                  <div className="image_container">
                    <img
                      className="rounded-[20px] w-[100px] h-[100px] object-cover"
                      src={t.image}
                      alt={`Photo of ${t.name}`}
                    />
                  </div>
                  <p className="font-poppins font-normal text-[#9D9D9D] capitalize text-center mt-10 w-[70%]">
                    "{t.msg}"
                  </p>
                  <h4 className="font-poppins font-semibold text-brandOrange text-[18px] text-center mt-7">
                    {t.project_name}
                  </h4>
                  <p className="font-poppins font-normal text-black mt-[10px] text-center">
                    {t.name}, {t.designation}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
