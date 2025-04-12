import AboutContent from "@/components/AboutUs/AboutContent";
import FunFacts from "@/components/Home/PaidSearchAdAgency/FunFacts";
import ServicesCard from "@/components/Home/PaidSearchAdAgency/ServicesCard";
import BrandsSlider from "@/components/Common/BrandsSlider";
import BorderLine from "@/components/Common/BorderLine";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function AboutUsPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <AboutContent />
      </div>

      <FunFacts />

      <div className="gradient-bg-two pt-[260px] md:pt-[270px] lg:pt-[310px]">

        <ServicesCard />

        <BrandsSlider />

        <BorderLine />

      </div>

      <TestimonialsSlider />
      
      <Footer />
    </>
  );
}
