import {toast} from "react-toastify";
const Notification =(value) => {
    toast.success(`${value.title} Product removed from the cart`)
}
export default Notification
