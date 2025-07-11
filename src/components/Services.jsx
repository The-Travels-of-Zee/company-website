import { services } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <section
      className="pt-20 pb-24 relative overflow-hidden"
      id="services"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm text-emerald-300 px-6 py-2 rounded-full text-sm font-medium border border-emerald-500/30 mb-6">
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">We Provide the Perfect Solution</h2>
          <p className="text-slate-400 text-lg">Accelerate your business with high-impact development services.</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group py-8 px-7 h-[600px] flex flex-col bg-slate-800/50 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 rounded-xl shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Card number */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-md" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-emerald-400 uppercase mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-6">{service.des}</p>

              {/* Images */}
              <div className="flex justify-center gap-3 mb-6">
                {service.images.map((image, index) => (
                  <div key={index} className="relative w-full group/img">
                    <img
                      src={image}
                      alt="services"
                      className="rounded-xl w-full aspect-[5/4] object-cover shadow-md group-hover:shadow-lg border-2 border-white/10 group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/10 to-transparent rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={service.link} target="_blank" rel="noopener noreferrer" aria-label="Learn More">
                <button className="group/btn relative w-full font-semibold rounded-xl border-2 border-emerald-400 bg-gradient-to-r from-transparent to-transparent hover:from-emerald-400 hover:to-teal-500 hover:text-white px-4 py-3 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-teal-500/0 group-hover/btn:from-emerald-400/20 group-hover/btn:via-teal-400/10 group-hover/btn:to-teal-500/20 transition-all duration-500" />
                  <span className="relative flex items-center justify-center gap-2 text-emerald-300 group-hover/btn:text-white transition-colors">
                    Learn More
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500/10 group-hover/btn:bg-white/20 rounded-full transition-transform group-hover/btn:translate-x-1">
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-transparent to-teal-400/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
