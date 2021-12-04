import React from "react";
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import LastRecipes from "../../components/LastRecipes/LastRecipes";
import styles from "./HomeScreen.styles";
import { NavigationProps } from "../../types/propTypes";

const HomeScreen = ({ navigation }: NavigationProps) => {
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/SKV5Btw/logo-xef-001.webp" }}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
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
