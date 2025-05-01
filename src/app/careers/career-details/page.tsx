import CareerDetailsContent from "@/components/Careers/CareerDetailsContent";
import Footer from "@/components/Layout/Footer"; 
import Navbar from "@/components/Layout/Navbar";

export default function CareerDetailsPage() {
  return (
    <>
        <Navbar />
        <hr className="border-[#E3E3E3]" />
      <div className="bg-[#477ef5]">
        <CareerDetailsContent />
      </div>

      <Footer />
    </>
  );
}
