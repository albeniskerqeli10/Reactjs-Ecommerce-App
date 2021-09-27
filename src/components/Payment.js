import React, { useRef, useEffect, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useHistory } from "react-router-dom";

export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();

  const { total, cartctx, order, checkoutsort } = useContext(StoreContext);
  const { TotalCartPrice } = total;
  let { filteredcheck } = checkoutsort;
  let [carts, setCarts] = cartctx;
  let [orders, setOrders] = order;

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: filteredcheck.title,
                amount: {
                  currency_code: "EUR",
                  value: TotalCartPrice
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          history.push("/final");
          setCarts([]);
          setOrders([]);
        },
        onError: (err) => {
          console.log(err);
          alert("We encountered an error on the payment part");
        }
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
