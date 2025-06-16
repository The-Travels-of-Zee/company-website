import siteMetadata from "@/data/siteMetadata";
import CustomNewsletterForm from "./CustomNewsletterForm";

const Subscribe = () => {
  return (
    <section className="pb-36 pt-24 bg-brandsBG relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block">
            <p className="tagline_text tracking-wider opacity-90 mb-1">SUBSCRIBE</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mx-auto"></div>
          </div>

          <h2 className="sub_heading max-w-[500px] mx-auto text-center capitalize mt-8 leading-tight">
            Subscribe to get the latest news about us
          </h2>

          <p className="font_avenir text-[#8B8B8B] font-medium capitalize text-center mt-5 max-w-md mx-auto leading-relaxed opacity-80">
            Please drop your email below to get daily update about what we do
          </p>

          {siteMetadata.newsletter.provider && (
            <div className="flex items-center justify-center pt-8">
              <div className="w-full max-w-md">
                <CustomNewsletterForm title="Subscribe" apiUrl="/api/newsletter" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
