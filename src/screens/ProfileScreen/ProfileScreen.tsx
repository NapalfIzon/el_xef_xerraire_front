import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView } from "react-native";
import { Box, NativeBaseProvider, Text } from "native-base";
import styles from "./ProfileScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { NavigationRouteProps } from "../../types/propTypes";
import ShowUserInfo from "../../components/ShowUserInfo/ShowUserInfo";
import { IRecipeSchema } from "../../interfaces/recipesInterface";
import useRecipe from "../../hooks/useRecipe";

const ProfileScreen = ({ route, navigation }: NavigationRouteProps) => {
  const {
    params: { showOption },
  } = route;
  const { user } = useSelector(({ user }) => user);
  const recipe = useSelector(({ recipe }: IRecipeSchema) => recipe);
  const { getRecipe } = useRecipe();

  const getRecipeInfo = (id) => {
    getRecipe(id);
  };

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowUserInfo userData={user} />
          <Box style={styles.menu}>
            {showOption ? (
              <>
                <Text style={styles.optionA}>Mis recetas</Text>
                <Text style={styles.optionB}>Mis favoritos</Text>
              </>
            ) : (
              <>
                <Text style={styles.optionB}>Mis recetas</Text>
                <Text style={styles.optionA}>Mis favoritos</Text>
              </>
            )}
          </Box>
          <Box>
            <Text>En construcción</Text>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
