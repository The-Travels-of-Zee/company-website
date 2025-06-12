import { brands } from "@/constants";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <section className="relative pb-2 bg-gradient-to-r from-bgGray via-brandsBG to-bgGray overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-blueLight/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-bl from-brandOrange/6 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-brandPrimary/3 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${
            typeof window !== "undefined" ? "#003c64" : "#003c64"
          } 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* Gradient edge overlays for seamless infinite effect */}
        <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-bgGray via-bgGray/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-bgGray via-bgGray/90 to-transparent z-20 pointer-events-none" />

        {/* Main marquee container */}
        <div className="relative bg-white/40 backdrop-blur-md border-y border-white/60 shadow-lg">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brandOrange/40 to-transparent" />

          <Marquee pauseOnHover={true} gradient={false} autoFill={true} speed={50} className="py-10">
            {brands.map((imageData, index) => (
              <div key={index} className="group mx-6 md:mx-10 lg:mx-12 flex items-center justify-center">
                {/* Enhanced brand card */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-110 hover:bg-white/95 hover:border-brandOrange/30 transform hover:-translate-y-1">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/50 to-transparent" />

                  {/* Dynamic background glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brandOrange/0 via-blueLight/0 to-brandPrimary/0 group-hover:from-brandOrange/8 group-hover:via-blueLight/8 group-hover:to-brandPrimary/8 transition-all duration-500" />

                  {/* Brand logo */}
                  <img
                    src={imageData.image}
                    alt={imageData.title}
                    className="relative z-10 h-10 md:h-12 lg:h-14 w-auto max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                  />

                  {/* Elegant hover tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white px-4 py-2 rounded-xl text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-sm">
                    {imageData.title}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brandPrimary" />
                  </div>

                  {/* Subtle corner accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brandOrange/20 group-hover:border-brandOrange/60 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blueLight/20 group-hover:border-blueLight/60 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blueLight/40 to-transparent" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-8 left-16 w-2 h-2 bg-brandOrange/30 rounded-full animate-pulse" />
      <div
        className="absolute top-16 right-20 w-1.5 h-1.5 bg-blueLight/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-12 left-32 w-2.5 h-2.5 bg-brandPrimary/20 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-8 right-16 w-1 h-1 bg-brandOrange/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  );
};

export default Brand;
