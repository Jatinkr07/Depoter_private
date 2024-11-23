import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "../global/Container";
import c1Img from "../../assets/home/c1.png";
import c2Img from "../../assets/home/c2.png";
import c3Img from "../../assets/home/c3.png";
import c4Img from "../../assets/home/c4.png";
import c5Img from "../../assets/home/c5.png";
import homeImg from "../../assets/home/homeImg.jpeg";

const Banner = () => {
  const trustedCustomers = [c1Img, c2Img, c3Img, c4Img, c5Img];
  return (
    <div className="w-full flex items-center bg-yellow  md:h-[100vh]">
      <Container>
        <div className="relative flex flex-col items-center justify-between w-full lg:flex-row">
          {/* Content */}
          <div className="w-full mx-auto text-center md:mt-16 lg:text-left">
            <h1 className="text-[1.6rem] font-semibold text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
              Reliable B2B Storage <br />
              <h1 className="text-[1.6rem] font-semibold text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl md:mt-3">
                & Fulfillment Solutions
              </h1>
            </h1>
            <p className="text-base font-medium text-left md:my-3 sm:text-base md:text-lg lg:text-2xl">
              Depoter, a leading provider of B2B fulfillment <br /> services in
              Dubai, offers comprehensive solutions <br /> to businesses engaged
              in e-commerce.
            </p>
            <button className="flex items-center px-4 py-1.5 md:px-4 md:py-2.5 md:mt-4 text-sm text-white bg-black rounded-lg sm:text-base md:text-lg font-medium">
              Get Started{" "}
              <MdOutlineKeyboardArrowRight className="w-4 h-4 md:h-6 md:w-6" />
            </button>

            {/* Trusted Customers Section */}
            <div className="flex flex-col items-start justify-start max-w-3xl mx-auto mt-3 md:mt-8 flex-nowrap">
              <div className="flex justify-center mb-3 -space-x-3">
                {trustedCustomers.map((img, index) => (
                  <div
                    key={index}
                    alt={`Customer ${index + 1}`}
                    className="relative w-8 h-8 overflow-hidden border-2 border-white rounded-full md:w-10 md:h-10"
                  >
                    <img
                      src={img}
                      alt={`Customer ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-xs font-medium text-center ">
                Trusted by over 100 Customers
              </h2>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center  w-[100%] px-2  md:h-[62vh] md:p-4 p-2 mt-8 bg-white rounded-2xl lg:mt-16 ">
            <div className="">
              {" "}
              <img
                src={homeImg}
                alt="Storage Solutions"
                className="object-cover w-full h-[60vh] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
