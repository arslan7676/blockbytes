"use client";

import ContactInfo from "./ContactInfo";

import { ArrowRight2 } from "iconsax-react";

const ContactForm = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="container mx-auto">
					{/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
							Get in touch
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
							Your Gateway to Excellence: Contact Us and Unlock a World of Possibilities
            </h2>
          </div>

          <div className="grid gap-[25px] lg:gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {/* ContactInfo */}
            <ContactInfo />

            <div className="xl:col-span-2 bg-white rounded-[20px] lg:rounded-r-[20px] lg:rounded-l-[0] px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] py-[30px] md:py-[60px]">
              <form className="space-y-[20px]" action="#" method="POST">
                <div>
                  <label
                    htmlFor="yourname"
                    className="block font-semibold text-black"
                  >
                    Your Name
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yourname"
                      name="yourname"
                      type="text"
                      autoComplete="yourname"
                      placeholder="Enter your name"
                      required
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="youremail"
                    className="block font-semibold text-black"
                  >
                    Your Email
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="youremail"
                      name="youremail"
                      type="email"
                      autoComplete="youremail"
                      placeholder="Enter your email address"
                      required
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yourphone"
                    className="block font-semibold text-black"
                  >
                    Your Phone
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yourphone"
                      name="yourphone"
                      type="text"
                      autoComplete="yourphone"
                      placeholder="Enter your phone number"
                      required
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yourphone"
                    className="block font-semibold text-black"
                  >
                    Your Subject
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yoursubject"
                      name="yoursubject"
                      type="text"
                      autoComplete="yoursubject"
                      placeholder="Enter your subject"
                      required
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="your-message"
                    className="block font-semibold text-black"
                  >
                    Your Message
                  </label>

                  <div className="mt-[10px]">
                    <textarea
                      rows={4}
                      placeholder="Enter your message"
                      className="bg-[#F2F2F8] block w-full rounded-[20px] py-[15px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                  >
                    submit now{" "}
                    <ArrowRight2
                      className="inline-block relative -top-[2px]"
                      size={20}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
