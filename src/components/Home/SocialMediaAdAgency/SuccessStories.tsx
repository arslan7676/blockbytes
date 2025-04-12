"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

import brandBlack from "/public/images/brand-black.png";
import successStoriesImg1 from "/public/images/success-stories4.jpg";
import successStoriesImg2 from "/public/images/success-stories5.jpg";
import successStoriesImg3 from "/public/images/success-stories6.jpg";
import successStoriesImg4 from "/public/images/success-stories7.jpg";

const SuccessStories = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div 
            className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-[30px] md:mb-[40px] lg:mb-[50px]"

            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="max-w-[470px">
              <Image
                src={brandBlack}
                alt="Brand Black"
                className="mb-[30px] sm:mb-[30px]"
              />

              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                success stories
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                Driving success through strategic paid search advertising!
              </h2>
            </div>

            <div className="md:text-end md:mt-[100px]">
              <Link
                href="/success-stories"
                className="text-black text-[14px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                view more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>
          </div>

          {/* Card */}
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {/* Card  */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href="/success-stories/success-story-details/">
                <Image
                  src={successStoriesImg1}
                  alt="Success Stories"
                  className="rounded-[20px]"
                />
              </Link>

              <div className="flex justify-between items-center mt-[20px]">
                <div>
                  <h3 className="text-black text-[18px] md:text-[22px] font-semibold">
                    EnvyTheme
                  </h3>
                  <p className="text-[15px]">Premium Themes</p>
                </div>

                <Link
                  href="/success-stories/success-story-details/"
                  className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                      fill="#EF4335"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href="/success-stories/success-story-details/">
                <Image
                  src={successStoriesImg2}
                  alt="Success Stories"
                  className="rounded-[20px]"
                />
              </Link>

              <div className="flex justify-between items-center mt-[20px]">
                <div>
                  <h3 className="text-black text-[18px] md:text-[22px] font-semibold">
                    Emporrium
                  </h3>
                  <p className="text-[15px]">eCommerce</p>
                </div>

                <Link
                  href="/success-stories/success-story-details/"
                  className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                      fill="#EF4335"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href="/success-stories/success-story-details/">
                <Image
                  src={successStoriesImg3}
                  alt="Success Stories"
                  className="rounded-[20px]"
                />
              </Link>

              <div className="flex justify-between items-center mt-[20px]">
                <div>
                  <h3 className="text-black text-[18px] md:text-[22px] font-semibold">
                    Ryhans
                  </h3>
                  <p className="text-[15px]">Technology</p>
                </div>

                <Link
                  href="/success-stories/success-story-details/"
                  className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                      fill="#EF4335"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href="/success-stories/success-story-details/">
                <Image
                  src={successStoriesImg4}
                  alt="Success Stories"
                  className="rounded-[20px]"
                />
              </Link>

              <div className="flex justify-between items-center mt-[20px]">
                <div>
                  <h3 className="text-black text-[18px] md:text-[22px] font-semibold">
                    HiBootstrap
                  </h3>
                  <p className="text-[15px]">Templates</p>
                </div>

                <Link
                  href="/success-stories/success-story-details/"
                  className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                      fill="#EF4335"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
