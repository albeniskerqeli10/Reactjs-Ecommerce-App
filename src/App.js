import React, { Fragment } from "react";
import "./GlobalStyle.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store.js";
import Cart from "./components/Cart.js";
import Header from "./components/Header.js";
import Final from "./components/Final";
import { StoreContext } from "./Context/StoreContext";
import StoreProvider from "./Context/StoreContext";
import Checkout from "./components/Checkout";
import { ModalProvider } from "styled-react-modal";
export default function App() {
  return (
    <StoreProvider>
      <ModalProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/final" component={Final} />
          </Switch>
        </Router>
      </ModalProvider>
    </StoreProvider>
  );
}
