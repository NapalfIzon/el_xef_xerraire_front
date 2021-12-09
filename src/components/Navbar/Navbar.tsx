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
import { colors } from "../../styles/colors.styles";

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
        justifyContent="space-between"
        alignItems="center"
        maxHeight="md"
      >
        <IconButton
          accessibilityRole="button"
          accessibilityLabel={"Home"}
          onPress={() => navigation.navigate("Home")}
          icon={
            <Icon
              as={
                <FontAwesomeIcon size={30} color={colors.white} icon={faHome} />
              }
            />
          }
        />
        <IconButton
          accessibilityRole="button"
          accessibilityLabel={"Search"}
          onPress={() => navigation.navigate("Search")}
          icon={
            <Icon
              as={
                <FontAwesomeIcon
                  size={30}
                  color={colors.white}
                  icon={faSearch}
                />
              }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faPlusCircle}
                  />
                }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faPlusCircle}
                  />
                }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faBookmark}
                  />
                }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faBookmark}
                  />
                }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faUserCircle}
                  />
                }
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
                as={
                  <FontAwesomeIcon
                    size={30}
                    color={colors.white}
                    icon={faUserCircle}
                  />
                }
              />
            }
          />
        )}
      </HStack>
    </>
  );
};

export default Navbar;
