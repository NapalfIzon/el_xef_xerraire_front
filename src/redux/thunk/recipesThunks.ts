import axios from "axios";
import { getRecipesAction } from "../actions/actionCreators";

export const getRecipesThunk = () => {
  return async (
    // eslint-disable-next-line comma-dangle
    dispatch: (arg0: { type: string; recipes: object[] }) => void
  ) => {
    const { data: recipes } = await axios.get(
      "https://proyecto-final-napo-back.herokuapp.com/recipes/"
    );
    dispatch(getRecipesAction(recipes));
  };
};
