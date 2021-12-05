import React from "react";
import { ImageBackground, View } from "react-native";
import styles from "./BackgroundImage.styles";

const BackgroundImage = () => {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/qW91Q3W/background-logo.webp" }}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default BackgroundImage;
