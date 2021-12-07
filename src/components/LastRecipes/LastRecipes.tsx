import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { Center, HStack, Spinner } from "native-base";
import styles from "./LastRecipes.styles";
import { getRecipesThunk } from "../../redux/thunk/recipesThunks";
import RecipeCard from "../RecipeCard/RecipeCard";
import { IRecipeProps } from "../../interfaces/recipesInterface";
import { NavigationProps } from "../../types/propTypes";

const LastRecipes = ({ navigation }: NavigationProps) => {
  const recipeList = useSelector(({ recipes }: IRecipeProps) => recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {recipeList.length > 1 ? (
        <View>
          {recipeList.map((recipe) => (
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
        <Center style={styles.spinnerMessage}>
          <HStack>
            <Text>Encendiendo los fogones</Text>
            <Spinner color="warning.500" />
          </HStack>
        </Center>
      )}
    </View>
  );
};

export default LastRecipes;
