import img from "../assets/header1.jpg";
import TextcardExtraordinary from "./TextcardExtraordinary";

export default function ExtraOrdinary() {
  const TextItems = [
    {
      title: "design expartis",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit animi iure voluptates ab a ipsam praesentium at.",
    },
    {
      title: "design expartis",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit animi iure voluptates ab a ipsam praesentium at.",
    },
    {
      title: "design expartis",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit animi iure voluptates ab a ipsam praesentium at.",
    },
  ];
  return (
    <div>
      <h1 className="heading mx-auto my-5  text-center ">
        unveling the ExtraOrdinary
      </h1>

      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" relative bg-cover bg-center bg-fixed  bg-black/50 bg-blend-multiply text-white py-10 "
      >
        <div className=" grid md:grid-cols-3 gap-4 p-4 justify-center justify-items-center">
          {TextItems.map((item) => (
            <TextcardExtraordinary
              title={item.title}
              discription={item.discription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
