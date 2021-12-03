import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { RootNavigator } from "./navigation/RootNavigator";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
