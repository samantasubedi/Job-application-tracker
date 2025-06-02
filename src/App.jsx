import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
import Landingpage from "./Landingpage";
import Navigationbar from "./Navigationbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        {/* <Jobform /> */}
        {/* <Landingpage></Landingpage> */}
        <ToastContainer
          position="top-center"
          autoClose="1500"
          theme="colored"
        />
      </Routes>
    </Router>
  );
}
export default App;
