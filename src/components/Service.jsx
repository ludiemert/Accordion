import { ArrowRight } from "lucide-react";

import Accordion from "./Accordion";

import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image1 from "../assets/1.jpg";
import Description from "./Description";

const Service = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[110vh]   ">
        <img
          className="row-span-3  w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image2}
          alt="AudioVisual"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>

        <Accordion
          className=""
          title="AudioVisual SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
        pulvinar pulvinar varius."
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image1}
          alt="Marketing"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>

        <Accordion
          title="Marketing SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
              pulvinar pulvinar varius."
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image3}
          alt="Tecnologia"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>
        <Accordion
          title="Tecnologia SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
              pulvinar pulvinar varius."
        />
      </div>

      {/* Right Side */}
      <div className=" text-base-font-warning-500 flex flex-col h-full justify-center">
        <h3 className="  text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>

        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>

        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <Description />
      </div>
    </div>
  );
};

export default Service;
