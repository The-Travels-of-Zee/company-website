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

          <div className="flex flex-col space-y-12 md:space-y-8">
            {workLists2.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-center justify-center relative group">
                  {/* Left card */}
                  <div className={`hidden md:flex md:col-span-4 justify-end ${isLeft ? "" : "invisible"}`}>
                    <div className="relative transform transition-all duration-300 hover:scale-105">
                      <div className="bg-gradient-to-br from-white to-brandsBG w-[380px] h-[160px] p-7 rounded-2xl shadow-lg hover:shadow-xl border border-blueLight/20 backdrop-blur-sm relative overflow-hidden group-hover:border-brandOrange/30 transition-all duration-300">
                        {/* Decorative corner element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brandOrange/10 to-transparent rounded-bl-3xl" />

                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
                          <div className="w-12 h-1 bg-gradient-to-r from-brandOrange to-blueLight rounded-full mb-3" />
                          <h3 className="text-xl font-bold text-brandPrimary mb-2 group-hover:text-brandOrange transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-brandSecondary/80 leading-relaxed text-sm">{item.desc}</p>
                        </div>

                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-brandPrimary to-blueLight" />
                      </div>

                      {/* Enhanced connector line */}
                      <div className="absolute top-1/2 right-[-40px] w-[40px] h-[3px] bg-gradient-to-r from-brandOrange to-blueLight transform -translate-y-1/2 rounded-full shadow-sm" />
                      <div className="absolute top-1/2 right-[-35px] w-[30px] h-[1px] bg-white/60 transform -translate-y-1/2 rounded-full" />
                    </div>
                  </div>

                  {/* Enhanced center dot */}
                  <div className="col-span-1 flex flex-col items-center z-20 relative">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <span className="absolute inline-flex h-8 w-8 -top-1.5 -left-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandOrange/40 opacity-75"></span>
                      </span>

                      {/* Main dot */}
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-br from-brandOrange to-brandOrange/80 border-3 border-white shadow-lg ring-4 ring-blueLight/20">
                        <span className="absolute inset-0.5 rounded-full bg-white/30"></span>
                      </span>

                      {/* Vertical line segments */}
                      {index !== 0 && (
                        <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-blueLight/60 to-brandOrange transform -translate-x-1/2" />
                      )}
                      {index !== workLists2.length - 1 && (
                        <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-gradient-to-t from-transparent via-blueLight/60 to-brandOrange transform -translate-x-1/2" />
                      )}
                    </div>
                  </div>

                  {/* Right card */}
                  <div className={`hidden md:flex md:col-span-4 justify-start ${!isLeft ? "" : "invisible"}`}>
                    <div className="relative transform transition-all duration-300 hover:scale-105">
                      <div className="bg-gradient-to-bl from-white to-brandsBG w-[380px] h-[160px] p-7 rounded-2xl shadow-lg hover:shadow-xl border border-blueLight/20 backdrop-blur-sm relative overflow-hidden group-hover:border-brandOrange/30 transition-all duration-300">
                        {/* Decorative corner element */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blueLight/10 to-transparent rounded-br-3xl" />

                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
                          <div className="w-12 h-1 bg-gradient-to-r from-blueLight to-brandOrange rounded-full mb-3" />
                          <h3 className="text-xl font-bold text-brandPrimary mb-2 group-hover:text-brandOrange transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-brandSecondary/80 leading-relaxed text-sm">{item.desc}</p>
                        </div>

                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5 bg-gradient-to-l from-brandPrimary to-blueLight" />
                      </div>

                      {/* Enhanced connector line */}
                      <div className="absolute top-1/2 left-[-40px] w-[40px] h-[3px] bg-gradient-to-l from-brandOrange to-blueLight transform -translate-y-1/2 rounded-full shadow-sm" />
                      <div className="absolute top-1/2 left-[-35px] w-[30px] h-[1px] bg-white/60 transform -translate-y-1/2 rounded-full" />
                    </div>
                  </div>

                  {/* Enhanced mobile card */}
                  <div className="md:hidden mt-6 px-4">
                    <div className="relative transform transition-all duration-300 hover:scale-105">
                      <div className="bg-gradient-to-br from-white to-brandsBG p-7 rounded-2xl shadow-lg border border-blueLight/20 relative overflow-hidden">
                        {/* Mobile decorative elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brandOrange/8 to-transparent rounded-bl-3xl" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blueLight/8 to-transparent rounded-tr-3xl" />

                        <div className="relative z-10 text-center">
                          <div className="w-16 h-1 bg-gradient-to-r from-brandOrange to-blueLight rounded-full mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-brandPrimary mb-3">{item.title}</h3>
                          <p className="text-brandSecondary/80 leading-relaxed">{item.desc}</p>
                        </div>

                        {/* Mobile connecting dot */}
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                          <span className="inline-flex h-6 w-6 rounded-full bg-gradient-to-br from-brandOrange to-brandOrange/80 border-2 border-white shadow-md ring-2 ring-blueLight/20">
                            <span className="absolute inset-1 rounded-full bg-white/30"></span>
                          </span>
                        </div>
                      </div>
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
