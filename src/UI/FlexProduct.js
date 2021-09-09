import styling from "../styles/FlexProduct.module.css";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FlexProduct = React.memo((props) => {
  return (
    <div className={styling.FlexProduct}>
      <div className={styling.FlexImage}>
        <div className={styling.FlexLabel}>
          <button onClick={props.openModal} className={styling.OpenModal}>
            <AiOutlineHeart className={styling.OpenIcon} />
          </button>
        </div>
        <img src={props.image} alt={"Product"} />
      </div>
      <h1>{props.title}</h1>
      <div className={styling.FlexProduct__row}>
        <h4>From €{props.price}</h4>
        <button className={styling.addToCartButton} onClick={props.addToCart}>
          <FaCartPlus />{" "}
        </button>
      </div>
    </div>
  );
});

export default FlexProduct;
