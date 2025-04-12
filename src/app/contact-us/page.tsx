import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import FaqContent from "@/components/Faq/FaqContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function ContactUsPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <ContactUsHeader />

        <ContactForm />

        <FaqContent />
      </div>

      <Footer />
    </>
  );
}
