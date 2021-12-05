import AsyncStorage from "@react-native-async-storage/async-storage";
import { stringName } from "../utils/stringNames";

const saveToken = async (token: object) => {
  try {
    const receivedToken = await JSON.stringify(token);
    await AsyncStorage.setItem(stringName.keyName, receivedToken);
  } catch ({ message }) {
    return message;
  }
};

const getToken = async () => {
  try {
    const storagedToken = await AsyncStorage.getItem(stringName.keyName);
    if (storagedToken !== null) {
      return JSON.parse(storagedToken);
    }
  } catch ({ message }) {
    return message;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(stringName.keyName);
  } catch ({ message }) {
    return message;
  }
};

export { saveToken, getToken, removeToken };
