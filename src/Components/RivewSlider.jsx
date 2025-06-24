import { useState } from "react";
import data from "../data/review";
export default function RivewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prv) => (prv + 1) % data.length);
  };
  const previousSlide = () => {
    setCurrentIndex((prv) => (prv - 1 + data.length) % data.length);
  };
  const { name, title, review, img } = data[currentIndex];
  return (
    <>
    <h1 className=" heading my-5">
        Client Review
    </h1>
      <div className=" md:w-1/2 mx-auto text-center bg-white rounded-md py-5 space-y-2 text-paragraph ">
        <img
          src={img}
          className="w-24 h-24 object-cover object-center ring-2  ring-amber-400 rounded-full mx-auto shadow-2xl"
          alt=""
          srcset=""
        />
        <h1 className=" text-textColor font-heading uppercase text-xl">
          {name}
        </h1>
        <p className="text-xs ">{title}</p>
        <p className="capitalize text-green-500/80"> {review} </p>
        <div className="flex gap-2 justify-center items-center w-full mx-auto ">
          <button
            className=" cursor-pointer bg-accent py-2 px-4 rounded-md text-white  shadow-2xl  capitalize hover:scale-95 transition"
            onClick={previousSlide}
          >
            prev
          </button>
          <button
            className=" cursor-pointer bg-accent py-2 px-4 rounded-md text-white shadow-2xl capitalize hover:scale-95 transition"
            onClick={nextSlide}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}
