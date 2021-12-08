import axios from "axios";
import { API_XERRAPI_ENDPOINT } from "@env";
import { IRecipeSchema } from "../../interfaces/recipesInterface";
import { getToken } from "../../storage/asyncStorage";
import { getRecipeAction } from "../actions/actionCreators";

const getRecipeThunk = (recipeId: string | undefined) => async (dispatch) => {
  const endpoint = `${API_XERRAPI_ENDPOINT}recipes/getrecipe`;
  const id = recipeId;

  const recipe = await axios.post(endpoint, id);
  dispatch(getRecipeAction(recipe));
};

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

const modifyRecipeThunk = (recipe: IRecipeSchema) => async () => {
  const storageToken = await getToken();
  const endpoint = `${API_XERRAPI_ENDPOINT}recipes/modifyrecipe`;

  await axios.put(
    endpoint,
    { recipe },
    {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
    }
  );
};

export { getRecipeThunk, addRecipeThunk, deleteRecipeThunk, modifyRecipeThunk };
