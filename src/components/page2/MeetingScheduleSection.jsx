import React from "react";
import rightImage from "../../assets/home/lastSection1.svg";
import leftImage from "../../assets/home/lastSection2.svg";
import { Container } from "react-bootstrap";

import boyImg from "../../assets/home/workerBoy.png";

const MeetingScheduleSection = () => {
  return (
    <div className="bg-[#393939] w-full py-[100px] md:py-0">
      <Container>
        <div
          data-aos="fade-up"
          className="w-full flex justify-between bg-[#393939] items-center flex-wrap sm:flex-nowrap"
        >
          {/* left */}
          <div className="relative w-[100%] sm:w-[60%]">
            <h1 className="text-white text-[24px] sm:text-[35px] md:text-[50px]">
              Get the essentials and lorem <br /> ipsum today!
            </h1>
            <button className="text-white border-white border-2 px-5 py-2 mt-3 rounded-[50px]">
              Schedule Meeting
            </button>
          </div>

          {/* right */}
          <div className="relative w-[100%] sm:w-[40%]">
            <img
              src={boyImg}
              className="h-[100%] object-cover sm:mt-[-50px] mt-[25px] "
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingScheduleSection;
