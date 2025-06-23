
export default function Envairoments() {
  const items = [
    {
      titel: "commercial design",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
        img:"https://cdn-icons-png.flaticon.com/128/5163/5163389.png"
    },
    {
      titel: "residential design",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
      img: "https://cdn-icons-png.flaticon.com/128/1172/1172545.png",
    },
    {
      titel: "interior styling",
      discription:
        "impress client and boost productivity with our innovatic commercial design solutions.",
        img:"https://cdn-icons-png.flaticon.com/128/2400/2400638.png"
    },
  ];
  return (
    <>
      <div className="p-4">
        <h1 className="heading md:w-4/6 ">
          creating Envairoments tailored to you
        </h1>
          <div className="space-y-4 my-4 grid md:grid-cols-3 gap-4">
            {items.map((item) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className={` hover:scale-115  transition bg-white/80 p-4 capitalize rounded `}
                >
                  <div className=" space-y-3">
                    <img src={item.img} className="w-14" alt="" srcset="" />
                    <h1 className="text-textColor text-xl font-semibold">
                      {item.titel}
                    </h1>
                    <p className="text-paragraph">{item.discription}</p>
                  </div>

                
                    
             
                </div>
              );
            })}
          </div>
      
      </div>
    </>
  );
}
