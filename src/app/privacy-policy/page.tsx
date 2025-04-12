import Footer from "@/components/Layout/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import Navbar from "@/components/Layout/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <PrivacyPolicyContent />
      </div>

      <Footer />
    </>
  );
}
