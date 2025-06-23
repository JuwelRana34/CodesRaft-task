import img2 from "../assets/header1.jpg";
export default function HeroCounterSection() {
  const item = [
    {
      title: "Awards",
      count: 8,
    },
    {
      title: "Projects",
      count: 180,
    },
    {
      title: "happy Clients",
      count: 400,
    },
    {
      title: "success",
      count: 170,
    },
  ];
  return (
    <div className="md:flex flex-row-reverse justify-center px-4 md:px-0 space-y-4 gap-1">
      <div className="md:w-1/2">
        <img src={img2} alt="" srcset="" />
      </div>

      <div className="md:w-1/2 gap-4 p-4  grid grid-cols-2">
        {item.map((item) => (
          <div className="bg-white flex flex-col justify-center items-center rounded hover:scale-95 transition hover:bg-accent/20">
            <h1 className="py-5 font-heading text-5xl">{item.count}+</h1>
            <h1 className="text-paragraph font-semibold text-xl">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
