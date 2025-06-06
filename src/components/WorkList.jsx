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

          <div className="flex flex-col space-y-8 md:space-y-4">
            {workLists2.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-center justify-center relative">
                  {/* Left card */}
                  <div className={`hidden md:flex md:col-span-4 justify-end ${isLeft ? "" : "invisible"}`}>
                    <div className="relative">
                      <div className="bg-white w-[350px] h-[140px] p-6 rounded-xl shadow-md flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </div>
                      {/* Connector line to dot */}
                      <div className="absolute top-1/2 right-[-32px] w-[32px] h-[2px] bg-brandOrange transform -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="col-span-1 flex flex-col items-center z-10">
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandOrange opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-brandOrange border-4 border-white shadow-md"></span>
                    </span>
                  </div>

                  {/* Right card */}
                  <div className={`hidden md:flex md:col-span-4 justify-start ${!isLeft ? "" : "invisible"}`}>
                    <div className="relative">
                      <div className="bg-white w-[350px] h-[140px] p-6 rounded-xl shadow-md flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </div>
                      {/* Connector line to dot */}
                      <div className="absolute top-1/2 left-[-32px] w-[32px] h-[2px] bg-brandOrange transform -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Mobile fallback card */}
                  <div className="md:hidden mt-4 text-center px-4">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-semibold text-brandOrange">{item.title}</h3>
                      <p className="mt-2 text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center mt-11">
          {workLists.map((item) => (
            <div
              key={item.title}
              className="py-[24px] pb-10 px-[30px] card md:max-w-[380px]  hover:shadow-bgBlueLight transition-all duration-300 shadow-brandShadow rounded-[20px] bg-white"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                width={128}
                height={128}
                playsInline
                className="pointer-events-none select-none"
              />

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
