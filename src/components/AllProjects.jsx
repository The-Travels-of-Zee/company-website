import Link from "next/link"

import { headers } from "next/headers";

const getData = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/FeaturedProject`);

  if (!res.ok) {
    throw new Error("AllProject API call failed");
  }

  return res.json();
};


const AllProjects = async () => {
  const projects = await getData()


  return (
    <section className='pt-16 pb-20'>
      <div className="container">
        <div className="content">
          <p className='tagline_text'>All Project</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Better Agency/SEO Solution At Your Fingertips</h2>
        </div>

        <div className="projects_container grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {
            projects.map(porject =>
              <Link key={projects.id} href={""}>
                <div className="project bg-white px-[30px] pt-10 pb-[30px] rounded-[20px] shadow-brandShadow">
                  <img className='rounded-[20px]' src={porject.image} alt="Projects images" />
                  <h4 className="font-poppins font-semibold text-[26px] text-black uppercase text-left mt-8">{porject.title}</h4>
                </div>
              </Link>
            )
          }

        </div>


      </div>
    </section>
  )
}

export default AllProjects