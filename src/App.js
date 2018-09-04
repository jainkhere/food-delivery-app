import React from "react";
import { Route, Switch, } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </Layout>
  </div>
);

export default App;
