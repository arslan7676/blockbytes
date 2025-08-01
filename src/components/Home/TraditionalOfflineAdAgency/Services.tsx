"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import shapeImg1 from "/public/images/shape1.png";
import serviceImg1 from "/public/images/mobile-development.png";
import serviceImg2 from "/public/images/web.png";
import serviceImg3 from "/public/images/ai-ml.png";
import serviceImg4 from "/public/images/amazon.png";
import serviceImg5 from "/public/images/blockchain.png";

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
              Tech Company, Redefining the Essence of Digital Innovation and Impact
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
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${activeTab === 0 ? "bg-white text-black" : "text-white"
                    }`}
                >
                  Mobile Development
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
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${activeTab === 1 ? "bg-white text-black" : "text-white"
                    }`}
                >
                  Web Development
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
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${activeTab === 2 ? "bg-white text-black" : "text-white"
                    }`}
                >
                  AI/ML
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
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${activeTab === 3 ? "bg-white text-black" : "text-white"
                    }`}
                >
                  Amazon & E-Commerce
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
                  className={` cursor-pointer border border-[#E8E8E8] rounded-full font-semibold text-16px md:text-[20px] lg:text-[17px] xl:text-[20px] py-[10px] pl-[30px] rtl:pl-[10px] pr-[10px] flex items-center justify-between ${activeTab === 4 ? "bg-white text-black" : "text-white"
                    }`}
                >
                  Blockchain & Web3.0
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
            <div className="bg-[#477ef5] rounded-0 lg:rounded-r-[20px] rtl:lg:rounded-r-[0] rtl:lg:rounded-l-[20px] lg:col-span-2">
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
                      Mobile Development
                    </h3>

                    <p>
                      Collaborate with clients to define app goals, target users, and platform preferences. We craft mobile strategies tailored to deliver intuitive, high-performance apps.
                    </p>

                    <Image
                      src={serviceImg1}
                      alt="Mobile Development Service"
                      className="rounded-[20px]"
                    />

                    <p>
                      Our team specializes in building responsive, feature-rich mobile applications for iOS and Android. From concept to launch, we ensure seamless user experiences, strong performance, and scalable architecture that supports your business growth.
                    </p>
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
                      Web Development
                    </h3>

                    <p>
                      Collaborate closely with clients to understand their brand, audience, and digital objectives. We craft tailored web solutions that align with your vision and goals.
                    </p>

                    <Image
                      src={serviceImg2}
                      alt="Web Development Service"
                      className="rounded-[20px]"
                    />

                    <p>
                      Our team excels in designing and developing responsive, scalable, and secure websites using modern technologies. Whether it's a marketing site or a dynamic web application, we ensure your online presence delivers both performance and impact.
                    </p>

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
                      AI & Machine Learning
                    </h3>

                    <p>
                      Partner with clients to identify opportunities where AI and ML can solve complex problems, automate processes, and unlock data-driven growth strategies.
                    </p>

                    <Image
                      src={serviceImg3}
                      alt="AI & Machine Learning Service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We specialize in developing intelligent systems that learn and adapt—from predictive analytics and recommendation engines to natural language processing and computer vision. Our solutions are built to scale, giving your business a competitive edge through smart automation and advanced insights.
                    </p>

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
                      Amazon & E-commerce Solutions
                    </h3>

                    <p>
                      Collaborate with clients to optimize their online storefronts, understand target customers, and create strategies that drive visibility and conversion across e-commerce platforms.
                    </p>

                    <Image
                      src={serviceImg4}
                      alt="Amazon & E-commerce Service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We specialize in setting up, managing, and scaling e-commerce operations on platforms like Amazon, Shopify, and WooCommerce. From product listing optimization and SEO to inventory management and performance analytics, our team helps your brand grow and thrive in the competitive online marketplace.
                    </p>
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
                      Blockchain & Web 3.0 Solutions
                    </h3>

                    <p>
                      Collaborate with clients to explore decentralized technologies, define use cases, and develop secure, future-ready strategies for blockchain and Web 3.0 adoption.
                    </p>

                    <Image
                      src={serviceImg5}
                      alt="Blockchain & Web 3.0 Service"
                      className="rounded-[20px]"
                    />

                    <p>
                      We specialize in building decentralized applications (dApps), smart contracts, NFTs, and blockchain integrations that enable transparent, trustless systems. Our Web 3.0 solutions empower businesses with enhanced security, ownership, and user control in a rapidly evolving digital landscape.
                    </p>
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
