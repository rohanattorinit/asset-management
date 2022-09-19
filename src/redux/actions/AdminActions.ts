import {
  ALLOCATE_EMPLOYEE_ASSET,
  CreateAssetType,
  DEALLOCATE_EMPLOYEE_ASSET,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_TICKET_STATUS,
} from "./../types";

import {
  SET_EMPLOYEE_DETAILS,
  SET_SERVICE_DETAILS,
  CreateEmployeeType,
  DispatchTypes,
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_ERROR,
  SET_SERVICE_TICKET_DETAILS,
} from "./../types";

import axios from "axios";
import { Dispatch } from "redux";

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
      alert(res.data.message);
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
      alert(res.data.message);
      dispatch({ type: SET_ADDASSET, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const getEmployeetDetails =
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
  };

export const getAssetDetails =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
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

export const getServiceDetails =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get(`http://localhost:4000/api/tickets`);
      dispatch({ type: SET_SERVICE_DETAILS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const getServiceTicketDetails =
  (ticketId: number) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get(
        `http://localhost:4000/api/tickets/${ticketId}`
      );
      console.log(res);
      dispatch({ type: SET_SERVICE_TICKET_DETAILS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const deallocateAssets =
  (empId: string, assetId: number) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/admin/deallocateAsset/${empId}/${assetId}`
      );

      dispatch({ type: DEALLOCATE_EMPLOYEE_ASSET, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const allocateAssets =
  (empId: string, assetId: number) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/admin/allocateAsset/${empId}/${assetId}`
      );

      dispatch({ type: ALLOCATE_EMPLOYEE_ASSET, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const changeTicketStatus =
  (ticketId: number, status: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/tickets/changeStatus/${ticketId}`,
        { status }
      );
      alert(res.data.message);
      dispatch({ type: SET_TICKET_STATUS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };

export const addNote =
  (ticketId: number, note: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.post(
        `http://localhost:4000/api/tickets/note/${ticketId}`,
        { note }
      );
      alert(res.data.message);
      dispatch({ type: SET_TICKET_STATUS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  };
