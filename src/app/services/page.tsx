import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesCard from "@/components/Services/ServicesCard";
import OurExpertsStyle2 from "@/components/Common/OurExpertsStyle2";
import BrandsSlider from "@/components/Common/BrandsSlider";
import BorderLine from "@/components/Common/BorderLine";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import WhatWeDo from "@/components/Home/TraditionalOfflineAdAgency/WhatWeDo";


function ServicesPage() {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

<WhatWeDo />
        {/* <ServicesHeader />
        <ServicesCard /> */}
       
        <OurExpertsStyle2 />
      </div>

      <BrandsSlider />

      <BorderLine />

      <TestimonialsSlider />
      
      <Footer />
    </>
  );
}

export default ServicesPage;
