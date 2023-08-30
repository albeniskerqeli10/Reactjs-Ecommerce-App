import  { useContext  } from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Final.module.css";
import { StoreContext } from "../Context/StoreContext";
import Button from "../UI/Button";

const Final = () => {
  const {order} = useContext(StoreContext);
  const [orders, setOrders] = order;


  
  const history = useHistory();
    const goBack = (e) => {
    e.preventDefault
    history.push("/");
  }
  return (

    orders !== "" && (
      <div className={styling.Final}>
        <h1>Congratulations, You just checkout your order</h1>
        <h4>Order delivers shortly, all the best</h4>
        <h4>Order Id : {Math.floor(Math.random() * 100000000)}</h4>
        <Button bgColor="#000" textColor="white" padding="10px" onClick={goBack}>Return to Homepage</Button>
      </div>
    )

  );
};

export default Final;
