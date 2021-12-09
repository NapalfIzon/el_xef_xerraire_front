import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  avatar: {
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  formControl: {
    marginTop: 40,
  },
  buttonConfirm: {
    backgroundColor: colors.mainColor,
  },
  button: {
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
