import { IActionType } from "../../interfaces/actionsInterface";

const actionTypes: IActionType = {
  loadUser: "LOAD_USER",
  userLogout: "USER_LOGOUT",
  getRecipe: "GET_RECIPE",
  searchRecipes: "SEARCH_RECIPE",
  addRecipe: "ADD_RECIPE",
  uploadVote: "UPLOAD_VOTE",
  modifyRecipe: "MODIFY_RECIPE",
  removeRecipe: "REMOVE_RECIPE",
};

export default actionTypes;
