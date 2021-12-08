import React from "react";
import { Box, Avatar, HStack, VStack, Text, Image } from "native-base";
import Stars from "react-native-stars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./RecipeCard.styles";
import { IRecipeProps } from "../../interfaces/recipesInterface";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ recipeData }: IRecipeProps) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "gray.600",
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} style={styles.container}>
        <Image
          style={styles.recipePhoto}
          alt="recipeData.title"
          size="48px"
          source={{
            uri: recipeData.image,
          }}
        />
        <Box>
          <VStack style={styles.textContainer}>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {recipeData.title}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {recipeData.category}
            </Text>
            <Stars
              style={styles.starContainer}
              default={recipeData.valoration}
              count={5}
              half={false}
              starSize={50}
              fullStar={
                <FontAwesomeIcon style={styles.myStarStyle} icon={faStar} />
              }
              emptyStar={
                <FontAwesomeIcon
                  style={styles.myEmptyStarStyle}
                  icon={faStar}
                />
              }
            />
          </VStack>
        </Box>
        <Avatar
          size="48px"
          source={{
            uri: recipeData?.owner.avatar,
          }}
        />
      </HStack>
    </Box>
  );
};

export default RecipeCard;
