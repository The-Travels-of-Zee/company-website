import Link from "next/link";

const AllProjects = ({ projects }) => {
  return (
    <section className="pt-8 pb-20">
      <div className="container">
        <div className="projects_container grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Link key={index} href={project.live} target="_blank">
              <div className="project bg-white px-[24px] pt-6 pb-[30px] rounded-[20px] shadow-brandShadow">
                <img
                  className="w-full aspect-[4/3] object-cover rounded-[20px]"
                  src={project.image}
                  alt={`feature project ${index}`}
                />
                <p className={`text-sm mt-4 font_poppins text-brandSecondary`}>
                  {project.category} - created at {project.updated_at}
                </p>
                <p className={`mt-[10px] font_poppins font-bold text-lg md:text-2xl text-brandSecondary max-w-[263px]`}>
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
