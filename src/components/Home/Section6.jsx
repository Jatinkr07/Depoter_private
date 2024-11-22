import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import polygon from "../../assets/global/Polygon.png";
import img from "../../assets/home/section6.png";

const Section6 = () => {
  return (
    <div data-aos="fade-up">
      <img src={polygon} alt="" className="w-full" />
      <div className="w-full text-center bg-[#F4F4F4] pb-10 relative">
        <Container>
          {/* content section */}
          <div className="flex flex-wrap justify-between py-5 md:flex-nowrap">
            {/* left */}
            <div className="w-[100%] md:w-[50%] text-left flex flex-col justify-center">
              <h3 className="text-lg font-bold md:text-4xl ">
                Pick and Pack Services: Precision and Efficiency in Fulfillment
              </h3>
              <p className="my-3">
                Depoter’s pick and pack services are an integral part of its B2B
                fulfillment offerings. Picking and packing are labour-intensive
                processes that require precision to ensure orders are accurate
                and products are well-protected during transit. Depoter employs
                advanced picking technologies and automated systems to
                streamline this aspect of fulfillment.
              </p>

              <div className="flex items-center gap-3">
                <p className="mb-0 text-lg md:text-2xl text-yellow">
                  Start Your Journey
                </p>
                <img src={car} className="w-[30px] md:w-[50px]" />
              </div>
            </div>
            {/* right */}
            <div className="w-[100%] md:w-[50%] relative md:mt-0 mt-4">
              <img src={img} className="w-[70%] my-0 mx-auto" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section6;
