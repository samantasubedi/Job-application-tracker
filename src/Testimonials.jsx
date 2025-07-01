import { IoPersonSharp } from "react-icons/io5";
import Navigationbar from "./Navigationbar";

function Testimonials() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-red-400 h-fit pb-10">
        <div className="flex gap-10">
          <img
            src="./logo.png"
            alt="logo"
            className="md:h-28 md:w-50  h-10 w-18"
          ></img>
          <Navigationbar />
        </div>

        <div className="text-center font-bold text-2xl md:text-5xl text-orange-800 px-4">
          Let's see what our clients have to say
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8">
          {[
            {
              name: "Jonas Kahnwald",
              title: "Marketing Specialist",
              testimonial:
                "Amazing experience! It saves me so much time. I especially love the status tracking and document uploads. A must-have tool for job seekers!",
            },
            {
              name: "Egon Tiedemann",
              title: "Frontend Developer",
              testimonial:
                "This app made tracking my job applications so easy! The layout is intuitive, and I love how everything is organized. Highly recommended for anyone serious about landing their next job!",
            },
            {
              name: "Martha Nielsen",
              title: "Data Analyst",
              testimonial:
                "Super helpful and user-friendly! I can see all my applications, deadlines, and notes in one place. It keeps me motivated and organized throughout my job hunt.",
            },
            {
              name: "Mike Ehrmantraut",
              title: "Software Engineer",
              testimonial:
                "I’ve tried multiple job trackers, but this one stands out. Simple, effective, and packed with just the right features. Great job by the developers!",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-yellow-100 rounded-3xl flex flex-col p-5 gap-6 hover:shadow-lg shadow-yellow-500 transition-shadow"
            >
              <div className="flex items-center gap-4 bg-yellow-200 p-4 rounded-2xl flex-wrap">
                <IoPersonSharp className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rounded-full bg-gray-400 p-2 text-white" />
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                    {client.name}
                  </div>
                  <div className="text-sm sm:text-lg md:text-xl text-red-700 underline">
                    ({client.title})
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 font-semibold">
                “{client.testimonial}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
