import React from "react";
import PropTypes from "prop-types";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import { INGREDIENT_PRICES } from "../../../store/reducers/ingredients";
import "./CheckoutSummary.css";

const checkoutSummary = (props) => {
  const { ingredients, checkoutCancelled, checkoutContinued } = props;
  const ingredientSummary = Object.entries(ingredients)
    .filter(([key, value]) => value > 0)
    .map((key) => (
      <div className="u-d-f u-jc-sb u-mb-2 u-fs-1_5" key={key[0]}>
        <span style={{ textTransform: "capitalize" }}>{key[0]} : </span>
        <span>{ingredients[key[0]]}</span>
        <span className="u-ml-0_5 u-f-r">
          {"$"}
          {INGREDIENT_PRICES[key[0]]}
        </span>
      </div>
    ));
  const amountOfIngredients = Object.values(ingredients).reduce(
    (sum, value) => sum + value
  );

  return (
    <div className="checkoutSummary">
      {amountOfIngredients > 0 ? (
        <div>
          <h1>Your order is on its way!</h1>
          {ingredientSummary}
        </div>
      ) : (
        <div>
          <h1>No orders yet</h1>
          <h3> Go to home to place order</h3>
        </div>
      )}
    </div>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  checkoutCancelled: PropTypes.func.isRequired,
  checkoutContinued: PropTypes.func.isRequired,
};

export default checkoutSummary;
