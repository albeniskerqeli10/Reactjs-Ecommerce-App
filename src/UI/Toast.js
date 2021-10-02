import { ToastContainer, toast, Slide } from "react-toastify";


const Toast = () => {
    return(
        <ToastContainer
        position={"top-center"}
        progressClassName={"toastProgress"}
        autoClose={5000}
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
}
export default Toast;