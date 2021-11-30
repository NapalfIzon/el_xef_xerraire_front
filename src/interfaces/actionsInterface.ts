export interface IActionType {
  loadUser: string;
  userLogout: string;
  getRecipe: string;
  searchRecipes: string;
  addRecipe: string;
  uploadVote: string;
  modifyRecipe: string;
  removeRecipe: string;
}

export interface IActionCreator {
  type: string;
  user?: object;
  recipe?: object;
  recipes?: Array<object>;
}
