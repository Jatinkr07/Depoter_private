import { Container } from "react-bootstrap";

import box1Img from "../../assets/home/section4-box1.png";
import box2Img1 from "../../assets/home/box2-animation1.gif";
import box2Img2 from "../../assets/home/box2-animation2.gif";
import box3Img from "../../assets/home/box3-animation.gif";
import border from "../../assets/home/section4-center-border.png";

const Section4 = () => {
  return (
    <div data-aos="fade-up" className="py-[100px]">
      <Container>
        <div className="w-full pb-10 text-center">
          <h1 className="text-[1.5rem] font-semibold md:text-5xl">
            Streamline Your Supply Chain <br /> with Depoter
          </h1>
          <p className="text-[0.8rem] md:text-base">
            Create Your Online Shop Just Complete Three Steps & Enjoy.
          </p>
        </div>
        {/* bottom content */}
        <div className="flex flex-col items-center w-full px-4 space-y-4 supply-chain-container">
          {/* box1 */}
          <div className="text-center text-[#454545]  ">
            <div className="gap-2 p-5 home-supplyChange-box">
              <img
                src={box1Img}
                className="object-contain w-full border"
                alt=""
              />
            </div>

            <p className="font-[700] my-2">1.Connect with us</p>
            <p>
              Connect your store, import <br /> your products, then send us your
              inventory.
            </p>
          </div>

          <img src={border} className="h-[100px] supply-border" alt="" />

          {/* box2 */}
          <div className="text-center">
            <div className="flex justify-between gap-1 p-5 px-2 home-supplyChange-box">
              {/* Efficient Storage Box */}
              <div className="flex flex-col items-center ">
                <img
                  src={box2Img1}
                  className="px-8 py-4 border "
                  alt="Efficient Storage"
                />
                <span className="text-base sm:text-sm md:text-sm">
                  Efficient Storage
                </span>
              </div>

              {/* Safe Storage Box */}
              <div className="flex flex-col items-center ">
                <img
                  src={box2Img2}
                  className="w-full px-8 py-4 border"
                  alt="Safe Storage"
                />
                <span className="text-base sm:text-sm md:text-sm">
                  Safe Storage
                </span>
              </div>
            </div>

            <p className="font-[700] my-2 text-lg sm:text-xl">
              2. Store & Manage
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-base">
              Connect your store, import <br /> your products, then send us your
              inventory.
            </p>
          </div>

          <img src={border} className="h-[100px] supply-border" alt="" />

          {/* box3 */}
          <div className="text-center">
            <div className="flex-col home-supplyChange-box">
              {/* top content */}
              <div className="flex justify-between w-full pb-2 border-b">
                <span>Fast Delivery</span>
                <span className="text-yellow">$352</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[12px]">
                  Your Product is <br /> on its way !
                </div>
                <div>
                  <img src={box3Img} className="w-[150px]" alt="" />
                </div>
              </div>
            </div>

            <p className="font-[700] my-2">1.Connect with us</p>
            <p>
              Connect your store, import <br /> your products, then send us your
              inventory.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
