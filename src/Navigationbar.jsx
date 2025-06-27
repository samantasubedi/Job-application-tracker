import { NavLink } from "react-router-dom";
function Navigationbar() {
  return (
    <div className="flex justify-center">
      <div className="flex  p-5 gap-16   rounded-2xl ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          Home
        </NavLink>
        <NavLink
          Link
          to="/myapplications"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          My Applications
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          Features
        </NavLink>

        <NavLink
          to="/dataentry"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          Data Entry
        </NavLink>
        {/* <Link
          to="/preview"
          className="text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out "
        >
          Preview
        </Link> */}
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-2 " : ""
            } text-white text-lg font-bold p-3 rounded-2xl hover:underline  hover:cursor-pointer hover:translate-y-1 transition-all ease-in-out`
          }
        >
          FAQ
        </NavLink>
      </div>
    </div>
  );
}
export default Navigationbar;
