import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `${
      isActive ? "underline underline-offset-2 " : ""
    } text-white text-lg font-bold p-3 rounded-2xl hover:underline hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`;

  return (
    <div className="relative z-50 w-full">
      {" "}
      <div className="lg:hidden absolute top-5  right-5">
        <button
          onClick={toggleMenu}
          className="text-black text-4xl focus:outline-none fixed right-5 -top-0.5"
        >
          {isOpen ? <IoClose /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`fixed top-20 right-0 h-fit  sm:w-1/2 bg-transparent bg-gradient-to-r from-purple-400 to-red-400  flex flex-col items-center justify-center space-y-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <NavLink
          to="/"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/myapplications"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          My Applications
        </NavLink>
        <NavLink
          to="/features"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          Features
        </NavLink>
        <NavLink
          to="/dataentry"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          Data Entry
        </NavLink>
        <NavLink
          to="/testimonials"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/faq"
          className={navLinkClass}
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </NavLink>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:gap-16 lg:p-5 lg:rounded-2xl w-full">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/myapplications" className={navLinkClass}>
          My Applications
        </NavLink>
        <NavLink to="/features" className={navLinkClass}>
          Features
        </NavLink>
        <NavLink to="/dataentry" className={navLinkClass}>
          Data Entry
        </NavLink>
        <NavLink to="/testimonials" className={navLinkClass}>
          Testimonials
        </NavLink>
        <NavLink to="/faq" className={navLinkClass}>
          FAQ
        </NavLink>
      </div>
    </div>
  );
}

export default Navigationbar;
