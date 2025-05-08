import Link from "next/link";

import { allProjects } from "@/constants";

const AllProjects = () => {
  return (
    <section className="pt-16 pb-20">
      <div className="container">
        <div className="content">
          <p className="tagline_text">All Project</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Better Agency/SEO Solution At Your Fingertips</h2>
        </div>

        <div className="projects_container grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {allProjects.map((project) => (
            <Link key={project.id} href={""}>
              <div className="project bg-white px-[30px] pt-10 pb-[30px] rounded-[20px] shadow-brandShadow">
                <img className="rounded-[20px]" src={project.image} alt="Projects images" />
                <h4 className="font-poppins font-semibold text-[26px] text-black uppercase text-left mt-8">
                  {project.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
