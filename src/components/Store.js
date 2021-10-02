import React, { useContext} from "react";
import { StoreContext } from "../Context/StoreContext";
import styling from "../styles/Store.module.css";

import { toast } from "react-toastify";
import  Toast  from "../UI/Toast";

import  FlexProduct from  "../UI/FlexProduct.js";
import  FlexRow from "../UI/FlexRow.js";

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
