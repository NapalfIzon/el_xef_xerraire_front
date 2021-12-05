import { IActionType } from "../../interfaces/actionsInterface";

const actionTypes: IActionType = {
  loadUser: "LOAD_USER",
  addUser: "ADD_USER",
  userLogin: "USER_LOGIN",
  userLogout: "USER_LOGOUT",
  modifyUser: "MODIFY_USER",
  removeUser: "REMOVE_USER",
  addFavorite: "ADD_FAVORITE",
  removeFavorite: "REMOVE_FAVORITE",
  getRecipes: "GET_RECIPES",
  getRandomRecipes: "GET_RECIPEs",
  getRecipe: "GET_RECIPE",
  searchRecipes: "SEARCH_RECIPE",
  addRecipe: "ADD_RECIPE",
  uploadVote: "UPLOAD_VOTE",
  modifyRecipe: "MODIFY_RECIPE",
  removeRecipe: "REMOVE_RECIPE",
  addIngredient: "ADD_INGREDIENT",
};

export default actionTypes;
