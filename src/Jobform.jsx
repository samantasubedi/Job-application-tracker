import { useState } from "react";

function Jobform() {
  const [formdata, setformdata] = useState({
    companyname: "",
    dateofapplication: "",
    jobtitle: "",
    status: "",
    jobtype: "",
    joblocation: "",
    applicationsource: "",
    notes: "",
  });
  function resetdata() {
    setformdata({
      companyname: "",
      dateofapplication: "",
      jobtitle: "",
      status: "",
      jobtype: "",
      joblocation: "",
      applicationsource: "",
      notes: "",
    });
  }

  function confirmdata() {}
  function handleinputchange(event) {
    //event is a parameter automatically passed by event handler(such as onclick,onchange,onsubmit etc), event is a object that contains various data about that particular element. we access those data specifically according to our requirement.
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
  }
  return (
    <div className="flex justify-center bg-blue-100">
      <div className=" rounded-[8px] flex  gap-2 flex-col pl-[100px] pt-[20px] bg-gray-300 h-fit w-[800px]  shadow-black shadow-md mb-[20px] mt-[20px] pb-[25px]">
        <h1 className=" font-bold text-purple-800 bg-gray-200 max-w-fit text-4xl p-[10px] rounded-[5px] ml-[130px]">
          Job Application Form
        </h1>
        <br></br>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px] ">Company Name : </span>
          <input
            className=" w-[500px] h-[40px] text-[20px] bg-yellow-100 p-2 rounded-lg shadow-black shadow-sm"
            type="text"
            placeholder="Name of the company"
            onChange={handleinputchange}
            value={formdata.companyname}
            name="companyname"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">
            Date of Application :{" "}
          </span>
          <input
            className=" bg-yellow-100 p-2 rounded-lg shadow-black shadow-sm w-[500px] h-[40px] text-[20px] "
            type="text"
            placeholder="Date of application"
            onChange={handleinputchange}
            value={formdata.dateofapplication}
            name="dateofapplication"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">Job Title : </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Job title"
            onChange={handleinputchange}
            value={formdata.jobtitle}
            name="jobtitle"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">Job Status : </span>
          <select
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="status"
            onChange={handleinputchange}
            value={formdata.status}
            name="status"
          >
            <option value="">Select the job status</option>
            <option value="applied">Applied</option>
            <option value="under review">Under Review</option>
            <option value="interview scheduled">Interview Scheduled</option>
            <option value="interviewed">Interviewed</option>
            <option value="offer received">Offer Received</option>
            <option value="accepted offer">Accepted Offer</option>
            <option value="rejected">Rejected</option>
            <option value="withdrawn">Withdrawn</option>
          </select>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]"> Type of Job : </span>
          <select
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="job type"
            onChange={handleinputchange}
            value={formdata.jobtype}
            name="jobtype"
          >
            <option value="">Select job type</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">
            Location of the Company :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Company location"
            onChange={handleinputchange}
            value={formdata.joblocation}
            name="joblocation"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">
            Source of Application :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Application source"
            onChange={handleinputchange}
            value={formdata.applicationsource}
            name="applicationsource"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">Your Resume : </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="file"
            placeholder="Drop Your Resume"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">
            Your Cover Letter :{" "}
          </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="file"
            placeholder=" Drop Your cover letter"
          ></input>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="font-semibold  text-[25px]">Note : </span>
          <input
            className=" shadow-black shadow-sm w-[500px] h-[40px] text-[20px]  bg-yellow-100 p-2 rounded-lg"
            type="text"
            placeholder="Leave your notes (Optional)"
            onChange={handleinputchange}
            value={formdata.notes}
            name="notes"
          ></input>
        </div>
        <div className="flex gap-10 ml-[500px]">
          <button
            onClick={resetdata}
            className="text-xl text-red-700 font-bold rounded-2xl p-[5px] w-fit bg-white  shadow-md shadow-black hover:translate-y-1 cursor-pointer hover:bg-red-100 hover:text-green-red-500"
          >
            Reset
          </button>

          <button
            onClick={confirmdata}
            className="text-xl text-purple-700 font-bold rounded-2xl p-[5px] w-fit bg-white  shadow-md shadow-black hover:translate-y-1 cursor-pointer hover:bg-blue-100 hover:text-green-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
export default Jobform;
