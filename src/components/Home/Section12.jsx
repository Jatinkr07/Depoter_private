import { Container } from "react-bootstrap";
import img from "../../assets/home/section12.jpeg";
const Section12 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* content section */}
        <div className="flex flex-wrap items-center justify-between py-5 md:flex-nowrap">
          {/* left */}
          <div className="w-[100%] md:w-[50%] text-left">
            <h3 className="text-lg font-bold md:text-4xl ">
              Last-Mile Delivery: Ensuring Timely and Reliable Deliveries
            </h3>
            <p className="my-3 text-sm md:text-base">
              In the realm of last-mile delivery, Depoter excels in providing
              timely and reliable shipping solutions. The company has a network
              of strategic partnerships with transportation providers, allowing
              for quick and efficient deliveries across Dubai and the broader
              region.
            </p>
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%] mt-5 md:mt-0 relative">
            <img src={img} className="w-[70%] my-0 mx-auto" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section12;
