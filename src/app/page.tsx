import MeetOurExperts from "@/components/Home/PaidSearchAdAgency/MeetOurExperts";
import BorderLine from "@/components/Common/BorderLine";
import WhatWeDo from "@/components/Home/PaidSearchAdAgency/WhatWeDo";
import FunFacts from "@/components/Home/TraditionalOfflineAdAgency/HeroBanner/FunFacts";
import ServicesCard from "@/components/Home/PaidSearchAdAgency/ServicesCard";
import OurProcess from "@/components/Home/TraditionalOfflineAdAgency/OurProcess";
import AwardWinningAgency from "@/components/Home/PaidSearchAdAgency/AwardWinningAgency";
import SuccessStories from "@/components/Home/TraditionalOfflineAdAgency/SuccessStories";
import BrandsSlider from "@/components/Common/BrandsSlider";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Cta from "@/components/Common/Cta";
import OurBlog from "@/components/Common/OurBlog";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import TopHeader from "@/components/Layout/TopHeader";
import HeroSection from "@/components/Home/TraditionalOfflineAdAgency/HeroBanner/HeroSection";


export default function Home() {
  return (
    <>
      <div>
      <TopHeader />

        <Navbar />
        
        <HeroSection />

        <MeetOurExperts />
      </div>

      <BorderLine />

      <WhatWeDo />

      <FunFacts />

      <div className="gradient-bg-two pt-[260px] md:pt-[270px] lg:pt-[310px]">
        <ServicesCard />

        <OurProcess />
      </div>
      <div className="gradient-bg-two pt-[190px]">
        <SuccessStories />

        <BrandsSlider />

        <BorderLine />
      </div>

      <TestimonialsSlider />

      <Cta />

      <OurBlog />

      <Footer />
    </>
  );
}
