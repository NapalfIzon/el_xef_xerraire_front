import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import BackgroundImage from "../../components/BackgrounImage/BackgrounImage";
import LastRecipes from "../../components/LastRecipes/LastRecipes";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomeScreen.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View>
          <Navbar />
          <BackgroundImage />
          <LastRecipes />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
