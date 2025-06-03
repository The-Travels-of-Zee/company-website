import Link from "next/link";
import { clientProjects } from "@/constants";

const ClientProjects = () => {
  return (
    <section className="pt-16 pb-20 bg-brandPrimary" id="projects">
      <div className="container">
        <div className="feature_project_content">
          <p className="tagline_text text-brandsBG">Client Projects</p>
          <h2 className="sub_heading mt-6 max-w-[500px] text-brandsBG">
            We Provide the Perfect Solution for Your Business Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[40px]">
          {clientProjects.map((project, index) => (
            <div key={index} className="project w-full">
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                  className="h-64 md:h-[400px] w-full object-cover rounded-[20px]"
                  src={project.image}
                  alt={`feature project ${index}`}
                />
                <p className={`text-sm mt-4 font_poppins text-brandsBG`}>
                  {project.category} - created at {project.updated_at}
                </p>
                <p className={`mt-[10px] font_poppins font-bold text-lg md:text-2xl text-brandsBG max-w-[263px]`}>
                  {project.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
