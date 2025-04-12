"use client";

import Image from "next/image";

import servicesDetails from "/public/images/services-details.jpg";
import brandWhite from "/public/images/brand.png";
import Sidebar from "./Sidebar";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] relative before:content-[''] before-gradient-bg before:w-full before:h-full before:top-[350px] lg:before:top-[250px] xl:before:top-[300px] 2xl:before:top-[350px] before:left-0 before:absolute before:hidden lg:before:block">
        <div className="container mx-auto relative">
          <div className="relative mb-[20px] md:mb-[30px] lg:mb-[40px]">
            <Image
              src={servicesDetails}
              alt="Services Details"
              className="rounded-[20px]"
            />
            <Image
              src={brandWhite}
              alt="Services Details"
              className="absolute bottom-[15px] right-[15px] md:bottom-[30px] md:right-[30px] w-[50px] lg:w-[125px]"
            />
          </div>

          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-2 space-y-[15px] md:space-y-[20px]">
              <h1 className="text-black font-semibold text-[22px] md:text-[30px] lg:text-[36px]">
                Paid search marketing
              </h1>

              <div className="space-y-[7px]">
                <p className="text-black">
                  <strong>Introduction:</strong>
                </p>
                <p>
                  Welcome to "Demystifying Paid Search Ads: A Beginner's Guide."
                  If you've ever wondered how businesses appear at the top of
                  search engine results, you're about to discover the secret
                  behind their success. Paid search advertising, also known as
                  Pay-Per-Click (PPC), is a powerful digital marketing tool that
                  allows businesses to bid on keywords and display targeted ads
                  to potential customers. In this comprehensive guide, we'll
                  break down the fundamentals of paid search ads, empowering you
                  to harness this effective strategy and propel your business to
                  new heights in the digital landscape.
                </p>
              </div>

              <div className="space-y-[7px]">
                <p className="text-black">
                  <strong>
                    Chapter 1: Understanding Paid Search Advertising
                  </strong>
                </p>
                <p>
                  In this chapter, we'll lay the groundwork by explaining what
                  paid search ads are and how they function. You'll gain
                  insights into popular advertising platforms like Google Ads
                  and Bing Ads, and we'll explore the numerous benefits these
                  ads offer to businesses of all sizes. By understanding the
                  core principles of paid search advertising, you'll be better
                  equipped to leverage its potential to drive relevant traffic
                  and achieve your marketing objectives.
                </p>
              </div>

              <div className="space-y-[7px]">
                <p className="text-black">
                  <strong>Chapter 2: The Anatomy of a Search Ad</strong>
                </p>
                <p>
                  Unravel the components that make up a successful search ad in
                  this chapter. From captivating headlines to compelling
                  descriptions and strategically placed URLs, we'll delve into
                  the art of crafting ad copy that engages and resonates with
                  your target audience. With a focus on relevant keywords and
                  match types, you'll learn how to optimize your ads for maximum
                  impact and relevancy.
                </p>
              </div>

              <div className="space-y-[7px]">
                <p className="text-black">
                  <strong>Chapter 3: Setting Up Your First Campaign</strong>
                </p>
                <p>
                  Ready to create your first paid search ad campaign? This
                  chapter will guide you through the process step-by-step.
                  You'll learn how to define your advertising goals, structure
                  campaigns and ad groups effectively, and set appropriate
                  budgets and bidding strategies. Armed with this knowledge,
                  you'll be ready to launch your campaign with confidence.
                </p>
              </div>

              <div className="space-y-[7px]">
                <p className="text-black">
                  <strong>Chapter 4: Keyword Research & Targeting</strong>
                </p>
                <p>
                  The cornerstone of successful paid search advertising lies in
                  selecting the right keywords. In this chapter, we'll dive into
                  keyword research techniques to identify high-value, relevant
                  terms that align with your business offerings. Discover how to
                  use keyword tools and understand match types to ensure your
                  ads reach the right audience at the right time.
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:pl-[100px] rtl:lg:pl-0 rtl:lg:pr-[100px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
