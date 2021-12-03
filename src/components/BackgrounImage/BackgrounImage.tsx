import React from "react";
import { View, ImageBackground } from "react-native";
import { backgroundImage } from "../../utils/routes";
import styles from "./BackgroundImage.styles";

const BackgroundImage = () => {
  const xefLogo = { uri: backgroundImage };
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
