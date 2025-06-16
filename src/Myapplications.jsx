import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Myapplications() {
  const [applications, setapplications] = useState([]);
  const [showconfirm, setshowconfirm] = useState(false);
  const [indextodelete, setindextodelete] = useState(null);
  function deleteclicked(index) {
    setindextodelete(index);
    setshowconfirm(true);
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

  return (
    <>
      <div className="h-fit pb-10 bg-gradient-to-r from-purple-500 to-red-400 relative">
        <Navigationbar />
        <img
          src="./logo.png"
          alt="logo"
          className="h-28 w-50 absolute top-[-25px]"
        ></img>
        <div className="p-4 w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] ">
          {applications.map((currentobject, index) => (
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
                {currentobject.companyname} , {currentobject.companylocation}
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
          {showconfirm && (
            <div className="relative">
              <div className="flex flex-col gap-5 bg-red-200 p-5 fixed  left-[650px] rounded-3xl w-[300px]">
                <p className="text-red-500 font-semibold">
                  All the data of this application will be permanently deleted !
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setshowconfirm(false);
                    }}
                    className="bg-blue-400 p-2 rounded-2xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmdelete}
                    className="bg-red-400 p-2 rounded-2xl"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Myapplications;
