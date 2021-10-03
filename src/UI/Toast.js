import { ToastContainer, Slide } from "react-toastify";
import "../styles/ToastStyling.css";
import "react-toastify/dist/ReactToastify.min.css";
import {memo} from 'react';

const Toast = memo(() => {
    return(
        <ToastContainer
        position={"top-center"}
        progressClassName={"toastProgress"}
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        transition={Slide}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    )
})
export default Toast;