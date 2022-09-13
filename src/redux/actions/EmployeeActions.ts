import axios from "axios";
import { Dispatch } from "redux";
import {
  DispatchTypes,
  LOADING_DATA,
  SET_EMPLOYEE_ASSETS,
  SET_ERROR,
} from "../types";

export const getEmployeeAssets =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get(
        `http://localhost:4000/api/assets/employeeAssets/${empId}`
      );
      dispatch({ type: SET_EMPLOYEE_ASSETS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };
