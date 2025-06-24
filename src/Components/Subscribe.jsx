import img from "../assets/header1.jpg";

export default function Subscribe() {
  return (
    <div>
      <h1 className="heading mx-auto my-5  text-center ">Subscribe</h1>

      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" relative bg-cover bg-center bg-fixed  bg-black/50 bg-blend-multiply text-white py-10 "
      >
        <div className=" p-4 bg-white/20 rounded backdrop-blur-sm md:w-1/2 mx-auto">
          <input
            className="border border-gray-500 focus:outline-none my-2 p-2 w-full bg-black/20 rounded"
            type="text"
            name="email"
            id=""
            placeholder="Type your email.."
          />{" "}
          <br />
          <button className="bg-accent text-white py-2 px-4 rounded cursor-pointer">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
