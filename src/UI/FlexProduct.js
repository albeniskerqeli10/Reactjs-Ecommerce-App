import styling from "../styles/FlexProduct.module.css";
import React from "react";
import {FaCartPlus} from 'react-icons/fa';

const FlexProduct = props => {
  return (
    <div className={styling.FlexProduct}>
      <img src={props.image} alt={"Product"} />
      <h1>{props.title}</h1>
      <h4>€{props.price}</h4>
      <button className={styling.addToCartButton} onClick={props.addToCart}><h4>Add to Cart</h4> <FaCartPlus/> </button>
    </div>
  );
};

export default FlexProduct;
