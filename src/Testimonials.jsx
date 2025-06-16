import Navigationbar from "./Navigationbar";
import { IoPersonSharp } from "react-icons/io5";
function Testimonials() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-red-400 h-fit ">
        <Navigationbar />
        <img
          src="./logo.png"
          alt="logo"
          className="h-28 w-50 absolute top-[-25px]"
        ></img>
        <br />
        <div className="font-bold text-5xl text-orange-800 text-center">
          Let's see what our clients have to say
        </div>

        <div className="flex flex-col gap-16 p-[40px]">
          <div className=" flex  gap-10">
            <div className="h-[400px] w-[900px] bg-yellow-100 rounded-3xl flex flex-col p-[20px] gap-[40px] hover:shadow-lg shadow-yellow-500">
              <div className="flex gap-8 bg-yellow-200 p-3 rounded-4xl">
                <IoPersonSharp className="text-7xl rounded-full bg-gray-400" />
                <div className="text-3xl text-green-600 font-bold ">
                  Jonas Kahnwald
                </div>
                <div className="text-2xl text-red-700 underline">
                  (Marketing Specialist)
                </div>
              </div>
              <p className="text-blue-600 text-xl font-semibold">
                “Amazing experience! It saves me so much time. I especially love
                the status tracking and document uploads. A must-have tool for
                job seekers!”
              </p>
            </div>
            <div className="h-[400px] w-[900px] bg-yellow-100 rounded-3xl flex flex-col p-[20px] gap-[40px] hover:shadow-lg shadow-yellow-500">
              {" "}
              <div className="flex gap-8 bg-yellow-200 p-3 rounded-4xl">
                <IoPersonSharp className="text-7xl rounded-full bg-gray-400" />
                <div className="text-3xl text-green-600 font-bold ">
                  Egon Tiedemann
                </div>
                <div className="text-2xl text-red-700 underline">
                  (Frontend Developer)
                </div>
              </div>
              <p className="text-blue-600 text-xl font-semibold">
                “This app made tracking my job applications so easy! The layout
                is intuitive, and I love how everything is organized. Highly
                recommended for anyone serious about landing their next job!”
              </p>
            </div>
          </div>
          <div className=" flex gap-10 ">
            <div className="h-[400px] w-[900px] bg-yellow-100 rounded-3xl flex flex-col p-[20px] gap-[40px] hover:shadow-lg shadow-yellow-500">
              <div className="flex gap-8 bg-yellow-200 p-3 rounded-4xl">
                <IoPersonSharp className="text-7xl rounded-full bg-gray-400" />
                <div className="text-3xl text-green-600 font-bold ">
                  Martha Nielsen
                </div>
                <div className="text-2xl text-red-700 underline">
                  (Data Analyst)
                </div>
              </div>
              <p className="text-blue-600 text-xl font-semibold">
                “Super helpful and user-friendly! I can see all my applications,
                deadlines, and notes in one place. It keeps me motivated and
                organized throughout my job hunt.”
              </p>
            </div>
            <div className="h-[400px] w-[900px] bg-yellow-100 rounded-3xl flex flex-col p-[20px] gap-[40px] hover:shadow-lg shadow-yellow-500">
              <div className="flex gap-8 bg-yellow-200 p-3 rounded-4xl">
                <IoPersonSharp className="text-7xl rounded-full bg-gray-400" />
                <div className="text-3xl text-green-600 font-bold ">
                  Mike Ehrmantraut
                </div>
                <div className="text-2xl text-red-700 underline">
                  (Software Engineer)
                </div>
              </div>
              <p className="text-blue-600 text-xl font-semibold">
                “I’ve tried multiple job trackers, but this one stands out.
                Simple, effective, and packed with just the right features.
                Great job by the developers!”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
