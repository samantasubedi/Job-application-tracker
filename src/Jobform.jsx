import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navigationbar from "./Navigationbar";
import { useParams } from "react-router-dom";

function Jobform() {
  const [error, seterror] = useState({});
  const [formdata, setformdata] = useState({
    companyname: "",
    dateofapplication: "",
    jobtitle: "",
    status: "",
    jobtype: "",
    companylocation: "",
    applicationsource: "",
    resume: "",
    coverletter: "",
    notes: "",
  });
  const { index } = useParams();
  const id = Number(index);

  useEffect(() => {
    const alldata = JSON.parse(localStorage.getItem("jobapplications"));
    if (id >= 0 && id < alldata.length) {
      const editingdata = alldata[id];
      console.log(editingdata);
      if (editingdata) {
        setformdata(editingdata);
      }
    }
  }, [id]);

  function resetdata() {
    toast.error("Form has been reset");
    setformdata({
      companyname: "",
      dateofapplication: "",
      jobtitle: "",
      status: "",
      jobtype: "",
      companylocation: "",
      applicationsource: "",
      resume: "",
      coverletter: "",
      notes: "",
    });
  }
  // const [isconfirmed, setisconfirmed] = useState(false);
  function confirmdata() {
    if (formvalidation()) {
      toast.success("Form has been submitted successfully");
      // setisconfirmed(true);
      // setTimeout(() => {
      //   setisconfirmed(false);
      // }, 3000);
      const existingjobs =
        JSON.parse(localStorage.getItem("jobapplications")) || [];
      const updatedjobs = [...existingjobs, formdata];
      localStorage.setItem("jobapplications", JSON.stringify(updatedjobs));
      setformdata({
        companyname: "",
        dateofapplication: "",
        jobtitle: "",
        status: "",
        jobtype: "",
        companylocation: "",
        applicationsource: "",
        resume: "",
        coverletter: "",
        notes: "",
      });
    }
  }

  function handleinputchange(event) {
    //event is a parameter automatically passed by event handler(such as onclick,onchange,onsubmit etc),
    // event is a object that contains various data about that particular element.
    // we access those data specifically according to our requirement.
    const { name, value } = event.target; //this is same as writting const name=event.target.name; const value=event.target.value;
    //  it is just a short form to write the same thing it is called object destructurign.
    //  we can also assign the value in different varible by using a colon .
    // for example if we want to store the data event.target.name in different variable other than name
    //  then we can do const { name:nam,value:val  } = event.target,
    // so in this way the data of name field  is stored in variable nam instead of name and same for value where it is stored in variable var.

    setformdata((prevdata) => ({ ...prevdata, [name]: value })); //prevdata is a parameter that is automatically obtained
    //  when we declare a fucntion inside a setter function and
    // it contains previous value of the variable (value of formdata in this case)
    //what does this arrow function inside the setter function does?
    //=> this function spreads the data of formdata object and changes the name field to the value entered by the user.
    //It spreads (copies) all the properties from the previous state (formdata) into a new object, allowing you to safely update just one field while keeping the rest unchanged.
    //for example if we enter openai in company name then the companyname is assigned with openai
    //because the name="companyname" so react knows that it should update the varaible of object with name "companyname"
    //the name field of the element should be exactly same to the variable name inside that object.
    //for example: name field of the element should be jobtitle if we want to change the jobtitle variable of that object and so on for all other variables.
    if (error[name] && value.trim()) {
      seterror((preverror) => {
        const newerror = { ...preverror };
        delete newerror[name];
        return newerror;
      });
    }
  }

  function formvalidation() {
    const newerror = {};
    if (!formdata.companyname.trim())
      newerror.companyname = "Company name is required !";
    if (!formdata.dateofapplication.trim())
      newerror.dateofapplication = "Date of application is required !";
    if (!formdata.jobtitle.trim())
      newerror.jobtitle = "Job title is required !";
    if (!formdata.status.trim())
      newerror.status = "Status of the job is required !";
    if (!formdata.jobtype.trim()) newerror.jobtype = "Job type is required !";
    if (!formdata.companylocation.trim())
      newerror.companylocation = "Company location is required !";
    if (!formdata.applicationsource.trim())
      newerror.applicationsource = "Source for application submission !";
    if (!formdata.resume) newerror.resume = "Resume is required !";
    if (!formdata.coverletter)
      newerror.coverletter = "Cover letter is required !";
    seterror(newerror);
    return Object.keys(newerror).length === 0; //Object.key is a object method it returns the array of key of that particular specified object,
    //  in our case we specified newerror object
    // so it returns the array of key which we assigned as name (i.e we did key={name})of newerror object.
    //.length method finds the length of array and compares it with 0,
    //  if array is null ie no error then it becomes true and true is returned, else false is returned.
  }
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-gradient-to-r from-purple-500 to-pink-400 ">
      <Navigationbar />
      <div className=" rounded-[8px] flex  gap-12 flex-col pl-[100px] pr-[10px] pt-[20px] bg-emerald-100 h-fit w-[800px]  shadow-black shadow-md mb-[20px] mt-[20px] pb-[25px]">
        <h1 className=" font-bold text-purple-800 bg-emerald-300 max-w-fit text-4xl p-[10px] rounded-[5px]  ml-[130px]  absolute  ">
          Job Application Form
        </h1>
        <br></br>
        <div className="flex gap-3 flex-col relative ">
          <span className="font-semibold  text-[25px] Inter ">
            🏢 Company Name :{" "}
          </span>
          <input
            className=" w-[500px] h-[40px] text-[20px] bg-yellow-100 p-2 rounded-lg shadow-black shadow-sm"
            type="text"
            placeholder="Name of the company"
            onChange={handleinputchange}
            value={formdata.companyname}
            name="companyname"
          ></input>
          {error.companyname && (
            <p className="text-red-600 absolute top-[100px]">
              {error.companyname}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]">
            📅 Date of Application :{" "}
          </span>
          <input
            className=" bg-yellow-100 p-2 rounded-lg shadow-black shadow-sm w-[500px] h-[40px] text-[20px] "
            type="date"
            placeholder="Date of application"
            onChange={handleinputchange}
            value={formdata.dateofapplication}
            name="dateofapplication"
          ></input>

          {error.dateofapplication && (
            <p className="text-red-600 absolute top-[100px]">
              {error.dateofapplication}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]"> 💼 Job Title : </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Job title"
            onChange={handleinputchange}
            value={formdata.jobtitle}
            name="jobtitle"
          ></input>
          {error.jobtitle && (
            <p className="text-red-600 absolute top-[100px]">
              {error.jobtitle}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]">📊 Job Status : </span>
          <select
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="status"
            onChange={handleinputchange}
            value={formdata.status}
            name="status"
          >
            <option value="">Select the job status</option>
            <option value="applied"> 📤 Applied</option>
            <option value="under review">🔍 Under Review</option>
            <option value="interview scheduled"> 📅 Interview Scheduled</option>
            <option value="interviewed"> 🎤 Interviewed</option>
            <option value="offer received"> 📬 Offer Received</option>
            <option value="accepted offer"> ✅ Accepted Offer</option>
            <option value="rejected"> ❌ Rejected</option>
            <option value="withdrawn"> ↩️ Withdrawn</option>
          </select>
          {error.status && (
            <p className="text-red-600 absolute top-[100px]">{error.status}</p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]"> 🔄 Type of Job : </span>
          <select
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="job type"
            onChange={handleinputchange}
            value={formdata.jobtype}
            name="jobtype"
          >
            <option value="">Select job type</option>
            <option value="remote"> 🌐 Remote</option>
            <option value="onsite"> 🏢 Onsite</option>
            <option value="hybrid"> 🔄 Hybrid</option>
          </select>
          {error.jobtype && (
            <p className="text-red-600 absolute top-[100px]">{error.jobtype}</p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]">
            📍 Location of the Company :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Company location"
            onChange={handleinputchange}
            value={formdata.companylocation}
            name="companylocation"
          ></input>
          {error.companylocation && (
            <p className="text-red-600 absolute top-[100px]">
              {error.companylocation}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]">
            🔗 Source of Application :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Application source"
            onChange={handleinputchange}
            value={formdata.applicationsource}
            name="applicationsource"
          ></input>
          {error.applicationsource && (
            <p className="text-red-600 absolute top-[100px]">
              {error.applicationsource}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]"> 📄 Your Resume : </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="file"
            placeholder="Drop Your Resume"
            name="resume"
            onChange={handleinputchange}
            value={formdata.resume}
          ></input>
          {error.resume && (
            <p className="text-red-600 absolute top-[100px]">{error.resume}</p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]">
            📝 Your Cover Letter :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="file"
            placeholder=" Drop Your cover letter"
            name="coverletter"
            value={formdata.coverletter}
            onChange={handleinputchange}
          ></input>
          {error.coverletter && (
            <p className="text-red-600 absolute top-[100px]">
              {error.coverletter}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col relative">
          <span className="font-semibold  text-[25px]"> ✍️ Note : </span>
          <textarea
            className=" shadow-black shadow-sm w-[500px]  text-[20px]  bg-yellow-100 p-2 rounded-lg
            "
            type="text"
            rows={5}
            placeholder="Leave your notes (Optional)"
            onChange={handleinputchange}
            value={formdata.notes}
            name="notes"
          ></textarea>
        </div>
        <div className="flex gap-10 justify-end">
          <button
            onClick={resetdata}
            className="  transition-all ease-in-out text-xl text-red-700 font-bold rounded-2xl p-[5px] w-fit bg-white  shadow-md shadow-slate-300 hover:translate-y-1 cursor-pointer hover:bg-red-100 hover:text-green-red-500"
          >
            Reset
          </button>

          <button
            onClick={confirmdata}
            className=" transition-all ease-in-out text-xl text-purple-700 font-bold rounded-2xl p-[5px] w-fit bg-white  shadow-md shadow-slate-300 hover:translate-y-1 cursor-pointer hover:bg-blue-100 hover:text-green-800"
          >
            Confirm
          </button>
        </div>
      </div>
      {/* <div className="fixed bottom-10 ">
        {isconfirmed && (
          <p className=" text-blue-800 w-fit px-8 h-[45px] text-[24px] bg-green-100 font-semibold rounded-2xl  ">
            Data updated sucessfully ✅{" "}
          </p>
        )}
      </div> */}

      <div className="fixed bottom-10  "></div>
    </div>
  );
}
export default Jobform;
