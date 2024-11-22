import Container from "../global/Container";
import img1 from "../../assets/page1/section10-img1.png";
import img2 from "../../assets/page1/section10-img2.png";
import img3 from "../../assets/page1/section10-img3.png";

const Section10 = () => {
  return (
    <div className="py-[50px] md:py-[100px]">
      <Container>
        {/* Top Section */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 max-[600px]:text-[1.5rem] text-base font-bold md:text-4xl">
            How Depoter will <br /> transform your business
          </h3>
          <p className="text-lg max-[600px]:text-sm text-gray-700 md:text-xl">
            Unlock the Power of logistics for an Enhanced and Seamless logistics
            <br />
            experience.
          </p>
        </div>

        <div className="space-y-10 md:space-y-20">
          {data.map((list) => {
            return (
              <section
                key={list.id}
                style={{
                  backgroundColor: list.bgColor,
                }}
                className="flex flex-col items-center p-6 mx-4 rounded-lg shadow md:flex-row md:p-12"
              >
                {/* Text Content */}
                <div className="mb-6 text-center md:w-1/2 md:mb-0 md:pr-6 md:text-left">
                  <h2 className="mb-4 max-[600px]:text-[1.5rem] text-xl font-semibold md:text-2xl">
                    {list.title}
                  </h2>
                  <p className="text-base max-[600px]:text-sm text-gray-700 md:text-lg">
                    {list.para}
                  </p>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2">
                  <img
                    src={list.img}
                    alt="Customer Experience"
                    className="w-full md:w-[70%] object-cover h-auto rounded-lg shadow-md mx-auto md:mx-0"
                  />
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const data = [
  {
    id: 1,
    img: img1,
    title: "Comprehensive Fulfilment Solutions",
    para: "Depoter’s B2C fulfillment services offer a seamless, integrated approach to managing the entire order lifecycle, ensuring efficient handling from inventory to shipping and returns.",
    bgColor: "#D7EDF1",
  },
  {
    id: 2,
    img: img2,
    title: "Enhanced Customer Experience",
    para: "Customer satisfaction is at the heart of Depoter’s fulfilment services. The platform is designed to provide a seamless and positive experience for both businesses and their customers.",
    bgColor: "#FFF6E8",
  },
  {
    id: 3,
    img: img3,
    title: "Advanced Technology and Automation",
    para: "Technology plays a crucial role in modern fulfilment operations, and Depoter leverages advanced technologies to enhance efficiency and accuracy. The platform integrates cutting-edge tools and automation features that streamline various aspects of the fulfilment process.",
    bgColor: "#D9FFE1",
  },
];

export default Section10;
