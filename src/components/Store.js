import React, { useContext} from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import styling from "../styles/Store.module.css";

import "../styles/ToastStyling.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import  Toast  from "../UI/Toast";

const FlexProduct = React.lazy(() => import("../UI/FlexProduct.js"));
const FlexRow = React.lazy(() => import("../UI/FlexRow.js"));

const Store = () => {
  const { productctx, cartctx } = useContext(StoreContext);
  const [products] = productctx;

  const [carts, setCarts] = cartctx;
  const accept = (product) =>
  toast.success(`${product.title} Product added`);

const  addToCart = (product) => {
  setCarts([
    ...carts,

    {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: product.count,
      addCount: product.addQty
    }
  ]);
  accept(product);

}

  return (
    <div className={styling.Store}>

      <FlexRow>
        {products.map((product) => {


          return (
            <FlexProduct
 
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              addToCart={(e) => addToCart(product)}
            />
          );
        })}
      </FlexRow>

      <Toast/>
    </div>
  );
};

export default Store;
