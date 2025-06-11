import AllProjects from "@/components/AllProjects";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import { companyProjects } from "@/constants";

const CompanyProjects = () => {
  return (
    <>
      <div className=" pt-48 pb-20 bg-bgBlueLight">
        <div className="container">
          <h1 className="heading">All Project</h1>
          <h2 className="sub_heading mt-4 max-w-[500px]">Our In House Projects that Drive Innovation and Excellence</h2>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <AllProjects projects={companyProjects} />
      <Subscribe />
    </>
  );
};

export default CompanyProjects;
