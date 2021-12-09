import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import {
  Box,
  Image,
  Center,
  Icon,
  HStack,
  Heading,
  Text,
  Spacer,
  Button,
  Divider,
  View,
} from "native-base";
import Stars from "react-native-stars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark, faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faMinusCircle,
  faStar,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faArrowLeft,
  faArrowRight,
  faBookmark as faBookmarkChecked,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationProps } from "../../types/propTypes";
import styles from "./RecipeDetail.styles";
import { IUserAction } from "../../interfaces/actionsInterface";
import AlertMessage from "../AlertMessage/AlertMessage";
import { deleteRecipeMessageText } from "../../utils/deleteMessageData";
import { colors } from "../../styles/colors.styles";

const RecipeDetail = ({ navigation, recipeData }: NavigationProps) => {
  const { user: userData }: IUserAction = useSelector(({ user }) => user);
  const [showMicrophone, setShowMicrophone] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);
  const [bookmarkRecipe, setBookmarkRecipe] = useState(false);
  const [showStep, setShowStep] = useState(0);
  const [isCancelMessage, setIsCancelMessage] = useState(false);

  const microphoneDisplay = () => setShowMicrophone(!showMicrophone);

  const ingredientsDisplay = () => setShowIngredients(!showIngredients);

  const bookmarkCheck = () => setBookmarkRecipe(!bookmarkRecipe);

  const forwardStep = () => {
    if (showStep < recipeData?.steps.length - 1) {
      setShowStep(showStep + 1);
    }
  };

  const backStep = () => {
    if (showStep > 0) {
      setShowStep(showStep - 1);
    }
  };

  const openCancelMenu = () => setIsCancelMessage(!isCancelMessage);

  const editRecipe = () => {
    navigation.navigate("AddRecipe", { recipeData: recipeData });
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <Box style={styles.body}>
      <Box>
        <Center>
          <Image
            style={styles.image}
            source={{
              uri: recipeData?.image,
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Center>
        <Box style={styles.imageBlock}>
          <Box style={styles.goBackButton}>
            <TouchableOpacity onPress={goHome}>
              <Icon
                as={
                  <FontAwesomeIcon
                    size={60}
                    color={"#625A3D"}
                    icon={faTimesCircle}
                  />
                }
              />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
      <Spacer />
      <HStack style={styles.topButtons}>
        {userData.myRecipes.includes(recipeData?.id) ? (
          <TouchableOpacity onPress={editRecipe}>
            <Icon
              as={
                <FontAwesomeIcon
                  size={30}
                  color={colors.mainColor}
                  icon={faEdit}
                />
              }
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => bookmarkCheck()}>
            <Icon
              as={
                <FontAwesomeIcon
                  size={30}
                  color={colors.mainColor}
                  icon={bookmarkRecipe ? faBookmarkChecked : faBookmark}
                />
              }
            />
          </TouchableOpacity>
        )}

        {userData?.myRecipes.includes(recipeData?.id) ? (
          <>
            <TouchableOpacity onPress={openCancelMenu}>
              <Icon
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.mainColor}
                    icon={faMinusCircle}
                  />
                }
              />
            </TouchableOpacity>
            {isCancelMessage && (
              <AlertMessage
                navigation={navigation}
                recipeId={recipeData?.id}
                message={deleteRecipeMessageText}
                openCancelMenu={openCancelMenu}
              />
            )}
          </>
        ) : (
          <View />
        )}
      </HStack>
      <Spacer />
      <Box style={styles.text}>
        <Heading size="md">
          <Text style={styles.title}>{recipeData?.title}</Text>
        </Heading>
      </Box>
      <Spacer />
      <Box style={styles.text}>
        <Heading size="sm">
          <Text>{recipeData?.category}</Text>
        </Heading>
      </Box>
      <Spacer />
      <Box style={styles.starContainer}>
        <Stars
          default={recipeData?.valoration}
          count={5}
          half={false}
          starSize={50}
          fullStar={
            <FontAwesomeIcon
              size={30}
              style={styles.myStarStyle}
              icon={faStar}
            />
          }
          emptyStar={
            <FontAwesomeIcon
              size={30}
              style={styles.myEmptyStarStyle}
              icon={faStar}
            />
          }
        />
      </Box>
      <Spacer />
      <Box style={styles.text}>
        <Text style={styles.textDesciption}>{recipeData?.description}</Text>
      </Box>
      <Spacer />
      <Divider margin={8} />
      <Center>
        <Button
          size="lg"
          onPress={() => {
            microphoneDisplay();
          }}
          style={styles.microphone}
        >
          {showMicrophone ? (
            <Icon
              as={
                <FontAwesomeIcon
                  color={"white"}
                  size={40}
                  icon={faMicrophoneAltSlash}
                />
              }
            />
          ) : (
            <Icon
              as={
                <FontAwesomeIcon
                  color={"white"}
                  size={40}
                  icon={faMicrophoneAlt}
                />
              }
            />
          )}
        </Button>
      </Center>
      <Divider margin={8} />
      {showIngredients ? (
        <Box>
          <Box style={styles.optionContainer}>
            <Box>
              <Text style={styles.optionOn}>Ingredientes</Text>
            </Box>
            <TouchableOpacity onPress={ingredientsDisplay}>
              <Box>
                <Text style={styles.optionOff}>Pasos</Text>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box style={styles.showIgredients}>
            {recipeData?.ingredients.map((ingredient, index) => {
              return (
                <Center key={index}>
                  <Text fontSize={18} margin={2}>
                    - {ingredient}
                  </Text>
                </Center>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box>
          <Box style={styles.optionContainer}>
            <TouchableOpacity onPress={ingredientsDisplay}>
              <Box>
                <Text style={styles.optionOff}>Ingredientes</Text>
              </Box>
            </TouchableOpacity>
            <Box>
              <Text style={styles.optionOn}>Pasos</Text>
            </Box>
          </Box>
          <Box style={styles.stepButtonContainer}>
            <TouchableOpacity onPress={backStep}>
              <Icon
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faArrowLeft}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={forwardStep}>
              <Icon
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faArrowRight}
                  />
                }
              />
            </TouchableOpacity>
          </Box>
          <Box style={styles.showSteps}>
            <Text fontSize={18} margin={2}>
              - {recipeData?.steps[showStep]}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RecipeDetail;
