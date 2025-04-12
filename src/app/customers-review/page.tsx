import CustomersReviewHeader from "@/components/CustomersReview/CustomersReviewHeader";
import Footer from "@/components/Layout/Footer"; 
import Navbar from "@/components/Layout/Navbar";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import TestimonialsSliderTwo from "@/components/Common/TestimonialsSliderTwo";
import TestimonialsSliderThree from "@/components/Common/TestimonialsSliderThree";
import Cta from "@/components/Common/Cta";

export default function CustomersReviewPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <CustomersReviewHeader />
      </div>

      <TestimonialsSlider />

      <Cta />

      <TestimonialsSliderTwo />

      <TestimonialsSliderThree />
   
      <Footer />
    </>
  );
}
