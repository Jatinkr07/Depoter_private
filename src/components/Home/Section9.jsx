import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import polygon from "../../assets/global/Polygon.png";
import img from "../../assets/home/section9.png";
import smallTruc from "../../assets/home/smallTruc.png";

const Section9 = () => {
  return (
    <div data-aos="fade-up">
      <img src={polygon} alt="" className="w-full" />
      <div className="w-full text-center bg-[#F4F4F4] pb-10 relative">
        <Container>
          {/* content section */}
          <div className="flex flex-wrap justify-between py-5 -mb-12 md:mb-0 md:flex-nowrap">
            {/* left section */}
            <div className="w-full md:w-[50%] relative mb-5 md:mb-0">
              <img src={img} className="w-[70%] mx-auto" alt="Section Image" />
            </div>

            {/* right section */}
            <div className="w-full md:w-[50%] text-left flex flex-col justify-center">
              <div className="flex flex-wrap justify-between gap-5 md:gap-3">
                {/* box 1 */}
                <div className="flex items-center w-full gap-3 md:w-auto">
                  <img
                    src={smallTruc}
                    alt="Truck Icon"
                    className="border-2 border-[#EDA119] rounded-full p-2 w-12 h-12 md:w-16 md:h-16"
                  />
                  <span>
                    <h3 className="text-[14px] md:text-[22px] font-[600]">
                      Cost Optimization
                    </h3>
                    <p className="text-[#727272] text-sm md:text-base">
                      Knowledge & Data To Optimize Cost
                    </p>
                  </span>
                </div>

                {/* box 2 */}
                <div className="flex items-center w-full gap-3 md:w-auto">
                  <img
                    src={smallTruc}
                    alt="Truck Icon"
                    className="border-2 border-[#EDA119] rounded-full p-2 w-12 h-12 md:w-16 md:h-16"
                  />
                  <span>
                    <h3 className="text-[14px] md:text-[22px] font-[600]">
                      Expert Truckload
                    </h3>
                    <p className="text-[#727272] text-sm md:text-base">
                      Get Full-Service From Truckload Section.
                    </p>
                  </span>
                </div>
              </div>

              <p className="my-3 text-[14px] md:text-[22px] text-[#727272]">
                Depoter understands the importance of cost-effectiveness in the
                competitive e-commerce landscape. B2B fulfillment services must
                not only be efficient but also cost-effective to provide value
                to businesses.
              </p>

              <div className="flex items-center justify-center gap-3 md:justify-start">
                <p className="mb-0 text-lg text-yellow md:text-2xl ">
                  Start Your Journey
                </p>
                <img
                  src={car}
                  className="w-[30px] md:w-[50px]"
                  alt="Car Icon"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section9;
