import { services } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-10 relative overflow-hidden bg-transparent" id="services">
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium border border-emerald-200 mb-6">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Provide the Perfect Solution</h2>
          <p className="text-gray-600 text-lg">Accelerate your business with high-impact development services.</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group py-8 px-7 h-[600px] flex flex-col bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-300 rounded-xl shadow-sm hover:shadow-lg relative overflow-hidden hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Card number */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-md" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-emerald-600 uppercase mb-3 group-hover:text-emerald-800 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">{service.des}</p>

              {/* Images */}
              <div className="flex justify-center gap-3 mb-6">
                {service.images.map((image, index) => (
                  <div key={index} className="relative w-full group/img">
                    <img
                      src={image}
                      alt="services"
                      className="rounded-xl w-full aspect-[5/4] object-cover shadow-sm border border-gray-100 group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-200/20 to-transparent rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={service.link} target="_blank" rel="noopener noreferrer" aria-label="Learn More">
                <button className="group/btn relative w-full font-semibold rounded-xl border border-emerald-300 bg-white hover:bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-3 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/10 to-teal-100/0 group-hover/btn:from-emerald-100/20 group-hover/btn:via-teal-100/10 group-hover/btn:to-teal-100/20 transition-all duration-500" />
                  <span className="relative flex items-center justify-center gap-2 text-emerald-600 group-hover/btn:text-white transition-colors">
                    Learn More
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 group-hover/btn:bg-white/20 rounded-full transition-transform group-hover/btn:translate-x-1">
                      <img
                        src="/icons/arrow.png"
                        alt="arrow icon"
                        className="w-3 h-3 group-hover/btn:invert transition-transform group-hover/btn:scale-110"
                      />
                    </div>
                  </span>
                </button>
              </Link>

              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100 via-transparent to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
