export type RecipeProps = {
  recipes: Array<string>;
};

export type NavigationProps = {
  navigation: {
    navigate: (type: string) => { type: string };
  };
};
