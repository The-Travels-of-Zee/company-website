"use client";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Brain, Phone } from "lucide-react";

const SiteNavbar = () => {
  const currentPath = usePathname();
  const [mobileActive, setMobileActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`container mx-auto absolute transform left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      {/* NAVITEMS FOR DESKTOP */}
      <nav
        className={`lg:flex items-center hidden justify-between py-6 relative transition-all duration-500 
          border rounded-2xl px-4
          ${
            scrolled
              ? "bg-slate-900/95 backdrop-blur-lg border-cyan-500/20 shadow-2xl shadow-cyan-500/10 px-8"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <div className="logo_container w-48 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/static/full-logo-black.png" alt="logo" className="invert" />
          </Link>
        </div>

        <div className="nav_items">
          <ul className="lg:flex items-center gap-[30px] hidden md:text-xs md:gap-4 lg:text-sm xl:gap-[30px] xl:text-base">
            {navbarLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href && (item.href === "/" || item.href === "/contact")
                      ? "text-cyan-400 border-b-2 border-cyan-400 shadow-lg shadow-cyan-400/20"
                      : scrolled
                      ? "text-slate-300 hover:text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  } p-[10px] text-center font-poppins font-medium capitalize transition-all duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://calendly.com/thetravelsofzee-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-poppins font-medium text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-transparent rounded-xl hover:from-cyan-600 hover:to-blue-700 duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <Phone className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Book a Free Call</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* NAV FOR MOBILE */}
      <nav
        className={`flex items-center lg:hidden justify-between py-6 relative transition-all duration-500 
          border rounded-2xl px-4
          ${
            scrolled
              ? "bg-slate-900/95 backdrop-blur-lg border-cyan-500/20 shadow-2xl shadow-cyan-500/10 px-6"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <div className="logo_container w-48 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/static/full-logo-black.png" alt="logo" className="invert" />
          </Link>
        </div>

        <div className="menuBtn">
          <button
            className={`text-cyan-400 text-4xl p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 relative group`}
            onClick={() => setMobileActive(!mobileActive)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {mobileActive ? (
              <IoClose className="relative z-10" aria-label="close-menu" />
            ) : (
              <IoMenu className="relative z-10" aria-label="open-menu" />
            )}
          </button>
        </div>

        {mobileActive && (
          <ul className="bg-slate-900/95 backdrop-blur-lg absolute text-lg top-20 w-full pt-8 pb-8 grid grid-cols-1 gap-6 text-center rounded-2xl transition-all duration-300 shadow-2xl shadow-cyan-500/10 border border-cyan-500/20">
            {navbarLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href && (item.href === "/" || item.href === "/contact")
                      ? "text-cyan-400 border-b-2 border-cyan-400 shadow-lg shadow-cyan-400/20"
                      : "text-slate-300 hover:text-cyan-400"
                  } p-[10px] text-center font-poppins font-medium capitalize transition-all duration-300 relative group inline-block`}
                  onClick={() => setMobileActive(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li className="px-4">
              <a
                href="https://calendly.com/thetravelsofzee-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-poppins font-medium text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-transparent rounded-xl hover:from-cyan-600 hover:to-blue-700 duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden"
                onClick={() => setMobileActive(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <Brain className="w-4 h-4 relative z-10" />
                <span className="relative z-10">AI Consultation</span>
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Floating AI Status Indicator */}
      {/* <div className={`fixed top-4 right-4 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-slate-900/90 backdrop-blur-lg border border-emerald-500/30 rounded-full px-3 py-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-emerald-400 font-medium">AI Online</span>
        </div>
      </div> */}
    </div>
  );
};

export default SiteNavbar;
