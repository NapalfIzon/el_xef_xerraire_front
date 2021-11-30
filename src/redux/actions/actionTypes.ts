import { IActionType } from "../../interfaces/actionsInterface";

const actionTypes: IActionType = {
  loadUser: "LOAD_USERS",
  userLogin: "USER_LOGIN",
  userLogout: "USER_LOGOUT",
  modifyUser: "MODIFY_USER",
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
