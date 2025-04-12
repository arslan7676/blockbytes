"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

import Image from "next/image";
import award from "/public/images/award-white.png";
import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";

const FunFacts = () => {
  return (
    <>
      <div 
        className="xl:flex xl:items-center space-y-6 xl:space-y-0 xl:space-x-[25px] rtl:space-x-reverse mt-[40px] md:mt-[60px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[76px]"

        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div
          className="flex items-center space-x-4 rtl:space-x-reverse rounded-[4px] py-[16px] px-[23px]"
          style={{ background: "rgba(0, 0, 0, 0.15)" }}
        >
          <Image className="w-[46px]" src={award} alt="award" />

          <div>
            <p className="font-medium text-white text-[15px] md:text-[16px] lg:text-[14px] 2xl:text-[16px]">
              Award Winning Agency
            </p>
            <p className="font-medium text-white">
              <span className="font-bold text-[16px] lg:text-[16px] xl:text-[16px] md:text-[20px]">
                3500+
              </span>{" "}
              Active Clients
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rtl:space-x-reverse border border-[#f37979] px-3 py-5 sm:p-5 lg:border-0 lg:p-0">
          <div className="flex -space-x-2 rtl:space-x-reverse shrink-0">
            <Image
              className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
              src={user1}
              alt="user1"
            />

            <Image
              className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
              src={user2}
              alt="user2"
            />

            <Image
              className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
              src={user3}
              alt="user3"
            />
          </div>

          <div className="font-medium">
            <Link
              href="/team"
              className="xl:text-[15px] 2xl:text-[16px] font-medium text-white transition duration-500 ease-in-out hover:text-[#000]"
            >
              Meet Our Experts{" "}
              <ArrowRight2 className="inline-block relative" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
