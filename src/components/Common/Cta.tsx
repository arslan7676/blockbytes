"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

const Cta = () => {
  return (
    <>
      <div className="container mx-auto">
        <div 
          className="bg-[#F2F2F8] rounded-[20px] py-[50px] md:py-[90px] lg:py-[60px] xl:py-[90px] px-[30px] md:px-[90px] lg:px-[60px] xl:px-[110px]"
          
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[480px]">
                Transform Your Brand with High-Impact Paid Search Campaigns!
              </h2>
            </div>

            <div className="lg:text-end lg:rtl:text-right lg:max-w-[412px] lg:ml-auto lg:rtl:ml-0 lg:rtl:mr-auto">
              <p className="mb-[20px]">
                The team at Adla continuously monitors and optimizes our
                campaigns, keeping us ahead of the competition. Urgent need?
                call us
              </p>

              <h4 className="text-black font-semibold text-[18px] lg:text-[22px] mb-[30px]">
                <a
                  href="tel:+1-485-456-0102"
                  className="underline hover:no-underline hover:text-[#EF4335]"
                >
                  +1-485-456-0102
                </a>
              </h4>

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
              >
                get a free audit{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
