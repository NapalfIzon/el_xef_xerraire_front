import { useDispatch } from "react-redux";
import { IRecipeSchema } from "../interfaces/recipesInterface";
import {
  addRecipeThunk,
  deleteRecipeThunk,
  modifyRecipeThunk,
} from "../redux/thunk/recipeThunks";

const useRecipe = () => {
  const dispatch = useDispatch();

  const addRecipe = (recipe: IRecipeSchema) => {
    dispatch(addRecipeThunk(recipe));
  };

  const deleteRecipe = (recipeId: string | undefined) => {
    dispatch(deleteRecipeThunk(recipeId));
  };

  const modifyRecipe = (recipe: IRecipeSchema) => {
    dispatch(modifyRecipeThunk(recipe));
  };

  return {
    addRecipe,
    deleteRecipe,
    modifyRecipe,
  };
};

export default useRecipe;
