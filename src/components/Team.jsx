import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "@/constants";
import Image from "next/image";

const Team = () => {
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
              className="member hover:shadow-bgBlueLight grayscale hover:grayscale-0 transition-all duration-300 shadow-brandShadow rounded-[20px] bg-white md:max-h-[400px]"
            >
              <div className="image_container relative">
                <Image
                  className="object-cover w-full h-full max-h-[387px] rounded-t-[20px] transition-all duration-300"
                  src={member.image}
                  alt="tem member image"
                  width={200}
                  height={300}
                />
                <Link
                  className="text-[#737588] hover:text-blueLight duration-300 "
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <div className="social_links flex items-center justify-center bg-white py-4 px-4 shadow-teamShadow rounded-[50px] absolute bottom-4 gap-4 left-12 -translate-x-1/2">
                    {/* <Link
                    className="text-[#737588] hover:text-blueLight duration-300 "
                    href={member.facebook}
                    target="_blank"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>

                  <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div> */}

                    <FaLinkedin className="size-8" />

                    {/* <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>

                  <Link
                    className="text-[#737588] hover:text-blueLight duration-300 "
                    href={member.twitter}
                    target="_blank"
                  >
                    {" "}
                    <FaTwitter />{" "}
                  </Link>

                  <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>

                  <Link
                    className="text-[#737588] hover:text-brandDanger duration-300 "
                    href={member.instagram}
                    target="_blank"
                  >
                    {" "}
                    <FaInstagram />{" "}
                  </Link> */}
                  </div>
                </Link>
              </div>
              <div className="pt-4 pb-10">
                <h3 className="text-[#101A29] font-poppins text-[20px] font-semibold text-center">{member.name}</h3>
                <p className="text-[#2f3338] font-poppins text-[17px] text-center">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
