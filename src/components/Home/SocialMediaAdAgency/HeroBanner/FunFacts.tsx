"use client";

import Image from "next/image";
import award from "/public/images/award.png";
import clutchLogo from "/public/images/clutch-logo.png";

const FunFacts = () => {
  return (
    <>
      <div
        className="lg:flex lg:items-center space-y-6 lg:space-y-0 lg:space-x-[20px] xl:space-x-[60px] 2xl:space-x-[120px] rtl:space-x-reverse mt-[40px] md:mt-[60px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[100px]"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div
          className="flex items-center space-x-4 rtl:space-x-reverse border p-3 sm:p-5 lg:border-0 lg:p-0 relative before:content-[''] before:absolute before:right-[-25%] xl:before:right-[-12%] 2xl:before:right-[-25%] before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden xl:before:block last-of-type:before:hidden rtl:before:right-auto rtl:xl:before:right-auto rtl:2xl:before:right-auto rtl:before:left-[-25%] rtl:xl:before:left-[-12%] rtl:2xl:before:left-[-25%]"
        >
          <Image className="w-[46px]" src={award} alt="award" />

          <div>
            <p className="font-medium text-black text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
              Award Winning Agency
            </p>
            <p className="font-medium text-black">
              <span className="font-bold text-[16px] lg:text-[16px] xl:text-[16px] md:text-[20px]">
                3500+
              </span>{" "}
              Active Clients
            </p>
          </div>
        </div>

        <div
          className="border p-3 sm:p-5 lg:border-0 lg:p-0 relative before:content-[''] before:absolute before:right-[-50%] before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden xl:before:block last-of-type:before:hidden rtl:before:right-auto rtl:xl:before:right-auto rtl:2xl:before:right-auto rtl:before:left-[-25%] rtl:xl:before:left-[-12%] rtl:2xl:before:left-[-25%]"
        >
          <div className="flex items-center space-x-6 lg:space-x-2 xl:space-x-6 rtl:space-x-reverse justify-between mb-[14px] lg:mb-[10px] xl:mb-[14px]">
            <p className="text-black font-medium leading-none text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
              Review On
            </p>

            <div className="leading-none">
              <i className="bx bxs-star text-[#EF4335] text-[21px] lg:text-[16px] xl:text-[21px]"></i>
              <i className="bx bxs-star text-[#EF4335] text-[21px] lg:text-[16px] xl:text-[21px]"></i>
              <i className="bx bxs-star text-[#EF4335] text-[21px] lg:text-[16px] xl:text-[21px]"></i>
              <i className="bx bxs-star text-[#EF4335] text-[21px] lg:text-[16px] xl:text-[21px]"></i>
              <i className="bx bxs-star text-[#EF4335] text-[21px] lg:text-[16px] xl:text-[21px]"></i>
            </div>
          </div>

          <div className="flex items-center space-x-6 lg:space-x-1 xl:space-x-6 rtl:space-x-reverse justify-between text-end">
            <Image
              src={clutchLogo}
              alt="clutchLogo"
              className="lg:max-w-[55px] xl:max-w-[none]"
            />
            <p className="text-black font-medium lg:text-[14px] xl:text-[16px]">
              1500+ Reviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
