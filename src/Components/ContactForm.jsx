export default function ContactForm() {
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
        <form action="" className=" space-y-4">
          <div className="flex flex-col">
            <label className="text-paragraph" htmlFor="name">name</label>
            <input
              className="border border-gray-500 rounded p-2 focus:outline-textColor"
              placeholder="type your name.."
              name="name"
              id="name"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-paragraph"  htmlFor="email">email</label>
            <input
              className="border border-gray-500 rounded p-2"
              placeholder="type your email.."
              name="email"
              id="email"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-paragraph"  htmlFor="textarea">message</label>
            <textarea
              className="border border-gray-500 rounded p-2"
              placeholder="type your message.."
              id="textarea"
            ></textarea>

            <button
              className={"text-white bg-accent my-2 w-fit py-2 px-4 cursor-pointer rounded"}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
