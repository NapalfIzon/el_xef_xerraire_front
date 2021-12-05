import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import LastRecipes from "../../components/LastRecipes/LastRecipes";
import styles from "./HomeScreen.styles";
import { NavigationProps } from "../../types/propTypes";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const HomeScreen = ({ navigation }: NavigationProps) => {
  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <ScrollView>
        <View>
          <LastRecipes />
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
