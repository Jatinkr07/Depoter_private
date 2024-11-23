import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "../global/Container";

const Banner = () => {
  return (
    <div className=" flex items-center h-auto min-h-[100vh]  w-full  bg-yellow py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-between mt-10 md:mt-0 md:flex-nowrap">
          {/* Left Content */}
          <div className="w-full md:w-[50%] text-left mb-8 md:mb-0 px-4 md:px-0">
            <h1 className="font-bold text-[2rem] md:text-[42px] lg:text-[56px] leading-tight">
              We Store, Pick & Pack <br className="hidden md:block" /> and
              Deliver
            </h1>
            <p className="my-3 text-base font-medium text-left sm:text-base md:text-lg lg:text-2xl">
              As a trusted fulfillment center in Dubai, we specialize in
              storage, picking, packing, and delivering orders with precision.
            </p>
            <button className="flex items-center px-2 py-1 text-white bg-black rounded-lg md:px-4 md:py-2">
              Get Started <MdOutlineKeyboardArrowRight className="ml-1" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-[50%] flex justify-center md:justify-end px-2 py-2">
            <div className="w-full h-full px-3 py-2 mt-8 bg-white rounded-lg lg:mt-16 bh-white">
              <img
                src="Group 203.png"
                alt="Fulfillment Center"
                className="w-full object-cover rounded-lg h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[430px] xl:w-[700px] "
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
