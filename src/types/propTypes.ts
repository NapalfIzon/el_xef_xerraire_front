import { IRecipeSchema } from "../interfaces/recipesInterface";

export type RecipeProps = {
  recipes: Array<string>;
};

export type NavigationRouteProps = {
  navigation: {
    navigate: (type: string) => { type: string };
  };
  route: { params: { recipeData: IRecipeSchema } };
};

export type NavigationProps = {
  navigation: {
    navigate: (type: string) => { type: string };
  };
  recipeData?: IRecipeSchema;
};

export type IChangeRecipeDataProp = {
  property: string;
  value: string | number;
};
