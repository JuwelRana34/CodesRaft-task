import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function ServiceItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
        <h1 className="text-textColor font-semibold text-xl ">{item.title}</h1>
        <p className="text-paragraph">{item.description}</p>
        <div>
          <Button
            onAction={() => setIsOpen(true)}
            style=" bg-accent rounded-md text-white px-8 shadow-lg inline-block"
          >
            Buy
          </Button>
        </div>
      </div>

      <Modal
        title={"Buy Successfull"}
        discription={`Thanks for buy  "${item.title}" we will send your product within 3 days. thank you!`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
