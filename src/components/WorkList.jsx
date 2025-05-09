import { workLists } from "@/constants";
import { TiTick } from "react-icons/ti";

const WorkList = () => {
  return (
    <section className="py-16 bg-white" id="worklist">
      <div className="container">
        <div className="section_content">
          <p className="mb-4 tagline_text">Work List</p>
          <h2 className="sub_heading max-w-[500px]">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div className="grid md:grid-cols-3 items-center mt-11">
          {workLists.map((item) => (
            <div
              key={item.name}
              className="py-[24px] px-[30px] mb-6 card md:max-w-[380px]  hover:shadow-bgBlueLight transition-all duration-300 shadow-brandShadow rounded-[20px] bg-white"
            >
              <video src={item.video} autoPlay loop muted width={128} height={128} />
              <h3 className="font-poppins font-semibold text-2xl text-left text-black mt-4">{item.title}</h3>
              <p className="font_avenir font-normal text-lg text-black mt-4">{item.desc}</p>
              <button className="font_avenir text-lg font-normal rounded-lg border-2 border-brandOrange bg-transparent hover:bg-brandOrange  duration-300 px-3 py-[10px] mt-11">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src="/icons/arrow.png" alt="icon" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
