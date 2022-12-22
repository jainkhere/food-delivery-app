import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import RestaurantMenu from "./containers/RestaurantMenu/RestaurantMenu";
import GettingStarted from "./containers/GettingStarted/GettingStarted";
import Signin from "./containers/Signin/Signin";
import Home from "./containers/Home/Home";

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={GettingStarted} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={RestaurantMenu} />
      </Switch>
    </Layout>
  </div>
);

export default App;
