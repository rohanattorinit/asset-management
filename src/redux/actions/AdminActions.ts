import axios from "axios";
import { Dispatch } from "redux";
import {
  DispatchTypes,
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_ERROR,
} from "../types";

export const getEmployees = () => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("http://localhost:4000/api/employees");
    dispatch({ type: SET_EMPLOYEES, payload: res.data });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: (error as any).response.data.error,
    });
  }
};

export const getAssets = () => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("http://localhost:4000/api/assets");
    dispatch({ type: SET_ASSETS, payload: res.data });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: (error as any).response.data.error,
    });
  }
};
