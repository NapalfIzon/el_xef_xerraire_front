import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesThunk } from "../redux/thunk/recipesThunks";

const useRecipes = () => {
  const dispatch = useDispatch();
  const { recipes: recipesReducer, data } = useSelector(
    // eslint-disable-next-line comma-dangle
    ({ recipes, data }) => ({ recipes, data })
  );

  const getRecipes = useCallback(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);
};

export default useRecipes;
