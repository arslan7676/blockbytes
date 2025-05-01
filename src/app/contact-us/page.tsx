import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import FaqContent from "@/components/Faq/FaqContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function ContactUsPage() {
  return (
    <>
        <Navbar />
        <hr className="border-[#ffffff]" />
      <div className="bg-[#477ef5]">
        <ContactUsHeader />

      </div>
        <ContactForm />

        {/* <FaqContent /> */}

      <Footer />
    </>
  );
}
