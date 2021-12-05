import React from "react";
import { NativeBaseProvider, Text, View } from "native-base";
import { IShowTitle } from "../../interfaces/componentsInterface";

const ShowTitle = ({ title }: IShowTitle) => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>{title}</Text>
      </View>
    </NativeBaseProvider>
  );
};

export default ShowTitle;
