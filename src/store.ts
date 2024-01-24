import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
  reducer,
});

type RootState = ReturnType<typeof store.getState>;

export { store, RootState };
