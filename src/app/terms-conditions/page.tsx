import Footer from "@/components/Layout/Footer";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import Navbar from "@/components/Layout/Navbar";

export default function TermsConditionsPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <TermsConditionsContent />
      </div>

      <Footer />
    </>
  );
}
