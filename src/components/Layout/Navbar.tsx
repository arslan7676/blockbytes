"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import logo from "/public/images/BlocBytes-black.png";

const Navbar: React.FC = () => {

  const [hovered, setHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const currentRoute = usePathname();

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });
   

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);
   // Detect screen size
   useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // xl screen = 1280px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };


  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-transparent relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
      >
        <div className="container mx-auto">
          <nav
            className={`navbar relative flex flex-wrap ${isActive ? "active" : ""}`}
          >
            <div className="self-center">
              <Link href="/traditional-offline-ad-agency/">
                <Image src={logo} className="inline w-[270px] h-[50px]" alt="logo" />
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 rtl:left-0 rtl:right-auto top-[4px] xl:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="bx bx-menu"></i>
              </span>
            </button>
            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row mx-auto xl:flex">
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/traditional-offline-ad-agency/"
                    className="text-black uppercase text-[14px] font-medium transition-all hover:text-[#EF4335]"
                  >
                    Home
                  </Link>
                </li>
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/about-us/"
                    className={`uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] ${currentRoute === "/about-us/"
                      ? "text-[#EF4335]"
                      : "text-black"
                      }`}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Our Solutions
                  </Link>
                  <ul className="absolute bg-white border left-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li
                      className="py-[7px] px-[22px] flex items-center justify-between hover:text-[#EF4335] relative"
                      onMouseEnter={() => isLargeScreen && setHovered(true)}
                      onMouseLeave={() => isLargeScreen && setHovered(false)}
                    >
                      <button
                        className="font-medium text-[15px] text-black flex items-start hover:text-[#EF4335] w-full text-left"
                        onClick={() => !isLargeScreen && setIsClicked(!isClicked)}
                      >
                        Software Solutions
                        <ArrowRight2
                          className="inline-block relative text-black hover:text-[#EF4335] -top-[2px] left-8"
                          size={20}
                          color="#EF4335"
                        />
                      </button>
                      {/* Right Dropdown for Large Screens | Below for Small Screens */}
                      <ul
                        className={`bg-white border w-[270px] shadow-dropdown py-[15px] transition-all ${isLargeScreen
                            ? `absolute left-full top-0 ${hovered ? "opacity-100 visible" : "opacity-0 invisible"}`
                            : `${isClicked ? "block" : "hidden"} relative top-full left-0`
                          }`}
                      >
                        {[
                          "AI ML",
                          "Web Development",
                          "Mobile Development",
                          "Cloud Computing",
                          "Amazon & E-Commerce",
                          "Blockchain & Web3.0",
                          "GIS Solutions",
                          "Staff Augmentation",
                        ].map((service, index) => (
                          <li key={index} className="py-[7px] px-[22px] hover:text-[#EF4335]">
                            <Link
                              href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                              className="font-medium text-[15px] text-black hover:text-[#EF4335]"
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/services/service-details/"
                        className="block font-medium text-[15px] text-black hover:text-[#EF4335]"
                      >
                        Trading-Hardware Solution
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Careers
                  </Link>

                  <ul className="absolute bg-white border left-0 rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/careers/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${currentRoute === "/services/"
                          ? "text-[#EF4335]"
                          : "text-black"
                          }`}
                      >
                        Careers
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/careers/career-details/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${currentRoute === "/services/service-details/"
                          ? "text-[#EF4335]"
                          : "text-black"
                          }`}
                      >
                        Career Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    our work
                  </Link>

                  <ul className="absolute bg-white border left-0 rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/success-stories/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${currentRoute === "/success-stories/"
                          ? "text-[#EF4335]"
                          : "text-black"
                          }`}
                      >
                        Success Stories
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/success-stories/success-story-details/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${currentRoute ===
                          "/success-stories/success-story-details/"
                          ? "text-[#EF4335]"
                          : "text-black"
                          }`}
                      >
                        Success Story Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/contact-us/"
                    className={`uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] ${currentRoute === "/contact-us/"
                      ? "text-[#EF4335]"
                      : "text-black"
                      }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Other options */}
              <div className="other-options self-center border-t border-[#eeeeee] pt-[20px] xl:pt-[0] pb-[10px] xl:pb-[0] xl:border-none xl:ml-[20px] 2xl:ml-[15px]">
                <Link
                  href="/contact-us/"
                  className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[30px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                >
                  get a proposal{" "}
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
