"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import award from "/public/images/award.png";
import clutchLogo from "/public/images/clutch-logo.png";

const MeetOurExperts = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between lg:items-center space-y-6 lg:space-y-0">
            <div
              className="flex items-center space-x-4 rtl:space-x-reverse border p-3 sm:p-5 lg:border-0 lg:p-0 relative before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%] before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden xl:before:block last-of-type:before:hidden"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden">
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
                  className="font-medium text-black transition duration-500 ease-in-out hover:text-[#EF4335]"
                >
                  Meet Our Experts{" "}
                  <ArrowRight2 className="inline-block relative" size={18} />
                </Link>
              </div>
            </div>

            <div
              className="flex items-center space-x-4 rtl:space-x-reverse border p-3 sm:p-5 lg:border-0 lg:p-0 relative before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%] before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden xl:before:block last-of-type:before:hidden"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image className="w-[46px]" src={award} alt="award" />

              <div>
                <p className="font-medium text-black">Award Winning Agency</p>
                <p className="font-medium text-black">
                  <span className="font-bold text-[20px]">3500+</span> Active
                  Clients
                </p>
              </div>
            </div>

            <div
              className="border p-3 sm:p-5 lg:border-0 lg:p-0 relative before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%] before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden xl:before:block last-of-type:before:hidden"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="flex items-center space-x-6 rtl:space-x-reverse justify-between mb-[14px]">
                <p className="text-black font-medium leading-none">Review On</p>

                <div className="leading-none">
                  <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                  <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                  <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                  <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                  <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                </div>
              </div>

              <div className="flex items-center space-x-6 rtl:space-x-reverse justify-between text-end">
                <Image src={clutchLogo} alt="clutchLogo" />
                <p className="text-black font-medium">1500+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurExperts;
