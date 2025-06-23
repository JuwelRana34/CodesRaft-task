import img from "../assets/Body1.jpg";
import TextcardExtraordinary from "./TextcardExtraordinary";
export default function ExtraOrdinary() {
  const leftTextItems = [
    {
      title: "design expartis",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit animi iure voluptates ab a ipsam praesentium at.",
      isRight: true,
    },
    {
      title: "design expartis",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit animi iure voluptates ab a ipsam praesentium at.",
      isRight: true,
    },
  ];
  return (
    <div>
      <h1 className="heading mx-auto md:w-1/2  text-center ">
        unveling the ExtraOrdinary
      </h1>
      <div className="md:flex justify-between w-4/6 mx-auto gap-5">
      <div>
        {leftTextItems.map((item) =>( 
          <TextcardExtraordinary
            isRight={item.isRight}
            title={item.title}
            discription={item.discription}
          />
        ))}
      </div>
    
      <div className="my-5 md:my-0">
        <img src={img} className="w-96" alt="" srcset="" />
      </div>

      <div>
      
              {leftTextItems.map((item) =>( 
          <TextcardExtraordinary
            isRight={item.isRight}
            title={item.title}
            discription={item.discription}
          />
        ))}
  
      
      </div>
    </div>
    </div>
  );
}
