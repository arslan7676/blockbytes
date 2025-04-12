"use client";

import Link from "next/link"; 
import { ArrowRight2 } from "iconsax-react";

import Image from "next/image";

import pageBanner4 from "/public/images/page-banner4.jpg";
import brand from "/public/images/brand-white-lg.png";
import shapeImg from "/public/images/shape1.png"; 

const ServicesDetailsHeader = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]">
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

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] mt-[20px] md:mt-[30px] lg:mt-[40px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
              >
                get your free custom proposal{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>

            <div className="lg:pl-[40px] rtl:lg:pl-0 rtl:lg:pr-[40px] xl:pl-[60px] rtl:xl:pl-0 rtl:xl:pr-[60px] 2xl:pl-[100px] rtl:2xl:pl-0 rtl:2xl:pr-[100px]">
              <div className="relative pr-[14px] before:content-[''] before:absolute before:bg-[#EF4335] before:w-[98%] before:h-full before:top-[14px] before:right-0 before:rounded-[20px] before:z-[0]">
                <Image
                  src={pageBanner4}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsHeader;
