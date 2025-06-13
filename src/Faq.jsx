import Navigationbar from "./Navigationbar";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { SiAnswer } from "react-icons/si";
function Faq() {
  const [inputvalue, setinputvalue] = useState("");
  return (
    <>
      <div className="h-fit bg-gradient-to-r from-purple-500 to-red-400 pb-10">
        <Navigationbar></Navigationbar>
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="italic font-bold text-purple-800 text-4xl">
            Have any questions? Leave it here
          </div>
          <div className="flex gap-2 ">
            <input
              className="rounded-3xl w-[600px] bg-white p-3"
              type="text"
              placeholder="Ask your query"
              value={inputvalue}
              onChange={(event) => {
                setinputvalue(event.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                if (inputvalue.trim()) {
                  toast.success("your query has been submitted");
                  setinputvalue("");
                }
              }}
              className="text-white bg-blue-400 rounded-3xl p-2 hover:bg-green-400 transition-all duration-400 font-bold"
            >
              Submit
            </button>
          </div>
        </div>
        <br></br>
        <div>
          <p className="font-bold text-blue-800 text-3xl m-2 bg-gradient-to-r from-purple-300 to-red-200 py-1 text-center rounded-2xl">
            Here are some of the frequently asked question about our website
          </p>
          <div className="h-[2px] bg-red-900"></div>

          <div className="bg-blue-100">
            <p className="font-bold text-yellow-600 text-3xl bg-yellow-100 w-fit ml-3  rounded-2xl p-2">
              🛠️ General Usage
            </p>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  What is this Job Application Tracker?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  This is a simple tool to help you organize, track, and manage
                  all your job applications in one place.
                </p>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">Is it free to use?</p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes, this tracker is completely free and runs directly in your
                  browser using local storage.
                </p>
              </div>
            </div>

            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Do I need to sign up or create an account?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  No sign-up is required. All data is stored locally on your
                  device.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="bg-blue-100">
            <p className="font-bold text-green-800 text-3xl bg-green-100 w-fit ml-3  rounded-2xl p-2">
              💾 Data & Storage
            </p>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">Where is my data stored?</p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  All your job application data is saved in your browser's local
                  storage.
                </p>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Will I lose my data if I clear my browser or switch devices?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes, clearing browser storage or switching to a different
                  device will remove your saved applications unless you back
                  them up manually.
                </p>
              </div>
            </div>

            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Can I export or back up my job applications?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Not currently but we will add a feature that will allow you to
                  export your applications as a JSON/CSV file and import them
                  later.
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <div className="bg-blue-100">
            <p className="font-bold text-blue-800 text-3xl bg-blue-200 w-fit ml-3  rounded-2xl p-2">
              💡Features & Functionality
            </p>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  What kind of details can I save for each application?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  You can save the company name, job title, application date,
                  job type, job status, location, source, resume/cover letter,
                  and personal notes.
                </p>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Can I edit or delete an application after saving it?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes, each saved application can be edited or deleted.
                </p>
              </div>
            </div>

            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Is there a way to filter or sort my applications?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes, you can sort or filter applications by its status.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="bg-blue-100">
            <p className="font-bold text-red-800 text-3xl bg-red-200 w-fit ml-3  rounded-2xl p-2">
              🔒 Privacy
            </p>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Is my data shared with anyone?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  No, everything stays on your device. Nothing is uploaded or
                  shared.
                </p>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">How secure is my data?</p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Since data is stored locally, it's only accessible on your
                  device unless someone else uses your browser.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="bg-blue-100">
            <p className="font-bold text-orange-800 text-3xl bg-orange-200 w-fit ml-3  rounded-2xl p-2">
              💭 Suggestions & Contributions
            </p>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Can I suggest a feature or improvement?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes! Feel free to contact the developer or leave a suggestion.
                </p>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex ml-5 gap-3">
                <BsFillPatchQuestionFill className="text-3xl" />
                <p className="font-bold  text-2xl">
                  Is this project open-source? Can I contribute?
                </p>
              </div>

              <div className="flex ml-5 gap-3">
                <SiAnswer className="text-2xl" />
                <p className="text-xl ">
                  Yes, the source code is available on GitHub. Contributions are
                  welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
