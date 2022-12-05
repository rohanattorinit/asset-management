import {
  ALLOCATE_EMPLOYEE_ASSET,
  AssetTypes,
  ASSET_TRANSACTION_HISTORY,
  CreateAssetType,
  DEALLOCATE_EMPLOYEE_ASSET,
  DELETE_ASSET,
  DELETE_EMPLOYEE,
  GET_BRAND_OPTIONS,
  GET_FILTER_OPTIONS,
  GET_TOTAL_ASSETSCATEGORY_COUNT,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_EMPTICKETS,
  SET_SINGLE_ASSET_DETAILS,
  SET_SINGLE_ASSET_TICKETS,
  SET_TICKET_STATUS,
  UPDATE_ASSET_DETAILS,
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
import { Dispatch } from "redux";
import { get, post } from "../../services";

interface GetAssetParams {
  name?: string;
  allocate?: boolean;
  isRented?: 0 | 1;
}

interface GetEmployeeParams {
  name?: string;
}

interface GetTicketParams {
  title?: string;
  status?: string;
}

interface SetFilterParams {
  screen_type?: string[];
  ram?: string[];
  status?: string[];
  assetType?: string[];
  category?: string[];
  operating_system?: string[];
  harddisk?: string[];
  processor?: string[];
  screen_size?: string[];
  asset_location?: string[];
  brands?: string[];
}

export const getEmployees =
  (employeeParams: GetEmployeeParams = {}) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const { name } = employeeParams;
      const res = await get(`/api/employees?name=${name}`);
      dispatch({ type: SET_EMPLOYEES, payload: (res as any).data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching employee data`,
      });
    }
  };

export const setAssetFilters =
  (
    filterParams: SetFilterParams = {},
    searchParams: GetAssetParams = {},
    signal: any
  ) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const { name, allocate, isRented } = searchParams;
      const res = await post(
        `/api/assets/filter?allocate=${allocate}&isRented=${isRented}&name=${name}`,
        filterParams,
        signal
      );
      dispatch({ type: SET_ASSETS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response?.status
          }: Error occured while fetching asset filter data`,
      });
    }
  };
export const getAssets =
  (assetParams: GetAssetParams = {}) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });

    try {
      const { name, allocate, isRented } = assetParams;

      const res = await get(
        `/api/assets?allocate=${allocate}&isRented=${isRented}&name=${name}`
      );

      dispatch({ type: SET_ASSETS, payload: (res as any).data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching asset data`,
      });
    }
  };

export const getTickets =
  (ticketParams: GetTicketParams = {}) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      let { title, status } = ticketParams;
      const res = await get(`/api/tickets?status=${status}&title=${title}`);
      dispatch({ type: SET_SERVICE_DETAILS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching ticket data`,
      });
    }
  };

export const addEmployee =
  (employeeDetails: CreateEmployeeType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post("/api/employees", employeeDetails);
      dispatch({ type: SET_ADDEMPLOYEE, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Adding Employee Details`,
      });
    }
  };

export const addAsset =
  (assetDetails: CreateAssetType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post("/api/assets/addAsset", assetDetails);

      //alert((res as any)?.data?.message);
      dispatch({ type: SET_ADDASSET, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response?.status
          }: Error occured while Adding Asset`,
      });
    }
  };

export const updateAssetDetails =
  (assetId: number, updateData: AssetTypes) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/assets/update/${assetId}`, updateData);

      //alert('Asset Details Updated Successfully!')

      dispatch({ type: UPDATE_ASSET_DETAILS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Updating Asset Information`,
      });
    }
  };

export const getEmployeeDetails =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/employees/${empId}`);
      dispatch({ type: SET_EMPLOYEE_DETAILS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching Employee Details`,
      });
    }
  };

export const getAssetDetails =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/assets/employeeAssets/${empId}`);
      dispatch({
        type: SET_EMPLOYEE_ASSETS_DETAILS,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching Assets Details`,
      });
    }
  };

export const getServiceDetails =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/tickets`);
      dispatch({ type: SET_SERVICE_DETAILS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching Ticket Requests`,
      });
    }
  };

export const getServiceTicketDetails =
  (ticketId: number) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/tickets/${ticketId}`);
      dispatch({
        type: SET_SERVICE_TICKET_DETAILS,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching Ticket Details`,
      });
    }
  };

export const getSingleAssetDetails =
  (assetId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/assets/singleAsset/${assetId}`);
      dispatch({
        type: SET_SINGLE_ASSET_DETAILS,
        payload: {
          message: (res as any)?.data?.message,
          data: (res as any)?.data?.data?.asset,
        },
      });
      dispatch({
        type: SET_SINGLE_ASSET_TICKETS,
        payload: {
          message: (res as any)?.data?.message,
          data: (res as any)?.data?.data?.tickets,
        },
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching Asset Details`,
      });
    }
  };

export const deallocateAssets =
  (empId: string, assetId: number) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(
        `/api/admin/deallocateAsset/${empId}/${assetId}`,
        {}
      );

      dispatch({
        type: DEALLOCATE_EMPLOYEE_ASSET,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Dealloting Assets`,
      });
    }
  };

export const allocateAssets =
  (empId: string, allocationObj: any) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });

    try {
      const res = await post(`/api/admin/allocateAsset/${empId}/`, {
        allocationObj,
      });

      dispatch({ type: ALLOCATE_EMPLOYEE_ASSET, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while allocating Assets`,
      });
    }
  };

export const changeTicketStatus =
  (ticketId: number, status: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/tickets/changeStatus/${ticketId}`, {
        status,
      });
      dispatch({ type: SET_TICKET_STATUS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while updating ticket status`,
      });
    }
  };

export const addNote =
  (ticketId: number, note: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/tickets/note/${ticketId}`, { note });
      dispatch({ type: SET_TICKET_STATUS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while submitting note`,
      });
    }
  };

export const getBrandOptions =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/brands`);

      dispatch({ type: GET_BRAND_OPTIONS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching brands`,
      });
    }
  };

export const getfilterOptions =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/assets/filterOptions`);

      dispatch({
        type: GET_FILTER_OPTIONS,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Deleting an Assets`,
      });
    }
  };

export const deleteAsset =
  (empId: string, assetId: number) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/assets/delete/${assetId}`, {});

      dispatch({
        type: DELETE_ASSET,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Deleting an Assets`,
      });
    }
  };

export const deleteEmployee =
  (empId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/employees/delete/${empId}`, {});

      dispatch({
        type: DELETE_EMPLOYEE,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while Deleting an Assets`,
      });
    }
  };

export const getFiltersByCategory =
  (category: string[]) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      let url = `/api/assets/filterOptions?`;
      category.forEach((val) => {
        url += `category=${val}&`;
      });
      const res = await get(url);
      dispatch({ type: GET_FILTER_OPTIONS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching brands`,
      });
    }
  };

export const getAssetTransactionLog =
  (assetId: string) => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/transactions/logs/${assetId}`);
      dispatch({
        type: ASSET_TRANSACTION_HISTORY,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching brands`,
      });
    }
  };

export const getTotalAssetCategoryCount =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await get(`/api/transactions/categoryCount`);

      dispatch({
        type: GET_TOTAL_ASSETSCATEGORY_COUNT,
        payload: (res as any)?.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while fetching count of Toatal Assets`,
      });
    }
  };
