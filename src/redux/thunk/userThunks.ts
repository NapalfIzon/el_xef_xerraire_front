import axios from "axios";
import { API_XERRAPI_ENDPOINT, TOKEN } from "@env";
import { IUserSchema, ILoginSchema } from "../../interfaces/userInterface";
import { saveToken } from "../../storage/asyncStorage";
import { userLoginAction } from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

const addUserThunk = (userData: IUserSchema) => async () => {
  const endpoint = `${API_XERRAPI_ENDPOINT}users/new`;

  await axios.post(endpoint, userData, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

const loginUserThunk = (userData: ILoginSchema) => async (dispatch) => {
  const endpoint = `${API_XERRAPI_ENDPOINT}users/login`;
  try {
    const response = await axios.post(endpoint, userData);

    const receivedToken = response.data.token;
    const userRegisteredData = jwtDecode(receivedToken);
    const newToken = { token: receivedToken };

    dispatch(userLoginAction(userRegisteredData));

    await saveToken(newToken);
  } catch ({ message }) {
    return message;
  }
};

export { addUserThunk, loginUserThunk };
