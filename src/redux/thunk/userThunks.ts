import axios from "axios";
import { API_XERRAPI_ENDPOINT, TOKEN } from "@env";
import { IUserSchema } from "../../interfaces/userInterface";

export const addUserThunk = (userData: IUserSchema) => async () => {
  const endpoint = `${API_XERRAPI_ENDPOINT}users/new`;

  await axios.post(endpoint, userData, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};
