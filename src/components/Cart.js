import  { useEffect ,lazy, useContext,useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useHistory } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import styling from "../styles/Cart.module.css";
import Button from "../UI/Button";
import FlexCart from "../UI/FlexCart.js";
import FlexColumn from "../UI/FlexColumn.js";
import {notification} from "../helpers/Notification";
const Cart = () => {
    const { cartctx, filtered, total, values, order } = useContext(
    StoreContext
  );
  const [totalQ,setTotalQ] = useState();
  let [value, setValue] = values;
  let [orders, setOrders] = order;
  let [carts, setCarts] = cartctx;
  const { filteredCart } = filtered;
  let { TotalCartPrice } = total;
  const history = useHistory();

  const HandleDelete = (id) => {
    const removeItem = filteredCart.filter((todo) => todo.id !== id);
    setCarts(removeItem);
  };

  useEffect(() => {
    const getTotal = localStorage.getItem("TotalPrice");
    if (getTotal) {
      setTotalQ(getTotal);
    }
  });

  useEffect(() => {
    localStorage.setItem("TotalPrice", TotalCartPrice);
  }, []);

const AddToOrder = (e) => {
  e.preventDefault();
  setOrders([
    ...filteredCart,

    {
      id: filteredCart.id,
      title: filteredCart.title,
      image: filteredCart.image,
      price: filteredCart.price,
      count: filteredCart.count
    }
  ]);
  
  history.push("/checkout");
}

const incrementCount = (cart) => {
  setValue(++cart.count);
}
const decrementCount =  (cart) => {
  cart.count > 0 ? setValue(--cart.count):'';
  cart.count == 0 ? HandleDelete(cart.id) : "0";
  carts.length === 1 ? history.push('/') : '';     
}

  return (
    carts != "" && (
      <div className={styling.Cart}>
        <FlexColumn>
          {filteredCart.map((cart) => {

            return (
              <FlexCart
                key={cart.id}
                image={cart.image}
                title={cart.title}
                count={cart.count}
                increment={(e) => incrementCount(cart)}
                decrement={(e) => decrementCount(cart)}
                price={cart.price * cart.count}
              >
                <Button
                bgColor="var(--lightblack)"
                margin="0 10px"
                  padding="10px"
                  textColor="white"

                
                  onClick={(e) => {
                    
                    HandleDelete(cart.id);
                    notification(cart);
                    if(filteredCart.length <= 1) {
                      history.push('/');
                      
                    }
                    else {
                      console.log('Cart updated')
                    }
                  }}
                >
                  <BsTrash />
                </Button>
              </FlexCart>
            );
          })}
        </FlexColumn>
        <div className={styling.CartRow}>
        <div className={styling.ActionButtons}>
           
           <Button
             padding="10px 20px"
             bgColor="var(--darkblack)"
             textColor="white"
             radius="10px"
             onClick={(e) => {
               setCarts([]);
               history.push("/");
             }}
           >
             Clear the Cart
           </Button>
       </div>
       <div className={styling.ActionButtons}>
              <h1>Total Price :{TotalCartPrice}€</h1>
              <Button
                padding="10px 20px"
                bgColor="var(--lightorange)"
                textColor="var(--white)"
                radius="10px"
                onClick={AddToOrder}
              >
                Checkout
              </Button>
            </div>
        </div>
      </div>
    )
  );
};

export default Cart;
