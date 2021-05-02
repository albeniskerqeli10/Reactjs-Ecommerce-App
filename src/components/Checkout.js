import React , {useContext , useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Checkout.module.css";
import {StoreContext} from "../Context/StoreContext";
import Payment from "./Payment";
const Checkout = () => {
  const {checkouts ,total} = useContext(StoreContext); 
  let [checkout,setCheckout]=  checkouts;
  const history = useHistory();
  let {TotalCartPrice} =  total;
  const [checkoutDone,setCheckoutDone]= useState([]);

  useEffect(() => {


    const getOrders = JSON.parse(localStorage.getItem("Transaction"));
  console.log(getOrders);
    if (getOrders) {
      setCheckoutDone(getOrders);
    } else {
      console.log("No products in DB");
    }
  } ,[]);
  useEffect(() => {
    localStorage.setItem("Transaction", JSON.stringify(checkout));
  }, [checkout]);

  
  return (
    <div className={styling.Checkout}>
    <div>
    <h1>List of Products</h1>
      {checkout.map(check=> (
        <div>
        <h1>{check.title}</h1>
        <h4>{check.price}</h4>
        </div>
      ))}

    </div>
{checkout==''?'':<div><h1>{TotalCartPrice}</h1><Payment/></div>}
    </div>
  );
};
export default Checkout;
