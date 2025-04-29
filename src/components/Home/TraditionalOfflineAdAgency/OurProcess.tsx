'use client';

import Image from "next/image"; 
import dotLines from "/public/images/dot-lines-2.png";

const processSteps = [
  {
    title: "Research and Analysis",
    description: "We gather insights to understand your market, audience, and competitors to make informed decisions.",
  },
  {
    title: "Strategy Development",
    description: "We craft a custom plan aligned with your business goals and marketing channels.",
  },
  {
    title: "Campaign Execution",
    description: "We implement the strategy through creative campaigns and precise targeting.",
  },
  {
    title: "Build",
    description: "We build scalable and robust systems that reflect your brand and serve your customers.",
  },
  {
    title: "Release",
    description: "We deploy the solution with minimal disruption, ensuring everything runs smoothly.",
  },
  {
    title: "Execution",
    description: "We monitor and optimize performance in real time, ensuring long-term success.",
  },
];

const OurProcess = () => {
  return (
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
            Designing Future-Ready Solutions That Leave a Lasting Impact.
          </h2>
        </div>

        {/* Grid of steps */}
        <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                {index + 1}
              </div>
              <div className="pr-[0] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* dotLines */}
              <Image
                src={dotLines}
                alt="asset"
                className="group-last:hidden absolute top-[70px] right-0 rtl:right-auto rtl:left-0 w-[120px] hidden xl:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
