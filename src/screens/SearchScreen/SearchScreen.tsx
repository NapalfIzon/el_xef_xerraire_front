import { Box, NativeBaseProvider, ScrollView, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Navbar from "../../components/Navbar/Navbar";
import { NavigationProps } from "../../types/propTypes";
import styles from "./SearchScreen.styles";

const SearchScreen = ({ navigation }: NavigationProps) => {
  return (
    <SafeAreaView style={styles.body}>
      <BackgroundImage />
      <NativeBaseProvider>
        <ScrollView>
          <Box style={styles.construction}>
            <Text style={styles.text}>En construcción</Text>
            <Text style={styles.text}>Próximamente más</Text>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default SearchScreen;
