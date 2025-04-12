"use client";

import Image from "next/image";

import funFactsImg from "/public/images/fun-facts.jpg";
import brandImg from "/public/images/brand.png";

const FunFacts = () => {
  return (
    <>
      <div className="container mx-auto relative">
        <div className="bg-[#161519] rounded-[20px] mb-[-215px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center">
            <div className="py-[40px] md:py-[60px] px-[30px] md:px-[50px] lg:px-[30px] xl:px-[50px] space-y-[30px] md:space-y-[40px] xl:space-y-[60px]">
              <div className="flex items-center space-x-5 rtl:space-x-reverse">
                <div className="text-[#EF4335] bg-[#000] w-[84px] h-[84px] leading-[90px] text-center inline-block rounded-full text-[40px] shrink-0">
                  <i className="bx bxs-briefcase"></i>
                </div>

                <div>
                  <h3 className="text-white text-[25px] sm:text-[30px] lg:text-[36px] font-semibold">
                    25 +
                  </h3>
                  <p className="text-white text-[16px] xl:text-[17px]">
                    Years driving growth
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-5 rtl:space-x-reverse">
                <div className="text-[#EF4335] bg-[#000] w-[84px] h-[84px] leading-[90px] text-center inline-block rounded-full text-[40px] shrink-0">
                  <i className="bx bx-cube"></i>
                </div>

                <div>
                  <h3 className="text-white text-[25px] sm:text-[30px] lg:text-[36px] font-semibold">
                    1450 +
                  </h3>
                  <p className="text-white text-[16px] xl:text-[17px]">
                    Projects complete succesfully
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 xl:pl-[30px] xl:rtl:pl-0">
              <div className="relative">
                <Image
                  src={funFactsImg}
                  alt="Fun Facts Img"
                  className="rounded-r-[20px] rtl:rounded-l-[20px]"
                />
                <Image
                  src={brandImg}
                  alt="Brand Img"
                  className="absolute bottom-[15px] sm:bottom-[30px] right-[15px] sm:right-[40px] max-w-[60px] md:max-w-[125px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default FunFacts;
