import { ArrowRight } from "lucide-react";

import Accordion from "./Accordion";

const Services = () => {

  return (
    <div className=" p-4 w-52 h-auto bg-base-button rounded-lg ">
      <div className="">
        <img src="../assets/2.png" alt="AudioVisual" className="mx-auto" />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>

        <Accordion
          title="AudioVisual SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
        pulvinar pulvinar varius."
        />
      </div>

      <div className="">
        <img src="/src/assets/1.jpg" alt="Marketing" className="mx-auto" />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" translate font-median flex items-center justify-center gap-2 rounded ">
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
      </div>

      <div className="">
        <img src="/src/assets/3.png" alt="Tecnologia" className="mx-auto" />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" translate font-median flex items-center justify-center gap-2 rounded ">
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
    </div>
  );
};

export default Services;
