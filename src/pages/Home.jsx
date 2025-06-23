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
      <div className="md:flex justify-between space-y-4  items-center p-4 py-10">
        <h1 className=" text-3xl md:text-5xl capitalize ">ready to transform your speace?</h1>

        <div className="  flex justify-center   ">
          <span className=" animate-pulse  bg-accent p-4 rounded-full text-white -rotate-45 ">
            <BtnArrow />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
