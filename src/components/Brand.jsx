import { headers } from "next/headers";

const getData = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/FeaturedProject`);

  if (!res.ok) {
    throw new Error("FeaturedProject API call failed");
  }

  return res.json();
};
const Brand = async () => {
  const imagesData = await getData();

  return (
    <div className="py-11 bg-brandsBG">
      <div className="grid grid-cols-2  sm:flex items-center justify-between justify-items-center gap-y-10 container">
        {imagesData.map((imageData) => (
          <img src={imageData.image} alt={imageData.name} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
