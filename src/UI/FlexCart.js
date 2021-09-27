import styling from "../styles/FlexCart.module.css";
import React , {Suspense} from "react";
import { StoreContext } from "../Context/StoreContext";
import {AiOutlinePlus  , AiOutlineMinus} from "react-icons/ai";

const FlexCart = (props ,) => {
  let { useContext, useState } = React;
  const {count}  = props;
  const { cartctx , filtered } = useContext(StoreContext);
  const [carts, setCarts] = cartctx;
  const {filteredCart} = filtered;
  const HandleDelete = (id) => {
    const removeItem = [...carts].filter(todo => todo.id !== id);
    setCarts(removeItem);
    }

  return (
    <div className={styling.FlexCart}>
      <div className={styling.CartInfo}>
        <img src={props.image} />
      </div>
      <div className={styling.CartInfo}>
      <h1>{props.title}</h1>
<div>{props.children}</div>
      </div>

      <div className={styling.CartInfoQt}>
        <button onClick={props.increment} className={styling.icon}><AiOutlinePlus /></button>
        <h1>{count}</h1>
        <button className={styling.icon} onClick={props.decrement}><AiOutlineMinus /></button>
      </div>
      <div className={styling.CartInfo}>
        <h1>€{props.price}</h1>
      </div>
    </div>
  );
};

export default FlexCart;
