import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import styling from "../styles/Store.module.css";
import FlexRow from "../UI/FlexRow.js";
import FlexProduct from "../UI/FlexProduct.js";
import "../styles/ToastStyling.css";
import {
  ToastContainer,
  toast,
  Bounce,
  Slide,
  Zoom,
  Flip
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Store = () => {
  const { productctx, cartctx } = useContext(StoreContext);
  const [products, setProducts] = productctx;

  const [carts, setCarts] = cartctx;
  const [current, setCurrent] = React.useState([]);

  const history = useHistory();

  return (
    <div className={styling.Store}>
      <FlexRow>
        {products.map((product) => {
          const accept = () =>
            toast.success(`${product.title} Product added to the Cart`);

          return (
            <FlexProduct
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              addToCart={(e) => {
                e.preventDefault();
                accept();

                setCarts([
                  ...carts,

                  {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    count: product.count
                  }
                ]);
              }}
            />
          );
        })}
      </FlexRow>

      <ToastContainer
        position={"top-center"}
        progressClassName={"toastProgress"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        transition={Slide}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Store;
