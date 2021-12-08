import { useDispatch } from "react-redux";
import { IUserSchema, ILoginSchema } from "../interfaces/userInterface";
import { removeUserAction } from "../redux/actions/actionCreators";
import { addUserThunk, loginUserThunk } from "../redux/thunk/userThunks";
import { removeToken } from "../storage/asyncStorage";

const useUser = () => {
  const dispatch = useDispatch();

  const addUser = (userData: IUserSchema) => {
    dispatch(addUserThunk(userData));
  };

  const loginUser = (userData: ILoginSchema) => {
    dispatch(loginUserThunk(userData));
  };

  const logoutUser = async () => {
    const removedUser = {
      username: "",
      email: "",
      password: "",
      avatar: "",
      myRecipes: [""],
      myFavorites: [""],
      id: "",
    };
    await removeToken();
    dispatch(removeUserAction(removedUser));
  };

  return {
    addUser,
    loginUser,
    logoutUser,
  };
};

export default useUser;
