import React, { useRef, useEffect  , useContext} from "react";
import {StoreContext} from "../Context/StoreContext";

export default function Paypal() {
  const paypal = useRef();
  const {total} = useContext(StoreContext); 
  const {TotalCartPrice} =  total;
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "OpenStore Cool",
                amount: {
                  currency_code: "EUR",
                  value: TotalCartPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}