import React from "react";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <div className="flex justify-center">
      <div className="flex  p-5 gap-16   rounded-2xl ">
        <Link
          to="/"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Home
        </Link>
        <Link
          to="/myapplications"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          My Applications
        </Link>

        <Link
          to="/features"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Features
        </Link>

        <Link
          to="/dataentry"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Data Entry
        </Link>
        <Link
          to="/preview"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Preview
        </Link>
        <Link
          to="/testimonials"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Testimonials
        </Link>
        <Link
          to="/faq"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          FAQ
        </Link>
      </div>
    </div>
  );
}
export default Navigationbar;
