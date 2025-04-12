"use client";

import Image from "next/image";

import aboutImg from "/public/images/about.jpg";
import brand from "/public/images/brand-black-lg.png";
import shapeImg from "/public/images/shape1.png";
import adwordImg1 from "/public/images/adword1.png";
import adwordImg2 from "/public/images/adword2.png";
import adwordImg3 from "/public/images/adword3.png";
import adwordImg4 from "/public/images/adword4.png";
import adwordImg5 from "/public/images/adword5.png";

const AwardWinningAgency = () => {
  return (
    <>
      <div className="bg-[#FEE] py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div 
              className="lg:pr-[60px] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="mb-[20px] md:mb-[20px] lg:md:mb-[50px]">
                <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                  Award Winning Agency
                </h4>

                <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                  Drive traffic, generate leads, achieve success with our paid
                  search services!
                </h2>

                <p>
                  Transforming your brand's online presence and generating
                  meaningful results is our top priority at{" "}
                  <strong>Adla</strong>. As a leading paid search ad agency,
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
            </div>

            <div 
              className="lg:pl-[40px] rtl:lg:pl-0 rtl:lg:pr-[40px] xl:pl-[60px] rtl:xl:pl-0 rtl:xl:pr-[60px] 2xl:pl-[100px] rtl:2xl:pl-0 rtl:2xl:pr-[100px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="relative pr-[14px] before:content-[''] before:absolute before:bg-[#EF4335] before:w-[98%] before:h-full before:top-[14px] before:right-0 before:rounded-[20px] before:z-[0]">
                <Image
                  src={aboutImg}
                  alt="About"
                  className="rounded-[20px] relative"
                />

                <Image
                  src={brand}
                  alt="brand"
                  className="absolute bottom-[25px] right-[40px]"
                />
                <Image
                  src={shapeImg}
                  alt="shape"
                  className="absolute top-0 left-[-78px] rtl:left-auto rtl:right-[-78px] hidden lg:block"
                />
              </div>

              <div className="grid gap-[12px] grid-cols-5 sm:grid-cols-5 md:grid-cols-5 mt-[40px] md:mt-[50px]">
                <div className="text-center">
                  <Image
                    src={adwordImg1}
                    alt="adword"
                    className="rounded-[20px] inline-block"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={adwordImg2}
                    alt="adword"
                    className="rounded-[20px] inline-block"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={adwordImg3}
                    alt="adword"
                    className="rounded-[20px] inline-block"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={adwordImg4}
                    alt="adword"
                    className="rounded-[20px] inline-block"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={adwordImg5}
                    alt="adword"
                    className="rounded-[20px] inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardWinningAgency;
