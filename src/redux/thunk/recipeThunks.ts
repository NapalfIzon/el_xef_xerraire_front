import axios from "axios";
import { API_XERRAPI_ENDPOINT } from "@env";
import { IRecipeSchema } from "../../interfaces/recipesInterface";
import { getToken } from "../../storage/asyncStorage";

const addRecipeThunk = (recipe: IRecipeSchema) => async () => {
  const storageToken = await getToken();
  const endpoint = `${API_XERRAPI_ENDPOINT}recipes/addRecipe`;

  await axios.post(endpoint, recipe, {
    headers: {
      Authorization: `Bearer ${storageToken}`,
    },
  });
};

const deleteRecipeThunk = (recipeId: string | undefined) => async () => {
  const storageToken = await getToken();
  const endpoint = `${API_XERRAPI_ENDPOINT}recipes/removerecipe`;

  await axios.delete(endpoint, {
    headers: {
      Authorization: `Bearer ${storageToken}`,
    },
    data: {
      recipeId: recipeId,
    },
  });
};

export { addRecipeThunk, deleteRecipeThunk };
