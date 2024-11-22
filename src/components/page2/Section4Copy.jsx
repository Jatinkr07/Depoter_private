import {
  FaDog,
  FaGamepad,
  FaFlask,
  FaCoffee,
  FaTshirt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { useRef } from "react";

export default function Section4Copy() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="mb-6 max-[600px]:mb-2 text-4xl max-[600px]:text-[1.5rem] font-bold md:text-5xl">
          We can help with
        </h2>
        <p className="text-[0.8rem] text-muted-foreground">
          We can assist with fulfillment across various industries, including
          pet supplies and more
        </p>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 z-10 w-12 h-12 p-2 -translate-y-1/2 bg-gray-100 border rounded-full top-1/2 bg-background"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft className="w-4 h-4 ml-2 " />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[
            { icon: FaDog, title: "Pet Supplies" },
            { icon: FaGamepad, title: "Toys & Games" },
            { icon: FaFlask, title: "Cosmetics" },
            { icon: FaCoffee, title: "Food & Drink" },
            { icon: FaTshirt, title: "Fashion Order" },
            { icon: FaDog, title: "Pet Supplies" },
          ].map((service, index) => (
            <div key={index} className="flex-shrink-0 snap-start ">
              <div className="relative w-64 aspect-[1.15/1]">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                      className="stroke-[0.2] fill-gray-50 stroke-amber-500"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100"></div>
                    <service.icon className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">Fulfillment</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 w-12 h-12 p-2 -translate-y-1/2 border rounded-full top-1/2 bg-background bg-gray-50"
          onClick={() => scroll("right")}
        >
          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* <style jsx>{`
        :global(.scrollbar-hide::-webkit-scrollbar) {
          display: none;
        }
      `}</style> */}
    </section>
  );
}
