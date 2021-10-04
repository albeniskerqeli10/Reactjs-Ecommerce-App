import { useContext,lazy } from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Checkout.module.css";
import { StoreContext } from "../Context/StoreContext";
const Payment = lazy(() => import("./Payment"));
const Checkout = () => {
  const { cartctx, total, checkoutsort, order } = useContext(
    StoreContext
  );
  const history = useHistory();
  let { filteredcheck } = checkoutsort;
  const [orders, setOrders] = order;
  const [carts, setCarts] = cartctx;
  let { TotalCartPrice } = total;

  return (
    carts != "" && (
      <div className={styling.Checkout}>
        <div className={styling.CheckoutList}>
          <h1>List of Products</h1>
          {filteredcheck.map((check) => (
            <div
              key={Math.floor(Math.random() * 100000)}
              className={styling.CheckoutBox}
            >
              <div className={styling.CheckoutRow}>
                <img src={check.image} loading="lazy" alt="checkout product" />
                <h4>{check.title}</h4>
                <h4>€{check.count * check.price}</h4>
              </div>
            </div>
          ))}
        </div>
        {orders == "" ? (
          ""
        ) : (
          <div>
            <h1>Total Price : €{TotalCartPrice}</h1>{" "}
            <h4 className={styling.checkoutInfo}>
              Pay with <strong>Paypal</strong> or <strong>Debit Card</strong>
            </h4>{" "}
            <Payment />
          </div>
        )}
      </div>
    )

  );
};
export default Checkout;
