import React from "react";
import PropTypes from "prop-types";
import { INGREDIENT_PRICES } from "../../store/reducers/ingredients";
import "./styles/Item.css";

const Item = (props) => {
  const {
    itemName,
    add,
    remove,
    count = 0,
    disabled,
    allergen,
    onAddButtonClick,
  } = props;
  return (
    <div className="item-wrapper">
      <div className="item-wrapper-row">
        <div className="item-name">{itemName}</div>
        <div className="item-remove-count-add">
          <span
            type="button"
            className={`item-add-remove ${disabled ? "u-d-n" : ""}`}
            onClick={remove}
            disabled={disabled}
          >
            -
          </span>
          <div className="item-count">
            <span className="count">{count}</span>
          </div>
          <span
            type="button"
            className="item-add-remove"
            onClick={!allergen ? add : onAddButtonClick}
          >
            +
          </span>
        </div>
      </div>
      <div className="item-wrapper-row">
        <div className="item-price">{"$" + INGREDIENT_PRICES[itemName]}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Item;
