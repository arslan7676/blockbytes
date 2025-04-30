"use client";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image, { StaticImageData } from "next/image";

import pageBanner1 from "/public/images/page-banner1.png";
import ai from "/public/images/ai-ml.png";
import web3 from "/public/images/web3.0.png";
import gis from "/public/images/gis-solution.png";
import mobile from "/public/images/mobile-development.png";
import staff from "/public/images/staff.png";
import web from "/public/images/web.png";
import amazon from "/public/images/amazon.png";

type ServiceType = "BlocBytes Artificial Intelligence Development Services" | "Web Development" | "The Native & cross-platform mobile app development" | "Cloud Computing" | "Amazon & E-Commerce" | "BlocBytes Web3 Development Services" | "Hire Developers with GIS Software Development Experience" | "Staff Augmentation"| "Back-End GIS Specialists";

const serviceDescriptions: Record<ServiceType, { description: string; image: StaticImageData }> = {
  "BlocBytes Artificial Intelligence Development Services": {
    description: "BlocBytes' artificial intelligence and machine learning experts provide businesses with first-class, domain-specific solutions of any complexity and scale.\n\nWhat is Artificial Intelligence in Software Engineering?\n\nArtificial Intelligence (AI) refers to self-learning systems capable of performing tasks based on algorithms and models. Many people encounter AI daily without realizing its extensive applications, which range from voice assistants and facial recognition software to recommendation algorithms and process optimization tools in large industries.\n\n Effective data management is crucial for leveraging AI in specific tasks. In AI development, this process significantly contributes to analyzing and building data-driven solutions. Although labor-intensive, it reduces time spent on repetitive tasks, leading to cost savings and better resource allocation for other business needs.",
    image: ai
  },
  "Web Development": {
    description: "To enhance your customer retention and elevate your brand's reputation, BlocBytes develops versatile, highly scalable, and modern web applications that adhere to the highest quality standards, tailored to meet your specific business needs.\n\nBy thoroughly evaluating your preferences, expectations, and objectives, our seasoned team of pre-vetted developers delivers exceptional web app development services that align perfectly with your brand.",
    image: web
  },
  "The Native & cross-platform mobile app development": {
    description: "Create apps that truly represent your business with our mobile development services.We build custom iOS, Android, and cross-platform apps, guaranteeing flawless performance and engaging user experiences across all platforms.\n\nBlocBytes is a premier mobile app development company in the USA, featuring domain-expert developers who design and develop Android, iOS, and cross-platform applications tailored to your business needs and identity. Join the BlocBytes community today and take advantage of our exclusive value-added services!\n\n1) Advanced tech stack including Flutter, React Native, Swift, and more.\n2) Cost-effective engagement models to hire remote app developers.\n3) Complimentary consultation for mobile app development services.\n4) Staffing within 1-2 weeks.\n5) Daily collaborative meetings with Product Managers.",
    image: mobile
  },
  "Cloud Computing": {
    description: "Leverage the cloud to scale your business with flexibility, security, and efficiency.",
    image: pageBanner1
  },
  "Amazon & E-Commerce": {
    description: "BlocBytes offers comprehensive Amazon eCommerce services designed to elevate your brand's presence and performance on the Amazon marketplace. Our team of experts provides tailored solutions to help you navigate the complexities of Amazon's ecosystem, ensuring your products reach the right audience and achieve optimal sales performance.",
    image: amazon
  },
  "BlocBytes Web3 Development Services": {
    description: "BlocBytes is a top-tier Web 3.0 development company that leverages advanced technologies to build innovative solutions.\n\nWhat is Web 3.0?\n\nWeb 3.0, commonly referred to as Web3, is the next phase of the internet, prioritizing decentralization, blockchain technology, and token-based systems.It eliminates intermediaries, enabling direct peer-to-peer interactions and revolutionizing industries such as finance and digital content creation.",
    image: web3
  },
  "Hire Developers with GIS Software Development Experience": {
    description: "OTE provides skilled GIS back-end developers for hire, offering expertise in capturing geospatial data and developing interactive GIS mapping solutions for diverse applications, including climate research and urban planning. Leveraging AI-powered GIS software, we enable the processing of vast spatial datasets, delivering critical insights into urban expansion, climate change, and environmental trends.\nOur AI-driven Google location tracking applications facilitate real-time user behavior analysis, empowering businesses to offer personalized experiences and targeted advertising. Additionally, our geolocation solutions seamlessly integrate with fleet management systems, allowing transportation companies to monitor vehicles in real time, optimize routes, enhance delivery efficiency, and reduce operational costs—leading to improved customer satisfaction and business growth.",
    image: gis
    },
    "Staff Augmentation": {
      description: "Enhance your team with skilled professionals tailored to your project needs.",
      image: staff
    },
    "Back-End GIS Specialists": {
      description: "Our back-end GIS specialists have in-depth expertise in the entire GIS application development life cycle, from conceptualization and requirements definition to design, programming, testing, and ongoing maintenance.\nWe excel in GIS application programming, utilizing languages such as C++, Visual Basic, Visual C#, Java, JSP, ASP, XML, GML, and Cold Fusion.",
      image: pageBanner1
    }
};

interface ServicesHeaderProps {
  service: ServiceType;
}

const ServicesHeader = ({ service }: ServicesHeaderProps) => {
  const serviceData = serviceDescriptions[service] || { description: "Discover how our services can empower your business.", image: pageBanner1 };

  return (
    <div className="pt-[50px] md:pt-[60px] lg:pt-[100px] xl:pt-[45px]">
      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[100px] xl:pl-[73px] xl:pr-[50px] rtl:xl:pr-0 rtl:xl:pl-[120px]">
              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                {service}
              </h2>
              <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.8] mb-[30px] md:mb-[50px]">
                {serviceData.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="mt-[30px] md:mt-[50px]">
                <Link
                  href="/contact-us/"
                  className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                >
                  Get Your Free Custom Proposal
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={20}
                  />
                </Link>
              </div>
            </div>
            <div>
              <Image src={serviceData.image} alt="Service Image" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
