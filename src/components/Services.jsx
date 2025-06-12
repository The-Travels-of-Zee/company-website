import { services } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-brandsBG to-white relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blueLight/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-brandOrange/8 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="section_content">
          <p className="mb-4 tagline_text">Our Process</p>
          <h2 className="sub_heading max-w-[500px]">We provide the Perfect Solution to your business growth</h2>
        </div>
        {/* <div className="content text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blueLight/20 to-brandOrange/20 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-brandOrange rounded-full animate-pulse" />
            <p className="tagline_text bg-gradient-to-r from-brandPrimary to-blueLight bg-clip-text text-transparent font-semibold">
              Our All Services
            </p>
            <div className="w-2 h-2 bg-blueLight rounded-full animate-pulse" />
          </div>

          <h2 className="sub_heading mt-4 max-w-[600px] mx-auto bg-gradient-to-r from-brandPrimary via-brandSecondary to-brandPrimary bg-clip-text text-transparent">
            We Provide Best-in-Class Services
          </h2>

          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-brandOrange to-transparent w-32" />
            <div className="w-3 h-3 bg-brandOrange rounded-full mx-4 shadow-lg" />
            <div className="h-px bg-gradient-to-r from-transparent via-blueLight to-transparent w-32" />
          </div>
        </div> */}

        <div className="service_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white/80 backdrop-blur-sm py-8 px-7 h-[440px] hover:shadow-brandOrange transition-all duration-300 shadow-brandShadow border border-white/50 hover:border-brandOrange/30 rounded-lg overflow-hidden aspect-[1/1] max-w-full flex flex-col relative transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Card number indicator */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-brandOrange to-brandOrange/80 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Decorative top border */}
              {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blueLight via-brandOrange to-blueLight" /> */}

              {/* Title & Description */}
              <div className="flex flex-col flex-1 relative">
                {/* Service icon placeholder - you can replace with actual icons */}
                <div className="w-12 h-12 bg-gradient-to-br from-brandOrange/20 to-blueLight/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-brandOrange to-blueLight rounded-md" />
                </div>

                <h3 className="font-poppins font-bold text-xl text-brandPrimary uppercase mb-3 group-hover:text-brandOrange transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                <p className="font-poppins font-normal text-brandSecondary/80 text-sm leading-relaxed line-clamp-3 mb-6">
                  {service.des}
                </p>
              </div>

              {/* Images Section - Enhanced */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="relative w-1/2 group/img">
                  <img
                    className="rounded-xl w-full aspect-[5/4] object-cover shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-white/50 group-hover/img:scale-105"
                    src={service.image2}
                    alt="services image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandPrimary/20 to-transparent rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="relative w-1/2 group/img">
                  <img
                    className="rounded-xl w-full aspect-[5/4] object-cover shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-white/50 group-hover/img:scale-105"
                    src={service.image3}
                    alt="services image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandOrange/20 to-transparent rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <Link href={service.link} target="_blank" rel="noopener noreferrer" aria-label="Learn More">
                <button className="group/btn relative w-full font_avenir text-base font-semibold rounded-xl border-2 border-brandOrange bg-gradient-to-r from-transparent to-transparent hover:from-brandOrange hover:to-brandOrange/90 hover:text-white duration-500 px-4 py-3 overflow-hidden">
                  {/* Button background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/0 via-brandOrange/5 to-brandOrange/0 group-hover/btn:from-brandOrange/20 group-hover/btn:via-brandOrange/10 group-hover/btn:to-brandOrange/20 transition-all duration-500" />

                  <span className="relative flex items-center justify-center gap-3 text-brandOrange group-hover/btn:text-white transition-colors duration-300">
                    Learn More
                    <div className="flex items-center justify-center w-6 h-6 bg-brandOrange/10 group-hover/btn:bg-white/20 rounded-full transition-all duration-300 group-hover/btn:translate-x-1">
                      <img
                        src="/icons/arrow.png"
                        alt="icon"
                        className="w-3 h-3 group-hover/btn:invert transition-all duration-300 group-hover/btn:scale-110"
                      />
                    </div>
                  </span>
                </button>
              </Link>

              {/* Subtle card glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brandOrange/0 via-transparent to-blueLight/0 group-hover:from-brandOrange/5 group-hover:to-blueLight/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
