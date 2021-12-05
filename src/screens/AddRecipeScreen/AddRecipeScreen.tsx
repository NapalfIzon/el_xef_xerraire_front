import React from "react";
import { ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowTitle from "../../components/ShowTitle/ShowTitle";
import { NavigationProps } from "../../types/propTypes";
import styles from "./AddRecipeScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

export const AddRecipeScreen = ({ navigation }: NavigationProps) => {
  const addRecipeTitle = "Crea tu receta";

  return (
    <SafeAreaView style={styles.body}>
      <NativeBaseProvider>
        <ScrollView>
          <ShowTitle title={addRecipeTitle} />
          <ImageBackground
            source={{ uri: "https://i.ibb.co/SKV5Btw/logo-xef-001.webp" }}
            resizeMode="cover"
            style={styles.backgroundImage}
          />
          <RecipeForm navigation={navigation} />
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddRecipeScreen;
