import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import ingredientReducer from "./recipesReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredient: ingredientReducer,
});

export default rootReducer;
