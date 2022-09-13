export const LOADING_DATA = "LOADING_DATA";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_ERROR = "SET_ERROR";
export const LOADING = "LOADING";
export const SET_EMPLOYEE_ASSETS = "SET_EMPLOYEE_ASSETS";
export const SET_ASSETS = "SET_ASSETS";

export interface EmployeeType {
  empId: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  isAdmin: boolean;
  jobTitle: string;
}

export interface EmployeeAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}
//create asset interface see backend for that
export interface AssetTypes {
  assetId: number;
  brandId: number;
  name: string;
  assetType: string;
  category: string;
  modelNo: number;
  description: string;
  status: string;
  usability: string;
  addedTime: string;
}

interface LoadingData {
  type: typeof LOADING_DATA;
}

interface Loading {
  type: typeof LOADING;
}

interface SetEmployees {
  type: typeof SET_EMPLOYEES;
  payload: {
    meassage: string;
    data: EmployeeType[];
  };
}

interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

interface SetAuthenticated {
  type: typeof SET_AUTHENTICATED;
  payload: {
    message: string;
    user: EmployeeType;
    token: string;
  };
}

interface SetEmployeeAssets {
  type: typeof SET_EMPLOYEE_ASSETS;
  payload: {
    message: string;
    data: EmployeeAssetType[];
  };
}
interface SetAssets {
  type: typeof SET_ASSETS;
  payload: {
    message: string;
    data: AssetTypes[];
  };
}

export type DispatchTypes =
  | LoadingData
  | SetEmployees
  | SetError
  | SetAuthenticated
  | Loading
  | SetEmployeeAssets
  | SetAssets;
