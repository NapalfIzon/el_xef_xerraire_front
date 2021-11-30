import { IActionType } from "../../interfaces/actionsInterface";

const actionTypes: IActionType = {
  loadUser: "LOAD_USERS",
  addUser: "ADD_USER",
  userLogin: "USER_LOGIN",
  modifyUser: "MODIFY_USER",
  removeUser: "REMOVE_USER",
  addFavorite: "ADD_FAVORITE",
  removeFavorite: "REMOVE_FAVORITE",
  getRecipe: "GET_RECIPE",
  searchRecipes: "SEARCH_RECIPE",
  addRecipe: "ADD_RECIPE",
  uploadVote: "UPLOAD_VOTE",
  modifyRecipe: "MODIFY_RECIPE",
  removeRecipe: "REMOVE_RECIPE",
};

export default actionTypes;
