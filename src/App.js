import React, { Fragment, Suspense } from "react";
import "./GlobalStyle.css";

import { StoreContext } from "./Context/StoreContext";
import StoreProvider from "./Context/StoreContext";
import Header from "./components/Header"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Store = React.lazy(() => import( /* webpackChunkName:"Store" */ "./components/Store"));
const Cart = React.lazy(() => import( /* webpackChunkName:"Cart" */   "./components/Cart"));

const Final = React.lazy(() => import(/* webpackChunkName:"Final" */   "./components/Final"));
const Checkout = React.lazy(() => import( /* webpackChunkName:"Checkout" */  "./components/Checkout"));
export default function App() {
  return (
    <StoreProvider>
        <Router>
          <Header />
        <Suspense fallback={<h1>Loading...</h1>}>

          <Switch>
            <Route  path="/" exact component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/final" component={Final} />
          </Switch>
</Suspense>

        </Router>
    </StoreProvider>
  );
}
