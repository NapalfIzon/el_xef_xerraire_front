import actionTypes from "./actionTypes";

const loadUserAction = (user) => ({
  type: actionTypes.loadUser,
  user,
});

const addUserAction: object = (user: object) => ({
  type: actionTypes.addUser,
  user,
});

const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

const userLogoutAction: object = (user: object) => ({
  type: actionTypes.userLogout,
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

const getRecipesAction = (recipes: Array<object>) => ({
  type: actionTypes.getRecipes,
  recipes,
});

const getRandomRecipesAction: object = (recipes: Array<object>) => ({
  type: actionTypes.getRandomRecipes,
  recipes,
});

const getRecipeAction = (recipe: object) => ({
  type: actionTypes.getRecipe,
  recipe,
});

const searchRecipesAction: object = (recipes: Array<object>) => ({
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

const addIngredientAction: object = (ingredient: object) => ({
  type: actionTypes.addIngredient,
  ingredient,
});

export {
  loadUserAction,
  addUserAction,
  userLoginAction,
  userLogoutAction,
  modifyUserAction,
  removeUserAction,
  addFavoriteAction,
  removeFavoriteAction,
  getRecipesAction,
  getRandomRecipesAction,
  getRecipeAction,
  searchRecipesAction,
  addRecipeAction,
  uploadVoteAction,
  modifyRecipeAction,
  removeRecipeAction,
  addIngredientAction,
};
