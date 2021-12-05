export interface IActionType {
  loadUser: string;
  addUser: string;
  userLogin: string;
  userLogout: string;
  modifyUser: string;
  removeUser: string;
  addFavorite: string;
  removeFavorite: string;
  getRecipes: string;
  getRandomRecipes: string;
  getRecipe: string;
  searchRecipes: string;
  addRecipe: string;
  uploadVote: string;
  modifyRecipe: string;
  removeRecipe: string;
  addIngredient: string;
}

export interface IActionCreator {
  type: string;
  user?: object | undefined;
  recipe?: object | undefined;
  recipes?: Array<object> | undefined;
}

export interface IAction {
  isAuthenticated: boolean;
  user: object | unknown;
}
