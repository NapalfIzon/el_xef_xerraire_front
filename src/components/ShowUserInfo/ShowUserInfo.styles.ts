import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    marginTop: 60,
  },
  datacontainer: {
    backgroundColor: colors.secondaryColor,
    height: 300,
  },
  info: {
    marginTop: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 30,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "flex-end",
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
