import {toast} from "react-toastify";
import {memo} from 'react';
const Notification =(value) => {
    toast.success(`${value.title} Product removed from the cart`)
}
export default Notification
