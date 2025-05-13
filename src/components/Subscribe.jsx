import siteMetadata from "@/data/siteMetadata";
import CustomNewsletterForm from "./CustomNewsletterForm";

const Subscribe = () => {
  return (
    <section className="pb-36 pt-24 bg-brandsBG">
      <div className="container">
        <p className="tagline_text text-center">SUBSCRIBE</p>
        <h2 className="sub_heading max-w-[500px] mx-auto text-center capitalize mt-5">
          Subscribe to get the latest news about us
        </h2>
        <p className="font_avenir text-[#8B8B8B] font-medium capitalize text-center mt-1">
          Please drop your email below to get daily update about what we do
        </p>
        {siteMetadata.newsletter.provider && (
          <div className="flex items-center justify-center pt-4">
            <CustomNewsletterForm title="Subscribe" apiUrl="/api/newsletter" />
          </div>
        )}
      </div>
    </section>
  );
};
export default Subscribe;
