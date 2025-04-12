"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import shapeImg1 from "/public/images/shape1.png";
import serviceImg1 from "/public/images/service-1.jpg";
import serviceImg2 from "/public/images/service-2.jpg";
import serviceImg3 from "/public/images/service-3.jpg";
import serviceImg4 from "/public/images/service-4.jpg";
import serviceImg5 from "/public/images/service-5.jpg";

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div 
            className="text-center max-w-[650px] mx-auto mb-[30px] md:mb-[50px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              Capabilities
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Offline Ad Agency, Redefining the Essence of True Brand Engagement
            </h2>

            <Link
              href="/services"
              className="bg-black text-white text-[13px] md:text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[25px] md:px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335] mt-[25px] md:mt-[30px]"
            >
              view all services{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
              />
            </Link>
          </div>

          <div className="grid gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {/* Tab menu */}
            <div className="bg-[#161519] rounded-0 lg:rounded-l-[20px] rtl:lg:rounded-l-[0] rtl:lg:rounded-r-[20px] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[140px] px-[20px] md:px-[50px] lg:px-[20px] xl:px-[50px]">
              <ul className="space-y-[20px]">
                <li
                  onClick={() => handleTabClick(0)}
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${
                    activeTab === 0 ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Print Advertising
                  <div className="bg-[#FAF4F4] rounded-full w-[40px] md:w-[46px] h-[40px] md:h-[46px] leading-[35px] md:leading-[40px] text-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M5.08664 17.7408C4.94628 17.6004 4.86743 17.41 4.86743 17.2115C4.86743 17.013 4.94628 16.8226 5.08664 16.6822L12.0443 9.72452L5.08664 2.76687C4.95026 2.62567 4.87479 2.43655 4.8765 2.24024C4.87821 2.04393 4.95695 1.85615 5.09576 1.71734C5.23458 1.57852 5.42236 1.49978 5.61866 1.49808C5.81497 1.49637 6.00409 1.57183 6.1453 1.70822L13.6323 9.19519C13.7726 9.3356 13.8515 9.526 13.8515 9.72452C13.8515 9.92305 13.7726 10.1135 13.6323 10.2539L6.1453 17.7408C6.0049 17.8812 5.8145 17.96 5.61597 17.96C5.41744 17.96 5.22704 17.8812 5.08664 17.7408Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </li>

                <li
                  onClick={() => handleTabClick(1)}
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${
                    activeTab === 1 ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Outdoor Advertising
                  <div className="bg-[#FAF4F4] rounded-full w-[40px] md:w-[46px] h-[40px] md:h-[46px] leading-[35px] md:leading-[40px] text-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M5.08664 17.7408C4.94628 17.6004 4.86743 17.41 4.86743 17.2115C4.86743 17.013 4.94628 16.8226 5.08664 16.6822L12.0443 9.72452L5.08664 2.76687C4.95026 2.62567 4.87479 2.43655 4.8765 2.24024C4.87821 2.04393 4.95695 1.85615 5.09576 1.71734C5.23458 1.57852 5.42236 1.49978 5.61866 1.49808C5.81497 1.49637 6.00409 1.57183 6.1453 1.70822L13.6323 9.19519C13.7726 9.3356 13.8515 9.526 13.8515 9.72452C13.8515 9.92305 13.7726 10.1135 13.6323 10.2539L6.1453 17.7408C6.0049 17.8812 5.8145 17.96 5.61597 17.96C5.41744 17.96 5.22704 17.8812 5.08664 17.7408Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </li>

                <li
                  onClick={() => handleTabClick(2)}
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${
                    activeTab === 2 ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Direct Mail Marketing
                  <div className="bg-[#FAF4F4] rounded-full w-[40px] md:w-[46px] h-[40px] md:h-[46px] leading-[35px] md:leading-[40px] text-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M5.08664 17.7408C4.94628 17.6004 4.86743 17.41 4.86743 17.2115C4.86743 17.013 4.94628 16.8226 5.08664 16.6822L12.0443 9.72452L5.08664 2.76687C4.95026 2.62567 4.87479 2.43655 4.8765 2.24024C4.87821 2.04393 4.95695 1.85615 5.09576 1.71734C5.23458 1.57852 5.42236 1.49978 5.61866 1.49808C5.81497 1.49637 6.00409 1.57183 6.1453 1.70822L13.6323 9.19519C13.7726 9.3356 13.8515 9.526 13.8515 9.72452C13.8515 9.92305 13.7726 10.1135 13.6323 10.2539L6.1453 17.7408C6.0049 17.8812 5.8145 17.96 5.61597 17.96C5.41744 17.96 5.22704 17.8812 5.08664 17.7408Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </li>

                <li
                  onClick={() => handleTabClick(3)}
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${
                    activeTab === 3 ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Event Marketing
                  <div className="bg-[#FAF4F4] rounded-full w-[40px] md:w-[46px] h-[40px] md:h-[46px] leading-[35px] md:leading-[40px] text-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M5.08664 17.7408C4.94628 17.6004 4.86743 17.41 4.86743 17.2115C4.86743 17.013 4.94628 16.8226 5.08664 16.6822L12.0443 9.72452L5.08664 2.76687C4.95026 2.62567 4.87479 2.43655 4.8765 2.24024C4.87821 2.04393 4.95695 1.85615 5.09576 1.71734C5.23458 1.57852 5.42236 1.49978 5.61866 1.49808C5.81497 1.49637 6.00409 1.57183 6.1453 1.70822L13.6323 9.19519C13.7726 9.3356 13.8515 9.526 13.8515 9.72452C13.8515 9.92305 13.7726 10.1135 13.6323 10.2539L6.1453 17.7408C6.0049 17.8812 5.8145 17.96 5.61597 17.96C5.41744 17.96 5.22704 17.8812 5.08664 17.7408Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </li>

                <li
                  onClick={() => handleTabClick(4)}
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${
                    activeTab === 4 ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Radio Advertising
                  <div className="bg-[#FAF4F4] rounded-full w-[40px] md:w-[46px] h-[40px] md:h-[46px] leading-[35px] md:leading-[40px] text-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M5.08664 17.7408C4.94628 17.6004 4.86743 17.41 4.86743 17.2115C4.86743 17.013 4.94628 16.8226 5.08664 16.6822L12.0443 9.72452L5.08664 2.76687C4.95026 2.62567 4.87479 2.43655 4.8765 2.24024C4.87821 2.04393 4.95695 1.85615 5.09576 1.71734C5.23458 1.57852 5.42236 1.49978 5.61866 1.49808C5.81497 1.49637 6.00409 1.57183 6.1453 1.70822L13.6323 9.19519C13.7726 9.3356 13.8515 9.526 13.8515 9.72452C13.8515 9.92305 13.7726 10.1135 13.6323 10.2539L6.1453 17.7408C6.0049 17.8812 5.8145 17.96 5.61597 17.96C5.41744 17.96 5.22704 17.8812 5.08664 17.7408Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tab content */}
            <div className="bg-[#EF4335] rounded-0 lg:rounded-r-[20px] rtl:lg:rounded-r-[0] rtl:lg:rounded-l-[20px] lg:col-span-2">
              {activeTab === 0 && (
                <>
                  <div 
                    className="relative px-[20px] md:px-[50px] lg:px-[60px] xl:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] text-white space-y-[20px]"

                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] font-semibold">
                      Print Advertising
                    </h3>

                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a
                      comprehensive paid search strategy
                    </p>

                    <Image
                      src={serviceImg1}
                      alt="service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We excel in designing and producing captivating print ads
                      that appear in newspapers, magazines, brochures, flyers,
                      and other print media. Our team ensures that your brand
                      message stands out and leaves a lasting impression on your
                      target audience.
                    </p>

                    <Link
                      href="/services/service-details/"
                      className="text-white text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:underline"
                    >
                      read more{" "}
                      <ArrowRight2
                        className="inline-block relative -top-[2px]"
                        size={20}
                        color="#fff"
                      />
                    </Link>

                    {/* Shape */}
                    <Image
                      src={shapeImg1}
                      alt="shape"
                      className="absolute top-[30px] -left-[78px] rtl:left-auto rtl:-right-[60px] hidden lg:block"
                    />
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <>
                  <div 
                    className="relative px-[20px] md:px-[50px] lg:px-[60px] xl:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] text-white space-y-[20px]"

                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] font-semibold">
                      Outdoor Advertising
                    </h3>

                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a
                      comprehensive paid search strategy
                    </p>

                    <Image
                      src={serviceImg2}
                      alt="service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We excel in designing and producing captivating print ads
                      that appear in newspapers, magazines, brochures, flyers,
                      and other print media. Our team ensures that your brand
                      message stands out and leaves a lasting impression on your
                      target audience.
                    </p>

                    <Link
                      href="/services/service-details/"
                      className="text-white text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:underline"
                    >
                      read more{" "}
                      <ArrowRight2
                        className="inline-block relative -top-[2px]"
                        size={20}
                        color="#fff"
                      />
                    </Link>

                    {/* Shape */}
                    <Image
                      src={shapeImg1}
                      alt="shape"
                      className="absolute top-[30px] -left-[78px] rtl:left-auto rtl:-right-[60px] hidden lg:block"
                    />
                  </div>
                </>
              )}
              {activeTab === 2 && (
                <>
                  <div 
                    className="relative px-[20px] md:px-[50px] lg:px-[60px] xl:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] text-white space-y-[20px]"

                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] font-semibold">
                      Direct Mail Marketing
                    </h3>

                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a
                      comprehensive paid search strategy
                    </p>

                    <Image
                      src={serviceImg3}
                      alt="service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We excel in designing and producing captivating print ads
                      that appear in newspapers, magazines, brochures, flyers,
                      and other print media. Our team ensures that your brand
                      message stands out and leaves a lasting impression on your
                      target audience.
                    </p>

                    <Link
                      href="/services/service-details/"
                      className="text-white text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:underline"
                    >
                      read more{" "}
                      <ArrowRight2
                        className="inline-block relative -top-[2px]"
                        size={20}
                        color="#fff"
                      />
                    </Link>

                    {/* Shape */}
                    <Image
                      src={shapeImg1}
                      alt="shape"
                      className="absolute top-[30px] -left-[78px] rtl:left-auto rtl:-right-[60px] hidden lg:block"
                    />
                  </div>
                </>
              )}
              {activeTab === 3 && (
                <>
                  <div 
                    className="relative px-[20px] md:px-[50px] lg:px-[60px] xl:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] text-white space-y-[20px]"

                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] font-semibold">
                      Event Marketing
                    </h3>

                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a
                      comprehensive paid search strategy
                    </p>

                    <Image
                      src={serviceImg4}
                      alt="service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We excel in designing and producing captivating print ads
                      that appear in newspapers, magazines, brochures, flyers,
                      and other print media. Our team ensures that your brand
                      message stands out and leaves a lasting impression on your
                      target audience.
                    </p>

                    <Link
                      href="/services/service-details/"
                      className="text-white text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:underline"
                    >
                      read more{" "}
                      <ArrowRight2
                        className="inline-block relative -top-[2px]"
                        size={20}
                        color="#fff"
                      />
                    </Link>

                    {/* Shape */}
                    <Image
                      src={shapeImg1}
                      alt="shape"
                      className="absolute top-[30px] -left-[78px] rtl:left-auto rtl:-right-[60px] hidden lg:block"
                    />
                  </div>
                </>
              )}
              {activeTab === 4 && (
                <>
                  <div 
                    className="relative px-[20px] md:px-[50px] lg:px-[60px] xl:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] text-white space-y-[20px]"

                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] font-semibold">
                      Radio Advertising
                    </h3>

                    <p>
                      Work closely with clients to understand their business
                      goals, target audience, and budget. Develop a
                      comprehensive paid search strategy
                    </p>

                    <Image
                      src={serviceImg5}
                      alt="service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We excel in designing and producing captivating print ads
                      that appear in newspapers, magazines, brochures, flyers,
                      and other print media. Our team ensures that your brand
                      message stands out and leaves a lasting impression on your
                      target audience.
                    </p>

                    <Link
                      href="/services/service-details/"
                      className="text-white text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:underline"
                    >
                      read more{" "}
                      <ArrowRight2
                        className="inline-block relative -top-[2px]"
                        size={20}
                        color="#fff"
                      />
                    </Link>

                    {/* Shape */}
                    <Image
                      src={shapeImg1}
                      alt="shape"
                      className="absolute top-[30px] -left-[78px] rtl:left-auto rtl:-right-[60px] hidden lg:block"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
