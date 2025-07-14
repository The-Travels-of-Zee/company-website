import Link from "next/link";
import { companyProjects } from "@/constants";
import { ArrowRight } from "lucide-react";

const CompanyProjects = () => {
  return (
    <section id="projects" className="pt-20 pb-24 relative overflow-hidden bg-transparent">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-300/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-300/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 rounded-full text-sm font-medium border border-purple-200 mb-4">
            In-House Apps
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our In-House Projects that Drive{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovation & Excellence
            </span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {companyProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-purple-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`project-${index}`}
                  className="w-full aspect-[4/3] object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <p className="text-sm text-purple-600">
                    {project.category} • Updated {project.updated_at}
                  </p>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mt-2">{project.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/company-projects">
            <button className="group relative inline-flex items-center gap-2 text-white text-lg font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 hover:shadow-md hover:shadow-pink-400/25">
              View All Projects
              <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1 group-hover:scale-105" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyProjects;
