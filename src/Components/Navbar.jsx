import { useState } from "react";
import { Link, NavLink } from "react-router";
import CloseIcon from "../Icons/CloseIcon";
import HambargarMenu from "../Icons/HambargarMenu";
import PhonoIcon from "../Icons/PhonoIcon";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <nav className=" backdrop-blur-lg p-4 sticky top-0 z-20 bg-white/25 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-accent  font-bold text-3xl font-heading uppercase "
          >
            Aesthetic
          </Link>

          {/* desktop menu  */}
          <div className="hidden md:block">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-gray-700 p-2"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <p className=" hidden md:block underline">
            {" "}
            <PhonoIcon />
            (316) 555-0123
          </p>

          {/* mobile menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <HambargarMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out w-[60%] md:hidden z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <div className=" text-end">
            <button onClick={toggleMenu} className="text-gray-700 ">
              <CloseIcon />
            </button>
          </div>
          {navItems.map((item) => (
            <NavLink
              onClick={toggleMenu}
              key={item.name}
              to={item.path}
              className="text-gray-700 p-2 "
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}

      {open && (
        <div
          className="fixed backdrop-blur-lg inset-0 bg-black/10 opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
