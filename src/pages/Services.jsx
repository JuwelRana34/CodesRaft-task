import servicesData from "../data/services";
import ServiceItem from "../Components/ServiceItem";
export default function Services() {
  return (
    <>
      {/* heading  */}
      <div>
        <h1 className=" text-3xl md:text-6xl font-heading font-bold text-center underline decoration-accent/50 gradient ">
          Services
        </h1>
      </div>

      {/* services  */}
      <div className="md:w-4/6 mx-auto ">
        {servicesData.map((item) => (
         <ServiceItem key={crypto.randomUUID()} item={item}/>
        ))}
      </div>
    </>
  );
}
