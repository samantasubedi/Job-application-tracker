import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
import Landingpage from "./Landingpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose="1500" theme="colored" />
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/data-entry" element={<Jobform />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
