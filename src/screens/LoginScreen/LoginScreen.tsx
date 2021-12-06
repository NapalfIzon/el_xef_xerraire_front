import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Center, NativeBaseProvider, Text, VStack } from "native-base";
import ShowTitle from "../../components/ShowTitle/ShowTitle";
import { NavigationProps } from "../../types/propTypes";
import styles from "./LoginScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

export const LoginScreen = ({ navigation }: NavigationProps) => {
  const addRecipeTitle = "Inicia sesión";

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowTitle title={addRecipeTitle} />
          <LoginForm navigation={navigation} />
          <VStack>
            <Center>
              <Text style={styles.text}>Todavía no estás dado de alta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>
                  Entra aquí y regístrate, es gratis!
                </Text>
              </TouchableOpacity>
            </Center>
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
