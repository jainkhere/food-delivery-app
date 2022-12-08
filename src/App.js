import React from "react";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import RestaurantMenu from "./containers/RestaurantMenu/RestaurantMenu";

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        {/* <Route path="/" exact component={BurgerBuilder} /> */}
        <Route path="/menu" exact component={RestaurantMenu} />
      </Switch>
    </Layout>
  </div>
);

export default App;
