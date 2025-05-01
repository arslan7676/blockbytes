import BorderLine from "@/components/Common/BorderLine";
import BrandsSlider from "@/components/Common/BrandsSlider";
import TestimonialsSliderThree from "@/components/Common/TestimonialsSliderThree";
import Footer from "@/components/Layout/Footer";
import OurProcess from "@/components/Home/TraditionalOfflineAdAgency/OurProcess";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import SuccessStoriesHeader from "@/components/SuccessStories/SuccessStoriesHeader";
import Navbar from "@/components/Layout/Navbar";

export default function SuccessStoriesPage() {
  return (
    <>
      <div className="bg-[#477ef5]">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <SuccessStoriesHeader />

      </div>
        <OurProcess />

        <SuccessStories />

        <BrandsSlider />

        <BorderLine />

        <TestimonialsSliderThree />


      <Footer />
    </>
  );
}
