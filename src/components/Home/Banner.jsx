import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "../global/Container";

const Banner = () => {
  return (
    <div className="w-full flex items-center h-[100vh] bg-yellow">
      <Container>
        <div className="relative flex flex-col items-center justify-between w-full mt-2 lg:flex-row md:mt-0">
          {/* Content */}
          <div className="w-full mx-auto text-center lg:text-left">
            <h1 className="text-[2rem] font-semibold text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Reliable B2B <br /> Storage Solutions
            </h1>
            <p className="my-3 text-base font-medium text-left sm:text-base md:text-lg lg:text-2xl">
              Depoter, a leading provider of B2B fulfillment <br /> services in
              Dubai, offers comprehensive solutions <br /> to businesses engaged
              in e-commerce.
            </p>
            <button className="flex items-center px-4 py-2 mt-4 text-sm text-white bg-black rounded-lg sm:text-base md:text-lg">
              Get Started{" "}
              <MdOutlineKeyboardArrowRight className="w-4 h-4 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-full px-3 py-2 mt-8 bg-white rounded-lg lg:mt-16 bh-white">
            <img
              src="Group 203.png"
              alt="Storage Solutions"
              className="w-full object-cover h-[200px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[430px] xl:w-[700px] rounded-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
