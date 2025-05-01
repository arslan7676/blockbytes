import TestimonialsSliderThree from "@/components/Common/TestimonialsSliderThree";
import FunFacts from "@/components/Home/SocialMediaAdAgency/FunFacts";
import Footer from "@/components/Layout/Footer";  
import MeetOurExperts from "@/components/SuccessStories/MeetOurExperts";
import SuccessStoryDetailsContent from "@/components/SuccessStories/SuccessStoryDetailsContent";
import SuccessStoryDetailsHeader from "@/components/SuccessStories/SuccessStoryDetailsHeader";
import Navbar from "@/components/Layout/Navbar";
import WhatWeDo from "@/components/Home/TraditionalOfflineAdAgency/WhatWeDo";
import OurProcess from "@/components/Home/TraditionalOfflineAdAgency/OurProcess";
import CallToAction from "@/components/Common/CallToAction";




export default function SuccessStoryDetailsPage() {
  return (
    <>
        <Navbar />
        <hr className="border-[#E3E3E3]" />
      <div className="bg-[#477ef5]">
        <SuccessStoryDetailsHeader />
      </div>
<WhatWeDo />
      <OurProcess />

      {/* <div className="relative before:content-[''] before-gradient-bg before:w-full before:h-full before:top-[250px] lg:before:top-[250px] xl:before:top-[190px] before:left-0 before:absolute before:hidden lg:before:block">
        <FunFacts />

      {/* <div className="relative before:content-[''] before-gradient-bg before:w-full before:h-full before:top-[250px] lg:before:top-[250px] xl:before:top-[190px] before:left-0 before:absolute before:hidden lg:before:block">
        <FunFacts />

        <SuccessStoryDetailsContent />
      </div> */}

      {/* <MeetOurExperts /> */}

      {/* <TestimonialsSliderThree /> */}
<CallToAction />
      <Footer />
    </>
  );
}
