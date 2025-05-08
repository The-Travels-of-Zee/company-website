import { brands } from "@/constants";

const Brand = async () => {
  return (
    <div className="py-11 bg-brandsBG">
      <div className="grid grid-cols-2  sm:flex items-center justify-between justify-items-center gap-y-10 container">
        {brands.map((imageData) => (
          <img src={imageData.image} alt={imageData.name} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
