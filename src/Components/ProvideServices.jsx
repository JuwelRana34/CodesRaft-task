export default function ProvideServices() {
  const items = [
    {
      titel: "Office Space Design",
      discription:
        "Create productive and inspiring work environments with modern office layouts that balance aesthetics, comfort, and efficiency.",
      img: "https://cdn-icons-png.flaticon.com/128/5163/5163389.png",
    },
    {
      titel: " Home Interior Design ",
      discription:
        "Transform your home into a stylish, functional, and personalized living space with our expert interior solutions tailored to your lifestyle with us.",
      img: "https://cdn-icons-png.flaticon.com/128/1172/1172545.png",
    },
    {
      titel: "Furniture Customization",
      discription:
        "Get one-of-a-kind furniture tailored to your taste and space, combining quality craftsmanship with personalized design.",
      img: "https://cdn-icons-png.flaticon.com/128/2400/2400638.png",
    },
  ];
  return (
    <>
      <div className="p-4 bg-white/50 lg:h-60 lg:mb-36 md:relative">
        <h1 className="heading py-4 md:w-4/6  ">we provide</h1>
        <div className=" lg:w-[90%]  lg:absolute lg:left-1/2 md:transform lg:-translate-x-1/2  lg:-bottom-40  space-y-4 my-4 grid md:grid-cols-3 gap-4">
          {items.map((item, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={` hover:scale-110  transition bg-white/80 capitalize rounded p-2 h-full hover:shadow-orange-100 hover:shadow-2xl`}
              >
                <div
                  className={` ${
                    index === 1 ? "bg-accent/10 " : ""
                  } space-y-3 p-3 `}
                >
                  <img src={item.img} className="w-14" alt="" srcset="" />
                  <h1 className="text-textColor text-xl font-semibold">
                    {item.titel}
                  </h1>
                  <p className="text-paragraph text-justify">
                    {item.discription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
