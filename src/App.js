import React, { Fragment } from "react";
import "./GlobalStyle.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store.js";
import Cart from "./components/Cart.js";
import Header from "./components/Header.js";
import { StoreContext } from "./Context/StoreContext";
import StoreProvider from "./Context/StoreContext";
import Checkout from "./components/Checkout";
export default function App() {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Store} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}
