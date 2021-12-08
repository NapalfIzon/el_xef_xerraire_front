import React from "react";
import { Center, Image, HStack, View } from "native-base";
import styles from "./Header.styles";

const Header = () => {
  return (
    <View>
      <Center>
        <HStack style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://i.ibb.co/SKV5Btw/logo-xef-001.webp",
            }}
            alt="Xef Xerraire Logo"
            size="xs"
          />
          <Image
            style={styles.title}
            source={{
              uri: "https://i.ibb.co/q5MTyzd/title-004.png",
            }}
            alt="El Xef Xerraire"
            size="xs"
          />
          <Image
            style={styles.logo}
            source={{
              uri: "https://i.ibb.co/SKV5Btw/logo-xef-001.webp",
            }}
            alt="Xef Xerraire Logo"
            size="xs"
          />
        </HStack>
      </Center>
    </View>
  );
};

export default Header;
