import { FaFacebook } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className=" h-screen bg-gradient-to-r from-purple-500 to-red-400 w-full overflow-clip">
        <Navigationbar />
        <div className="relative">
          <div className="flex w-full flex-col  absolute left-[100px]">
            <h1 className="text-[50px] text-purple-800  w-[500px] ">
              Track Your Job Applications Effortlessly
            </h1>
            <p className="text-pink-800 bg-slate-300 p-2  text-[20px] font-semibold w-[500px] rounded-3xl">
              Stay organized, stress less, and land your dream job
            </p>
          </div>
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
          <Link
            to="./dataentry"
            className=" bg-amber-300 p-[10px] font-bold rounded-[20px] left-[350px] top-[90px] absolute text-[25px] hover:bg-lime-200 hover:text-[28px] hover:cursor-pointer hover:text-blue-600"
          >
            Get Started
          </Link>
        </div>
        <div className="relative">
          <div className="absolute h-[500px] w-[600px] bg-white left-[800px] top-[100px]"></div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-gray-600 to-gray-400 border-t-8 border-red-800 p-2 h-[350px]">
        <div className="flex justify-center ">
          {" "}
          <h1 className="font-bold text-4xl">Jobtrackr</h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Our Services</span>
            <span> Job Application Tracking</span>
            <span>Deadline Remainders</span>
            <span>Appication Status Update</span>
            <span>Source Tracking</span>
            <span> Resume & Cover letter Storage</span>
            <span>Accessible Anywhere</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="underline">Home</span>
            <span className="underline">Features</span>
            <span className="underline">Data Entry</span>
            <span className="underline"> Preview</span>
            <span className="underline">Testimonials</span>
            <span className="underline">FAQ</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Developer Info</span>
            <span>Created by : Samanta Subedi</span>
            <span>Email : samantasubedi01@gmail.com</span>
            <div className="flex gap-1">
              <span>Github :</span>
              <a href="https://github.com/samantasubedi">samantasubedi</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Terms Of Service</span>
            <p className="w-[300px]">
              By using this app, you agree that it's intended for personal,
              non-commercial use and educational demonstration. The developer is
              not liable for any outcomes resulting from use of the app,
              including lost data or missed deadlines.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Privacy Policy</span>
            <span className="w-[200px]">
              This app is built for educational purposes. No personal data is
              stored, shared, or collected. Your data is only visible to you.
            </span>
            <span>© 2025 JobTrackr. All rights reserved.</span>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-5 left-[900px] absolute ">
            <FaFacebook className="text-4xl hover:translate-y-1 transition-all ease-in-out cursor-pointer" />
            <TiSocialLinkedinCircular className="text-4xl hover:translate-y-1 transition-all ease-in-out cursor-pointer " />
            <BsTwitterX className="text-4xl  hover:translate-y-1 transition-all ease-in-out cursor-pointer" />
            <FaGithub className="text-4xl  hover:translate-y-1 transition-all ease-in-out cursor-pointer" />
          </div>
        </div>
      </footer>
    </>
  );
}
export default Landingpage;
