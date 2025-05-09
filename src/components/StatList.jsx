"use client";
import CountUp from "react-countup";
import { statsList } from "@/constants";
import useVisibilityObserver from "@/hooks/useVisibilityObserver";

const StatsList = () => {
  const [itemRefs, visibleStats] = useVisibilityObserver(statsList);

  return (
    <section className="py-10 sm:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[30px]">
        {statsList.map((item, index) => (
          <div
            key={item.name}
            ref={(el) => (itemRefs.current[index] = el)}
            className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats"
          >
            <video src={item.video} autoPlay loop muted width={96} height={96} />
            <p className="font-poppins font-semibold text-3xl text-black mt-5">
              {visibleStats[item.name] ? <CountUp end={parseInt(item.value)} duration={2} separator="," /> : 0}
            </p>
            <p className="font-poppins font-medium text-[16px] text-black mt-1 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsList;
