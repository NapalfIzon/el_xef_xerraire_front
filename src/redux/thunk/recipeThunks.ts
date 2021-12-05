import axios from "axios";
import { API_XERRAPI_ENDPOINT, TOKEN } from "@env";
import { IRecipeSchema } from "../../interfaces/recipesInterface";

export const addRecipeThunk = (recipe: IRecipeSchema) => async () => {
  const endpoint = `${API_XERRAPI_ENDPOINT}recipes/addRecipe`;

  await axios.post(endpoint, recipe, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};
