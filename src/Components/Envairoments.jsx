import img from "../assets/Body1.jpg";
export default function Envairoments() {
  const items = [
    {
      titel: "commercial design",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
    },
    {
      titel: "residential design",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
      img: img,
    },
    {
      titel: "interior styling",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
    },
  ];
  return (
    <>
      <div className="p-4">
        <h1 className="heading md:w-4/6 ">
          creating Envairoments tailored to you
        </h1>
        <ul>
          <li className="space-y-4 my-4">
            {items.map((item) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className={`${
                    item?.img ? "bg-gray-300  relative" : ""
                  } p-4 capitalize rounded `}
                >
                  <div className=" space-y-3">
                    <h1 className="text-textColor text-xl font-semibold">
                      {item.titel}
                    </h1>
                    <p className="text-paragraph">{item.discription}</p>
                  </div>

                  {item.img && (
                    <div className="hidden md:block absolute -top-14 right-[30%]">
                      {" "}
                      <img
                        className=" -rotate-12 w-32"
                        src={item.img}
                        alt=""
                        srcset=""
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
