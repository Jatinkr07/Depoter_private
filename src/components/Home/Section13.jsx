/* eslint-disable react/no-unescaped-entities */

import { Container } from "react-bootstrap";
import img from "../../assets/home/section13.jpeg";
const Section13 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* content section */}
        <div className="flex flex-wrap items-center justify-between py-5 -mt-40 md:flex-nowrap md:mt-0">
          {/* left */}
          <div className="w-[100%] md:w-[50%] mt-5 md:mt-0 relative">
            <img src={img} className="w-[70%] my-0 mx-auto" alt="" />
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%] text-left mt-4">
            <h3 className="text-lg font-bold md:text-4xl ">
              Technology-Driven Fulfillment: Leveraging Innovation for B2B
              Success
            </h3>
            <p className="my-3">
              One key aspect of Depoter's B2B fulfillment services is its
              advanced technology infrastructure. The company utilizes warehouse
              management systems (WMS) and order processing systems to ensure
              real-time visibility into inventory levels and order status.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section13;
