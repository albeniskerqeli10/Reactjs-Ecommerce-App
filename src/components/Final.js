import React, { useContext  } from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Final.module.css";
import Button from "../UI/Button";

const Final = () => {
  const history = useHistory();
  const goBack = (e) => {
    e.preventDefault();
    history.push("/");
  }
  return (

    carts !== "" && (
      <div className={styling.Final}>
        <h1>Congratulations, You just checkout your order</h1>
        <h4>Order delivers shortly, all the best</h4>
        <h4>Order Id : {Math.floor(Math.random() * 100000000)}</h4>
        <Button onClick={goBack}>Return to Homepage</Button>
      </div>
    )

  );
};

export default Final;
