import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-8 border-t border-slate-700">
      <div className="container">
        <div className="footer_items_container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 lg:flex items-start justify-between">
          {/* Logo & Description */}
          <div className="logo_items">
            {/* Swap to a light logo if available */}
            <img className="w-64 invert" src="/static/full-logo-black.png" alt="logo" />
            <p className="font_avenir font-normal text-xl text-slate-300 max-w-[320px] text-left mt-5">
              Our team has experience delivering solutions for startups, small businesses, and nonprofits across various
              industries.
            </p>

            {/* Social Links */}
            <div className="social_links flex items-center justify-start gap-4 mt-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 text-cyan-400 hover:bg-slate-600 transition-all flex items-center justify-center"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick_links">
            <p className="font-poppins font-semibold text-xl text-cyan-400 text-left">Quick Links</p>
            <div className="links mt-4 flex flex-col items-start justify-start gap-6">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font_avenir font-normal text-lg text-slate-300 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="address">
            <p className="font-poppins font-semibold text-xl text-cyan-400 text-left">Address</p>
            <p className="font_avenir font-normal text-xl text-slate-300 text-left mt-6 max-w-[250px]">
              28 Wenlock Road, London, England N17GU, GB
            </p>
            <p className="font_avenir font-normal text-xl text-slate-300 text-left mt-6 max-w-[250px]">
              info@thetravelsofzee.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copy_rights mt-16 border-t border-slate-700 pt-6">
          <p className="font_avenir font-normal text-base text-slate-500 text-left">
            © {new Date().getFullYear()} The Travels of Zee. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SiteFooter;
