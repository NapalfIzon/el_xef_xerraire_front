import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView } from "react-native";
import { Box, NativeBaseProvider, Text } from "native-base";
import styles from "./ProfileScreen.styles";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { NavigationRouteProps } from "../../types/propTypes";
import ShowUserInfo from "../../components/ShowUserInfo/ShowUserInfo";

const ProfileScreen = ({ navigation, route }: NavigationRouteProps) => {
  const {
    params: { showOption },
  } = route;
  const { user: userData } = useSelector(({ user }) => user);

  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <ShowUserInfo userData={userData} navigation={navigation} />
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
          <Box style={styles.recipeContainer}>
            <Text style={styles.constructionText}>En construcción</Text>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
