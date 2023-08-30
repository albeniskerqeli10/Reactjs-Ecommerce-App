import styling from "../styles/FlexCart.module.css";
import  { memo} from "react";
import { StoreContext } from "../Context/StoreContext";
import {AiOutlinePlus  , AiOutlineMinus} from "react-icons/ai";

import Button from './Button'

const FlexCart = memo((props) => {
  const {count}  = props;
  return (
    <div className={styling.FlexCart}>
      <div className={styling.CartInfo}>
        <img src={props.image} loading="lazy" alt="product" />
      </div>
      <div className={styling.CartInfo}>
      <h1>{props.title}</h1>
<div>{props.children}</div>
      </div>

      <div className={styling.CartInfoQt}>
        <Button margin="5px" onClick={props.increment} bgColor="var(--lightblue)" textColor="#000000" padding="10px" ariaLabel="increase"><AiOutlinePlus /></Button>
        <h1>{count}</h1>
        <Button  margin="5px" onClick={props.decrement} bgColor="var(--lightblue)" textColor="#000000" padding="10px" ariaLabel="decrease"><AiOutlineMinus /></Button>
      </div>
      <div className={styling.CartInfo}>
        <h1>€{props.price}</h1>
      </div>
    </div>
  );
});

export default FlexCart;
