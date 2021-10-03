import { memo } from "react";
import {toast} from "react-toastify";
export const notification =(value) => {
    toast.success(`${value.title} Product removed from the cart`)
};
