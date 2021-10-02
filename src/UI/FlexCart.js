import styling from "../styles/FlexCart.module.css";
import React , {Suspense} from "react";
import { StoreContext } from "../Context/StoreContext";
import {AiOutlinePlus  , AiOutlineMinus} from "react-icons/ai";

import Button from './Button'

const FlexCart = (props) => {
  let { useContext, useState } = React;
  const {count}  = props;
  const { cartctx  } = useContext(StoreContext);
  const [carts, setCarts] = cartctx;
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
        <Button margin="5px" onClick={props.increment} bgColor="var(--lightblue)" textColor="#000000" padding="10px"><AiOutlinePlus /></Button>
        <h1>{count}</h1>
        <Button  margin="5px" onClick={props.decrement} bgColor="var(--lightblue)" textColor="#000000" padding="10px"><AiOutlineMinus /></Button>
      </div>
      <div className={styling.CartInfo}>
        <h1>€{props.price}</h1>
      </div>
    </div>
  );
};

export default FlexCart;
