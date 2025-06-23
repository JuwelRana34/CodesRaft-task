import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import BtnArrow from "../Icons/BtnArrow";

export default function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className=" container mx-auto space-y-4 p-3">
      <div className="md:flex  items-center">
        <h1 className="heading md:w-[60%]">ready to transform your speace?</h1>

        <div className="  flex justify-center  md:w-[40%]  ">
          <span className=" hidden md:block bg-accent p-4 rounded-full text-white -rotate-45 ">
            <BtnArrow />{" "}
          </span>
        </div>
      </div>
      <div className="md:flex justify-between items-center space-y-4 border-b border-gray-400 pb-2">
        <h1 className=" font-heading text-accent text-4xl md:text-7xl uppercase">
          Aesthetic
        </h1>
        <div>
          {navItems.map((item) => (
            <Link
              Link
              key={item.name}
              to={item.path}
              className="text-gray-700 p-2 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <FaFacebook size={24} />
          <FaLinkedin size={24} />
          <FaXTwitter size={24} />
        </div>
      </div>
      <p className="text-center">
        copyright © {new Date().getFullYear()} Aesthetic all right reserved.
      </p>
    </div>
  );
}
