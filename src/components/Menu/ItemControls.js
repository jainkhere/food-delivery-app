import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemControls = (props) => {
  const {
    itemName,
    addIngredient,
    removeIngredient,
    ingredients,
    disabled,
    // price,
    // purchasable,
    // order,
  } = props;
  console.log(ingredients);
  console.log(ingredients.itemName);
  return (
    <div className="ItemControls">
      <Item
        itemName={itemName}
        count={ingredients[itemName]}
        add={() => addIngredient(itemName)}
        remove={() => removeIngredient(itemName)}
        disabled={disabled[itemName]}
      />
    </div>
  );
};

ItemControls.propTypes = {
  itemName: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.shape({}).isRequired,
  //   price: PropTypes.number.isRequired,
  //   purchasable: PropTypes.bool.isRequired,
  //   order: PropTypes.func.isRequired,
};

export default ItemControls;
