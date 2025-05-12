import { services } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <section className="pt-16 pb-20" id="services">
      <div className="container">
        <div className="content">
          <p className="tagline_text">Our All Services</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">We Provide Best In Class Services</h2>
        </div>

        <div className="service_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white py-[24px] pb-10 px-[30px] h-[520px] md:h-[480px] shadow-brandShadow hover:shadow-brandOrange transition-all duration-300 rounded-[20px] overflow-hidden aspect-[1/1] max-w-full flex flex-col p-6"
            >
              {/* Title & Description */}
              <div className="flex flex-col flex-1">
                <h4 className="font-poppins font-semibold text-[22px] text-black uppercase">{service.title}</h4>
                <p className="font-poppins font-normal text-[#9D9D9D] text-sm mt-3 line-clamp-3">{service.des}</p>
              </div>

              {/* Images Section */}
              <div className="mt-6 space-y-3">
                <div className="flex gap-3">
                  <img className="rounded-lg w-2/3 h-[90px] object-cover" src={service.image1} alt="services image" />
                  <img className="rounded-lg w-1/3 h-[90px] object-cover" src={service.image2} alt="services image" />
                </div>

                <div className="flex gap-3">
                  <img className="rounded-lg w-1/3 h-[120px] object-cover" src={service.image3} alt="services image" />
                  <img className="rounded-lg w-2/3 h-[120px] object-cover" src={service.image4} alt="services image" />
                </div>
                <Link href={service.link} target="_blank" rel="noopener noreferrer">
                  <button className="font_avenir text-lg font-normal rounded-lg border-2 border-brandOrange bg-transparent hover:bg-brandOrange  duration-300 px-3 py-[10px] mt-11">
                    <span className="flex items-center gap-2">
                      Learn More
                      <img src="/icons/arrow.png" alt="icon" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
