import React,  {useContext} from "react";
import styling from "../styles/Header.module.css";
import { useHistory } from "react-router-dom";
import {StoreContext} from '../Context/StoreContext';
import {AiOutlineShopping} from "react-icons/ai";
const Header = () => {
  const {cartctx} =  useContext(StoreContext);
  const history = useHistory();
  const [carts,setCarts]  = cartctx;

  return (
    <header  className={styling.Header}>
      <div className={styling.logo}>JoyStore</div>
      <div className={styling.info}>
        <button className={styling.info__button}
          onClick={e => {
           carts==''?alert('Add a Product'):history.push("/cart")
          }}
        >
          <h4>Shopping Cart</h4><AiOutlineShopping/>
        </button>
      </div>
    </header>
  );
};

export default Header;
