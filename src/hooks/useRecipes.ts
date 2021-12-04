import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../interfaces/hooksInterface";
import { getRecipesThunk } from "../redux/thunk/recipesThunks";

const useRecipes = () => {
  const dispatch = useDispatch();
  const { recipes: recipesReducer, data } = useSelector(
    ({ recipes, data }: RootState) => ({ recipes, data })
  );

  const getRecipes = useCallback(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  return {
    recipesReducer,
    data,
    getRecipes,
  };
};

export default useRecipes;
