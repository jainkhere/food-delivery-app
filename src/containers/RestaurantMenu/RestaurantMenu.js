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

class RestaurantMenu extends Component {
  state = {
    purchasing: false,
  };

  enableOrderBtn = () => {
    const { ingredients } = this.props;
    const amountOfIngredients = Object.values(ingredients).reduce(
      (sum, value) => sum + value
    );
    return amountOfIngredients > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const { history } = this.props;
    history.push("/checkout");
  };

  render() {
    const { purchasing } = this.state;
    const { ingredients, totalPrice, add, remove } = this.props;
    const disableInfo = { ...ingredients };

    Object.keys(disableInfo).forEach((key) => {
      disableInfo[key] = disableInfo[key] === 0;
    });

    return (
      <Aux>
        {purchasing && (
          <Modal modalClosed={this.purchaseCancelHandler}>
            <OrderSummary
              ingredients={ingredients}
              purchaseContinue={this.purchaseContinueHandler}
              modalClosed={this.purchaseCancelHandler}
              totalPrice={totalPrice}
            />
          </Modal>
        )}
        {/* Categories */}
        <Categories />
        {/* Search bar */}
        <SearchBar />
        {/* Menu items */}
        <h3>Pizza</h3>
        <ItemControls
          itemName={"Cheese Pizza"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <ItemControls
          itemName={"Pepperoni Pizza"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <ItemControls
          itemName={"Margherita Pizza"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <h3>Pasta</h3>
        <ItemControls
          itemName={"Alfredo pasta"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <ItemControls
          itemName={"Pesto"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <h3>Sides</h3>
        <ItemControls
          itemName={"Garalic Bread"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <ItemControls
          itemName={"French fries"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <ItemControls
          itemName={"Soda"}
          addIngredient={add}
          removeIngredient={remove}
          ingredients={ingredients}
          disabled={disableInfo}
        />
        <button
          type="button"
          className="orderButton"
          disabled={!this.enableOrderBtn()}
          onClick={this.purchaseHandler}
        >
          ORDER NOW
        </button>
      </Aux>
    );
  }
}

RestaurantMenu.propTypes = {
  history: PropTypes.shape({}).isRequired,
  ingredients: PropTypes.shape({}).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: getAllIngredients(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  add: (ingreName) => dispatch(Actions.addIngredient(ingreName)),
  remove: (ingreName) => dispatch(Actions.removeIngredient(ingreName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantMenu);
