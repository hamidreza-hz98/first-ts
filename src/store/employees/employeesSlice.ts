import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const employeeAdapter = createEntityAdapter();

const { selectAll } = employeeAdapter.getSelectors(
  (state: RootState) => state.employees
);

export const allEmployees = selectAll;

const initialState = employeeAdapter.getInitialState();

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createEmployee(state, { payload }) {
      employeeAdapter.addOne(state, { ...payload });
    },
  },
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
