import styling from "../styles/FlexProduct.module.css";
import  {memo} from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from './Button'

const FlexProduct = memo((props) => {
  return (
    <div className={styling.FlexProduct}>
      <div className={styling.FlexImage}>
        <div className={styling.FlexLabel}>
        </div>
        <img src={props.image} alt={"Product"} />
      </div>
      <h1>{props.title}</h1>
      <div className={styling.FlexProduct__row}>
        <h4>From €{props.price}</h4>
        <Button bgColor="var(--blue)" textColor="#fff" padding="10px 20px " radius="5px" fontSize="20px" onClick={props.addToCart}>
          <FaCartPlus />{" "}
        </Button>
      </div>
    </div>
  );
});

export default FlexProduct;
