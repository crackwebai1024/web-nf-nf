import { configureStore } from "@reduxjs/toolkit";
import { ENABLE_REDUX_DEV_TOOLS } from "../constants";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: ENABLE_REDUX_DEV_TOOLS,
});

export default store;
