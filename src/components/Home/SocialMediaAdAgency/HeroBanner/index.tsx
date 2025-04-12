"use client";

import FunFacts from "./FunFacts";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight2 } from "iconsax-react";

import heroImg2 from "/public/images/hero-img2.png"; 

const HeroBanner = () => {
  return (
    <>
      <div className="container lg:max-w-[1710px] mx-auto">
        <div className="bg-[#FAF4F4] rounded-t-[20px] pt-[50px] md:pt-[80px] lg:pt-[80px] xl:pt-[107px] pb-[50px] md:pb-[50px] lg:pb-[80px] xl:pb-[109px] pl-[20px] md:pl-[58px] lg:pl-[30px] xl:pl-[50px] 2xl:pl-[110px] pr-[20px] md:pr-[58px] lg:pr-[30px] xl:pr-[50px] 2xl:pr-[58px]">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            {/* Banner Content */}
            <div>
              <h1 
                className="text-black text-[30px] md:text-[40px] lg:text-[39px] xl:text-[60px] 2xl:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[45px] xl:leading-[70px] 2xl:leading-[80px] font-semibold mb-[20px] sm:mb-[20px] max-w-[700px] lg:-mt-[15px]"

                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                Boost your brand, dominate social media!
              </h1>

              <p 
                className="text-[16px] md:text-[20px] lg:text-[16px] xl:text-[20px] font-medium mb-[30px] md:mb-[45px] lg:mb-[30px] xl:mb-[45px] leading-[28px]"

                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                At our social media ad agency, we specialize in crafting
                captivating and results-driven campaigns that will skyrocket
                your brand's online presence.
              </p>

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[13px] md:text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[25px] md:px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"

                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                get your free custom proposal{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>

              {/* FunFacts */}
              <FunFacts />
            </div>

            {/* Hero Image */}
            <div 
              className="sm:mt-[30px] md:mt-[40px] lg:mt-[0]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <Image src={heroImg2} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
