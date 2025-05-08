import { services } from "@/constants";

const Services = () => {
  return (
    <section className="pt-16 pb-20" id="services">
      <div className="container">
        <div className="content">
          <p className="tagline_text">Our All Services</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">We Provide Best Web Design Services</h2>
        </div>

        <div className="service_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white cursor-pointer shadow-brandShadow rounded-[20px] overflow-hidden aspect-[1/1] max-w-full flex flex-col p-6"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
