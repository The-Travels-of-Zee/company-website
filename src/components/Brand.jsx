import { brands } from "@/constants";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <div className="py-11 bg-bgGray">
      <div className="container">
        <Marquee pauseOnHover={true} gradient={false} autoFill={true}>
          {brands.map((imageData, index) => (
            <div key={index} className="mx-8 md:mx-14 flex items-center">
              <img
                src={imageData.image}
                alt={imageData.name}
                className="h-16 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
