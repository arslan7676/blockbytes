"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import shape1 from "/public/images/shape1.png";

const CallToAction = () => {
  return (
    <>
      <div className="bg-[#EF4335] py-[50px] md:py-[90px] lg:py-[60px] xl:py-[90px] relative">
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <h2 className="text-white font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[450px]">
                Harness the power of social media, achieve marketing excellence!
              </h2>
            </div>

            <div className="lg:text-end rtl:lg:text-right lg:max-w-[412px] lg:ml-auto rtl:lg:ml-0 rtl:lg:mr-auto">
              <p className="text-white mb-[20px]">
                The team at Adla continuously monitors and optimizes our
                campaigns, keeping us ahead of the competition. Urgent need?
                call us
              </p>

              <h4 className="text-white font-semibold text-[18px] lg:text-[22px] mb-[30px]">
                <a
                  href="tel:+1-485-456-0102"
                  className="underline hover:no-underline hover:text-[#000]"
                >
                  +1-485-456-0102
                </a>
              </h4>

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#3b3333]"
              >
                get your free custom proposal{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>
          </div>

          {/* Shape */}
          <Image
            src={shape1}
            alt="shape"
            className="absolute top-[32%] left-[49%] hidden lg:block"
          />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
