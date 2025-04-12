"use client";

import { ArrowRight2 } from "iconsax-react";
import SocialLinks from "./SocialLinks";

const SignupNewsletter = () => {
  return (
    <>
      <div 
        data-aos="fade-in"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">
          Signup Newsletter
        </h3>

        <form className="mb-[20px]">
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full px-[30px] py-[15px] bg-white border-0 rounded-[50px] placeholder-[#4C4C4C]
              focus:outline-none 
            "
          />

          <button
            type="submit"
            className="bg-black text-white text-[14px] font-medium block w-full uppercase rounded-full py-[15px] px-[15px] mt-[15px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
          >
            Signup Now{" "}
            <ArrowRight2
              className="inline-block relative -top-[2px]"
              size={20}
            />
          </button>
        </form>

        {/* SocialLinks */}
        <SocialLinks />
      </div>
    </>
  );
};

export default SignupNewsletter;
