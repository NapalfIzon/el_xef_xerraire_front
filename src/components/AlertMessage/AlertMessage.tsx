import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesAction } from "../../redux/actions/actionCreators";
import { AlertDialog, Button, Text } from "native-base";
import { IAlertComponent } from "../../interfaces/componentsInterface";
import useRecipe from "../../hooks/useRecipe";
import { IRecipeProps } from "../../interfaces/recipesInterface";

const AlertMessage = ({
  navigation,
  recipeId,
  message,
  openCancelMenu,
}: IAlertComponent) => {
  const dispatch = useDispatch();
  const recipeList = useSelector(({ recipes }: IRecipeProps) => recipes);
  const { deleteRecipe } = useRecipe();
  const cancelRef = useRef(null);

  const [isCancelMessage, setIsCancelMessage] = useState(true);

  const closeCancelMenu = () => {
    openCancelMenu();
    setIsCancelMessage(false);
  };

  const removeRecipe = () => {
    deleteRecipe(recipeId);
    const newRecipeList = recipeList.filter((recipe) => recipe.id !== recipeId);
    dispatch(getRecipesAction(newRecipeList));
    navigation.navigate("Home");
  };

  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isCancelMessage}
        onClose={closeCancelMenu}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>
            <Text>{message.title}</Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>{message.body}</Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={closeCancelMenu}
                ref={cancelRef}
              >
                <Text>{message.close}</Text>
              </Button>
              <Button colorScheme="danger" onPress={removeRecipe}>
                <Text>{message.action}</Text>
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default AlertMessage;
