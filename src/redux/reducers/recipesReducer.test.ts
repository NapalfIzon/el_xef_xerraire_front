import {
  initialRecipesData,
  recipesTest,
} from "../../factories/recipesFactory";
import { IRecipeSchema } from "../../interfaces/recipesInterface";
import actionTypes from "../actions/actionTypes";
import recipesReducer from "./recipesReducer";

describe("Given a recipesReducer reducer,", () => {
  describe("When it receives an empty recipes data and a getRecipes action  with a recipes data", () => {
    test("Then it should return a new recipes list with the received recipes data.", () => {
      const action = {
        type: actionTypes.getRecipes,
        recipes: recipesTest,
      };

      const recipes: Array<IRecipeSchema> = recipesReducer(
        initialRecipesData,
        action
      );

      expect(recipes).toEqual(action.recipes);
    });
  });

  describe("When it receives empty recipes data and a random action with a recipes data", () => {
    test("Then it should return the same received recipes data", () => {
      const action = {
        type: "random action",
        recipes: recipesTest,
      };
      const result = [{}];

      const recipes: Array<IRecipeSchema> = recipesReducer(
        initialRecipesData,
        action
      );

      expect(recipes).toEqual(result);
    });
  });
});
