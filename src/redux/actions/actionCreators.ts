import actionTypes from "./actionTypes";

const loadUserAction: object = (user: object) => ({
  type: actionTypes.loadUser,
  user,
});

const userLogoutAction: object = (user: object) => ({
  type: actionTypes.userLogout,
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
  userLogoutAction,
  getRecipeAction,
  searchRecipeAction,
  addRecipeAction,
  uploadVoteAction,
  modifyRecipeAction,
  removeRecipeAction,
};
