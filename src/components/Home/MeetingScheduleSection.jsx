import { Container } from "react-bootstrap";
import boyImg from "../../assets/home/workerBoy.png";

const MeetingScheduleSection = () => {
  return (
    <div className="bg-[#00061C] w-full py-[50px] md:py-[100px]">
      <Container>
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-10 flex-nowrap lg:flex-nowrap"
        >
          {/* Left Section */}
          <div className="w-full sm:w-[55%] text-left sm:text-left">
            <h1 className="text-white font-bold text-[16px] sm:text-[35px] md:text-[45px] lg:text-[50px] leading-tight mb-5">
              Get the essentials and lorem <br className="hidden sm:block" />
              ipsum today!
            </h1>
            <div className="flex -mt-8 md:mt-0">
              {" "}
              <button className="px-2 py-2 text-sm text-white transition duration-300 border-2 border-white rounded-full sm:px-5 sm:py-3 md:text-lg ">
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-[45%] flex justify-center sm:justify-end  ">
            <img
              src={boyImg}
              className="w-36 sm:w-[80%] md:w-[90%] max-w-[370px] object-contain"
              alt="Worker Boy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingScheduleSection;
