import DreamShape from "../Components/DreamShape";
import Envairoments from "../Components/Envairoments";
import ExtraOrdinary from "../Components/ExtraOrdinary";
import Hero from "../Components/Hero";
import BtnArrow from "../Icons/BtnArrow";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Envairoments />
      <ExtraOrdinary />
      <DreamShape />
      <div className="md:flex  items-center p-4">
        <h1 className="heading md:w-[60%]">ready to transform your speace?</h1>

        <div className="  flex justify-center  md:w-[40%]  ">
          <span className=" hidden md:block bg-accent p-4 rounded-full text-white -rotate-45 ">
            <BtnArrow />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
