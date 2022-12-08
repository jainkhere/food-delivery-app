import * as actionTypes from "../actions/actionTypes";

export const INGREDIENT_PRICES = {
  "Cheese Pizza": 8,
  "Pepperoni Pizza": 12,
  "Margherita Pizza": 12,
  "Alfredo pasta": 10,
  Pesto: 10,
  "Garalic Bread": 8,
  "French fries": 6,
  Soda: 2,
  salad: 0.6,
  cheese: 0.4,
  meat: 1.4,
  bacon: 1,
};
const initialState = {
  ingredients: {
    "Cheese Pizza": 0,
    "Pepperoni Pizza": 0,
    "Margherita Pizza": 0,
    "Alfredo pasta": 0,
    Pesto: 0,
    "Garalic Bread": 0,
    "French fries": 0,
    Soda: 0,
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.ADD_INGREDIENT:
      console.log("adding ingredient");
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT: {
      const updatedIngredientAmount =
        state.ingredients[action.ingredientName] > 0
          ? state.ingredients[action.ingredientName] - 1
          : state.ingredients[action.ingredientName];
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: updatedIngredientAmount,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    }
  }
};

export default ingredientsReducer;
