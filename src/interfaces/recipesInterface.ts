export interface IRecipeSchema {
  id?: string;
  title: string;
  description: string;
  category: string;
  ingredients: Array<string>;
  tools?: Array<string>;
  steps: Array<string>;
  image: string;
  imageBackup?: string;
  valoration: number;
  quantityValorations: number;
  length?: number | undefined;
  owner?:
    | {
        id: string;
        avatar: string;
      }
    | string;
}
export interface IRecipeProps {
  recipes: Array<IRecipeSchema>;
  recipeData?: IRecipeSchema;
}
