import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navigationbar from "./Navigationbar";
function Myapplications() {
  const [applications, setapplications] = useState([]);
  const [showconfirm, setshowconfirm] = useState(false);
  const [indextodelete, setindextodelete] = useState(null);
  function deleteclicked(index) {
    console.log("delete clicked", index);
    setindextodelete(index);
    setshowconfirm(true);
    console.log(showconfirm);
  }
  const navigate = useNavigate();

  useEffect(() => {
    const savedapplications =
      JSON.parse(localStorage.getItem("jobapplications")) || [];
    setapplications(savedapplications);
  }, []);
  function editapplication(index) {
    navigate(`/edit/${index}`);
  }
  function confirmdelete() {
    const updatedapplications = applications.filter(
      (_, index) => index !== indextodelete
    );
    setapplications(updatedapplications);
    localStorage.setItem(
      "jobapplications",
      JSON.stringify(updatedapplications) //why not use applications instead of updated applications?,because the value of applications is not set immediately to updated values, the value is only set after next render/mount
    );
    setshowconfirm(false);
    toast.error("Application deleted successfully");
  }
  const [status, setstatus] = useState("All");
  const filteredapps = applications.filter(
    (app) => status == "All" || status == app.status
  );
  return (
    <>
      <div className="h-fit pb-10 bg-gradient-to-r from-purple-500 to-red-400 relative min-h-screen">
        <Navigationbar />
        <div className="flex justify-evenly font-semibold bg-gray-300 p-1 m-2 rounded-lg">
          <button
            onClick={() => setstatus("All")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "All" ? "bg-gray-400" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setstatus("Applied")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Applied" ? "bg-gray-400" : ""
            }`}
          >
            Applied
          </button>
          <button
            onClick={() => setstatus("Under review")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Under review" ? "bg-gray-400" : ""
            }`}
          >
            Under Review
          </button>
          <button
            onClick={() => setstatus("Interview scheduled")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Interview scheduled" ? "bg-gray-400" : ""
            }`}
          >
            Interview Scheduled
          </button>
          <button
            onClick={() => setstatus("Interviewed")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Interviewed" ? "bg-gray-400" : ""
            }`}
          >
            Interviewed
          </button>
          <button
            onClick={() => setstatus("Offer received")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Offer received" ? "bg-gray-400" : ""
            }`}
          >
            Offer Received
          </button>
          <button
            onClick={() => setstatus("Accepted offer")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Accepted offer" ? "bg-gray-400" : ""
            }`}
          >
            Accepted Offer
          </button>
          <button
            onClick={() => setstatus("Rejected")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Rejected" ? "bg-gray-400" : ""
            }`}
          >
            Rejected
          </button>
          <button
            onClick={() => setstatus("Withdrawn")}
            className={`bg-gray-200 p-3 rounded-2xl hover:bg-gray-400 hover:cursor-pointer ${
              status === "Withdrawn" ? "bg-gray-400" : ""
            }`}
          >
            Withdrawn
          </button>
        </div>
        <img
          src="./logo.png"
          alt="logo"
          className="h-28 w-50 absolute top-[-25px]"
        ></img>
        {filteredapps.length == 0 && (
          <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-2 bg-white w-fit p-5 rounded-sm">
              {" "}
              <Icon
                icon="mdi:error"
                className="text-5xl bg-white text-red-700 rounded-full"
              />
              <div className="text-4xl font-bold text-red-700">
                {" "}
                No Applications Found !
              </div>
            </div>
            <div className="text-3xl font-semimbold italic">
              Your Applications Appear Here{" "}
            </div>
          </div>
        )}

        {applications && (
          <div className="p-4 w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] ">
            {applications
              .filter(
                (currentapp) => status === "All" || currentapp.status == status
              )
              .map((currentobject, index) => (
                /* here we are mapping the array of objects where each object have their own index*/

                <div
                  key={index}
                  className="relative flex flex-col gap-5 text-center pt-[30px] bg-purple-100 border-green-800 border-2 p-3 rounded-3xl transition-all duration-500 hover:bg-purple-200"
                >
                  {" "}
                  <div className="  bg-amber-200 font-semibold italic w-fit p-2 rounded-2xl">
                    {currentobject.status}
                  </div>
                  <div className="font-bold text-4xl text-red-700">
                    {currentobject.companyname} ,{" "}
                    {currentobject.companylocation}
                  </div>
                  <div className="font-semibold text-2xl text-yellow-700 bg-orange-100 p-3 rounded-2xl">
                    {currentobject.jobtitle}
                  </div>
                  <div className="bg-cyan-200 flex flex-col gap-3 py-5 rounded-2xl">
                    <div className="text-xl text-blue-700 font-semibold">
                      Applied On : {currentobject.dateofapplication}
                    </div>
                    <div className="text-blue-700 text-xl font-semibold">
                      Work Location : {currentobject.jobtype}
                    </div>
                    <div className="text-blue-700 text-xl font-semibold">
                      Applied via : {currentobject.applicationsource}
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold italic bg-emerald-100 rounded-2xl text-xl">
                    {currentobject.notes}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => editapplication(index)}
                      className="text-xl font-semibold bg-white text-amber-700 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:cursor-pointer p-2.5 rounded-2xl"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteclicked(index)}
                      className="text-xl font-semibold bg-white text-red-600 transition-all duration-300 hover:bg-red-400 hover:text-black hover:cursor-pointer p-2.5 rounded-2xl "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
        {showconfirm && (
          <div className="relative">
            <div className="flex flex-col gap-5 bg-red-200 p-5 fixed top-5  left-1/2 -translate-x-1/2 rounded-3xl w-[300px] z-50">
              <p className="text-red-500 font-semibold flex  flex-col items-center ">
                <Icon icon="fluent-color:warning-28" width="50" height="50" />
                All the data of this application will be permanently deleted !
                Are you sure want to delete?
              </p>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setshowconfirm(false);
                  }}
                  className=" text-white bg-blue-400 p-2 rounded-xl hover:bg-blue-500 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmdelete}
                  className="bg-red-400 p-2 rounded-xl cursor-pointer text-white shadow-md hover:bg-red-500"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Myapplications;
