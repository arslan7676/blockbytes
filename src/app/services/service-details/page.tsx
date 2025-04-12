import BorderLine from "@/components/Common/BorderLine";
import BrandsSlider from "@/components/Common/BrandsSlider";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import FunFacts from "@/components/Home/SocialMediaAdAgency/FunFacts";
import Footer from "@/components/Layout/Footer";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import ServicesDetailsHeader from "@/components/Services/ServicesDetailsHeader";
import Navbar from "@/components/Layout/Navbar";

export default function ServiceDetailsPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <ServicesDetailsHeader />
      </div>

      <ServiceDetailsContent />
    
      <FunFacts />

      <BrandsSlider />

      <BorderLine />

      <TestimonialsSlider />

      <Footer />
    </>
  );
}
