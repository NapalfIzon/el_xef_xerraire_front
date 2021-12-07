import { useDispatch } from "react-redux";
import { IRecipeSchema } from "../interfaces/recipesInterface";
import { addRecipeThunk, deleteRecipeThunk } from "../redux/thunk/recipeThunks";

const useRecipe = () => {
  const dispatch = useDispatch();

  const addRecipe = (recipe: IRecipeSchema) => {
    dispatch(addRecipeThunk(recipe));
  };

  const deleteRecipe = (recipeId: string | undefined) => {
    dispatch(deleteRecipeThunk(recipeId));
  };

  return {
    addRecipe,
    deleteRecipe,
  };
};

export default useRecipe;
