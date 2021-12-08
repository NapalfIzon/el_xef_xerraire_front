import * as reactRedux from "react-redux";
import axios from "axios";
import { getRecipesThunk } from "./recipesThunks";
import { API_XERRAPI_ENDPOINT } from "@env";
import actionTypes from "../actions/actionTypes";

jest.mock("axios");

describe("Given a getRecipesThunk thunk,", () => {
  describe("When it calls the thunk,", () => {
    test("Then it should dispatch a getRecipesAction action with the received recipes list.", async () => {
      const testRecipesList = [
        { test: "test 1" },
        { test: "test 2" },
        { test: "test 3" },
      ];
      const endpoint = `${API_XERRAPI_ENDPOINT}recipes/`;
      axios.get.mockResolvedValue(testRecipesList);
      const mockedDispatch = jest.fn();

      const receivedCallback = getRecipesThunk();
      await receivedCallback(mockedDispatch);

      expect(axios.get).toHaveBeenCalledWith(endpoint);
       expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});
