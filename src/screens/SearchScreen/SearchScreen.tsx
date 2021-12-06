import React from "react";
import { Text, View } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import { NavigationProps } from "../../types/propTypes";

const SearchScreen = ({ navigation }: NavigationProps) => {
  return (
    <View>
      <Text>Yo seré la SearchScreen</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default SearchScreen;
