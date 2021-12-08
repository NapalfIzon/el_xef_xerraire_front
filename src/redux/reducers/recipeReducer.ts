import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "../actions/actionTypes";

const recipeReducer = (
  recipe = {
    id: "",
    title: "",
    description: "",
    category: "",
    ingredients: [""],
    tools: [""],
    steps: [""],
    image: "",
    imageBackup: "",
    valoration: 1,
    quantityValorations: 1,
    owner: {
      id: "",
      avatar: "",
    },
  },
  action: IActionCreator
) => {
  let newRecipe;

  switch (action.type) {
    case actionTypes.getRecipe:
    case actionTypes.addRecipe:
    case actionTypes.uploadVote:
    case actionTypes.modifyRecipe:
      newRecipe = { ...action.recipe };
      break;
    case actionTypes.removeRecipe:
      newRecipe = {};
      break;
    default:
      newRecipe = recipe;
  }

  return newRecipe;
};

export default recipeReducer;
