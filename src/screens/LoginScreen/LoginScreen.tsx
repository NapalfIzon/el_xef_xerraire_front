import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowTitle from "../../components/ShowTitle/ShowTitle";
import { NavigationProps } from "../../types/propTypes";
import styles from "./LoginScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

export const LoginScreen = ({ navigation }: NavigationProps) => {
  const addRecipeTitle = "Regístrate";

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowTitle title={addRecipeTitle} />
          <LoginForm navigation={navigation} />
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
