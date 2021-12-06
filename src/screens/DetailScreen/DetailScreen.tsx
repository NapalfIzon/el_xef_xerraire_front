import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationRouteProps } from "../../types/propTypes";
import styles from "./DetailScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

export const DetailScreen = ({ route, navigation }: NavigationRouteProps) => {
  const {
    params: { recipeData },
  } = route;

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <RecipeDetail navigation={navigation} recipeData={recipeData} />
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default DetailScreen;
