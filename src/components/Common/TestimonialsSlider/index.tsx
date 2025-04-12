"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import userImg1 from "/public/images/user1.png";
import userImg2 from "/public/images/user2.png";
import userImg3 from "/public/images/user3.png";
import Reviews from "./Reviews";

const TestimonialsSlider = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="testimonials-slider-content">
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                Testimonials
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[425px] mb-[20px] md:mb-[30px] md:lg-[40px]">
                We help to achieve customers business goals
              </h2>

              <Swiper
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="testimonial-slider"
              >
                <SwiperSlide>
                  <h4 className="bg-[#fee] rounded-[100px] py-[7px] px-[23px] font-medium text-black text-[16px] md:text-[18px] max-w-[165px] mb-[20px] text-center">
                    Design Quality
                  </h4>

                  <q className="italic text-[18px] font-medium color-[#4C4C4C]">
                    We have been partnering with Adla for our paid search
                    advertising needs, and they have consistently exceeded our
                    expectations.
                  </q>

                  <div className="mt-[40px] flex items-center space-x-[15px] rtl:space-x-reverse">
                    <div className="shrink-0">
                      <Image
                        src={userImg1}
                        alt="user"
                        className="rounded-[50px] w-[46px] h-[46px] border-[1px] border-[#000]"
                      />
                    </div>

                    <div>
                      <h5 className="text-black font-medium text-[18px]">
                        James Oliver
                      </h5>
                      <p>CTO at EnvyTheme</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <h4 className="bg-[#fee] rounded-[100px] py-[7px] px-[23px] font-medium text-black text-[16px] md:text-[18px] max-w-[165px] mb-[20px] text-center">
                    Code Quality
                  </h4>

                  <q className="italic text-[18px] font-medium color-[#4C4C4C]">
                    We have been partnering with Adla for our paid search
                    advertising needs, and they have consistently exceeded our
                    expectations.
                  </q>

                  <div className="mt-[40px] flex items-center space-x-[15px] rtl:space-x-reverse">
                    <div className="shrink-0">
                      <Image
                        src={userImg2}
                        alt="user"
                        className="rounded-[50px] w-[46px] h-[46px] border-[1px] border-[#000]"
                      />
                    </div>

                    <div>
                      <h5 className="text-black font-medium text-[18px]">
                        Jasika Maya
                      </h5>
                      <p>CTO at ThemeForest</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <h4 className="bg-[#fee] rounded-[100px] py-[7px] px-[23px] font-medium text-black text-[16px] md:text-[18px] max-w-[165px] mb-[20px] text-center">
                    Support
                  </h4>

                  <q className="italic text-[18px] font-medium color-[#4C4C4C]">
                    We have been partnering with Adla for our paid search
                    advertising needs, and they have consistently exceeded our
                    expectations.
                  </q>

                  <div className="mt-[40px] flex items-center space-x-[15px] rtl:space-x-reverse">
                    <div className="shrink-0">
                      <Image
                        src={userImg3}
                        alt="user"
                        className="rounded-[50px] w-[46px] h-[46px] border-[1px] border-[#000]"
                      />
                    </div>

                    <div>
                      <h5 className="text-black font-medium text-[18px]">
                        Emily Emma
                      </h5>
                      <p>CTO at HiBootstrap</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            
            {/* Reviews */}
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
