import FaqContent from "@/components/Faq/FaqContent";
import FaqHeader from "@/components/Faq/FaqHeader";
import Footer from "@/components/Layout/Footer";
import Cta from "@/components/Common/Cta";
import Navbar from "@/components/Layout/Navbar";

export default function FqPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <FaqHeader />
      </div>

      <FaqContent />

      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <Cta />
      </div>
 
      <Footer />
    </>
  );
}
