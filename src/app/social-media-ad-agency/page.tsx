import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import HeroBanner from "@/components/Home/SocialMediaAdAgency/HeroBanner";
import Partner from "@/components/Home/SocialMediaAdAgency/Partner";
import WhatWeDo from "@/components/Home/SocialMediaAdAgency/WhatWeDo";
import FunFacts from "@/components/Home/SocialMediaAdAgency/FunFacts";
import ServicesCard from "@/components/Home/SocialMediaAdAgency/ServicesCard";
import BorderLine from "@/components/Common/BorderLine";
import OurProcess from "@/components/Home/SocialMediaAdAgency/OurProcess";
import SuccessStories from "@/components/Home/SocialMediaAdAgency/SuccessStories";
import CtaStyleTwo from "@/components/Common/CtaStyleTwo";
import TestimonialsSliderTwo from "@/components/Common/TestimonialsSliderTwo";
import BrandsSlider from "@/components/Common/BrandsSlider";
import AwardWinningAgency from "@/components/Home/SocialMediaAdAgency/AwardWinningAgency";
import OurBlog from "@/components/Common/OurBlog";
import CallToAction from "@/components/Common/CallToAction";
import FooterStyleTwo from "@/components/Layout/FooterStyleTwo";

export default function SocialMediaAdAgency() {
  return (
    <>
      <NavbarStyleTwo />

      <HeroBanner />

      <Partner />

      <WhatWeDo />

      <FunFacts />

      <ServicesCard />

      <BorderLine />

      <OurProcess />

      <div className="gradient-bg-three">
        <SuccessStories />

        <CtaStyleTwo />
      </div>

      <TestimonialsSliderTwo />

      <BrandsSlider />

      <AwardWinningAgency />

      <OurBlog />

      <CallToAction />

      <FooterStyleTwo />
    </>
  );
}
