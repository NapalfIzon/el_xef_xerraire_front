import { StyleSheet } from "react-native";
import { colors } from "../../styles/root.styles";

export default StyleSheet.create({
  container: {
    width: 380,
    marginBottom: 25,
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
  recipePhoto: {
    width: 125,
    height: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  textContainer: {
    width: 160,
    flex: 1,
    alignItems: "flex-start",
  },
});
