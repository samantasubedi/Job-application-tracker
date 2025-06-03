import React from "react";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <div className="flex justify-center">
      <div className="flex  p-2 gap-16  w-fit rounded-2xl ">
        <Link
          to="/"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          Home
        </Link>
        <Link
          to="/features"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          Features
        </Link>

        <Link
          to="/data-entry"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          Data Entry
        </Link>
        <Link
          to="/preview"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          Preview
        </Link>
        <Link
          to="/Testimonials"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          Testimonials
        </Link>
        <Link
          to="/faq"
          className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     "
        >
          FAQ
        </Link>
      </div>
    </div>
  );
}
export default Navigationbar;
