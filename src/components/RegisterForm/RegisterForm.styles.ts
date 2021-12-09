import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  buttonConfirm: {
    backgroundColor: colors.mainColor,
    margin: 5,
  },
  buttonEye: {
    backgroundColor: colors.mainColor,
  },
  titleField: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  textInputField: {
    height: 50,
    fontSize: 18,
  },
  textButton: {
    height: 50,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
