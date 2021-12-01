import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  user: object = {
    isAuthenticated: false,
    user: {},
  },
  // eslint-disable-next-line comma-dangle
  action: IActionCreator
) => {
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
