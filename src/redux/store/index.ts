import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer from "../reducers";

export default (initialState) => {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    host: "localhost",
    port: process.env.DEBUGGER_PORT,
  });
  return createStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line comma-dangle
    composeEnhancers(applyMiddleware(thunk))
  );
};
