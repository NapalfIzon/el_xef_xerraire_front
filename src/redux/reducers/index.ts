import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import recipesReducer from "./recipesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
