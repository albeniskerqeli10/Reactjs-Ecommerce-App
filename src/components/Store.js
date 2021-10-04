import {useContext , memo} from "react";
import { StoreContext } from "../Context/StoreContext";
import styling from "../styles/Store.module.css";
import  FlexProduct from  "../UI/FlexProduct.js";
import  FlexRow from "../UI/FlexRow.js";
import {toastNotification}  from "./ToastNotification";

const Store = memo(() => {
  const { productctx, cartctx } = useContext(StoreContext);
  const [products] = productctx;

  const [carts, setCarts] = cartctx;

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
  toastNotification(product ,'Product added to the cart');

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

    </div>
  );
});

export default Store;
