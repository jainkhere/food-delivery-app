import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import Categories from "../../components/Menu/Categories";
import SearchBar from "../../components/Menu/SearchBar";
import ItemControls from "../../components/Menu/ItemControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as Actions from "../../store/actions";
import { getTotalPrice, getAllIngredients } from "../../store/reducers";

class RestaurantMenu extends Component {
  state = {
    purchasing: false,
    allergicFood: "",
    allergenDetected: false,
  };

  enableOrderBtn = () => {
    const { ingredients } = this.props;
    const amountOfIngredients = Object.values(ingredients).reduce(
      (sum, value) => sum + value
    );
    return amountOfIngredients > 0;
  };

  purchaseHandler = () => {
    const { ingredients } = this.props;
    this.setState({ purchasing: true });
    console.log(ingredients);
  };

  handleAllergenHandler = () => {
    console.log("test");
    this.setState({ allergenDetected: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false, allergenDetected: false });
  };

  purchaseContinueHandler = () => {
    const { history } = this.props;
    history.push("/checkout");
  };

  // addModalItemHandler = () => {
  //   console.log("modal add");
  //   add;
  // };

  render() {
    const { purchasing, allergenDetected } = this.state;
    const { ingredients, totalPrice, add, remove, notAdd } = this.props;
    const disableInfo = { ...ingredients };

    Object.keys(disableInfo).forEach((key) => {
      disableInfo[key] = disableInfo[key] === 0;
    });

    const addModalItemHandler = () => {
      console.log("modal add");
      add("Pepperoni Pizza");
    };

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
        {allergenDetected && (
          <Modal modalClosed={this.purchaseCancelHandler}>
            <div className="u-fs-1_5 u-mb-4 u-ta-c">
              You might be allergic to the item you are adding
            </div>
            <div className="u-d-f u-w-300 u-m-a">
              <button
                className="restaurant-menu-warning-modal-button u-mr-0_5"
                onClick={this.purchaseCancelHandler}
              >
                Don't Add
              </button>
              <button
                className="restaurant-menu-warning-modal-button u-ml-0_5"
                onClick={() => {
                  addModalItemHandler();
                  this.setState({ allergenDetected: false });
                }}
              >
                Add Anyway
              </button>
              {/* <button onClick={this.purchaseCancelHandler}>
              CANCEL
            </button>
            <button
              onClick={() => {
                this.addModalItemHandler();
                this.setState({ allergenDetected: false });
              }}
            >
              CONTINUE
            </button> */}
            </div>
          </Modal>
        )}
        {/* Categories */}
        <div className="u-mb-1">
          <Categories />
        </div>
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
          allergen={true}
          onAddButtonClick={this.handleAllergenHandler}
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
          className="restaurant-menu-button u-mb-2"
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
