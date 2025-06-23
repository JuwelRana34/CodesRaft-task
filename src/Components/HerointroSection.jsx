import img1 from "../assets/Body2.jpg";
import BtnArrow from "../Icons/BtnArrow";
import Button from "./Button";

export default function HerointroSection() {
    return (
         <div className="md:flex justify-center items-center py-4   mx-auto px-4 lg:px-0  gap-10">
        <div className="md:w-1/2">
          <img src={img1} className=" md:scale-75" alt="" srcset="" />
        </div>
        <div className="md:w-1/2  space-y-2 ">
          <h1 className=" text-4xl  my-4 md:my-0 lg:text-8xl font-heading ">
            {" "}
            Design your <span className="text-accent/70 ">dream </span> space
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
    );
}