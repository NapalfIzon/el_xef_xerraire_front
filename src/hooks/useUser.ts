import { useDispatch } from "react-redux";
import { IUserSchema } from "../interfaces/userInterface";
import { addUserThunk } from "../redux/thunk/userThunks";

const useUser = () => {
  const dispatch = useDispatch();

  const addUser = (userData: IUserSchema) => {
    dispatch(addUserThunk(userData));
  };

  return {
    addUser,
  };
};

export default useUser;
