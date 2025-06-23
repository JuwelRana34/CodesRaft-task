import Button from '../Components/Button'
export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-230px)]">
      <div>
        <h1 className="heading text-center underline decoration-accent/50">
          contact us
        </h1>
      </div>
      <div>
        <div>
          <img src="" alt="" srcset="" />
        </div>

        <div className="w-1/2 mx-auto capitalize">
          <form action="" className=" space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">name</label>
              <input
                className="border border-gray-500 rounded p-2 focus:outline-textColor"
                placeholder="type your name.."
                name="name"
                id="name"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">email</label>
              <input
                className="border border-gray-500 rounded p-2"
                placeholder="type your email.."
                name="email"
                id="email"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="textarea">name</label>
              <textarea
                className="border border-gray-500 rounded p-2"
                placeholder="type your email.."
                id="textarea"
              ></textarea>
              
              <button className={'text-white bg-accent my-2 w-fit py-2 px-3 rounded' }>
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
