import React from "react";
import { useSelector } from "react-redux";
import { HStack, IconButton, Icon } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { NavigationProps } from "../../types/propTypes";
import {
  faHome,
  faSearch,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { IUserSchema } from "../../interfaces/userInterface";

const Navbar = ({ navigation }: NavigationProps) => {
  const { isAuthenticated } = useSelector(({ user }: IUserSchema) => user);
  const recipeData = false;
  const showMyRecipes = true;
  const showMyFavorites = false;

  return (
    <>
      <HStack
        bg="#AB9B7A"
        px="1"
        py="3"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <HStack space="8" alignItems="center" paddingBottom="2">
          <IconButton
            accessibilityRole="button"
            accessibilityLabel={"Home"}
            onPress={() => navigation.navigate("Home")}
            icon={
              <Icon
                size="lg"
                as={<FontAwesomeIcon icon={faHome} />}
                color="white"
              />
            }
          />
          <IconButton
            accessibilityRole="button"
            accessibilityLabel={"Search"}
            onPress={() => navigation.navigate("Search")}
            icon={
              <Icon
                as={<FontAwesomeIcon icon={faSearch} />}
                size="xl"
                color="white"
              />
            }
          />
          {isAuthenticated ? (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"AddRecipe"}
              onPress={() => navigation.navigate("AddRecipe", { recipeData })}
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faPlusCircle} />}
                  color="white"
                  size="sm"
                />
              }
            />
          ) : (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"Login"}
              onPress={() => navigation.navigate("Login")}
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faPlusCircle} />}
                  color="white"
                  size="sm"
                />
              }
            />
          )}
          {isAuthenticated ? (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"Profile"}
              onPress={() =>
                navigation.navigate("Profile", { showOption: showMyFavorites })
              }
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faBookmark} />}
                  size="sm"
                  color="green"
                />
              }
            />
          ) : (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"Login"}
              onPress={() => navigation.navigate("Login")}
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faBookmark} />}
                  size="sm"
                  color="green"
                />
              }
            />
          )}
          {isAuthenticated ? (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"Profile"}
              onPress={() =>
                navigation.navigate("Profile", { showOption: showMyRecipes })
              }
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faUserCircle} />}
                  size="sm"
                  color="white"
                />
              }
            />
          ) : (
            <IconButton
              accessibilityRole="button"
              accessibilityLabel={"Login"}
              onPress={() => navigation.navigate("Login")}
              icon={
                <Icon
                  as={<FontAwesomeIcon icon={faUserCircle} />}
                  size="sm"
                  color="white"
                />
              }
            />
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
