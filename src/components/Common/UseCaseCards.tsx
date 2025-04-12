import React from "react";

const useCases = [
  "Intelligent applications",
  "SaaS platforms",
  "Enterprise solutions",
  "eCommerce platforms",
  "Educational platforms",
  "Play-to-Earn (P2E) games",
  "Social media networks",
  "Instant messaging applications",
  "Real asset tokenization platforms",
  "Event ticketing solutions",
];

const UseCaseCards = () => {
  return (
   <div className="py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px]">
     <div className="container mx-auto p-4">
        <div 
            className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
            Web 3.0 Use Cases
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
            Businesses can harness Web 3.0 to boost efficiency and security. Common use cases include:
            </h2>
          </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center text-lg font-semibold border border-gray-200 transition-colors duration-300 hover:bg-[#EF4334] hover:text-white"
          >
            {useCase}
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default UseCaseCards;
