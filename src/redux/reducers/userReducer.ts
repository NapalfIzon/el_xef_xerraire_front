import { IActionCreator } from "../../interfaces/actionsInterface";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  // eslint-disable-next-line comma-dangle
  action: IActionCreator
) => {
  let newUser: object = {};

  switch (action.type) {
    case actionTypes.loadUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
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
