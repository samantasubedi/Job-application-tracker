import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
import Landingpage from "./Landingpage";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Myapplications from "./Myapplications";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose="1500" theme="colored" />
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/dataentry" element={<Jobform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/myapplications" element={<Myapplications />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
