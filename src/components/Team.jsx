import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { teamMembers } from "@/constants";

const Team = async () => {
  return (
    <section className="pt-16 pb-20" id="team">
      <div className="container">
        <div className="content">
          <p className="tagline_text">Our Team Member</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Check our awesome team members</h2>
        </div>

        <div className="team_member grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-8 mt-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="member hover:shadow-bgBlueLight transition-all duration-300 shadow-brandShadow rounded-[20px] bg-white"
            >
              <div className="image_container relative">
                <img
                  className="object-cover w-full h-full max-h-[387px] rounded-t-[20px] grayscale hover:grayscale-0 transition-all duration-300"
                  src={member.image}
                  alt="tem member image"
                />
                <div className="social_links flex items-center justify-between bg-white py-4 px-5 shadow-teamShadow rounded-[25px] absolute bottom-8 gap-4 left-1/2 -translate-x-1/2">
                  <Link className="text-[#737588] hover:text-blueLight duration-300 " href={member.facebook}>
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>

                  <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>

                  <Link className="text-[#737588] hover:text-blueLight duration-300 " href={member.twitter}>
                    {" "}
                    <FaTwitter />{" "}
                  </Link>

                  <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>

                  <Link className="text-[#737588] hover:text-blueLight duration-300 " href={member.instagram}>
                    {" "}
                    <FaInstagram />{" "}
                  </Link>
                </div>
              </div>
              <div className="pt-7 pb-12">
                <h3 className="text-[#101A29] font-poppins text-[30px] font-semibold text-center ">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
