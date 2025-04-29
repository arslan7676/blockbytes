"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight2 } from "iconsax-react";

import heroImg from "/public/images/our-experts.png";
import brand from "/public/images/our-experts.png";
import FunFacts from "./FunFacts";

const HeroBanner = () => {
  return (
    <>
      <div className="bg-[#477ef5] pt-[50px] md:pt-[80px] lg:pt-[80px] xl:pt-[100px] pb-[55px]">
        <div className="container lg:max-w-[1500px] mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            {/* Banner Content */}
            <div>
              <h1 
                className="text-white text-[30px] md:text-[40px] lg:text-[39px] xl:text-[60px] 2xl:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[45px] xl:leading-[70px] 2xl:leading-[80px] font-semibold mb-[20px] sm:mb-[20px] max-w-[700px]"

                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                Web Application Development
              </h1>

              <p 
                className="text-white text-[16px] md:text-[18px] mb-[30px] md:mb-[45px] lg:mb-[30px] xl:mb-[45px] leading-[28px]"

                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
              To enhance your customer retention and elevate your brand's reputation, BlocBytes develops versatile, highly scalable, and modern web applications that adhere to the highest quality standards, tailored to meet your specific business needs.
              </p>

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[13px] md:text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[25px] md:px-[38px] transition duration-500 ease-in-out hover:bg-[#432b2b]"

                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                become a client{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>

              {/* FunFacts */}
              {/* <FunFacts /> */}
            </div>

            {/* Hero Image */}
            <div 
              className="relative sm:mt-[10px] md:mt-[10px] lg:mt-[0]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <Image src={heroImg} alt="Hero Image" />

              <Image
                src={brand}
                alt="brand"
                className="absolute bottom-[25px] md:bottom-[60px] right-[40px] md:right-[100px] w-[60px] h-[60px] md:w-[109px] md:h-[109px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
