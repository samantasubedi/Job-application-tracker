import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
import Landingpage from "./Landingpage";
function App() {
  return (
    <>
      {/* <Jobform /> */}
      <Landingpage></Landingpage>
      <ToastContainer position="top-center" autoClose="1500" theme="colored" />
    </>
  );
}
export default App;
