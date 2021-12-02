import { StyleSheet } from "react-native";
import { colors } from "../../styles/root.styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  myStarStyle: {
    color: colors.star,
    backgroundColor: colors.starBackground,
    textShadowColor: colors.starShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  myEmptyStarStyle: {
    color: colors.starEmpty,
  },
  starContainer: {
    height: 100,
  },
});
