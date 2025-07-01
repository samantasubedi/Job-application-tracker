import { FaCloud, FaSearch } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { PiSealCheckLight } from "react-icons/pi";
import { RiUploadCloud2Fill } from "react-icons/ri";
import Navigationbar from "./Navigationbar";
function Features() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-red-400 h-fit pb-8 ">
        <div className="flex gap-10">
          <img
            src="./logo.png"
            alt="logo"
            className="md:h-28 md:w-50  h-10 w-18"
          ></img>
          <Navigationbar />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-bold md:text-[50px] text-4xl flex justify-center font-bold ">
            Features
          </div>
          <div className="flex justify-center">
            <span className="font-semibold md:text-2xl text-lg text-red-800 bg-yellow-100 p-2 rounded-3xl">
              Everything you need to stay organized and ahead in your job
              search.
            </span>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:m-10 m-3">
          <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-fit hover:shadow-lg shadow-white">
            <div className="flex justify-center">
              <PiSealCheckLight className="text-7xl " />
            </div>
            <div className="font-bold text-center text-2xl text-purple-900">
              Track Applications
            </div>
            <div className="text-pink-900 text-xl">
              Log and manage all your job applications in one place. Keep a
              complete history of your progress, follow-ups, and statuses.
            </div>
          </div>
          <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-fit hover:shadow-lg shadow-white">
            <div className="flex justify-center">
              <LuAlarmClock className="text-7xl " />
            </div>
            <div className="font-bold text-center text-2xl text-purple-900">
              Reminders
            </div>
            <div className="text-pink-900 text-xl">
              Set reminders for follow-ups and interview schedules. Never miss
              an important deadline or opportunity.
            </div>
          </div>

          <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-fit hover:shadow-lg shadow-white ">
            <div className="flex justify-center">
              <RiUploadCloud2Fill className="text-7xl " />
            </div>

            <div className="font-bold text-center text-2xl text-purple-900">
              Resume Upload
            </div>
            <div className="text-pink-900 text-xl">
              Easily upload and manage your resumes and coverletter. Keep
              multiple versions for different job applications and access them
              anytime.Organize your documents for quick access and submission.
            </div>
          </div>
          <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-fit hover:shadow-lg shadow-white">
            <div className="flex justify-center">
              <FaSearch className="text-7xl " />
            </div>

            <div className="font-bold text-center text-2xl text-purple-900">
              Filter & Search
            </div>
            <div className="text-pink-900 text-xl">
              Quickly find applications by title, company, or status. Streamline
              your workflow and locate data in seconds.
            </div>
          </div>

          <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-fit  hover:shadow-lg shadow-white">
            <div className="flex justify-center">
              <MdAnalytics className="text-7xl " />
            </div>

            <div className="font-bold text-center text-2xl text-purple-900">
              Analytics
            </div>
            <div className="text-pink-900 text-xl">
              View stats about your application progress and success rate. Gain
              insights into your job search performance.
            </div>
          </div>
          <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-fit hover:shadow-lg shadow-white">
            <div className="flex justify-center">
              <FaCloud className="text-7xl " />
            </div>

            <div className="font-bold text-center text-2xl text-purple-900">
              Cloud Sync
            </div>
            <div className="text-pink-900 text-xl">
              Access your data from any device, anytime. Your job search stays
              up-to-date and in sync across platforms.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features;
