import BorderLine from "@/components/Common/BorderLine";
import BrandsSlider from "@/components/Common/BrandsSlider";
import FunFacts from "@/components/Common/FunFacts";
import TestimonialsSliderThree from "@/components/Common/TestimonialsSliderThree";
import Footer from "@/components/Layout/Footer";
import Cta from "@/components/Team/Cta";
import OurTeamMember from "@/components/Team/OurTeamMember";
import TeamHeader from "@/components/Team/TeamHeader";
import Navbar from "@/components/Layout/Navbar";

export default function TeamPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <TeamHeader />

        <FunFacts />

        <OurTeamMember />

        <BorderLine />

        <TestimonialsSliderThree />
      </div>

      <Cta />

      <BrandsSlider />

      <Footer />
    </>
  );
}
