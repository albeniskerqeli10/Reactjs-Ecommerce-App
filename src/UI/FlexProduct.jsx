import styling from "../styles/FlexProduct.module.css";
import  {memo} from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from './Button'

const FlexProduct = (props) => {
  return (
    <div className={styling.FlexProduct}>
      <div className={styling.FlexImage}>
        <div className={styling.FlexLabel}>
        </div>
        <img src={props.image} loading="lazy" alt="Product" />
      </div>
      <h1>{props.title}</h1>
      <div className={styling.FlexProduct__row}>
        <h2>From €{props.price}</h2>
        <Button bgColor="var(--blue)" ariaLabel="Product"  textColor="#fff" padding="10px 15px " radius="5px" fontSize="15px" onClick={props.addToCart}>
          <FaCartPlus />{" "}
        </Button>
      </div>
    </div>
  );
}

export default FlexProduct;
