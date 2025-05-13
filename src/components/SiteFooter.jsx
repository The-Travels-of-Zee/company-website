import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <section className="bg-[#1f1f1f] pt-20 pb-8">
      <div className="container">
        <div className="footer_items_container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 lg:flex items-start justify-between">
          <div className="logo_items">
            <img className="invert w-64" src="./static/full-logo-black.png" alt="logo" />
            <p className="font_avenir font-normal text-xl text-white max-w-[320px] text-left mt-5">
              Our team has experience delivering solutions for startups, small businesses, and nonprofits across various
              industries.
            </p>
            <div className="social_links flex items-center justify-start gap-4 mt-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[100px]  bg-brandPrimary text-white flex items-center justify-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="quick_links ">
            <div className="links_tittle">
              <p className=" font-poppins font-semibold text-xl text-white text-left ">Quick Links</p>
            </div>
            <div className="links mt-4 flex flex-col items-start justify-start gap-6">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=" font_avenir font-normal text-lg text-white hover:text-brandOrange duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="address">
            <div className="links_tittle">
              <p className=" font-poppins font-semibold text-xl text-white text-left ">Address</p>
            </div>
            <p className="font_avenir font-normal text-xl text-white text-left mt-6 max-w-[250px]">
              28 Wenlock Road, London, England N17GU, GB
            </p>
            <p className="font_avenir font-normal text-xl text-white text-left mt-6 max-w-[250px]">
              info@thetravelsofzee.com
            </p>
          </div>
        </div>

        <div className="copy_rights mt-16">
          <p className="font_avenir font-normal text-xl text-white text-left">
            {`Copyright The Travels of Zee ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SiteFooter;
