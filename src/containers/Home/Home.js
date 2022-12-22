import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import Categories from "../../components/Menu/Categories";
import SearchBar from "../../components/Menu/SearchBar";
import Item from "../../components/Menu/Item";
import ItemControls from "../../components/Menu/ItemControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as Actions from "../../store/actions";
import { getTotalPrice, getAllIngredients } from "../../store/reducers";
import image from "./restaurant-image.jpg";

class Home extends Component {
  clickHandler = () => {
    const { history } = this.props;
    history.push("/menu");
  };

  render() {
    return (
      <Aux>
        <div className="u-mb-2">
          <SearchBar />
        </div>
        {/* <div className="">Pickup | Delivery</div> */}
        <div
          className="restaurant-wrapper u-d-f u-ai-c u-ff-c u-mb-2"
          onClick={this.clickHandler}
        >
          <div className="restaurant-image">
            <img src={image} width="300" />
          </div>
          <div className="restaurant-name u-fs-1_5">Slippy Jimmy's</div>
        </div>
        <div
          className="restaurant-wrapper u-d-f u-ai-c u-ff-c u-mb-2"
          onClick={this.clickHandler}
        >
          <div className="restaurant-image">
            <img src={image} width="300" />
          </div>
          <div className="restaurant-name u-fs-1_5">Dirty Harry's</div>
        </div>
        <div
          className="restaurant-wrapper u-d-f u-ai-c u-ff-c u-mb-2"
          onClick={this.clickHandler}
        >
          <div className="restaurant-image">
            <img src={image} width="300" />
          </div>
          <div className="restaurant-name u-fs-1_5">Little Ceaser's</div>
        </div>
      </Aux>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Home;
