import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Markdown from "react-markdown";
import { privacyPolicy } from "@/constants";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-48 pb-20">
        <div className="container">
          <h1 className="heading text-white">Privacy Policy</h1>
          <p className="sub_heading font-light text-white">Your data is safe with us.</p>
          <div className="navigation">
            <Breadcrumb />
          </div>
          <div className="mt-10 prose md:prose-lg mx-auto prose-white">
            <Markdown>{privacyPolicy}</Markdown>
          </div>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default PrivacyPolicy;
