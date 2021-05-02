import React, { useState, useEffect, createContext } from "react";
import { ProductsData } from "../data/ProductsData";
export const StoreContext = createContext();

const StoreProvider = props => {
  const [products, setProducts] = useState(ProductsData);
  const [carts, setCarts] = useState([]);
  const [checkout , setCheckout] = useState([]);
  let [value , setValue] = useState(0);

  let filteredCart = carts.filter((c, i) => {
    return carts.map(cart => cart.id).indexOf(c.id) == i;
  });
  


  let filteredcheck = checkout.filter((check => check.id!==undefined));
  

  const TotalCartPrice = [...filteredCart].reduce( (acc ,cart )=> {
    return acc+ cart.price * cart.count;
 }, 0);


  useEffect(() => {


    const getCarts = JSON.parse(localStorage.getItem("CartDB"));
  console.log(getCarts);
    if (getCarts) {
      setCarts(getCarts);
    } else {
      console.log("No products in DB");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("CartDB", JSON.stringify(filteredCart));
  }, [carts]);

  

  return (
    <StoreContext.Provider
      value={{
        productctx: [products, setProducts],
        cartctx: [carts, setCarts],
        filtered:{filteredCart},
        total:{TotalCartPrice},
        values:[value,setValue],
        checkouts:[checkout,setCheckout],
        checkoutsort:{filteredcheck}
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
