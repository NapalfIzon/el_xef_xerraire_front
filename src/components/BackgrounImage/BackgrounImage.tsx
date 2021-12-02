import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./BackgroundImage.styles";

const BackgroundImage = () => {
  const xefLogo = { uri: "../../../images/logo_xef_001.webp" };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={xefLogo}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default BackgroundImage;
