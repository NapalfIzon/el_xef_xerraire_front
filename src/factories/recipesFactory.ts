import { IRecipeSchema } from "../interfaces/recipesInterface";

const recipeTest: IRecipeSchema = {
  id: "randomObjectId",
  title: "Test recipe",
  description: "This is a test recipe",
  category: "Arroces",
  ingredients: ["ingredient test 1", "ingredient test 2", "ingredient test 3"],
  tools: ["tool test 1"],
  steps: ["step test 1", "step test 2", "step test 3"],
  image: "https://random.url.com/",
  imageBackup: "https://random.url.com/",
  valoration: 3,
  quantityValorations: 1,
};

const initialRecipeData = {
  recipe: {},
};

const initialRecipesData = [{}];

const recipesTest: Array<IRecipeSchema> = [
  {
    id: "randomObjectId1",
    title: "Test recipe 1",
    description: "This is a test recipe 1",
    category: "Arroces",
    ingredients: [
      "ingredient test 1 1",
      "ingredient test 2 1",
      "ingredient test 3 1",
    ],
    tools: ["tool test 1 1"],
    steps: ["step test 1 1", "step test 2 1", "step test 3 1"],
    image: "https://random1.url.com/",
    imageBackup: "https://random1.url.com/",
    valoration: 3,
    quantityValorations: 1,
  },
  {
    id: "randomObjectId2",
    title: "Test recipe 2",
    description: "This is a test recipe 2",
    category: "Arroces",
    ingredients: [
      "ingredient test 1 2",
      "ingredient test 2 2",
      "ingredient test 3 2",
    ],
    tools: ["tool test 1 2"],
    steps: ["step test 1 2", "step test 2 2", "step test 3 2"],
    image: "https://random2.url.com/",
    imageBackup: "https://random2.url.com/",
    valoration: 3,
    quantityValorations: 1,
  },
  {
    id: "randomObjectId3",
    title: "Test recipe 3",
    description: "This is a test recipe 3",
    category: "Arroces",
    ingredients: [
      "ingredient test 1 3",
      "ingredient test 2 3",
      "ingredient test 3 3",
    ],
    tools: ["tool test 1 3"],
    steps: ["step test 1 3", "step test 2 3", "step test 3 3"],
    image: "https://random3.url.com/",
    imageBackup: "https://random3.url.com/",
    valoration: 3,
    quantityValorations: 1,
  },
];

export { recipeTest, initialRecipeData, recipesTest, initialRecipesData };
