import CareersHeader from "@/components/Careers/CareersHeader";
import CareersList from "@/components/Careers/CareersList";
import OurExperts from "@/components/Common/OurExperts";
import FaqContent from "@/components/Faq/FaqContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function CareersPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />
 
        <CareersHeader />

        <CareersList />
      </div>

      <OurExperts />

      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <FaqContent />
      </div>

      <Footer />
    </>
  );
}
