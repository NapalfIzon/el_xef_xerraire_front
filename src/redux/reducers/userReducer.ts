import { IActionCreator } from "../../interfaces/actionsInterface";
import { IUserState } from "../../interfaces/testInterface";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  user: IUserState = {
    isAuthenticated: false,
    user: {
      username: "",
      email: "",
      password: "",
      avatar: "",
      myRecipes: [""],
      myFavorites: [""],
      id: "",
    },
  },
  action: IActionCreator
): IUserState => {
  let newUser;

  switch (action.type) {
    case actionTypes.loadUser:
    case actionTypes.userLogin:
    case actionTypes.modifyUser:
    case actionTypes.addFavorite:
    case actionTypes.removeFavorite:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    case actionTypes.addUser:
    case actionTypes.removeUser:
    case actionTypes.userLogout:
      newUser = {
        isAuthenticated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }

  return newUser;
};

export default userReducer;
