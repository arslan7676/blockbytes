"use client";

const FaqContent = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="max-w-[560px] md:max-w-[765px] xl:max-w-[872px] mx-auto px-[15px]">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              faq’s
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Our Achievements, Woven with Passion and Precision
            </h2>
          </div>

          <div className="space-y-[15px]">
            <details className="bg-[#FAF4F4] rounded-[20px]" open>
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                How does Paid Search Marketing work?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p> 
              </div>
            </details>

            <details className="bg-[#FAF4F4] rounded-[20px]">
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                What are the benefits of Paid Search Marketing?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p>
              </div>
            </details>

            <details className="bg-[#FAF4F4] rounded-[20px]">
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Which platforms offer Paid Search Marketing?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p>
              </div>
            </details>

            <details className="bg-[#FAF4F4] rounded-[20px]">
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                How do I create a Paid Search Marketing campaign?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p>
              </div>
            </details>

            <details className="bg-[#FAF4F4] rounded-[20px]">
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                What is Quality Score in Paid Search Marketing?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p>
              </div>
            </details>

            <details className="bg-[#FAF4F4] rounded-[20px]">
              <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Is Paid Search Marketing suitable for all businesses?
              </summary>
              <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                <p>
                  Paid Search Marketing works through an auction-based system.
                  Advertisers bid on specific keywords, stating the maximum
                  amount they are willing to pay for each click on their ad. The
                  search engine then considers the bid amount, ad relevance, and
                  other factors to determine which ads will be displayed
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
