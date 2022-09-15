import axios from "axios";
import { Dispatch } from "redux";
import {
  CHANGE_PASSWORD,
  DispatchTypes,
  LOADING,
  LOADING_DATA,
  SET_EMPLOYEE,
  SET_EMPLOYEE_ASSETS,
  SET_ERROR,
  UPDATE_EMPLOYEE_DETAILS,
} from "../types";

interface UpdateType {
  name?: string;
  email?: string;
  phone?: number;
  location?: string;
  jobTitle?: string;
}

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

export const getEmployee =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get(
        `http://localhost:4000/api/employees//${empId}`
      );
      dispatch({ type: SET_EMPLOYEE, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const updateEmployeeDetails =
  (empId: string, updateData: UpdateType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/employees/update/${empId}`,

        updateData
      );
      dispatch({ type: UPDATE_EMPLOYEE_DETAILS, payload: res.data });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const changePassword =
  (empId: string, password: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/auth/changePassword/${empId}`,

        { password: password }
      );
      dispatch({ type: CHANGE_PASSWORD, payload: res.data });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };
