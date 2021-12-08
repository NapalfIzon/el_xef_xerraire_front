import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  menu: {
    backgroundColor: colors.terciaryColor,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  optionA: {
    fontSize: 20,
  },
  optionB: {
    color: colors.white,
    fontSize: 20,
  },
});
