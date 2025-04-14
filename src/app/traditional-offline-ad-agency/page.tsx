import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Home/TraditionalOfflineAdAgency/HeroBanner/HeroSection";
import Partner from "@/components/Home/TraditionalOfflineAdAgency/Partner";
import WhatWeDo from "@/components/Home/TraditionalOfflineAdAgency/WhatWeDo";
import AboutContent from "@/components/Home/TraditionalOfflineAdAgency/AboutContent";
import Services from "@/components/Home/TraditionalOfflineAdAgency/Services";
import OurProcess from "@/components/Home/TraditionalOfflineAdAgency/OurProcess";
import TestimonialsSliderThree from "@/components/Common/TestimonialsSliderThree";
import SuccessStories from "@/components/Home/TraditionalOfflineAdAgency/SuccessStories";
import OurExperts from "@/components/Common/OurExperts";
import OurBlog from "@/components/Common/OurBlog";
import CallToAction from "@/components/Common/CallToAction";
import Footer from "@/components/Layout/Footer";
export default function TraditionalOfflineAdAgency() {
  return (
    <>
      <TopHeader />

      <Navbar/>

      <HeroSection />

      <Partner />

      <WhatWeDo />

      <AboutContent />

      <Services />

      <OurProcess />

      <SuccessStories />
      <OurExperts />

      <OurBlog />

      <CallToAction />

      <Footer/>
    </>
  );
}
