import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowTitle from "../../components/ShowTitle/ShowTitle";
import { NavigationProps } from "../../types/propTypes";
import styles from "./RegisterScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

export const RegisterScreen = ({ navigation }: NavigationProps) => {
  const addRecipeTitle = "Regístrate";

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowTitle title={addRecipeTitle} />
          <RegisterForm navigation={navigation} />
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
