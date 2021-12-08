import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import LastRecipes from "../../components/LastRecipes/LastRecipes";
import styles from "./HomeScreen.styles";
import { NavigationProps } from "../../types/propTypes";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import ShowTitle from "../../components/ShowTitle/ShowTitle";

const HomeScreen = ({ navigation }: NavigationProps) => {
  const HomeTitle = "Nuestras últimas recetas";
  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <ScrollView>
        <Header />
        <ShowTitle title={HomeTitle} />
        <View>
          <LastRecipes navigation={navigation} />
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
