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
    fontSize: 22,
    fontWeight: "bold",
  },
  optionB: {
    color: colors.white,
    fontSize: 18,
  },
  recipeContainer: {
    height: 200,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  constructionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
