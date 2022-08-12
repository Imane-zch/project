import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  periods: [],
  isLoading: false,
  error: "",
};

const periodSlice = createSlice({
  name: "periodLog",
  initialState,
  reducers: {
    fetchPeriodLoading: (state) => {
      state.isLoading = true;
    },
    fetchPeriodSuccess: (state, action) => {
      state.periods = action.payload;
      state.isLoading = false;
    },
    fetchPeriodFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = periodSlice;

export const { fetchPeriodFail, fetchPeriodLoading, fetchPeriodSuccess } =
  actions;

export default reducer;
