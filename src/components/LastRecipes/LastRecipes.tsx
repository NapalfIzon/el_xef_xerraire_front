import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import styles from "./LastRecipes.styles";
import { getRecipesThunk } from "../../redux/thunk/recipesThunks";
import RecipeCard from "../RecipeCard/RecipeCard";
import { IRecipeSchema, IRecipeProps } from "../../interfaces/recipesInterface";

const LastRecipes = () => {
  const recipes = useSelector(({ recipes }: IRecipeProps) => recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {recipes.length > 1 ? (
        <View>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipeData={recipe} />
          ))}
        </View>
      ) : (
        <View>
          <Text>Encendiendo los fogones...</Text>
        </View>
      )}
    </View>
  );
};

export default LastRecipes;
