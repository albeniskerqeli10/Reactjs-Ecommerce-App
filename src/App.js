import  { lazy,Suspense} from "react";
import "./GlobalStyle.css";
import StoreProvider from "./Context/StoreContext";
import Header from "./components/Header"
import Loader from "./components/Loader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToastProvider from './helpers/ToastProvider.js'
const Store = lazy(() => import( /* webpackChunkName:"Store" */ "./components/Store"));
const Cart = lazy(() => import( /* webpackChunkName:"Cart" */   "./components/Cart"));

const Final = lazy(() => import(/* webpackChunkName:"Final" */   "./components/Final"));
const Checkout = lazy(() => import( /* webpackChunkName:"Checkout" */  "./components/Checkout"));
export default function App() {

  return (
        <Router>
        <StoreProvider>

          <Header />
        <Suspense fallback={<Loader/>}>

          <Switch>
            <Route  path="/"  exact component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/final" component={Final} />
          </Switch>
</Suspense>
    </StoreProvider>
    <ToastProvider/>
    </Router>

    
  );
}
