"use client";

import Image from "next/image"; 

import dotLines from "/public/images/dot-lines-2.png";

const OurProcess = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div 
            className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              our process
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Your path to paid search excellence starts here!
            </h2>
          </div>

          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                1
              </div>
              <div className="pr-[0] xl:pr-[120px] xl:rtl:pr-0 xl:rtl:pl-[120px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Discovery and Strategy
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>

              {/* dotLines  */}
              <Image
                src={dotLines}
                alt="asset"
                className="group-last:hidden absolute top-[70px] right-0 rtl:right-auto rtl:left-0 w-[120px] hidden xl:block"
              />
            </div>

            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                2
              </div>
              <div className="pr-[0] xl:pr-[120px] xl:rtl:pr-0 xl:rtl:pl-[120px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Campaign Execution
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>

                {/* dotLines  */}
                <Image
                  src={dotLines}
                  alt="asset"
                  className="group-last:hidden absolute top-[70px] right-0 rtl:right-auto rtl:left-0 w-[120px] hidden xl:block"
                />
              </div>
            </div>

            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                3
              </div>
              <div className="pr-[0] xl:pr-[120px] xl:rtl:pr-0 xl:rtl:pl-[120px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Reporting and Analysis
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>

                {/* dotLines  */}
                <Image
                  src={dotLines}
                  alt="asset"
                  className="group-last:hidden absolute top-[70px] right-0 rtl:right-auto rtl:left-0 w-[120px] hidden xl:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
