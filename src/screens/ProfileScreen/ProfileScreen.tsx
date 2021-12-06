import React from "react";
import { Text, View } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import { NavigationProps } from "../../types/propTypes";

const ProfileScreen = ({ navigation }: NavigationProps) => {
  return (
    <View>
      <Text>Yo seré la ProfileScreen</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;
