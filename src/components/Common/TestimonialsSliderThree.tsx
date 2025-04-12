"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import clientImg1 from "/public/images/client.png";

const TestimonialsSliderThree = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-[600px] mx-auto">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              Testimonials
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[20px] md:mb-[30px] md:lg-[40px]">
              We help to achieve customers business goals
            </h2>
          </div>

          <div className="md:max-w-[1096px] mx-auto">
            <Swiper
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="testimonial-slider-three"
            >
              <SwiperSlide>
                <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                  <div className="relative text-center">
                    <Image
                      src={clientImg1}
                      alt="client"
                      className="inline-block"
                    />

                    <div className="absolute top-[55px] right-0 rtl:right-auto rtl:left-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_191_1182)">
                          <path
                            d="M39 0C17.4955 0 0 17.4955 0 39C0 60.5045 17.4955 78 39 78C60.5045 78 78 60.5045 78 39C78 17.4955 60.5048 0 39 0ZM19.9022 58.1702C19.4633 58.4673 18.3615 58.7288 17.7169 58.0131L16.5277 56.5173C15.9525 55.5448 16.6491 54.6428 17.1001 54.2687C19.2441 52.4902 20.8032 51.1144 21.776 50.1413C23.6838 48.135 25.094 46.1267 26.0251 44.1244C26.2381 43.6667 25.6946 43.3761 25.4123 43.2836C18.3819 40.9794 14.8655 36.9173 14.8655 31.098C14.8655 27.6694 16.0043 24.8834 18.2805 22.7416C20.5578 20.5985 23.4105 19.5277 26.8379 19.5277C29.8912 19.5277 32.5968 20.9201 34.9532 23.7059C37.2572 26.3298 38.4082 29.1697 38.4082 32.223C38.4085 41.1714 32.2401 49.8203 19.9022 58.1702ZM46.6591 58.1702C46.2202 58.4673 45.1184 58.7288 44.4739 58.0131L43.2846 56.5173C42.7094 55.5448 43.406 54.6428 43.857 54.2687C46.0008 52.4902 47.5601 51.1144 48.5329 50.1413C50.4407 48.135 51.8509 46.1267 52.7823 44.1244C52.9952 43.6667 52.4517 43.3761 52.1694 43.2836C45.139 40.9794 41.6227 36.9173 41.6227 31.098C41.6227 27.6694 42.7614 24.8834 45.0377 22.7416C47.3152 20.5985 50.1677 19.5277 53.595 19.5277C56.6483 19.5277 59.354 20.9201 61.7104 23.7059C64.0141 26.3298 65.1654 29.1697 65.1654 32.223C65.1654 41.1714 58.997 49.8203 46.6591 58.1702Z"
                            fill="#EF4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_191_1182">
                            <rect width="78" height="78" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[70px] rtl:xl:pl-0 rtl:xl:pr-[70px]">
                    <p className="italic text-[18px] font-medium leading-[30px]">
                      Their expertise and dedication have truly transformed
                      our brand's online presence. From the initial
                      consultation to the execution of our campaigns, they
                      displayed an exceptional level of professionalism and
                      creativity. They took the time to understand our brand's
                      unique voice and target audience, resulting in campaigns
                      that resonated deeply with our customers.
                    </p>

                    <div className="mt-[40px]">
                      <h5 className="text-black font-medium text-[18px]">
                        Jasika Maya
                      </h5>
                      <p>CTO at EnvyTheme</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                  <div className="relative text-center">
                    <Image
                      src={clientImg1}
                      alt="client"
                      className="inline-block"
                    />

                    <div className="absolute top-[55px] right-0 rtl:right-auto rtl:left-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_191_1182)">
                          <path
                            d="M39 0C17.4955 0 0 17.4955 0 39C0 60.5045 17.4955 78 39 78C60.5045 78 78 60.5045 78 39C78 17.4955 60.5048 0 39 0ZM19.9022 58.1702C19.4633 58.4673 18.3615 58.7288 17.7169 58.0131L16.5277 56.5173C15.9525 55.5448 16.6491 54.6428 17.1001 54.2687C19.2441 52.4902 20.8032 51.1144 21.776 50.1413C23.6838 48.135 25.094 46.1267 26.0251 44.1244C26.2381 43.6667 25.6946 43.3761 25.4123 43.2836C18.3819 40.9794 14.8655 36.9173 14.8655 31.098C14.8655 27.6694 16.0043 24.8834 18.2805 22.7416C20.5578 20.5985 23.4105 19.5277 26.8379 19.5277C29.8912 19.5277 32.5968 20.9201 34.9532 23.7059C37.2572 26.3298 38.4082 29.1697 38.4082 32.223C38.4085 41.1714 32.2401 49.8203 19.9022 58.1702ZM46.6591 58.1702C46.2202 58.4673 45.1184 58.7288 44.4739 58.0131L43.2846 56.5173C42.7094 55.5448 43.406 54.6428 43.857 54.2687C46.0008 52.4902 47.5601 51.1144 48.5329 50.1413C50.4407 48.135 51.8509 46.1267 52.7823 44.1244C52.9952 43.6667 52.4517 43.3761 52.1694 43.2836C45.139 40.9794 41.6227 36.9173 41.6227 31.098C41.6227 27.6694 42.7614 24.8834 45.0377 22.7416C47.3152 20.5985 50.1677 19.5277 53.595 19.5277C56.6483 19.5277 59.354 20.9201 61.7104 23.7059C64.0141 26.3298 65.1654 29.1697 65.1654 32.223C65.1654 41.1714 58.997 49.8203 46.6591 58.1702Z"
                            fill="#EF4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_191_1182">
                            <rect width="78" height="78" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[70px] rtl:xl:pl-0 rtl:xl:pr-[70px]">
                    <p className="italic text-[18px] font-medium leading-[30px]">
                      Their expertise and dedication have truly transformed
                      our brand's online presence. From the initial
                      consultation to the execution of our campaigns, they
                      displayed an exceptional level of professionalism and
                      creativity. They took the time to understand our brand's
                      unique voice and target audience, resulting in campaigns
                      that resonated deeply with our customers.
                    </p>

                    <div className="mt-[40px]">
                      <h5 className="text-black font-medium text-[18px]">
                        James Oliver
                      </h5>
                      <p>CTO at ThemeForest</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                  <div className="relative text-center">
                    <Image
                      src={clientImg1}
                      alt="client"
                      className="inline-block"
                    />

                    <div className="absolute top-[55px] right-0 rtl:right-auto rtl:left-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_191_1182)">
                          <path
                            d="M39 0C17.4955 0 0 17.4955 0 39C0 60.5045 17.4955 78 39 78C60.5045 78 78 60.5045 78 39C78 17.4955 60.5048 0 39 0ZM19.9022 58.1702C19.4633 58.4673 18.3615 58.7288 17.7169 58.0131L16.5277 56.5173C15.9525 55.5448 16.6491 54.6428 17.1001 54.2687C19.2441 52.4902 20.8032 51.1144 21.776 50.1413C23.6838 48.135 25.094 46.1267 26.0251 44.1244C26.2381 43.6667 25.6946 43.3761 25.4123 43.2836C18.3819 40.9794 14.8655 36.9173 14.8655 31.098C14.8655 27.6694 16.0043 24.8834 18.2805 22.7416C20.5578 20.5985 23.4105 19.5277 26.8379 19.5277C29.8912 19.5277 32.5968 20.9201 34.9532 23.7059C37.2572 26.3298 38.4082 29.1697 38.4082 32.223C38.4085 41.1714 32.2401 49.8203 19.9022 58.1702ZM46.6591 58.1702C46.2202 58.4673 45.1184 58.7288 44.4739 58.0131L43.2846 56.5173C42.7094 55.5448 43.406 54.6428 43.857 54.2687C46.0008 52.4902 47.5601 51.1144 48.5329 50.1413C50.4407 48.135 51.8509 46.1267 52.7823 44.1244C52.9952 43.6667 52.4517 43.3761 52.1694 43.2836C45.139 40.9794 41.6227 36.9173 41.6227 31.098C41.6227 27.6694 42.7614 24.8834 45.0377 22.7416C47.3152 20.5985 50.1677 19.5277 53.595 19.5277C56.6483 19.5277 59.354 20.9201 61.7104 23.7059C64.0141 26.3298 65.1654 29.1697 65.1654 32.223C65.1654 41.1714 58.997 49.8203 46.6591 58.1702Z"
                            fill="#EF4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_191_1182">
                            <rect width="78" height="78" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="text-center lg:text-left rtl:lg:text-right lg:col-span-2 xl:pl-[70px] rtl:xl:pl-0 rtl:xl:pr-[70px]">
                    <p className="italic text-[18px] font-medium leading-[30px]">
                      Their expertise and dedication have truly transformed
                      our brand's online presence. From the initial
                      consultation to the execution of our campaigns, they
                      displayed an exceptional level of professionalism and
                      creativity. They took the time to understand our brand's
                      unique voice and target audience, resulting in campaigns
                      that resonated deeply with our customers.
                    </p>

                    <div className="mt-[40px]">
                      <h5 className="text-black font-medium text-[18px]">
                        William Jack
                      </h5>
                      <p>CTO at HiBootstrap</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSliderThree;
