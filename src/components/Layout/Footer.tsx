"use client";

import Link from "next/link";
import SignupNewsletter from "./SignupNewsletter";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-[#F2F2F8] rounded-[20px] p-[30px] md:p-[80px] lg:p-[100px]">
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-5">
            {/* Solutions */}
            <div
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">
                Solutions
              </h3>

              <ul className="list-none space-y-[12px]">
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    AI ML
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Amazon & E-Commerce                  </Link>
                </li>
                <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Blockchain & Web3.0                 </Link>
                </li> <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    GIS Solutions                 </Link>
                </li> <li>
                  <Link href="/services/service-details/" className="hover:text-[#EF4335]">
                    Staff Augmentation                 </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">
                Resources
              </h3>

              <ul className="list-none space-y-[12px]">
                <li>
                  <Link href="/blog" className="hover:text-[#EF4335]">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-[#EF4335]">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#EF4335]">
                    Customers Review
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/" className="hover:text-[#EF4335]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/" className="hover:text-[#EF4335]">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* contact info */}
            <div
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">
                Contact Info
              </h3>

              <ul className="list-none space-y-[12px]">
                <li className="hover:text-[#EF4335] ">
                  <h4 className="text-black font-semibold">Office Address</h4>
                  <p>HEAD OFFICE 12 S Atlantic Ave, Aberdeen Township, 07747</p>
                </li>
                <li className="hover:text-[#EF4335]">
                  <h4 className="text-black font-semibold">Phone Number</h4>
                  <p>+18483458762</p>
                </li>
              </ul>
            </div>
            {/* Opportunities */}
            <div
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">
                Opportunities
              </h3>

              <ul className="list-none space-y-[12px]">
                <li>
                  <Link href="/careers" className="hover:text-[#EF4335]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#EF4335]">
                    Get A Proposal
                  </Link>
                </li>
              </ul>
            </div>
          <SignupNewsletter />
          </div >
        </div>
        {/* Bottom Footer */}
        <div className="py-[30px]">
          <div className="grid items-center gap-[15px] md:gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center md:text-left md:rtl:text-right">
              <h6>
                ©<span className="text-black">BlockBytes</span>. All Rights Reserved
                by{" "}
                <a
                  href="https://BlockBytes.com/"
                  target="_blank"
                  className="text-black hover:text-[#EF4335]"
                >
                  BlockBytes
                </a>
              </h6>
            </div>

            {/* <div className="text-center md:text-end">
              <ul className="space-x-[30px] rtl:space-x-reverse">
                <li className="inline-block relative before:content-[''] before:absolute before:right-[-15px] before:rtl:right-auto before:rtl:left-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden">
                  <Link href="/privacy-policy" className="text-black hover:text-[#EF4335]">
                    Privacy & Policy
                  </Link>
                </li>

                <li className="inline-block relative before:content-[''] before:absolute before:right-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden">
                  <Link href="/terms-conditions" className="text-black hover:text-[#EF4335]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
