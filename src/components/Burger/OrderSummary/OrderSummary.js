import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const { ingredients, modalClosed, purchaseContinue, totalPrice } = props;
  const ingredientSummary = Object.entries(ingredients)
    .filter(([key, value]) => value > 0)
    .map((key) => (
      <li key={key[0]}>
        <span style={{ textTransform: "capitalize" }}>{key[0]}: </span>
        {ingredients[key[0]]}
      </li>
    ));
  return (
    <Aux>
      <h3> Your order </h3>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total price is: ${totalPrice.toFixed(2)}</strong>
      </p>
      <div className="u-d-f u-w-300 u-m-a">
        <button
          className="restaurant-menu-warning-modal-button u-mr-0_5"
          onClick={modalClosed}
        >
          Cancel
        </button>
        <button
          className="restaurant-menu-warning-modal-button u-ml-0_5"
          onClick={purchaseContinue}
        >
          Place Order
        </button>
      </div>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  modalClosed: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default orderSummary;
