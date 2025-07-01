import { FaFacebook } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { Icon } from "@iconify/react/dist/iconify.js";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navigationbar from "./Navigationbar";

function Landingpage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-red-400 w-full overflow-clip pb-20 lg:pb-0">
        <div className="flex gap-10">
          <img
            src="./logo.png"
            alt="logo"
            className="md:h-28 md:w-50  h-10 w-18"
          ></img>
          <Navigationbar />
        </div>
        <div className="relative flex flex-col items-center lg:block md:top-[90px]">
          <div className="flex flex-col items-center text-center px-4 mt-20 lg:absolute lg:left-[100px] lg:items-start lg:text-left lg:mt-0">
            <h1 className="text-4xl sm:text-5xl text-purple-800 max-w-lg lg:text-[50px] lg:w-[500px]">
              Track Your Job Applications Effortlessly
            </h1>
            <p className="text-pink-800 bg-slate-300 p-2 text-base font-semibold w-full  rounded-3xl mt-4 lg:text-[20px] ">
              Stay organized, stress less, and land your dream job
            </p>
          </div>
        </div>

        <div className="relative mt-10 lg:top-[350px]">
          <div className="flex flex-col gap-3 items-center text-center mx-4 bg-purple-400 p-3 rounded-3xl lg:absolute lg:left-[100px] lg:items-start lg:text-left lg:gap-5">
            <p className="text-purple-900 text-3xl sm:text-4xl lg:text-[40px]">
              Start Tracking Now For{" "}
            </p>
            <p className="font-bold text-yellow-400 text-3xl sm:text-4xl lg:text-[40px]">
              FREE !
            </p>
            <p className="text-pink-900 text-base w-full max-w-md font-semibold bg-purple-300 p-2 rounded-2xl lg:text-[20px] lg:w-[500px]">
              Keep track of your job applications, deadlines, and progress all
              in one place.
            </p>
          </div>
          <Link
            to="./dataentry"
            className="transition-all z-10 flex gap-2 items-center ease-in-out animate-bounce bg-amber-300 p-[10px] font-bold rounded-[20px] mx-auto mt-8 text-xl hover:bg-lime-200 hover:text-2xl hover:cursor-pointer hover:text-blue-600 hover:animate-none w-fit lg:absolute lg:left-[350px] lg:top-[80px] lg:text-[25px] lg:mt-0"
          >
            Get Started
            <Icon icon="noto:rocket" width="40" height="40" />
          </Link>
        </div>
        <div className="relative h-full w-full">
          <div className="md:absolute mt-20 flex md:-top-[150px] justify-center">
            <div className=" size-[90%] aspect-square bg-white flex items-center justify-center text-center lg:absolute lg:h-[500px] lg:w-[600px] lg:left-[800px] lg:top-[100px] ">
              Preview video
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-gray-600 to-gray-400 border-t-8 border-red-800 p-5 relative flex flex-col items-center text-center lg:h-[400px] lg:block lg:text-left">
        <div className="flex justify-center mb-6 lg:justify-start">
          <img
            src="./logo.png"
            alt="logo"
            className="h-20 w-auto lg:h-28 lg:w-50"
          ></img>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 justify-center lg:justify-start">
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Our Services</span>
            <span> Job Application Tracking</span>
            <span>Deadline Reminders</span>
            <span>Application Status Update</span>
            <span>Source Tracking</span>
            <span> Resume & Cover letter Storage</span>
            <span>Accessible Anywhere</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="underline">Home</span>
            <span className="underline"> My Applications</span>
            <span className="underline">Features</span>
            <span className="underline">Data Entry</span>
            <span className="underline">Testimonials</span>
            <span className="underline">FAQ</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Developer Info</span>
            <span>Created by : Samanta Subedi</span>
            <span>Email : samantasubedi01@gmail.com</span>
            <div className="flex gap-1 justify-center lg:justify-start">
              <span>Github :</span>
              <a href="https://github.com/samantasubedi">samantasubedi</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Terms Of Service</span>
            <p className="w-full max-w-sm">
              By using this app, you agree that it's intended for personal,
              non-commercial use and educational demonstration. The developer is
              not liable for any outcomes resulting from use of the app,
              including lost data or missed deadlines.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold underline">Privacy Policy</span>
            <span className="w-full max-w-sm">
              This app is built for educational purposes. No personal data is
              stored, shared, or collected. Your data is only visible to you.
            </span>
            <span>© 2025 JobTrackr. All rights reserved.</span>
          </div>
        </div>
        <div className="relative mt-8 lg:absolute lg:bottom-5 lg:left-[900px] lg:mt-0">
          <div className="flex gap-5 justify-center">
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
