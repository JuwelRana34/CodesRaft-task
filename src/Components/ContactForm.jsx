import { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  let [isOpen, setIsOpen] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    e.target.name.value = ""
    e.target.email.value = ""
    e.target.message.value = ""
    setIsOpen(true);
  };
  return (
    <div className="md:flex justify-center space-y-4 gap-4 p-4">
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          className="w-full max-w-md h-auto object-contain rounded-md shadow-lg"
          src="https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148881015.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid&w=740"
          alt=""
          srcset=""
        />
      </div>

      <div className="md:w-1/2 px-4 mx-auto capitalize">
        <form onSubmit={handelSubmit} className=" space-y-4">
          <div className="flex flex-col">
            <label className="text-paragraph" htmlFor="name">
              name
            </label>
            <input
              className="border border-gray-500 rounded p-2 focus:outline-textColor"
              placeholder="type your name.."
              name="name"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-paragraph" htmlFor="email">
              email
            </label>
            <input
              className="border border-gray-500 rounded p-2"
              placeholder="type your email.."
              name="email"
              id="email"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-paragraph" htmlFor="textarea">
              message
            </label>
            <textarea
              className="border border-gray-500 rounded p-2"
              placeholder="type your message.."
              name="message"
              id="textarea"
              required
            ></textarea>

            <button
              className={
                "text-white bg-accent my-2 w-fit py-2 px-4 cursor-pointer rounded"
              }
            >
              send
            </button>
          </div>
        </form>
        <Modal
          title={"sent succesfull"}
          discription={
            "Thanks for contact with us will contact with you within 24 hours."
          }
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
