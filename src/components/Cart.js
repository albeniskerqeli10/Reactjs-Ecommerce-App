import React, { useEffect } from "react";
import { StoreContext } from "../Context/StoreContext";
import FlexColumn from "../UI/FlexColumn";
import FlexCart from "../UI/FlexCart";
import { useHistory } from "react-router-dom";
import {BsTrash} from 'react-icons/bs'
import '../styles/ToastStyling.css';
import { ToastContainer, toast, Bounce, Slide, Zoom, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styling from "../styles/Cart.module.css";
const totalqty = 1;
import { parse } from "path";
const Cart = () => {
  let { useContext, useState } = React;
  const { cartctx, filtered  , total , values, checkouts , order} = useContext(StoreContext);
  const [totalq , setTotalQ] = useState();
  let [value,setValue] =  values;
let  [orders ,setOrders] = order;
  let [carts, setCarts] = cartctx;
  const { filteredCart } = filtered;
  let {TotalCartPrice} = total;
  const history = useHistory();



  const HandleDelete = (id) => {
    const removeItem = [...filteredCart].filter(todo => todo.id !== id);
    setCarts(removeItem);
  }

useEffect(() => {
  const getTotal = localStorage.getItem("TotalPrice");
  if(getTotal) {
    setTotalQ(getTotal);
  }
})
  
  useEffect(() => {
    localStorage.setItem("TotalPrice"  ,TotalCartPrice);
  } , [])


  return (
    <div className={styling.Cart}>
      <FlexColumn>
        {filteredCart.map(cart => {
          
          const accept = () => toast.success(`${cart.title} Product removed from the cart`);

          return (
            <FlexCart key={cart.id}
              image={cart.image}
              title={cart.title}
              count={cart.count}
              increment={e => {
               setValue(cart.count++);

              }}
              decrement={e => {
                setValue(cart.count>0?cart.count--:'');
              }}
              price={cart.price * cart.count}
            >
              <button className={styling.deleteIcon} onClick={e => {
                HandleDelete(cart.id);
                accept();
                carts.length == 1 ? alert('No more products in the Cart') || history.push('/') : console.log('Products');

              }}><BsTrash/></button>


            </FlexCart>

          )
        })}
        <ToastContainer
          position={'top-center'}
          progressClassName={'toastProgress'}
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
      </FlexColumn>
      <div className={styling.CartRow}>
        <div className={styling.ActionButtons}>
        {/* <button onClick={e => history.push('/')} className={styling.ReturnButton} >Return to Products </button> */}

          <button className={styling.CleanCartBtn}
            onClick={e => {
              setCarts([]);
              history.push('/');
            }}
          >
            Clear the Cart
          </button>

        </div>
       
        <div className={styling.ActionButtons}>

        <h1>Total Price :{TotalCartPrice}€</h1>
          <button className={styling.CheckoutCartBtn} onClick={e => {
           
           setOrders([
                ...filteredCart,
              
                {
                  id: filteredCart.id,
                  title: filteredCart.title,
                  image: filteredCart.image,
                  price: filteredCart.price,
                  count: filteredCart.count,
                }

              ]);
              history.push('/checkout');

          }} >Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
