"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import pratnerImg1 from "/public/images/pratner1.png";
import pratnerImg2 from "/public/images/pratner2.png";
import pratnerImg3 from "/public/images/pratner3.png";
import pratnerImg4 from "/public/images/pratner4.png";
import pratnerImg5 from "/public/images/pratner5.png";

const Partner = () => {
  return (
    <>
      <div className="container lg:max-w-[1710px] mx-auto">
        <div className="bg-[#F2F2F8] rounded-b-[20px] pt-[50px] md:pt-[80px] lg:pt-[80px] xl:pt-[107px] pb-[50px] md:pb-[50px] lg:pb-[80px] xl:pb-[109px] pl-[20px] md:pl-[58px] lg:pl-[30px] xl:pl-[50px] 2xl:pl-[110px] pr-[20px] md:pr-[58px] lg:pr-[30px] xl:pr-[50px] 2xl:pr-[58px]">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
            <div>
              <p className="font-medium uppercase">our media partner</p>
            </div>

            <div className="lg:col-span-4">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Autoplay]}
                className="pratner-slider"
              >
                <SwiperSlide className="text-center">
                  <Image src={pratnerImg1} alt="brand" />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <Image src={pratnerImg2} alt="brand" />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <Image src={pratnerImg3} alt="brand" />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <Image src={pratnerImg4} alt="brand" />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <Image src={pratnerImg5} alt="brand" />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <Image src={pratnerImg2} alt="brand" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
