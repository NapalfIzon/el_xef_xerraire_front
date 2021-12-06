import { StyleSheet } from "react-native";
import { colors } from "../../styles/root.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 50,
  },

  topButtons: {
    flex: 1,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
  listBlock: {
    height: 400,
  },
});
