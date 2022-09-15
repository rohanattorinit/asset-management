import {
  CreateAssetType,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_EMPLOYEE_DETAILS,
} from "./../types";
import axios from "axios";
import { Dispatch } from "redux";
import {
  CreateEmployeeType,
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

export const addEmployee =
  (employeeDetails: CreateEmployeeType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        "http://localhost:4000/api/employees",
        employeeDetails
      );
      dispatch({ type: SET_ADDEMPLOYEE, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const addAsset =
  (assetDetails: CreateAssetType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        "http://localhost:4000/api/assets/addAsset",
        assetDetails
      );
      dispatch({ type: SET_ADDASSET, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const getEmployeeAssetDetails =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get(
        `http://localhost:4000/api/employees/${empId}`
      );
      dispatch({ type: SET_EMPLOYEE_DETAILS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
    try {
      const res = await axios.get(
        `http://localhost:4000/api/assets/employeeAssets/${empId}`
      );
      dispatch({ type: SET_EMPLOYEE_ASSETS_DETAILS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };
