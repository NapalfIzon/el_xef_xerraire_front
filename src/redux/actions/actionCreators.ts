import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "./actionTypes";

const loadUserAction: object = (user: object) => ({
  type: actionTypes.loadUser,
  user,
});

const addUserAction: object = (user: object) => ({
  type: actionTypes.addUser,
  user,
});

const userLoginAction: object = (user: object) => ({
  type: actionTypes.userLogin,
  user,
});

const modifyUserAction: object = (user: object) => ({
  type: actionTypes.modifyUser,
  user,
});

const removeUserAction: object = (user: object) => ({
  type: actionTypes.removeUser,
  user,
});

const addFavoriteAction: object = (user: object) => ({
  type: actionTypes.addFavorite,
  user,
});

const removeFavoriteAction: object = (user: object) => ({
  type: actionTypes.removeFavorite,
  user,
});

const getRecipeAction: object = (recipe: object) => ({
  type: actionTypes.getRecipe,
  recipe,
});

const searchRecipeAction: object = (recipes: Array<object>) => ({
  type: actionTypes.searchRecipes,
  recipes,
});

const addRecipeAction: object = (recipe: object) => ({
  type: actionTypes.addRecipe,
  recipe,
});

const uploadVoteAction: object = (recipe: object) => ({
  type: actionTypes.uploadVote,
  recipe,
});

const modifyRecipeAction: object = (recipe: object) => ({
  type: actionTypes.modifyRecipe,
  recipe,
});

const removeRecipeAction: object = (recipe: object) => ({
  type: actionTypes.removeRecipe,
  recipe,
});

export {
  loadUserAction,
  addUserAction,
  userLoginAction,
  modifyUserAction,
  removeUserAction,
  addFavoriteAction,
  removeFavoriteAction,
  getRecipeAction,
  searchRecipeAction,
  addRecipeAction,
  uploadVoteAction,
  modifyRecipeAction,
  removeRecipeAction,
};
