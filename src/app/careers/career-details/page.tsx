import CareerDetailsContent from "@/components/Careers/CareerDetailsContent";
import Footer from "@/components/Layout/Footer"; 
import Navbar from "@/components/Layout/Navbar";

export default function CareerDetailsPage() {
  return (
    <>
      <div className="bg-[#477ef5]">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <CareerDetailsContent />
      </div>

      <Footer />
    </>
  );
}
