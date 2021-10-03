import  { lazy,Suspense } from "react";
import "./GlobalStyle.css";
import StoreProvider from "./Context/StoreContext";
import Header from "./components/Header"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "./UI/Toast";
const Store = lazy(() => import( /* webpackChunkName:"Store" */ "./components/Store"));
const Cart = lazy(() => import( /* webpackChunkName:"Cart" */   "./components/Cart"));

const Final = lazy(() => import(/* webpackChunkName:"Final" */   "./components/Final"));
const Checkout = lazy(() => import( /* webpackChunkName:"Checkout" */  "./components/Checkout"));
export default function App() {
  return (
    <StoreProvider>
        <Router>
          <Header />
        <Suspense fallback={<h1>Loading...</h1>}>

          <Switch>
            <Route  path="/"  exact component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/final" component={Final} />
          </Switch>
</Suspense>
            <Toast/>


        </Router>
    </StoreProvider>
    
  );
}
