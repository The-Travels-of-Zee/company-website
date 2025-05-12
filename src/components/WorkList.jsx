import { workLists, workLists2 } from "@/constants";

const WorkList = () => {
  return (
    <section className="py-16 bg-brandsBG" id="worklist">
      <div className="container">
        <div className="section_content">
          <p className="mb-4 tagline_text">Our Process</p>
          <h2 className="sub_heading max-w-[500px]">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div className="relative my-20">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brandOrange transform -translate-x-1/2 z-0" />

          <div className="flex flex-col space-y-16">
            {workLists2.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-center relative">
                  {/* Left side (on desktop only) */}
                  <div className={`hidden md:block md:col-span-4 ${isLeft ? "text-right pr-8" : ""}`}>
                    {isLeft && (
                      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot + content (mobile & desktop center) */}
                  <div className="col-span-1 flex flex-col items-center relative z-10">
                    <div className="w-5 h-5 bg-brandOrange rounded-full border-4 border-white shadow-md" />
                    {/* Mobile content (always shown on small screens) */}
                    <div className="md:hidden mt-4 text-center px-4">
                      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right side (on desktop only) */}
                  <div className={`hidden md:block md:col-span-4 ${!isLeft ? "text-left pl-8" : ""}`}>
                    {!isLeft && (
                      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center mt-11">
          {workLists.map((item) => (
            <div
              key={item.name}
              className="py-[24px] pb-10 px-[30px] card md:max-w-[380px]  hover:shadow-bgBlueLight transition-all duration-300 shadow-brandShadow rounded-[20px] bg-white"
            >
              <video src={item.video} autoPlay loop muted width={128} height={128} />
              <h3 className="font-poppins font-semibold text-2xl text-left text-black mt-4">{item.title}</h3>
              <p className="font_avenir font-normal text-lg text-black mt-4">{item.desc}</p>
              {/* <button className="font_avenir text-lg font-normal rounded-lg border-2 border-brandOrange bg-transparent hover:bg-brandOrange  duration-300 px-3 py-[10px] mt-11">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src="/icons/arrow.png" alt="icon" />
                </span>
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
