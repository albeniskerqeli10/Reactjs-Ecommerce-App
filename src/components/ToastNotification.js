import { memo } from "react";
import {toast} from "react-toastify";
export const toastNotification =(value,text) => {
    toast.success(`${value?.title} ${text}`)
};

