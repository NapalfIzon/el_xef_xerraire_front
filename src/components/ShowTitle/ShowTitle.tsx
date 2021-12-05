import React from "react";
import { NativeBaseProvider, Heading, Center } from "native-base";
import { IShowTitle } from "../../interfaces/componentsInterface";
import styles from "./ShowTitle.styles";

const ShowTitle = ({ title }: IShowTitle) => {
  return (
    <NativeBaseProvider>
      <Center style={styles.body}>
        <Heading>{title}</Heading>
      </Center>
    </NativeBaseProvider>
  );
};

export default ShowTitle;
