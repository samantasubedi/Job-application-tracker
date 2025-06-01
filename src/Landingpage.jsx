function Landingpage() {
  return (
    <>
      <div className=" h-screen bg-gradient-to-r from-purple-500 to-red-400 ">
        <div className="flex justify-center">
          <div className="flex  p-2 gap-16  w-fit rounded-2xl">
            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              Home
            </button>
            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              Features
            </button>

            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              Preview
            </button>
            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              Contact
            </button>
            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              Testimonials
            </button>
            <button className="text-white text-lg font-semibold p-3 rounded-2xl hover:bg-lime-200 hover:cursor-pointer hover:text-blue-900 hover:translate-y-1 transition-all ease-in-out hover:shadow-md shadow-white     ">
              FAQ
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col top-[100px] absolute left-[100px]">
          <h1 className="text-[50px] text-purple-800  w-[500px] ">
            Track Your Job Applications Effortlessly
          </h1>
          <p className="text-pink-800 bg-slate-300 p-2  text-[20px] font-semibold w-[500px] rounded-3xl">
            Stay organized, stress less, and land your dream job
          </p>
        </div>

        <div className="top-[350px] relative ">
          <div className="flex flex-col gap-5 left-[100px] absolute bg-purple-400 p-3 rounded-3xl">
            <p className=" text-purple-900 text-[40px]">
              Start Tracking Now For{" "}
            </p>
            <p className="font-bold text-yellow-500 text-[40px]">FREE !</p>
            <p className="text-pink-900 text-[20px] w-[500px] font-semibold bg-purple-300 p-2 rounded-2xl">
              Keep track of your job applications, deadlines, and progress all
              in one place.
            </p>
          </div>
          <button className=" bg-amber-300 p-[10px] font-bold rounded-[20px] left-[350px] top-[90px] absolute text-[25px] hover:bg-lime-200 hover:text-[28px] hover:cursor-pointer hover:text-blue-600">
            Get Started
          </button>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-gray-600 to-gray-400 border-t-8 border-red-800 p-2 ">
        <div className="flex flex-col gap-2">
          <span className="font-bold">Our Services</span>
          <span> Job Application Tracking</span>
          <span>Deadline Remainders</span>
          <span>Appication Status Update</span>
          <span>Sourse Tracking</span>
          <span> Resume & Cover letter Storage</span>
          <span>Accessible Anywhere</span>
        </div>

        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </footer>
    </>
  );
}
export default Landingpage;
