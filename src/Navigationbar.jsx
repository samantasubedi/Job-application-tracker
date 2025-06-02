function Navigationbar() {
  return (
    <div className="flex justify-center">
      <div className="flex  p-2 gap-16  w-fit rounded-2xl">
        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          Home
        </button>
        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          Features
        </button>

        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          Data Entry
        </button>
        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          Preview
        </button>
        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          Testimonials
        </button>
        <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
          FAQ
        </button>
      </div>
    </div>
  );
}
export default Navigationbar;
