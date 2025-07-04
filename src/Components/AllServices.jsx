import { Link } from "react-router";
import data from '../data/services'
import BtnArrow from "../Icons/BtnArrow";

export default function AllServices() {
  // const items = [
  //   {
  //     title: "Minimalist Living Room",
  //     description:
  //       "Neutral palette with warm wood accents and sleek furniture.",
  //     img: img1,
  //     isActive: true,
  //   },
  //   {
  //     title: "Scandinavian Kitchen",
  //     description:
  //       "White cabinetry, oak countertops, and soft pendant lighting.",
  //     img: img2,
  //   },
  //   {
  //     title: "Cozy Bedroom",
  //     description:
  //       "Layered linens, muted earth tones, and ambient bedside lamps.",
  //     img: img3,
  //   },
  //   {
  //     title: "Industrial Loft Workspace",
  //     description: "Exposed brick, metal shelving, and reclaimed-wood desk.",
  //     img: img4,
  //   },
  // ];

  return (
    <>
      <div className="p-4 mt-4 container  mx-auto md:flex justify-between items-center">
        <h1 className="heading md:w-[60%]">our services</h1>
      </div>
      <div className="p-4 grid md:grid-cols-4 gap-10">
        {data?.slice(0,4).map((item) => (
          <div
            key={crypto.randomUUID()}
            className=" space-y-2  p-5 shadow-xl  rounded  "
          >
            <div className="w-full h-72 flex items-center justify-center ">
              <img
                src={item.img}
                className="h-full mx-auto w-full object-cover object-center"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h1 className=" font-semibold capitalize text-textColor">
                {item.title}
              </h1>
              <p className="text-paragraph">{`${(item.description).slice(0,50)}...`}</p>
            </div>

            <div className="text-left w-full">
              <button
                className={`${
                  item.isActive
                    ? "bg-accent text-white -rotate-45"
                    : "bg-textColor"
                }  rounded-full  p-2 `}
              >
                <BtnArrow color={"white"} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Link
          to={"/services"}
          className="bg-accent text-white flex justify-center items-center p-2 rounded-full gap-3 shadow-lg shadow-accent/50"
        >
          view all works <BtnArrow />{" "}
        </Link>
      </div>
    </>
  );
}
