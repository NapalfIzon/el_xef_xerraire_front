import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "../actions/actionTypes";

const recipesReducer = (recipes = [{}], action) => {
  let newRecipes;

  switch (action.type) {
    case actionTypes.getRecipes:
    case actionTypes.searchRecipes:
      newRecipes = [...action.recipes];
      break;
    default:
      newRecipes = recipes;
  }

  return newRecipes;
};

export default recipesReducer;
