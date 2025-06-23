import servicesData from "../data/services";
import Button from "../Components/Button"
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
          <div className="my-6 md:flex gap-4 hover:scale-105 transition  bg-white rounded p-4 space-y-4">
            <div className="flex justify-center items-center">
              <img
                className="w-56 max-w-md h-56 object-contain"
                src={item.img}
                alt=""
                srcset=""
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-textColor font-semibold text-xl ">
                {item.title}
              </h1>
              <p className="text-paragraph">{item.description}</p>
              <div>
                <Button style=" bg-accent rounded-md text-white px-8 shadow-lg inline-block">
              Buy
            </Button> 
            </div>
            </div>
            
           
          </div>
          
        ))}
      </div>
    </>
  );
}
