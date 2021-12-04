import axios from "axios";
import { API_XERRAPI_ENDPOINT } from "@env";
import { getRecipesAction } from "../actions/actionCreators";

export const getRecipesThunk = () => {
  return async (
    dispatch: (arg0: { type: string; recipes: object[] }) => void
  ) => {
    const { data: recipes } = await axios.get(
      `${API_XERRAPI_ENDPOINT}recipes/`
    );
    dispatch(getRecipesAction(recipes));
  };
};
