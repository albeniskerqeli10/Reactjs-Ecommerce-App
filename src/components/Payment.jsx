import { useRef, useEffect, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useHistory } from "react-router-dom";
import { loadScript } from "@paypal/paypal-js";


export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();

  const { total, cartctx, order, checkoutsort } = useContext(StoreContext);
  const { TotalCartPrice } = total;
  let { filteredcheck } = checkoutsort;
  let [setCarts] = cartctx;
  let [setOrders] = order;
  useEffect(() => {
     /* eslint-enable */ 

     const InitializePaypal   = async() => {

      const paymentInit = await loadScript({ "client-id": "AcVPwH6c4zhgvpb2Oel9HE5dPeSsq4i2Po_PhZ_CZEk49Z5cuJmasT-8n7g8v6kgHXPNpnvUQqivZQ0D" , currency: "EUR" });

    paymentInit.Buttons({
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
    }
    InitializePaypal();
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
