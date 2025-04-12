"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import verticalLine from "/public/images/vertical-line.png";

import userImg1 from "/public/images/user4.png";
import userImg2 from "/public/images/user5.png";
import userImg3 from "/public/images/user6.png";
import BorderLine from "./BorderLine";

const TestimonialsSliderTwo = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container mx-auto">
          <div className="pb-[50px]">
            {/* Section Header */}
            <div className="text-center">
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                Testimonials
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[640px] mb-[20px] md:mb-[30px] md:lg-[40px] mx-auto">
                We help to achieve customers business goals
              </h2>
            </div>

            <div className="md:max-w-[1037px] mx-auto">
              <Swiper
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="testimonial-slider-two"
              >
                <SwiperSlide>
                  <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="text-center">
                      <Image
                        src={userImg1}
                        alt="user"
                        className="rounded-full w-[120px] h-[120px] border-[1px] border-[#000] inline-block mb-[20px]"
                      />
                      <h5 className="text-black font-medium text-[18px] mb-[5px]">
                        Jasika Maya
                      </h5>
                      <p>CTO at EnvyTheme</p>
                    </div>

                    <div className="relative text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[35px] rtl:xl:pl-0 rtl:xl:pr-[35px]">
                      <div className="mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          className="inline-block lg:block"
                        >
                          <g clipPath="url(#clip0_174_331)">
                            <path
                              d="M28 0C12.5609 0 0 12.5609 0 28C0 43.4391 12.5609 56 28 56C43.4391 56 56 43.4391 56 28C56 12.5609 43.4393 0 28 0ZM14.2888 41.7632C13.9737 41.9765 13.1826 42.1642 12.7199 41.6504L11.866 40.5766C11.4531 39.8783 11.9532 39.2307 12.277 38.9622C13.8163 37.6853 14.9356 36.6975 15.6341 35.9989C17.0037 34.5585 18.0162 33.1166 18.6847 31.6791C18.8376 31.3504 18.4474 31.1418 18.2447 31.0754C13.1972 29.4211 10.6727 26.5047 10.6727 22.3268C10.6727 19.8652 11.4902 17.865 13.1245 16.3273C14.7595 14.7887 16.8075 14.0199 19.2682 14.0199C21.4603 14.0199 23.4028 15.0195 25.0946 17.0196C26.7487 18.9035 27.5751 20.9423 27.5751 23.1344C27.5753 29.559 23.1467 35.7684 14.2888 41.7632ZM33.4989 41.7632C33.1837 41.9765 32.3927 42.1642 31.93 41.6504L31.0761 40.5766C30.6632 39.8783 31.1633 39.2307 31.4871 38.9622C33.0262 37.6853 34.1457 36.6975 34.8442 35.9989C36.2138 34.5585 37.2263 33.1166 37.895 31.6791C38.0479 31.3504 37.6577 31.1418 37.455 31.0754C32.4075 29.4211 29.8829 26.5047 29.8829 22.3268C29.8829 19.8652 30.7005 17.865 32.3348 16.3273C33.9699 14.7887 36.0178 14.0199 38.4785 14.0199C40.6706 14.0199 42.6131 15.0195 44.3049 17.0196C45.9588 18.9035 46.7854 20.9423 46.7854 23.1344C46.7854 29.559 42.3568 35.7684 33.4989 41.7632Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_174_331">
                              <rect width="56" height="56" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <p className="italic text-[18px] font-medium leading-[30px]">
                        Their expertise and dedication have truly transformed
                        our brand's online presence. From the initial
                        consultation to the execution of our campaigns, they
                        displayed an exceptional level of professionalism and
                        creativity. They took the time to understand our brand's
                        unique voice and target audience, resulting in campaigns
                        that resonated deeply with our customers.
                      </p>

                      {/* Vertical Line */}
                      <Image
                        src={verticalLine}
                        alt="vertical Line"
                        className="absolute top-0 left-[-35px] rtl:left-auto rtl:right-[-35px] h-full hidden lg:block"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="text-center">
                      <Image
                        src={userImg2}
                        alt="user"
                        className="rounded-full w-[120px] h-[120px] border-[1px] border-[#000] inline-block mb-[20px]"
                      />
                      <h5 className="text-black font-medium text-[18px] mb-[5px]">
                        James Oliver
                      </h5>
                      <p>CTO at ThemeForest</p>
                    </div>

                    <div className="relative text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[35px] rtl:xl:pl-0 rtl:xl:pr-[35px]">
                      <div className="mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          className="inline-block lg:block"
                        >
                          <g clipPath="url(#clip0_174_331)">
                            <path
                              d="M28 0C12.5609 0 0 12.5609 0 28C0 43.4391 12.5609 56 28 56C43.4391 56 56 43.4391 56 28C56 12.5609 43.4393 0 28 0ZM14.2888 41.7632C13.9737 41.9765 13.1826 42.1642 12.7199 41.6504L11.866 40.5766C11.4531 39.8783 11.9532 39.2307 12.277 38.9622C13.8163 37.6853 14.9356 36.6975 15.6341 35.9989C17.0037 34.5585 18.0162 33.1166 18.6847 31.6791C18.8376 31.3504 18.4474 31.1418 18.2447 31.0754C13.1972 29.4211 10.6727 26.5047 10.6727 22.3268C10.6727 19.8652 11.4902 17.865 13.1245 16.3273C14.7595 14.7887 16.8075 14.0199 19.2682 14.0199C21.4603 14.0199 23.4028 15.0195 25.0946 17.0196C26.7487 18.9035 27.5751 20.9423 27.5751 23.1344C27.5753 29.559 23.1467 35.7684 14.2888 41.7632ZM33.4989 41.7632C33.1837 41.9765 32.3927 42.1642 31.93 41.6504L31.0761 40.5766C30.6632 39.8783 31.1633 39.2307 31.4871 38.9622C33.0262 37.6853 34.1457 36.6975 34.8442 35.9989C36.2138 34.5585 37.2263 33.1166 37.895 31.6791C38.0479 31.3504 37.6577 31.1418 37.455 31.0754C32.4075 29.4211 29.8829 26.5047 29.8829 22.3268C29.8829 19.8652 30.7005 17.865 32.3348 16.3273C33.9699 14.7887 36.0178 14.0199 38.4785 14.0199C40.6706 14.0199 42.6131 15.0195 44.3049 17.0196C45.9588 18.9035 46.7854 20.9423 46.7854 23.1344C46.7854 29.559 42.3568 35.7684 33.4989 41.7632Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_174_331">
                              <rect width="56" height="56" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <p className="italic text-[18px] font-medium leading-[30px]">
                        Their expertise and dedication have truly transformed
                        our brand's online presence. From the initial
                        consultation to the execution of our campaigns, they
                        displayed an exceptional level of professionalism and
                        creativity. They took the time to understand our brand's
                        unique voice and target audience, resulting in campaigns
                        that resonated deeply with our customers.
                      </p>

                      {/* Vertical Line */}
                      <Image
                        src={verticalLine}
                        alt="vertical Line"
                        className="absolute top-0 left-[-35px] rtl:left-auto rtl:right-[-35px] h-full hidden lg:block"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="text-center">
                      <Image
                        src={userImg3}
                        alt="user"
                        className="rounded-full w-[120px] h-[120px] border-[1px] border-[#000] inline-block mb-[20px]"
                      />
                      <h5 className="text-black font-medium text-[18px] mb-[5px]">
                        William Jack
                      </h5>
                      <p>CTO at HiBootstrap</p>
                    </div>

                    <div className="relative text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[35px] rtl:xl:pl-0 rtl:xl:pr-[35px]">
                      <div className="mb-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          className="inline-block lg:block"
                        >
                          <g clipPath="url(#clip0_174_331)">
                            <path
                              d="M28 0C12.5609 0 0 12.5609 0 28C0 43.4391 12.5609 56 28 56C43.4391 56 56 43.4391 56 28C56 12.5609 43.4393 0 28 0ZM14.2888 41.7632C13.9737 41.9765 13.1826 42.1642 12.7199 41.6504L11.866 40.5766C11.4531 39.8783 11.9532 39.2307 12.277 38.9622C13.8163 37.6853 14.9356 36.6975 15.6341 35.9989C17.0037 34.5585 18.0162 33.1166 18.6847 31.6791C18.8376 31.3504 18.4474 31.1418 18.2447 31.0754C13.1972 29.4211 10.6727 26.5047 10.6727 22.3268C10.6727 19.8652 11.4902 17.865 13.1245 16.3273C14.7595 14.7887 16.8075 14.0199 19.2682 14.0199C21.4603 14.0199 23.4028 15.0195 25.0946 17.0196C26.7487 18.9035 27.5751 20.9423 27.5751 23.1344C27.5753 29.559 23.1467 35.7684 14.2888 41.7632ZM33.4989 41.7632C33.1837 41.9765 32.3927 42.1642 31.93 41.6504L31.0761 40.5766C30.6632 39.8783 31.1633 39.2307 31.4871 38.9622C33.0262 37.6853 34.1457 36.6975 34.8442 35.9989C36.2138 34.5585 37.2263 33.1166 37.895 31.6791C38.0479 31.3504 37.6577 31.1418 37.455 31.0754C32.4075 29.4211 29.8829 26.5047 29.8829 22.3268C29.8829 19.8652 30.7005 17.865 32.3348 16.3273C33.9699 14.7887 36.0178 14.0199 38.4785 14.0199C40.6706 14.0199 42.6131 15.0195 44.3049 17.0196C45.9588 18.9035 46.7854 20.9423 46.7854 23.1344C46.7854 29.559 42.3568 35.7684 33.4989 41.7632Z"
                              fill="#EF4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_174_331">
                              <rect width="56" height="56" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <p className="italic text-[18px] font-medium leading-[30px]">
                        Their expertise and dedication have truly transformed
                        our brand's online presence. From the initial
                        consultation to the execution of our campaigns, they
                        displayed an exceptional level of professionalism and
                        creativity. They took the time to understand our brand's
                        unique voice and target audience, resulting in campaigns
                        that resonated deeply with our customers.
                      </p>

                      {/* Vertical Line */}
                      <Image
                        src={verticalLine}
                        alt="vertical Line"
                        className="absolute top-0 left-[-35px] rtl:left-auto rtl:right-[-35px] h-full hidden lg:block"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* BorderLine */}
          <BorderLine />
        </div>
      </div>
    </>
  );
};

export default TestimonialsSliderTwo;
