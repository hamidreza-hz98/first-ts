/* eslint-disable no-param-reassign */
import { configureStore } from "@reduxjs/toolkit";
import employees from "./employees/employeesSlice";

const store = configureStore({
  reducer: {
    employees,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
