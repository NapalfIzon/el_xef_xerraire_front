import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity, Platform } from "react-native";
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
} from "native-base";
import Stars from "react-native-stars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faMinusCircle,
  faStar,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationProps } from "../../types/propTypes";
import styles from "./RecipeDetail.styles";
import { IUserAction } from "../../interfaces/actionsInterface";

const RecipeDetail = ({ navigation, recipeData }: NavigationProps) => {
  const { user }: IUserAction = useSelector(({ user }) => user);
  const [showMicrophone, setShowMicrophone] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);
  const [showStep, setShowStep] = useState(0);

  const microphoneDisplay = () => setShowMicrophone(!showMicrophone);

  const ingredientsDisplay = () => setShowIngredients(!showIngredients);

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

  return (
    <Box style={styles.body}>
      <HStack style={styles.topButtons}>
        {user?.id !== recipeData?.id && (
          <Icon as={<FontAwesomeIcon icon={faBookmark} />} />
        )}
        {user?.myRecipes.includes(recipeData?.id) && (
          <Icon as={<FontAwesomeIcon icon={faMinusCircle} />} />
        )}
      </HStack>
      <Spacer />
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
      <Spacer />
      <Box>
        <Heading size="md">
          <Text>{recipeData?.title}</Text>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Heading size="sm">
          <Text>{recipeData?.category}</Text>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Stars
          style={styles.starContainer}
          default={recipeData?.valoration}
          count={5}
          half={false}
          starSize={50}
          fullStar={
            <FontAwesomeIcon style={styles.myStarStyle} icon={faStar} />
          }
          emptyStar={
            <FontAwesomeIcon style={styles.myEmptyStarStyle} icon={faStar} />
          }
        />
      </Box>
      <Spacer />
      <Box>
        <Text>{recipeData?.description}</Text>
      </Box>
      <Spacer />
      <Divider />
      <Center>
        <Button
          size="lg"
          onPress={() => {
            microphoneDisplay();
          }}
        >
          {showMicrophone ? (
            <Icon
              as={<FontAwesomeIcon icon={faMicrophoneAltSlash} />}
              color="white"
              size="sm"
            />
          ) : (
            <Icon
              as={<FontAwesomeIcon icon={faMicrophoneAlt} />}
              color="white"
              size="sm"
            />
          )}
        </Button>
      </Center>
      {showIngredients ? (
        <Box style={styles.listBlock}>
          <HStack bg="#E3E0D4" px="1" py="3" justifyContent="space-evenly">
            <Box>
              <Text>Ingredientes</Text>
            </Box>
            <TouchableOpacity onPress={() => ingredientsDisplay()}>
              <Box>
                <Text>Pasos</Text>
              </Box>
            </TouchableOpacity>
          </HStack>
          {recipeData?.ingredients.map((ingredient, index) => {
            return (
              <Center key={index}>
                <Text>- {ingredient}</Text>
              </Center>
            );
          })}
        </Box>
      ) : (
        <Box style={styles.listBlock}>
          <HStack bg="#E3E0D4" px="1" py="3" justifyContent="space-evenly">
            <TouchableOpacity onPress={() => ingredientsDisplay()}>
              <Text>Ingredientes</Text>
            </TouchableOpacity>
            <Text>Pasos</Text>
          </HStack>
          <HStack bg="#E3E0D4" px="1" py="3" justifyContent="space-evenly">
            <TouchableOpacity onPress={() => backStep()}>
              <Icon as={<FontAwesomeIcon icon={faArrowLeft} />} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => forwardStep()}>
              <Icon as={<FontAwesomeIcon icon={faArrowRight} />} />
            </TouchableOpacity>
          </HStack>
          <Center>
            <Text>- {recipeData?.steps[showStep]}</Text>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export default RecipeDetail;
