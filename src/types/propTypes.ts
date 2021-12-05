export type RecipeProps = {
  recipes: Array<string>;
};

export type NavigationProps = {
  navigation: {
    navigate: (type: string) => { type: string };
  };
};

export type IChangeRecipeDataProp = {
  property: string;
  value: string | number;
};
