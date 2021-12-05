import { initialRecipeData, recipeTest } from "../../factories/recipesFactory";
import actionTypes from "../actions/actionTypes";
import recipeReducer from "./recipeReducer";

describe("Given a recipeReducer reducer,", () => {
  describe("When it receives an empty recipe data and a getRecipe action  with a recipe data", () => {
    test("Then it should return a new recipe with the received recipe data.", () => {
      const action = {
        type: actionTypes.getRecipe,
        recipe: recipeTest,
      };

      const recipe: object | unknown = recipeReducer(initialRecipeData, action);

      expect(recipe).toEqual(action.recipe);
    });
  });

  describe("When it receives empty recipe data and a removeRecipe action with a recipe data", () => {
    test("Then it should return a new user with the received user data", () => {
      const action = {
        type: actionTypes.removeRecipe,
        recipe: recipeTest,
      };

      const recipe: object | unknown = recipeReducer(initialRecipeData, action);

      expect(recipe).toEqual({});
    });
  });

  describe("When it receives empty recipe data and a random action with a recipe data", () => {
    test("Then it should return the same received recipe data", () => {
      const action = {
        type: "random action",
        recipe: recipeTest,
      };
      const result = {
        recipe: {},
      };

      const recipe: object | unknown = recipeReducer(initialRecipeData, action);

      expect(recipe).toEqual(result);
    });
  });
});
