import axios from "axios";
import {
  fetchPeriodFail,
  fetchPeriodLoading,
  fetchPeriodSuccess,
} from "./periodSlice";

const fetchPeriodInfo = () => (dispatch) => {
  dispatch(fetchPeriodLoading());
  try {
    // fetch data from API
    const result = await axios.get()
  } catch (error) {
    dispatch(fetchPeriodFail(error.message));
  }
};
