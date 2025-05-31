import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
function App() {
  return (
    <>
      <Jobform></Jobform>;
      <ToastContainer position="top-center" autoClose="1500" theme="colored" />
    </>
  );
}
export default App;
