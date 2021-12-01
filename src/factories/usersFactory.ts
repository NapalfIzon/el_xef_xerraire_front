import { IUserSchema } from "../interfaces/userInterface";

const userTest: IUserSchema = {
  id: "12345",
  username: "test",
  email: "test@test.com",
  password: process.env.RANDOM_PASSWORD_1,
  avatar: "/IMG/test.webp",
  avatarBackup: "/IMG/test.webp",
  registrationDate: new Date("2021-11-27T15:19:05.521Z"),
  myRecipes: ["testMyRecipe"],
  myFavorites: ["testFavoriteRecipe"],
};

const initialUserData = {
  isAuthenticated: false,
  user: {},
};

export { userTest, initialUserData };
