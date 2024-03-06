import { useState } from "react";

import { ArrowRight } from "lucide-react";

import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image1 from "../assets/1.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Description = () => {
  const slides = [
    { img: image2, title: "Audiovisual" },
    { img: image3, title: "Tecnologia" },
    { img: image1, title: "Marketing" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" py-60 h-[1480px] w-9/12  relative  lg:ml-40 group ">
      <div
        className="  w-full h-full  rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>

      {/*Left Arrow */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2
       group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/*Right Arrow */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2
       group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}

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
      </div>
    </div>
  );
};

export default Description;
