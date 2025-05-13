"use client";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const SiteNavbar = () => {
  const currentPath = usePathname();
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <div className="container mx-auto absolute transform left-1/2 -translate-x-1/2 ">
      {/* NAVITEMS FOR DESKTOP  */}
      <nav className="lg:flex items-center hidden justify-between py-9 relative">
        <div className="logo_container w-48">
          <Link href={"/"}>
            <img src="./static/full-logo-black.png" alt="logo" />
          </Link>
        </div>

        <div className="nav_items">
          <ul className="lg:flex items-center gap-[30px] hidden   md:text-xs  md:gap-4 lg:text-sm xl:gap-[30px] xl:text-base ">
            {navbarLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href && (item.href === "/" || item.href === "/contact")
                      ? "text-brandPrimary border-b border-brandPrimary"
                      : "text-black"
                  } p-[10px] text-center font-poppins font-medium capitalize`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://calendly.com/thetravelsofzee-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-poppins font-medium text-white py-[10px] px-6 bg-brandPrimary border-2 border-transparent rounded-lg hover:bg-transparent hover:border-brandPrimary duration-300 hover:text-black"
              >
                <IoCall className="text-xl" />
                <span>Book a free call</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* NAV FOR MOBILE  */}
      <nav className="flex items-center lg:hidden justify-between py-9 relative">
        <div className="logo_container w-48">
          <img src="./static/full-logo-black.png" alt="logo" />
        </div>
        <div className="menuBtn">
          <button className="text-brandPrimary text-4xl" onClick={() => setMobileActive(!mobileActive)}>
            {mobileActive ? <IoClose className="text-brandPrimary" /> : <IoMenu />}
          </button>
        </div>
        {mobileActive && (
          <ul className="bg-black/60 bg-opacity-65 backdrop-blur-lg absolute text-lg top-20 w-full pt-7 pb-16 grid grid-cols-1 gap-8 text-center rounded-lg transition-all duration-300 shadow-md shadow-[#2b2b2b]">
            {navbarLinks.map((item) => (
              <li>
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href && (item.href === "/" || item.href === "/contact")
                      ? "text-brandsBG border-b-4 border-blueLight"
                      : "text-bgGray"
                  } p-[10px] text-center font-poppins font-medium capitalize`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com/thetravelsofzee-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-poppins font-medium text-white py-[10px] px-6 bg-brandPrimary border border-transparent rounded-lg hover:bg-transparent hover:border-brandPrimary duration-300 hover:text-black"
              >
                <IoCall className="text-xl" />
                <span>Book a free call</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default SiteNavbar;
