import React from "react";
import { Container } from "react-bootstrap";
import img from "../../assets/home/section8.png";
import car from "../../assets/home/smallCar.png";

const Section8 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* content section */}
        <div className="flex flex-wrap items-center justify-between py-5 md:flex-nowrap">
          {/* left */}
          <div className="w-[100%] md:w-[50%] mt-5 md:mt-0 relative">
            <img src={img} className="w-[70%] my-0 mx-auto" alt="" />
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%] text-left">
            <h3 className="text-lg font-bold md:text-4xl">
              Order Processing and Inventory Management: The Foundation of B2B
              Fulfillment
            </h3>
            <p className="my-3">
              For e-commerce fulfillment, maintaining an optimal inventory is
              key, and Depoter’s B2B warehouse operations are designed to ensure
              that products are available whenever they are needed. By
              integrating warehouse management systems (WMS) with order
              processing tools, Depoter provides real-time visibility into
              inventory status, allowing businesses to make informed decisions
              and respond to demand fluctuations swiftly.
            </p>

            <div className="flex items-center gap-3">
              <p className="mb-0 text-lg md:text-2xl text-yellow">
                Start Your Journey
              </p>
              <img src={car} className="md:w-[50px] w-[30px]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section8;
