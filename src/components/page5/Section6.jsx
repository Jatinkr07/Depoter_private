import React from "react";
import Container from "../../components/global/Container";
import bg1 from "../../assets/page5/sec6-bg.png";
import bg2 from "../../assets/page5/sec7-bg.png";
import bg3 from "../../assets/page5/sec8-bg.png";

const Section6 = () => {
  return (
    <div className="w-full py-[100px] max-[600px]:py-[1rem] max-[600px]:hidden">
      <Container>
        <div className="w-full text-center mb-10 max-[600px]:-mb-10">
          <h2 className="text-[#33333] max-[600px]:text-[1.2rem] text-[36px] sm:text-[48px] lg:text-[62px] font-[600]">
            How Depoter Elevates Your Multichannel <br /> Fulfillment Strategy
          </h2>
          <h1 className="text-[20px] max-[600px]:text-[0.8rem] max-[600px]:pt-2 sm:text-[24px] lg:text-[28px] text-[#33333] font-[600] mt-2 mb-10">
            Unlock the Power of logistics for an Enhanced and Seamless logistics
            experience.
          </h1>
        </div>

        <div>
          {/* Section 1 */}
          <div className="my-10">
            <img src={bg1} className="w-full object-cover" alt="" />
            <div className="flex flex-col md:flex-row justify-between py-5">
              <div className="md:w-[40%] mb-2 md:mb-0">
                <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
                  Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
                </h3>
              </div>
              <div className="md:w-[50%] text-[#454545]">
                <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
                  Depoter specializes in managing seasonal peaks and promotions,
                  ensuring your fulfillment operations remain efficient during
                  high-demand periods. Our agile solutions enable rapid scaling
                  of resources and streamlined processes, helping you meet
                  increased order volumes while maintaining exceptional service
                  levels.
                </p>
                <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="my-10">
            <img src={bg2} className="w-full object-cover" alt="" />
            <div className="flex flex-col md:flex-row justify-between py-5">
              <div className="md:w-[40%] mb-2 md:mb-0">
                <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
                  Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
                </h3>
              </div>
              <div className="md:w-[50%] text-[#454545]">
                <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
                  Depoter specializes in managing seasonal peaks and promotions,
                  ensuring your fulfillment operations remain efficient during
                  high-demand periods. Our agile solutions enable rapid scaling
                  of resources and streamlined processes, helping you meet
                  increased order volumes while maintaining exceptional service
                  levels.
                </p>
                <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="my-10">
            <img src={bg3} className="w-full object-cover" alt="" />
            <div className="flex flex-col md:flex-row justify-between py-5">
              <div className="md:w-[40%] mb-2 md:mb-0">
                <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
                  Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
                </h3>
              </div>
              <div className="md:w-[50%] text-[#454545]">
                <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
                  Depoter specializes in managing seasonal peaks and promotions,
                  ensuring your fulfillment operations remain efficient during
                  high-demand periods. Our agile solutions enable rapid scaling
                  of resources and streamlined processes, helping you meet
                  increased order volumes while maintaining exceptional service
                  levels.
                </p>
                <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section6;
