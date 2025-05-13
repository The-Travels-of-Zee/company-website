import Link from "next/link";
import Brand from "./Brand";

const Hero = () => {
  return (
    <section className=" hero_bg pt-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto ">
          <div className="content_container mt-5 md:mt-0">
            <h1 className="sm:leading-[65px] pt-10 md:pt-0 leading-[50px] text-4xl sm:text-[50px] font-bold font_poppins max-w-[550px] text-left ">
              Where Ideas Travel from Vision to Reality
            </h1>
            <p className="font_avenir text-lg font-normal text-black max-w-[472px] text-left mt-3 sm:mt-0">
              Ready to embark on this journey? Let’s create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-5 md:mt-[10px]">
              <button className="font-poppins font-normal text-lg border-2 border-brandPrimary text-white mt-5 md:mt-[50px] bg-brandPrimary px-[24px] py-4 rounded-[16px] hover:bg-transparent hover:text-brandPrimary duration-300">
                <Link href="#contact">Get Started</Link>
              </button>
              {/* <button className="font-poppins font-normal text-lg text-brandPrimary border border-brandPrimary mt-5 md:mt-[50px] px-[30px] py-5 rounded-[16px] hover:bg-brandPrimary/10 duration-300">
                Learn More
              </button> */}
            </div>
          </div>
          <img className="w-auto mx-auto size-[400px] md:size-[480px] lg:size-[680px] object-cover" src="./static/digital-nomad-hero-img.svg" alt="hero image" />
        </div>
        <div className="brand_container">
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default Hero;
