"use client";
 
import Image from "next/image";

import teamImg1 from "/public/images/team-1.jpg";
import teamImg2 from "/public/images/team-2.jpg";
import teamImg3 from "/public/images/team-3.jpg";
import teamImg4 from "/public/images/team-4.jpg";
import teamImg5 from "/public/images/team-5.jpg";
import teamImg6 from "/public/images/team-6.jpg";

const OurTeamMember = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[650px] mx-auto text-center mb-[30px] lg:mb-[60px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              our team
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Unstoppable Together: Our Team's Bond, Your Success Beyond
            </h2>
          </div>

          {/* Team Card */}
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {/* Member 1 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg1}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  Jammy Smith
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  CTO at EnvyTheme
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Member 2 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg2}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  Alika Maya
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  Marketing Manager
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Member 3 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg3}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  Harikane Lythe
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  Digital Marketing Lead
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Member 4 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg4}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  Alister Cook
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  Senior Marketing Officer
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Member 5 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg5}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  David Warner
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  Advertising Lead
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Member 6 */}
            <div className="relative pr-[60px] before:content-[''] before:absolute before:bg-[#F2F2F8] before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-[30px] sm:before:ml-[50px] before:mt-[50px] before:z-[0]">
              <Image
                src={teamImg6}
                alt="Team"
                className="rounded-[20px] relative z-1"
              />

              <div className="relative z-1 py-[25px] pl-[50px] sm:pl-[80px]">
                <h3 className="text-black text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-[15px] leading-none">
                  Hanry Brook
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-none">
                  Social Media Lead
                </p>
              </div>

              <ul className="list-none space-y-[10px] absolute top-[80px] sm:top-[120px] right-[20px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
