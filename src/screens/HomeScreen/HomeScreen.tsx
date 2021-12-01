import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesThunk } from "../../redux/thunk/recipesThunks";

const HomeScreen = () => {
  const recipes = useSelector(({ recipes }) => recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Caca de la vaca</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
