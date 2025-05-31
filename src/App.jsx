import { ToastContainer } from "react-toastify";
import Jobform from "./Jobform";
function App() {
  return (
    <>
      <Jobform></Jobform>;
      <ToastContainer
        position="bottom-center"
        autoClose="500"
        theme="colored"
      />
    </>
  );
}
export default App;
