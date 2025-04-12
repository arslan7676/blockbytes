"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import shape1 from "/public/images/shape1.png";

const Cta = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative bg-[#FAF4F4] rounded-[20px] py-[50px] md:py-[90px] lg:py-[60px] xl:py-[75px] px-[30px]">
 
          <div className="max-w-[675px] mx-auto text-center space-y-[20px]">
            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              A Symphony of Brilliance: Our Team, Your Symphony, A Harmonious Future
            </h2>
         
            <p>
              The team at Adla continuously monitors and optimizes our
              campaigns, keeping us ahead of the competition. Urgent need?
              call us
            </p>
 
            <Link
              href="/contact-us/"
              className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
            >
              join our team{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
              />
            </Link>
          </div>
         
          {/* Shape */}
          <Image
            src={shape1}
            alt="shape"
            className="absolute top-[20px] xl:top-[80px] right-[20px] xl:right-[75px] hidden lg:block"
          />
          <Image
            src={shape1}
            alt="shape"
            className="absolute bottom-[40px] xl:bottom-[100px] left-[40px] xl:left-[115px] w-[75px] hidden lg:block"
          />
        </div>
      </div>
    </>
  );
};

export default Cta;
