import axios from "axios";
import { getRecipesThunk } from "./recipesThunks";
import { API_XERRAPI_ENDPOINT } from "@env";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Given a getRecipesThunk thunk,", () => {
  describe("When it calls the thunk,", () => {
    test("Then it should dispatch a getRecipesAction action with the received recipes list.", async () => {
      const testRecipesList = [
        { test: "test 1" },
        { test: "test 2" },
        { test: "test 3" },
      ];
      const endpoint = `${API_XERRAPI_ENDPOINT}recipes/`;
      mockedAxios.get.mockResolvedValue(testRecipesList);
      const mockedDispatch = jest.fn();

      const receivedCallback = getRecipesThunk();
      await receivedCallback(mockedDispatch);

      expect(mockedAxios.get).toHaveBeenCalledWith(endpoint);
      expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});
