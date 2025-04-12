"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import aboutImg from "/public/images/about-2.png";
import BorderLine from "@/components/Common/BorderLine";
import BrandsSlider from "@/components/Common/BrandsSlider";

const AboutContent = () => {
  return (
    <>
      <div className="bg-[#F2F2F8] pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <div className="container mx-auto">
            <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div 
                className="lg:pr-[40px] rtl:lg:pr-0 rtl:lg:pl-[40px] xl:pr-[60px] rtl:xl:pr-0 rtl:xl:pl-[60px] 2xl:pr-[60px] rtl:2xl:pr-0 rtl:2xl:pl-[60px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Image src={aboutImg} alt="about" />
              </div>

              <div 
                className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="mb-[20px] md:mb-[20px] lg:md:mb-[50px]">
                  <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                    Award Winning Agency
                  </h4>

                  <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                    Crafting Unforgettable Offline Experiences That Transcend
                    Time and Screens
                  </h2>

                  <p>
                    Transforming your brand's online presence and generating
                    meaningful results is our top priority at{" "}
                    <strong>Adla</strong>. As a leading paid search ad agency.
                  </p>
                </div>

                <div className="grid gap-[25px] grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
                  <div className="text-center md:text-left rtl:md:text-right">
                    <div className="text-[#EF4335] bg-[#fff] w-[84px] h-[84px] leading-[90px] text-center inline-block rounded-full text-[40px] mb-[15px]">
                      <i className="bx bxs-briefcase"></i>
                    </div>

                    <h3 className="text-black font-semibold text-[25px] md:text-[32px] lg:text-[36px]">
                      25 +
                    </h3>

                    <p>Years driving growth</p>
                  </div>

                  <div className="text-center md:text-left rtl:md:text-right">
                    <div className="text-[#EF4335] bg-[#fff] w-[84px] h-[84px] leading-[90px] text-center inline-block rounded-full text-[40px] mb-[15px]">
                      <i className="bx bx-cube"></i>
                    </div>

                    <h3 className="text-black font-semibold text-[25px] md:text-[32px] lg:text-[36px]">
                      1450 +
                    </h3>

                    <p>Projects complete succesfully</p>
                  </div>
                </div>

                <div className="mt-[30px] md:mt-[50px]">
                  <Link
                    href="/about-us/"
                    className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                  >
                    more about us{" "}
                    <ArrowRight2
                      className="inline-block relative -top-[2px]"
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BorderLine */}
        <BorderLine />

        {/* BrandsSlider */}
        <BrandsSlider />
      </div>
    </>
  );
};

export default AboutContent;
