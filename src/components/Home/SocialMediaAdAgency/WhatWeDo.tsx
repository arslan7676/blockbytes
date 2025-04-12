"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import shapeImg1 from "/public/images/shape1.png";

const WhatWeDo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]">
              <div className="mb-[20px] md:mb-[20px] lg:md:mb-[50px]">
                <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                  What We Do
                </h4>

                <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                  Driving success through strategic paid search advertising!
                </h2>
              </div>

              {/* Tab menu */}
              <ul>
                <li
                  onClick={() => handleTabClick(0)}
                  className={`cursor-pointer border-b-[1px] border-solid border-b-[#CACACA] font-semibold text-16px md:text-[22px] py-[10px] flex items-center justify-between ${
                    activeTab === 0 ? "text-[#000]" : ""
                  }`}
                >
                  Result driven marketing
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
                  className={`cursor-pointer border-b-[1px] border-solid border-b-[#CACACA] font-semibold text-16px md:text-[22px] py-[10px] flex items-center justify-between ${
                    activeTab === 1 ? "text-[#000]" : ""
                  }`}
                >
                  Social media focused
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
                  className={`cursor-pointer border-b-[1px] border-solid border-b-[#CACACA] font-semibold text-16px md:text-[22px] py-[10px] flex items-center justify-between ${
                    activeTab === 2 ? "text-[#000]" : ""
                  }`}
                >
                  Content creation
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
                  className={`cursor-pointer border-b-[1px] border-solid border-b-[#CACACA] font-semibold text-16px md:text-[22px] py-[10px] flex items-center justify-between ${
                    activeTab === 3 ? "text-[#000]" : ""
                  }`}
                >
                  Idea factory
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
                  className={`cursor-pointer border-b-[1px] border-solid border-b-[#CACACA] font-semibold text-16px md:text-[22px] py-[10px] flex items-center justify-between ${
                    activeTab === 4 ? "text-[#000]" : ""
                  }`}
                >
                  In-house production
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

              <Link
                href="/contact-us/"
                className="bg-black text-white text-[13px] md:text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[25px] md:px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335] mt-[25px] md:mt-[40px]"
              >
                get your free custom proposal{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>

            <div>
              <div className="mb-[30px] md:mb-[40px] lg:mb-[40px] xl:mb-[60px]">
                <p>
                  Transforming your brand's online presence and generating
                  meaningful results is our top priority at{" "}
                  <strong>Adla</strong>. As a leading paid search ad agency.
                </p>
                <Link
                  href="/about-us/"
                  className="font-medium text-black uppercase transition duration-500 ease-in-out inline-block hover:text-[#EF4335] mt-[20px]"
                >
                  Know More About Us{" "}
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={18}
                    color="#EF4335"
                  />
                </Link>
              </div>

              {/* Tab content */}
              <div>
                {activeTab === 0 && (
                  <>
                    <div 
                      className="bg-[#FAF4F4] rounded-[20px] relative px-[30px] md:px-[30px] lg:px-[88px] pt-[30px] md:pt-[40px] lg:pt-[72px] pb-[30px] md:pb-[40px] lg:pb-[179px]"

                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <div className="bg-[#fff] w-[100px] h-[100px] leading-[95px] rounded-full text-center mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="inline-block"
                        >
                          <g clipPath="url(#clip0_131_369)">
                            <path
                              d="M44.5172 43.1785H43.0887V16.7503C43.0887 16.0107 42.489 15.4111 41.7494 15.4111H36.3923C35.6527 15.4111 35.0531 16.0107 35.0531 16.7503V43.1785H32.3745V25.6788C32.3745 24.9392 31.7749 24.3395 31.0353 24.3395H25.6782C24.9386 24.3395 24.3389 24.9392 24.3389 25.6788V43.1785H21.6604V30.5894C21.6604 29.8498 21.0608 29.2502 20.3211 29.2502H14.964C14.2244 29.2502 13.6248 29.8498 13.6248 30.5894V43.1785H10.9462V33.8037C10.9462 33.064 10.3466 32.4644 9.60698 32.4644H4.24991C3.51028 32.4644 2.91064 33.064 2.91064 33.8037V43.1785H1.48209C0.742457 43.1785 0.142822 43.7782 0.142822 44.5178C0.142822 45.2575 0.742457 45.8571 1.48209 45.8571H44.5172C45.2568 45.8571 45.8565 45.2575 45.8565 44.5178C45.8565 43.7782 45.2568 43.1785 44.5172 43.1785Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M1.48209 28.9201C9.84072 28.9201 18.9051 25.9182 27.0055 20.4673C33.3496 16.1981 38.638 10.7444 41.923 5.15988L43.2237 10.014C43.384 10.6124 44.1582 11.1294 44.8639 10.961C45.5834 10.7894 46.0023 10.0352 45.8109 9.32072L43.6178 1.13601C43.4262 0.421644 42.6922 -0.00245742 41.9775 0.189058L33.7928 2.38215C33.0784 2.57358 32.6544 3.30794 32.8459 4.0224C33.0374 4.73685 33.7714 5.16095 34.4861 4.96935L39.7588 3.55651C36.6941 8.88198 31.6292 14.1273 25.5101 18.245C17.847 23.4017 9.31368 26.2416 1.48209 26.2416C0.742457 26.2416 0.142822 26.8412 0.142822 27.5808C0.142822 28.3205 0.742457 28.9201 1.48209 28.9201Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_131_369">
                              <rect
                                width="45.7143"
                                height="45.7143"
                                fill="white"
                                transform="translate(0.142822 0.142883)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] text-black font-semibold mb-[10px]">
                        Result driven marketing
                      </h3>
                      <p>
                        Work closely with clients to understand their business
                        goals, target audience, and budget. Develop a
                        comprehensive paid search strategy
                      </p>

                      {/* Shape */}
                      <Image
                        src={shapeImg1}
                        alt="shape"
                        className="absolute -top-[32px] -right-[25px] lg:-right-[0px] xl:-right-[10px] 2xl:-right-[25px] hidden lg:block"
                      />
                    </div>
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <div 
                      className="bg-[#FAF4F4] rounded-[20px] relative px-[30px] md:px-[30px] lg:px-[88px] pt-[30px] md:pt-[40px] lg:pt-[72px] pb-[30px] md:pb-[40px] lg:pb-[179px]"

                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <div className="bg-[#fff] w-[100px] h-[100px] leading-[95px] rounded-full text-center mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="inline-block"
                        >
                          <path
                            d="M0 17.8308V22.6729C0 24.0078 1.08603 25.0939 2.42102 25.0939H2.82451V15.4097H2.42102C1.08603 15.4098 0 16.4958 0 17.8308Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M4.43848 15.0062V25.4975C4.43848 27.2774 5.88658 28.7255 7.66656 28.7255H14.5262V11.7781H7.66656C5.88658 11.7781 4.43848 13.2262 4.43848 15.0062Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M12.9124 29.7944H8.07023C7.76916 29.7944 7.52515 30.0385 7.52515 30.3395V40.8307C7.52515 42.4663 8.85582 43.7969 10.4913 43.7969C12.1269 43.7969 13.4575 42.4664 13.4575 40.8307V30.3395C13.4575 30.0385 13.2134 29.7944 12.9124 29.7944Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M40.3508 13.8479V26.6558C43.5309 26.2571 45.9999 23.5384 45.9999 20.2519C45.9999 16.9654 43.5309 14.2465 40.3508 13.8479Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M16.1404 29.0107L33.0878 36.637V3.86658L16.1404 11.4929V29.0107Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M37.9992 2.46531C37.5303 2.16218 36.9695 2.11977 36.4604 2.34887L34.7017 3.14031V37.3633L36.4604 38.1548C36.9694 38.3838 37.5303 38.3414 37.9992 38.0383C38.4679 37.7352 38.7368 37.2411 38.7368 36.6829V3.82078C38.7368 3.26249 38.468 2.76844 37.9992 2.46531Z"
                            fill="#EF4335"
                          />
                          <path
                            d="M21.4266 32.8243C21.3861 32.7146 21.3032 32.6257 21.1965 32.5778L19.7249 31.9156C19.6668 31.8894 19.606 31.877 19.5462 31.877C19.3831 31.877 19.227 31.9689 19.1523 32.1255C18.2658 33.9847 16.5161 35.248 14.472 35.505C14.2539 35.5324 14.0903 35.7178 14.0903 35.9377V37.561C14.0903 37.6842 14.1424 37.8017 14.2338 37.8843C14.3143 37.9572 14.4187 37.997 14.5263 37.997C14.5408 37.997 14.5553 37.9963 14.5698 37.9948C17.5245 37.6987 20.1463 35.8466 21.412 33.1614C21.4618 33.0555 21.467 32.934 21.4266 32.8243Z"
                            fill="#EF4335"
                          />
                        </svg>
                      </div>

                      <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] text-black font-semibold mb-[10px]">
                        Social media focused
                      </h3>
                      <p>
                        Work closely with clients to understand their business
                        goals, target audience, and budget. Develop a
                        comprehensive paid search strategy
                      </p>

                      {/* Shape */}
                      <Image
                        src={shapeImg1}
                        alt="shape"
                        className="absolute -top-[32px] -right-[25px] lg:-right-[0px] xl:-right-[10px] 2xl:-right-[25px] hidden lg:block"
                      />
                    </div>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <div 
                      className="bg-[#FAF4F4] rounded-[20px] relative px-[30px] md:px-[30px] lg:px-[88px] pt-[30px] md:pt-[40px] lg:pt-[72px] pb-[30px] md:pb-[40px] lg:pb-[179px]"

                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <div className="bg-[#fff] w-[100px] h-[100px] leading-[95px] rounded-full text-center mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="inline-block"
                        >
                          <g clipPath="url(#clip0_267_154)">
                            <path
                              d="M12.433 7.83551H8.98047V11.0296C8.98047 11.9815 9.75486 12.7559 10.7067 12.7559C11.6586 12.7559 12.433 11.9815 12.433 11.0296V7.83551Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M18.5795 11.0297V7.83551H15.127V11.0296C15.127 11.9815 15.9013 12.7559 16.8533 12.7559C17.8051 12.756 18.5795 11.9816 18.5795 11.0297Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M33.9465 27.6199V15.2395C33.2915 15.0294 32.7031 14.6703 32.2203 14.2025C31.4241 14.9739 30.3404 15.4502 29.1468 15.4502C27.9533 15.4502 26.8696 14.9739 26.0734 14.2025C25.2773 14.9739 24.1936 15.4502 23.0001 15.4502C21.8066 15.4502 20.7229 14.9739 19.9267 14.2025C19.1306 14.9739 18.0468 15.4502 16.8534 15.4502C15.6599 15.4502 14.5762 14.9739 13.78 14.2025C13.2971 14.6704 12.7087 15.0294 12.0537 15.2395V27.62H16.2669V20.4333C16.2669 19.6894 16.8701 19.0862 17.614 19.0862H28.386C29.13 19.0862 29.7331 19.6894 29.7331 20.4333V27.62L33.9465 27.6199Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M18.9609 21.7803H27.0388V27.6199H18.9609V21.7803Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M24.7264 11.0297V7.83551H21.2739V11.0296C21.2739 11.9815 22.0483 12.7559 23.0003 12.7559C23.952 12.756 24.7264 11.9816 24.7264 11.0297Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M35.2935 12.756C36.2455 12.756 37.0199 11.9816 37.0199 11.0297V7.83551H33.5674V11.0296C33.5673 11.9816 34.3417 12.756 35.2935 12.756Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M36.7592 42.4334H31.0257V37.7136H15.1761V42.4334H9.24064C8.49669 42.4334 7.89355 43.0365 7.89355 43.7804C7.89355 44.5244 8.49669 45.1275 9.24064 45.1275H36.7593C37.5032 45.1275 38.1064 44.5244 38.1064 43.7804C38.1064 43.0365 37.5032 42.4334 36.7592 42.4334Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M46 30.3141H0V33.6453C0 34.4042 0.615168 35.0194 1.37411 35.0194H44.626C45.3848 35.0194 46.0001 34.4043 46.0001 33.6453L46 30.3141Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M30.873 11.0297V7.83551H27.4204V11.0296C27.4204 11.9815 28.1948 12.7559 29.1467 12.7559C30.0987 12.7559 30.873 11.9816 30.873 11.0297Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M44.6259 0.872437H1.37411C0.615168 0.872437 0 1.4876 0 2.24646V27.6199H9.35953V15.2395C7.57896 14.6684 6.28621 12.9975 6.28621 11.0297V6.82977C6.28621 5.89732 7.0421 5.14143 7.97455 5.14143H38.0254C38.9579 5.14143 39.7139 5.89732 39.7139 6.82987V11.0298C39.7139 12.9976 38.4211 14.6685 36.6405 15.2396V27.6201H46V2.24646C46 1.4876 45.3847 0.872437 44.6259 0.872437Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_267_154">
                              <rect width="46" height="46" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] text-black font-semibold mb-[10px]">
                        Content creation
                      </h3>
                      <p>
                        Work closely with clients to understand their business
                        goals, target audience, and budget. Develop a
                        comprehensive paid search strategy
                      </p>

                      {/* Shape */}
                      <Image
                        src={shapeImg1}
                        alt="shape"
                        className="absolute -top-[32px] -right-[25px] lg:-right-[0px] xl:-right-[10px] 2xl:-right-[25px] hidden lg:block"
                      />
                    </div>
                  </>
                )}
                {activeTab === 3 && (
                  <>
                    <div 
                      className="bg-[#FAF4F4] rounded-[20px] relative px-[30px] md:px-[30px] lg:px-[88px] pt-[30px] md:pt-[40px] lg:pt-[72px] pb-[30px] md:pb-[40px] lg:pb-[179px]"

                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <div className="bg-[#fff] w-[100px] h-[100px] leading-[95px] rounded-full text-center mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="inline-block"
                        >
                          <g clipPath="url(#clip0_343_2552)">
                            <path
                              d="M45.0574 0.00572372C36.0779 -0.155276 25.8371 4.53864 19.3549 11.8201C13.1603 11.937 7.12853 14.4766 2.68761 18.9175C2.42886 19.1724 2.33686 19.5538 2.44995 19.8988C2.56495 20.2457 2.86395 20.4968 3.22428 20.5486L10.6111 21.6066L9.69878 22.6281C9.35953 23.0076 9.37678 23.5846 9.73711 23.9449L22.0555 36.2633C22.2414 36.4492 22.4868 36.5431 22.734 36.5431C22.9621 36.5431 23.1902 36.4626 23.3723 36.2997L24.3939 35.3874L25.4519 42.7742C25.5036 43.1346 25.7873 43.3991 26.1304 43.5141C26.2185 43.5428 26.3105 43.5562 26.4044 43.5562C26.6766 43.5562 26.9545 43.4374 27.1462 43.2476C31.5258 38.8681 34.0654 32.8363 34.1823 26.6416C41.4714 20.1461 46.2036 9.90914 45.9947 0.941057C45.9813 0.431224 45.5692 0.0191404 45.0574 0.00572372ZM36.2254 16.5504C35.292 17.4838 34.0654 17.9515 32.8368 17.9515C31.6082 17.9515 30.3815 17.4838 29.4481 16.5504C27.5813 14.6816 27.5813 11.6418 29.4481 9.77306C31.3169 7.90431 34.3567 7.90431 36.2254 9.77306C38.0942 11.6418 38.0942 14.6836 36.2254 16.5504Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M5.22111 32.4013C3.17028 34.4521 0.354693 43.7173 0.04036 44.7657C-0.0612233 45.103 0.0326934 45.4691 0.279943 45.7183C0.463943 45.9023 0.70736 46 0.958443 46C1.05044 46 1.14244 45.9866 1.23444 45.9598C2.28286 45.6454 11.548 42.8298 13.5989 40.779C15.9084 38.4694 15.9084 34.7109 13.5989 32.4013C11.2874 30.0917 7.53069 30.0936 5.22111 32.4013Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_343_2552">
                              <rect width="46" height="46" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] text-black font-semibold mb-[10px]">
                        Idea factory
                      </h3>
                      <p>
                        Work closely with clients to understand their business
                        goals, target audience, and budget. Develop a
                        comprehensive paid search strategy
                      </p>

                      {/* Shape */}
                      <Image
                        src={shapeImg1}
                        alt="shape"
                        className="absolute -top-[32px] -right-[25px] lg:-right-[0px] xl:-right-[10px] 2xl:-right-[25px] hidden lg:block"
                      />
                    </div>
                  </>
                )}
                {activeTab === 4 && (
                  <>
                    <div 
                      className="bg-[#FAF4F4] rounded-[20px] relative px-[30px] md:px-[30px] lg:px-[88px] pt-[30px] md:pt-[40px] lg:pt-[72px] pb-[30px] md:pb-[40px] lg:pb-[179px]"

                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <div className="bg-[#fff] w-[100px] h-[100px] leading-[95px] rounded-full text-center mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="inline-block"
                        >
                          <g clipPath="url(#clip0_242_26)">
                            <path
                              d="M21.674 24.0478L2.44531 13.0601V35.0121L21.674 46V24.0478Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M24.3262 24.0478V46L43.555 35.0121V13.0601L24.3262 24.0478Z"
                              fill="#EF4335"
                            />
                            <path
                              d="M3.79199 10.7749L23.0001 21.7509L42.2083 10.7749L23.6581 0.17472C23.2505 -0.05824 22.7499 -0.05824 22.3422 0.17472L3.79199 10.7749Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_242_26">
                              <rect width="46" height="46" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[36px] text-black font-semibold mb-[10px]">
                        In-house production
                      </h3>
                      <p>
                        Work closely with clients to understand their business
                        goals, target audience, and budget. Develop a
                        comprehensive paid search strategy
                      </p>

                      {/* Shape */}
                      <Image
                        src={shapeImg1}
                        alt="shape"
                        className="absolute -top-[32px] -right-[25px] lg:-right-[0px] xl:-right-[10px] 2xl:-right-[25px] hidden lg:block"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
