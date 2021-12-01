import { initialUserData, userTest } from "../../factories/usersFactory";
import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty user data and a loadUser action with a user data", () => {
    test("Then it should return a new user with the received user data", () => {
      const action = {
        type: actionTypes.loadUser,
        user: userTest,
      };

      const { isAuthenticated, user } = userReducer(initialUserData, action);

      expect(user).toEqual(action.user);
      expect(isAuthenticated).toBe(true);
    });
  });

  describe("When it receives empty user data and a userLogout action with a user data", () => {
    test("Then it should return a new user with the received user data", () => {
      const action = {
        type: actionTypes.userLogout,
        user: userTest,
      };

      const { isAuthenticated, user } = userReducer(initialUserData, action);

      expect(user).toEqual({});
      expect(isAuthenticated).toBe(false);
    });
  });

  describe("When it receives empty user data and a random action with a user data", () => {
    test("Then it should return teh same received user data", () => {
      const action = {
        type: "random action",
        user: userTest,
      };

      const { isAuthenticated, user } = userReducer(initialUserData, action);

      expect(user).toEqual({});
      expect(isAuthenticated).toBe(false);
    });
  });
});
