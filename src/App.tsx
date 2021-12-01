import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
