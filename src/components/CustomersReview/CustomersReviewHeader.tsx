"use client";

import Image from "next/image";

import pageBanner1 from "/public/images/page-banner1.png";

const CustomersReviewHeader = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] xl:pr-[100px]">
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                Customers Review
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                Beyond the Glow of Screens: Unraveling the Timeless Spell of Offline Advertising Magic
              </h2>

              <p>
                Transforming your brand's online presence and generating
                meaningful results is our top priority at{" "}
                <strong>Adla</strong>. As a leading paid search ad agency.
              </p>
            </div>

            <div>
              <Image src={pageBanner1} alt="Page Banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersReviewHeader;
