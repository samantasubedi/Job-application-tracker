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
    <>
      <div className="flex  gap-2 flex-col items-center  bg-gray-400 h-screen">
        <div className="flex gap-3">
          <span>Company Name : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Company name"
            onChange={handleinputchange}
            value={formdata.companyname}
            name="companyname"
          ></input>
        </div>
        <div>
          <span>Date of Application : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Date of application"
            onChange={handleinputchange}
            value={formdata.dateofapplication}
            name="dateofapplication"
          ></input>
        </div>
        <div>
          <span>Job Title : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Job title"
            onChange={handleinputchange}
            value={formdata.jobtitle}
            name="jobtitle"
          ></input>
        </div>
        <div>
          <span>Job Status : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="status"
            onChange={handleinputchange}
            value={formdata.status}
            name="status"
          ></input>
        </div>
        <div>
          <span> Type of Job : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="job type"
            onChange={handleinputchange}
            value={formdata.jobtype}
            name="jobtype"
          ></input>
        </div>
        <div>
          <span>Location of the Company : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Company location"
            onChange={handleinputchange}
            value={formdata.joblocation}
            name="joblocation"
          ></input>
        </div>
        <div>
          <span>Source of Application : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Application source"
            onChange={handleinputchange}
            value={formdata.applicationsource}
            name="applicationsource"
          ></input>
        </div>
        <div>
          <span>Your Resume : </span>
          <input
            className="border-2 border-black"
            type="file"
            placeholder="Drop Your Resume"
          ></input>
        </div>
        <div>
          <span>Your Cover Letter : </span>
          <input
            className="border-2 border-black"
            type="file"
            placeholder=" Drop Your cover letter"
          ></input>
        </div>
        <div>
          <span>Note : </span>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Leave your notes (Optional)"
            onChange={handleinputchange}
            value={formdata.notes}
            name="notes"
          ></input>
        </div>
        <button
          onClick={confirmdata}
          className="text-2xl text-blue-700 font-bold bg-white rounded-2xl p-[5px]"
        >
          Confirm
        </button>
      </div>
    </>
  );
}
export default Jobform;
