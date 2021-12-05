import React, { useState } from "react";
import {
  FormControl,
  Input,
  IconButton,
  Icon,
  Stack,
  Text,
  Popover,
  Box,
  Select,
  CheckIcon,
  VStack,
  HStack,
  Button,
} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { categoryList } from "../../utils/categoryList";
import { NavigationProps } from "../../types/propTypes";
import useRecipe from "../../hooks/useRecipe";
import styles from "./RecipeForm.styles";

const RecipeForm = ({ navigation }: NavigationProps) => {
  const { addRecipe } = useRecipe();
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    category: "",
    ingredients: ["", "", ""],
    tools: [""],
    steps: ["", "", ""],
    image: "https://i.ibb.co/tHjn6SY/dish-template.png",
    valoration: 3,
    quantityValorations: 1,
    owner: "randomUserId",
  });

  const changeRecipeData = (property: string, value: string, index: number) => {
    if (property === "ingredient") {
      const newIngredientList = [...recipe.ingredients];
      newIngredientList[index] = value;
      setRecipe({ ...recipe, ingredients: newIngredientList });
    } else if (property === "tool") {
      const newToolList = [...recipe.tools];
      newToolList[index] = value;
      setRecipe({ ...recipe, tools: newToolList });
    } else if (property === "step") {
      const newStepList = [...recipe.steps];
      newStepList[index] = value;
      setRecipe({ ...recipe, steps: newStepList });
    } else {
      setRecipe({
        ...recipe,
        [property]: value,
      });
    }
  };

  const addItemToList = (type: string) => {
    let newIngredients;
    let newTools;
    let newSteps;

    switch (type) {
      case "addIngredient":
        newIngredients = [...recipe.ingredients];
        newIngredients.push("");
        setRecipe({
          ...recipe,
          ingredients: newIngredients,
        });
        break;
      case "addTool":
        newTools = [...recipe.tools];
        newTools.push("");
        setRecipe({
          ...recipe,
          tools: newTools,
        });
        break;
      case "addStep":
        newSteps = [...recipe.steps];
        newSteps.push("");
        setRecipe({
          ...recipe,
          steps: newSteps,
        });
        break;
      default:
        break;
    }
  };

  const removeItemToList = (type: string, index: number) => {
    let temporalIngredientList;
    let temporalToolList;
    let temporalStepList;

    switch (type) {
      case "removeIngredient":
        temporalIngredientList = [...recipe.ingredients];
        temporalIngredientList.splice(index, 1);
        setRecipe({
          ...recipe,
          ingredients: temporalIngredientList,
        });
        break;
      case "removeTool":
        temporalToolList = [...recipe.tools];
        temporalToolList.splice(index, 1);
        setRecipe({
          ...recipe,
          tools: temporalToolList,
        });
        break;
      case "removeStep":
        temporalStepList = [...recipe.steps];
        temporalStepList.splice(index, 1);
        setRecipe({
          ...recipe,
          steps: temporalStepList,
        });
        break;
      default:
        break;
    }
  };

  const createRecipe = () => {
    addRecipe(recipe);
  };

  return (
    <Stack
      space={2.5}
      alignSelf="center"
      px="4"
      safeArea
      mt="4"
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <FormControl mb="5">
        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Como se llama tu receta?</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              isRequired={true}
              placeholder="Título de tu receta"
              onChangeText={(value) => changeRecipeData("title", value, 0)}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Describe brevemente tu receta</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              placeholder="Escribe aquí la descripción de la receta"
              onChangeText={(value) =>
                changeRecipeData("description", value, 0)
              }
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>A qué categoría pertenece tu receta?</Text>
            </FormControl.Label>
            <Select
              w={{
                base: "90%",
                md: "25%",
              }}
              minWidth="200"
              accessibilityLabel="category"
              placeholder="Escoge tu categoría"
              _selectedItem={{
                endIcon: <CheckIcon size={1} />,
              }}
              mt="1"
              onValueChange={(itemValue) =>
                changeRecipeData("category", itemValue, 0)
              }
            >
              {categoryList.map((category) => (
                <Select.Item key={category} label={category} value={category} />
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Qué ingredientes necesitas?</Text>
            </FormControl.Label>
            <VStack space={3} alignItems="flex-start">
              {recipe.ingredients.map((ingredient, index: number) => (
                <HStack space={1} alignItems="center" key={index}>
                  <Input
                    w={{
                      base: "80%",
                      md: "25%",
                    }}
                    placeholder="Escribe aquí el ingrediente"
                    onChangeText={(value) =>
                      changeRecipeData("ingredient", value, index)
                    }
                  />
                  {index + 1 === recipe.ingredients.length && (
                    <IconButton
                      onPress={() => {
                        addItemToList("addIngredient");
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faPlusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                  {recipe.ingredients.length !== 1 && (
                    <IconButton
                      onPress={() => {
                        removeItemToList("removeIngredient", index);
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faMinusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                </HStack>
              ))}
            </VStack>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Necesitarás algún utensilio especial?</Text>
            </FormControl.Label>
            <VStack space={3} alignItems="flex-start">
              {recipe.tools.map((tool, index: number) => (
                <HStack space={1} alignItems="center" key={index}>
                  <Input
                    w={{
                      base: "80%",
                      md: "25%",
                    }}
                    placeholder="Escribe aquí el utensilio"
                    onChangeText={(value) =>
                      changeRecipeData("tool", value, index)
                    }
                  />
                  {index + 1 === recipe.tools.length && (
                    <IconButton
                      onPress={() => {
                        addItemToList("addTool");
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faPlusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                  {recipe.tools.length !== 1 && (
                    <IconButton
                      onPress={() => {
                        removeItemToList("removeTool", index);
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faMinusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                </HStack>
              ))}
            </VStack>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Qué pasos hay que seguir?</Text>
            </FormControl.Label>
            <VStack space={3} alignItems="flex-start">
              {recipe.steps.map((step, index: number) => (
                <HStack space={1} alignItems="center" key={index}>
                  <Input
                    w={{
                      base: "80%",
                      md: "25%",
                    }}
                    placeholder="Paso a seguir..."
                    onChangeText={(value) =>
                      changeRecipeData("step", value, index)
                    }
                  />
                  {index + 1 === recipe.steps.length && (
                    <IconButton
                      onPress={() => {
                        addItemToList("addStep");
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faPlusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                  {recipe.steps.length !== 1 && (
                    <IconButton
                      onPress={() => {
                        removeItemToList("removeStep", index);
                      }}
                      icon={
                        <Icon
                          as={<FontAwesomeIcon icon={faMinusCircle} />}
                          color="white"
                          size="sm"
                        />
                      }
                    />
                  )}
                </HStack>
              ))}
            </VStack>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Quieres añadir alguna foto de tu receta?</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              isDisabled
              placeholder="Selecciona la imagen..."
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <HStack
              space={3}
              justifyContent="center"
              w={{
                base: "100%",
                md: "25%",
              }}
            >
              <Button
                colorScheme="primary"
                w={{
                  base: "40%",
                  md: "25%",
                }}
                size="sm"
                onPress={() => {
                  createRecipe();
                }}
              >
                <Text>GUARDAR</Text>
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </FormControl>
    </Stack>
  );
};

export default RecipeForm;
