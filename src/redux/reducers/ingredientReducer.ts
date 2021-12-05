import actionTypes from "../actions/actionTypes";

const ingredientReducer = (ingredient = 1, action) => {
  let newIngredient;

  switch (action.type) {
    case actionTypes.addIngredient:
      newIngredient = ingredient + 1;
      break;
    default:
      newIngredient = ingredient;
  }

  return newIngredient;
};

export default ingredientReducer;
