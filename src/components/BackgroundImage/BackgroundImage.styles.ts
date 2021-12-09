import { StyleSheet } from "react-native";
import { colors } from "../../styles/root.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundImage,
  },
  backgroundImage: {
    justifyContent: "center",
    height: 250,
    width: 250,
    marginBottom: 50,
    opacity: 0.2,
  },
});
