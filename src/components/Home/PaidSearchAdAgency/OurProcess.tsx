"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

import assetImg from "/public/images/asset.png";

const OurProcess = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              our process
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Your path to paid search excellence starts here!
            </h2>
          </div>

          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div 
              className="space-y-[30px] lg:space-y-[40px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true">
              {["Campaign Strategy", "Full Management", "Transparency", "Build", "Release", "Optimize"].map((title, index) => (
                <div key={index} className="flex space-x-[20px] rtl:space-x-reverse">
                  <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none">
                    {index + 1}
                  </div>
                  <div className="pr-[0] xl:pr-[160px] xl:rtl:pr-0 xl:rtl:pl-[160px]">
                    <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                      {title}
                    </h3>
                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a comprehensive
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={assetImg} alt="asset" />

              <div className="absolute bottom-[-30px] right-0 left-0 text-center">
                <Link
                  href="/contact-us/"
                  className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[32px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                >
                  get a proposal{" "}
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
    </>
  );
};

export default OurProcess;
