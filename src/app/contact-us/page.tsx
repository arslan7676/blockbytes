import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import FaqContent from "@/components/Faq/FaqContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function ContactUsPage() {
  return (
    <>
      <div>
        <Navbar />

        <hr className="border-[#6494ec]" />

        <ContactUsHeader />

        <ContactForm />

        {/* <FaqContent /> */}
      </div>

      <Footer />
    </>
  );
}
