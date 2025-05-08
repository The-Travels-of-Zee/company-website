import { workLists } from "@/constants";

const WorkList = () => {
  return (
    <section className="py-16 bg-white" id="worklist">
      <div className="container">
        <div className="section_content">
          <p className="mb-4 tagline_text">Work List</p>
          <h2 className="sub_heading max-w-[500px]">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div className="grid md:grid-cols-3 items-center  mt-11 ">
          {workLists.map((item) => (
            <div key={item.name} className="py-[50px] px-[30px] card md:max-w-[380px] ">
              <img src={item.image} alt="what we do" />
              <h3 className="font-poppins font-semibold text-2xl text-left text-black mt-4">{item.title}</h3>
              <p className="font_avenir font-normal text-lg text-black mt-4">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh
                feugiat.
              </p>
              <button className="font_avenir text-lg font-normal rounded-lg   bg-transparent hover:bg-blueLight  duration-300 px-5 py-[15px] mt-11">
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
