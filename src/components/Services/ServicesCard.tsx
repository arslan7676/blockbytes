"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

interface Service {
  image: string;
  name: string;
  description: string;
  link?: string;
}

interface Header {
  subHeading: string;
  mainHeading: string;
}

interface ServicesCardProps {
  services: Service[];
  header: Header;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ services, header }) => {
  return (
    <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
      <div className="container mx-auto">
        {/* Dynamic Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-[30px] lg:mb-[60px]">
          <h4 className="text-black uppercase text-sm md:text-base font-medium mb-[15px]">
            {header.subHeading}
          </h4>

          <h2 className="text-black font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.2]">
            {header.mainHeading}
          </h2>
        </div>

        {/* Dynamic Services Cards */}
        <div
          className={`grid gap-[25px] w-full ${
            services.length === 1
              ? "sm:grid-cols-1"
              : services.length === 2
              ? "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
              : services.length === 3
              ? "sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
              : "sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] py-[40px] px-[30px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out w-full"
            >
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <img
                  src={`/images/${service.image}.png`}
                  alt={service.name}
                  className="inline-block w-[50px] h-[50px]"
                />
              </div>

              <h3 className="text-black text-lg md:text-xl font-semibold mb-[10px]">
                {service.name}
              </h3>
              <p className="text-sm md:text-base">{service.description}</p>

              <Link
                href={service.link || "/services/service-details/"}
                className="text-black text-sm mt-[20px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
