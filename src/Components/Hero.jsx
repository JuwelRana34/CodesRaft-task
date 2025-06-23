import img1 from "../assets/Body2.jpg";
import img2 from "../assets/header1.jpg";
import BtnArrow from "../Icons/BtnArrow";
import Watchicon from "../Icons/Watchicon";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="md:flex justify-center py-10   mx-auto px-4 md:px-0  gap-10">
        <div className="md:w-1/2">
          <img src={img1} className="" alt="" srcset="" />
        </div>
        <div className="md:w-1/2  space-y-2 ">
          <div></div>
          <h1 className=" text-4xl  my-4 md:my-0 lg:text-8xl font-heading ">
            {" "}
            Design your <span className="text-accent/70">dream </span> space
          </h1>
          <p className=" text-paragraph mt-4 text-justify ">
            Transform your home into a reflection of your unique style and
            personality. Our expert designers bring your vision to life with
            thoughtful layouts and elegant finishes. Let us help you create a
            space that feels both inspiring and truly yours.
          </p>
          <div className="flex gap-2 justify-center py-4">
            <Button
              icon={<BtnArrow color={"white"} />}
              style="bg-accent text-white text-xs lg:text-base "
            >
              start a project
            </Button>
            <Button icon={<BtnArrow />} style="border text-xs lg:text-base">
              view recent work
            </Button>
          </div>
        </div>
      </div>
      <div className="md:flex flex-row-reverse justify-center px-4 md:px-0 space-y-4 gap-1">
        <div className="md:w-1/2">
          <img src={img2} alt="" srcset="" />
        </div>

        <div className="md:w-1/2 gap-2  grid grid-cols-2">
          <div className=" mx-auto">
            <div>
              <Watchicon />
              <p className="text-paragraph">watch video</p>
            </div>
          </div>
          <div>
            <h1 className="text-accent text-6xl font-heading">100+</h1>
            <p className="text-paragraph">successfull projects</p>
          </div>
          <div className="col-span-2 text-center">
            <h1 className="text-textColor text-6xl font-heading">97%</h1>
            <p className="text-paragraph">client satisfiction</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-400 m-2 "  />
    </>
  );
}
