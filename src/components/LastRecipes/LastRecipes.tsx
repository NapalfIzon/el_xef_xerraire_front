import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./LastRecipes.styles";
import { getRecipesThunk } from "../../redux/thunk/recipesThunks";
import RecipeCard from "../RecipeCard/RecipeCard";
import { IRecipeProps } from "../../interfaces/recipesInterface";
import { NavigationProps } from "../../types/propTypes";

const LastRecipes = ({ navigation }: NavigationProps) => {
  const recipeInfo = useSelector(({ recipes }: IRecipeProps) => recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {recipeInfo.length > 1 ? (
        <View>
          {recipeInfo.map((recipe) => (
            <TouchableOpacity
              key={recipe.id}
              onPress={() =>
                navigation.navigate("Detail", { recipeData: recipe })
              }
            >
              <RecipeCard key={recipe.id} recipeData={recipe} />
            </TouchableOpacity>
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
