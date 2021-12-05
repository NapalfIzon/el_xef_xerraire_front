import { useDispatch } from "react-redux";
import { IRecipeSchema } from "../interfaces/recipesInterface";
import { addRecipeThunk } from "../redux/thunk/recipeThunks";

const useRecipe = () => {
  const dispatch = useDispatch();

  const addRecipe = (recipe: IRecipeSchema) => {
    dispatch(addRecipeThunk(recipe));
  };

  return {
    addRecipe,
  };
};

export default useRecipe;
