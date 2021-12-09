import { StyleSheet } from "react-native";
import { colors } from "../../styles/root.styles";

export default StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 50,
  },
  imageBlock: {
    width: "95%",
    marginTop: 10,
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
  },
  goBackButton: {
    backgroundColor: colors.terciaryColor,
    borderRadius: 50,
  },
  topButtons: {
    marginTop: 10,
    marginBottom: 25,
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
    margin: 10,
    flex: 1,
    alignItems: "flex-start",
  },
  text: {
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  textDesciption: {
    fontSize: 20,
  },
  microphone: {
    backgroundColor: colors.mainColor,
  },
  optionContainer: {
    width: "100%",
    height: 40,
    backgroundColor: colors.secondaryColor,
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  optionOn: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },
  optionOff: {
    width: "100%",
    fontSize: 15,
    color: colors.white,
  },
  buttonContainer: {
    width: "50%",
  },
  stepButtonContainer: {
    backgroundColor: colors.mainColor,
    width: "100%",
    height: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  showIgredients: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
    minHeight: 400,
  },
  showSteps: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    minHeight: 300,
  },
});
