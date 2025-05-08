import { statLinks } from "@/constants";

const StatList = async () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between  gap-[30px]">
        {statLinks.map((item) => (
          <div
            key={item.name}
            className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col  stats"
          >
            <img src={item.image} alt="stats image" />
            <p className="font-poppins font-semibold text-3xl text-black mt-5">{item.value}</p>
            <p className="font-poppins font-medium text-[16px] text-black mt-1 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatList;
