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
    allergen,
    onAddButtonClick,
  } = props;
  return (
    <div className="ItemControls">
      <Item
        itemName={itemName}
        count={ingredients[itemName]}
        add={() => addIngredient(itemName)}
        remove={() => removeIngredient(itemName)}
        disabled={disabled[itemName]}
        onAddButtonClick={onAddButtonClick}
        allergen={allergen}
      />
    </div>
  );
};

ItemControls.propTypes = {
  itemName: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.shape({}).isRequired,
};

export default ItemControls;
