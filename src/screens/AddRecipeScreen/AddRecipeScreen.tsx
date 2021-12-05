import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowTitle from "../../components/ShowTitle/ShowTitle";
import { NavigationProps } from "../../types/propTypes";
import styles from "./AddRecipeScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

export const AddRecipeScreen = ({ navigation }: NavigationProps) => {
  const addRecipeTitle = "Crea tu receta";

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowTitle title={addRecipeTitle} />
          <RecipeForm navigation={navigation} />
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddRecipeScreen;
