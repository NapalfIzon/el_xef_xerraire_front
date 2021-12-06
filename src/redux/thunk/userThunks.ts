import axios from "axios";
import { API_XERRAPI_ENDPOINT, TOKEN } from "@env";
import { IUserSchema, ILoginSchema } from "../../interfaces/userInterface";
import { getToken, saveToken } from "../../storage/asyncStorage";
import { userLoginAction, loadUserAction } from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

const getUserDataThunk = async (dispatch) => {
  const storageToken = await getToken();
  const endpoint = `${API_XERRAPI_ENDPOINT}users/getuser`;

  try {
    const response = await axios.post(endpoint, null, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
    });
    const userData = response.data;

    dispatch(loadUserAction(userData));
  } catch ({ message }) {
    return message;
  }
};

const addUserThunk = (userData: IUserSchema) => async () => {
  const storageToken = await getToken();
  const endpoint = `${API_XERRAPI_ENDPOINT}users/new`;

  await axios.post(endpoint, userData, {
    headers: {
      Authorization: `Bearer ${storageToken}`,
    },
  });
};

const loginUserThunk = (userData: ILoginSchema) => async (dispatch) => {
  const endpoint = `${API_XERRAPI_ENDPOINT}users/login`;
  try {
    const response = await axios.post(endpoint, userData);

    const receivedToken = response.data.token;
    const userRegisteredData = jwtDecode(receivedToken);

    dispatch(userLoginAction(userRegisteredData));

    await saveToken(receivedToken);

    getUserDataThunk(dispatch, receivedToken);
  } catch ({ message }) {
    return message;
  }
};

export { addUserThunk, loginUserThunk, getUserDataThunk };
