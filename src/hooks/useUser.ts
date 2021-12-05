import { useDispatch } from "react-redux";
import { IUserSchema, ILoginSchema } from "../interfaces/userInterface";
import { addUserThunk, loginUserThunk } from "../redux/thunk/userThunks";

const useUser = () => {
  const dispatch = useDispatch();

  const addUser = (userData: IUserSchema) => {
    dispatch(addUserThunk(userData));
  };

  const loginUser = (userData: ILoginSchema) => {
    dispatch(loginUserThunk(userData));
  };

  return {
    addUser,
    loginUser,
  };
};

export default useUser;
