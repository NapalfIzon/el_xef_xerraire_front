import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "../actions/actionTypes";

const recipeReducer = (recipe = {}, action: IActionCreator) => {
  let newRecipe;

  switch (action.type) {
    case actionTypes.getRecipe:
    case actionTypes.addRecipe:
    case actionTypes.uploadVote:
    case actionTypes.modifyRecipe:
      newRecipe = { ...recipe };
      break;
    case actionTypes.removeRecipe:
      newRecipe = {};
      break;
    default:
      newRecipe = recipe;
  }

  return newRecipe;
};

export default recipeReducer;
