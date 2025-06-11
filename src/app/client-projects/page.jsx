import AllProjects from "@/components/AllProjects";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import { clientProjects } from "@/constants";

const ClientProjects = () => {
  return (
    <>
      <div className=" pt-48 pb-20 bg-bgBlueLight">
        <div className="container">
          <h1 className="heading">All Project</h1>
          <h2 className="sub_heading mt-4 max-w-[500px]">We Provide the Perfect Solution for Your Business Growth</h2>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <AllProjects projects={clientProjects} />
      <Subscribe />
    </>
  );
};

export default ClientProjects;
