"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight2 } from "iconsax-react";

import heroImg from "/public/images/hero-img1.png";

const HeroBanner = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px]">
        <div className="container mx-auto text-center">
          <div className="max-w-[1020px] w-full mx-auto">
            <h1 
              className="text-black text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] 2xl:leading-[80px] font-semibold mb-[20px] sm:mb-[30px]"

              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Boost your business with results-driven paid search ads!
            </h1>

            <p 
              className="text-[16px] md:text-[20px] font-medium mb-[30px]"

              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Our seasoned team of paid search specialists leverages
              cutting-edge technology.
            </p>

            <Link
              href="/contact-us/"
              className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"

              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              let’s talk{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
              />
            </Link>
          </div>

          {/* Hero Image */}
          <Image 
            src={heroImg} 
            alt="Hero Image" 
            className="mx-auto mt-[30px]" 

            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
