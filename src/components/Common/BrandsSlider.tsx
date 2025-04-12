"use client";

import Image from "next/image"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import brandImg1 from "/public/images/brand-1.png";
import brandImg2 from "/public/images/brand-2.png";
import brandImg3 from "/public/images/brand-3.png";
import brandImg4 from "/public/images/brand-4.png";
import brandImg5 from "/public/images/brand-5.png";
import brandImg6 from "/public/images/brand-6.png";

const BrandsSlider = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <h3 className="text-black text-[20px] font-medium text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
            Increase your brand’s revenue with Adla
          </h3>

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
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="brands-slider"
          >
            <SwiperSlide className="text-center">
              <Image src={brandImg1} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg2} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg3} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg4} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg5} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg6} alt="brand" className="mx-auto" />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image src={brandImg4} alt="brand" className="mx-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BrandsSlider;
