import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Final.module.css";
import { GlobalContext } from "../Context/StoreContext";

const Final = () => {
  const { cartctx } = useContext(GlobalContext);
  const [carts, setCarts] = cartctx;
  const history = useHistory();
  return (
    carts !== "" && (
      <div className={styling.Final}>
        <h1>Congratulations, You just checkout your order</h1>
        <h4>Order delivers shortly, all the best</h4>
        <h4>Order Id : {Math.floor(Math.random() * 100000000)}</h4>
        <button onClick={(e) => history.push("/")}>Return to Homepage</button>
      </div>
    )
  );
};

export default Final;
