import React from "react";
import Container from "../global/Container";
import startIcon from "../../assets/page3/starIcon.png";

import bannerImg1 from "../../assets/page3/page1-banner1-img.png";
import bannerImg2 from "../../assets/page3/page1-banner2-img.png";
import rightArrow from "../../assets/page3/right-arrow.png";

const Banner = () => {
  return (
    <div className="w-full  bg-[#FFBE2E26]">
      <Container>
        <div className="w-full text-center pt-[20%] md:pt-[8%] lg:pt-[10%] rounded">
          <div className="bg-[#FFBE2E12] w-fit max-[600px]:mt-10  mx-auto flex items-center gap-2 px-5 max-[600px]:px-2 py-1 rounded-lg">
            <p className="bg-text-gradient bg-clip-text text-[0.8rem] max-[600px]:pt-[2%]   md:text-[23px] flex items-center gap-3">
              <img src={startIcon} alt="" className="w-5 h-5" /> Best Automation
              Plugin for WordPress
            </p>
          </div>
          {/* Banner Text */}
          <div className="w-full my-10">
            <h3 className="text-[30px] max-[600px]:text-[1.2rem] md:text-[48px] lg:text-[62px] font-[600] leading-tight">
              <span className="bg-text-gradient bg-clip-text text-transparent max-[600px]:text-[1.2rem]">
                Integrate 25+ popular eCommerce
              </span>{" "}
              platforms <br className="hidden md:block" /> seamlessly with our
              3PL services, all without a <br className="hidden md:block" />{" "}
              single line of code.
            </h3>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              Get Started {">"}
            </button>
            <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300">
              Get Quote
            </button>
          </div>

          <div className="flex max-[600px]:pb-10 pb-12 flex-wrap justify-center items-center space-x-4 mt-20 ">
            <span className="border-2 rounded-full w-[80px] h-[80px] max-[600px]:w-[70px] max-[600px]:h-[70px] md:w-[100px] md:h-[100px] flex items-center justify-center shadow border-[#FFBE2E] font-[600] text-[16px] md:text-[20px]  shadow-lg">
              <img
                src={bannerImg1}
                className="w-[50px] max-[600px]:w-[40px] md:w-[70px] object-cover"
                alt=""
              />
            </span>
            <span>
              <img
                src={rightArrow}
                className="w-[50px] max-[600px]:w-[40px] md:w-[70px] object-cover"
                alt=""
              />
            </span>
            <span>
              <img
                src={bannerImg2}
                className="w-[50px] md:w-[70px] object-cover"
                alt=""
              />
            </span>
            <span>
              <img
                src={rightArrow}
                className="w-[40px] md:w-[50px] object-cover"
                alt=""
              />
            </span>
            <span className="border-2 shadow-lg rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center shadow bg-white border-[#FFBE2E] font-[600] text-[12px] md:text-[18px] max-[600px]:text-[10px] text-center">
              25+ <br className="hidden md:block" /> Integration
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
