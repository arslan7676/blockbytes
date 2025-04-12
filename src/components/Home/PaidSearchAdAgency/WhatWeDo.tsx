"use client";
import Image from "next/image";
import ai from "/public/images/ai.png";
import web from "/public/images/web.png";
import cloud from "/public/images/cloud.png";
import amazon from "/public/images/amazon.png";
import mobile from "/public/images/mobile.png";
import gig from "/public/images/gig.png";
import blockchain from "/public/images/blockchain.png";
import staff from "/public/images/staff.png";

const softwareServices = [
  "AI/ML",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "Amazon & E-Commerce",
  "Blockchain & Web3.0",
  "GIS Solutions",
  "Staff Augmentation",
];

const WhatWeDo = () => {
  return (
    <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
      <div className="container mx-auto">
         {/* Section Header */}
         <div 
            className="relative max-w-[536px] mx-auto text-center mb-[30px] md:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              what we do
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Pioneering Offline Advertising, Breathing Life Into Brands
            </h2>
          </div>
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left Side - Software Solution */}
          <div className="col-span-12 lg:col-span-6">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Software Solution</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[ai, web,mobile, cloud, amazon, gig, blockchain, staff].map((icon, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-xl shadow-md relative overflow-hidden group transition duration-300 hover:shadow-xl flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                    data-aos-duration="600"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#EF4335] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <Image src={icon} alt="icon" className="mb-[20px] w-[70px] h-[70px] rounded-full relative z-10" />
                    <h3 className="text-[22px] text-black font-semibold mb-[10px] relative z-10">{softwareServices[index]}</h3>
                    <p className="relative z-10">Work closely with clients to understand their business goals, target audience, and budget.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Trading-Hardware Solution */}
          <div className="col-span-12 lg:col-span-6">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Trading-Hardware Solution</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[ai, web,mobile, cloud, amazon, gig, blockchain, staff].map((icon, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-xl shadow-md relative overflow-hidden group transition duration-300 hover:shadow-xl flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                    data-aos-duration="600"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#EF4335] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <Image src={icon} alt="icon" className="mb-[20px] w-[70px] h-[70px] rounded-full relative z-10" />
                    <h3 className="text-[22px] text-black font-semibold mb-[10px] relative z-10">Hardware {index + 1}</h3>
                    <p className="relative z-10">Providing advanced trading and hardware solutions to improve performance and security.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
