import Navigationbar from "./Navigationbar";
import { PiSealCheckLight } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
function Features() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-red-400 h-fit pb-8 ">
        <Navigationbar />
        <div className="text-bold text-[50px] flex justify-center font-bold">
          Features
        </div>
        <div className="flex justify-center">
          <span className="font-semibold text-2xl text-red-800 bg-yellow-100 p-2 rounded-3xl">
            Everything you need to stay organized and ahead in your job search.
          </span>
        </div>
        <br />
        <br />
        <div className="flex flex-col gap-10">
          <div className="flex gap-[100px] px-25">
            <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px] hover:shadow-lg shadow-white">
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
            <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px] hover:shadow-lg shadow-white">
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
          </div>

          <div className="flex gap-[100px] px-25">
            <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px] hover:shadow-lg shadow-white ">
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
            <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px] hover:shadow-lg shadow-white">
              <div className="flex justify-center">
                <FaSearch className="text-7xl " />
              </div>

              <div className="font-bold text-center text-2xl text-purple-900">
                Filter & Search
              </div>
              <div className="text-pink-900 text-xl">
                Quickly find applications by title, company, or status.
                Streamline your workflow and locate data in seconds.
              </div>
            </div>
          </div>

          <div className="flex gap-[100px] px-25">
            <div className="bg-purple-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px]  hover:shadow-lg shadow-white">
              <div className="flex justify-center">
                <MdAnalytics className="text-7xl " />
              </div>

              <div className="font-bold text-center text-2xl text-purple-900">
                Analytics
              </div>
              <div className="text-pink-900 text-xl">
                View stats about your application progress and success rate.
                Gain insights into your job search performance.
              </div>
            </div>
            <div className="bg-pink-300 p-3 rounded-3xl flex flex-col gap-4 w-[900px] hover:shadow-lg shadow-white">
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
      </div>
    </>
  );
}
export default Features;
